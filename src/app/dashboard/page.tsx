"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import useSWR from "swr";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  // Not recommended to use hook useEffect
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //     const getData = async () => {
  //         setIsLoading(true);
  //         const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //             cache: "no-store"
  //         })

  //         if (!res.ok) {
  //             setErr(true);
  //         }

  //         const data = await res.json();

  //         setData(data);
  //         setIsLoading(false);
  //     }

  //     getData();
  // }, [])

  const session = useSession();

  const router = useRouter();

  const fetcher = <T,>(...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json() as Promise<T>);

  const { data, error, isLoading }: { data: any; error: any; isLoading: any } =
    useSWR(
      `/api/posts?username=${session.data?.user?.name}`,
      fetcher
    );
  //
  console.log(session);
  console.log(data);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  } 
  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const titleTarget = (
      event.target as HTMLFormElement
    )[0] as HTMLInputElement;
    const title = titleTarget.value;

    const descTarget = (event.target as HTMLFormElement)[1] as HTMLInputElement;
    const desc = descTarget.value;

    const imgTarget = (event.target as HTMLFormElement)[2] as HTMLInputElement;
    const image = imgTarget.value;

    const contentTarget = (
      event.target as HTMLFormElement
    )[3] as HTMLInputElement;
    const content = contentTarget.value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: "test",
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading ? "loading" : data.map((post: any) => (
            <div className={styles.post} key={post.id}>
              <div className={styles.imgContainer}>
                <Image width={400} height={300} src={post.image} alt="" />
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <span className={styles.delete}></span>
            </div>
          ))}
        </div>

        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input
            type="text"
            placeholder="Description"
            className={styles.input}
          />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols={30}
            rows={10}
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
