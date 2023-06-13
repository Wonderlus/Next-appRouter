import Image from "next/image";
import styles from "./page.module.scss"
import { notFound } from "next/navigation";

interface IParams {
  id: string;
}


async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
      next: { revalidate: 10}
  });
  
  if (!res.ok) {
    
    return notFound();
  }
 
  return res.json();
}

// Dynamic data
export async function generateMetadata({params}: {params: IParams}) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  }
}


const BlogPost = async ({ params }: { params: IParams}) => {

    const data = await getData(params.id);
    
    return (
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.info}>
              <h1 className={styles.title}>{data.title}</h1>
              <p className={styles.desc}>
                {data.desc}
              </p>
              <div className={styles.author}>
                <Image
                  src={data.image}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.avatar}
                />
                <span className={styles.username}>{data.username}</span>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={data.image}
                alt=""
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.content}>
            <p className={styles.text}>
              {data.content}
            </p>
          </div>
        </div>
      );
}
 
export default BlogPost;