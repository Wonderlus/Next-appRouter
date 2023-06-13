import Link from "next/link";
import styles from "./page.module.scss"
import Image from "next/image";

interface IPost {
    userId: number;
    id: number;
    _id: string;
    title: string;
    body: string;
    image: string;
    desc: string;
}


async function getData() {
    const res = await fetch('http://localhost:3000/api/posts', {
        next: { revalidate: 10}
    });
    
    if (!res.ok) {
      
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
  }

const Blog = async () => {
    
    const data = await getData();

    console.log(data);
    return ( 
        <div className={styles.mainContainer}>
            
            {data.map((item : IPost) => (
                <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={item.image}
                            alt=""
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                    </div>
                </Link>
            ))}

        </div>
     );
}
 
export default Blog;