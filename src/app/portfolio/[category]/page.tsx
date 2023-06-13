import Button from "@/components/Button/Button";
import styles from "./page.module.scss";
import Image from "next/image";
import { items } from "./data.ts";
import { notFound } from "next/navigation";

interface IParams {
  category: string;
}

const getData = (cat: string) => {
  const data = items[cat];
  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }: { params: IParams }) => {
  const data = getData(params.category);
  console.log(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <Button url="#" text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image src={item.image} alt="" fill={true} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
