import Button from "@/components/Button/Button";
import styles from "./page.module.scss";
import Image from "next/image";

const About = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://fakeimg.pl/800x400/cccccc/919191" fill={true} alt="" className={styles.img}/>
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1>Who we are?</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae. A suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis
                        <br />
                        <br />
                      voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
                      esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
                      officiis voluptatum quo ea eveniet?
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What We Do?</h1>
                    <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. - sCreative Illustrations
                    <br />
                    <br /> - Dynamic Websites
                    <br />
                    <br /> - Fast and Handy
                    <br />
                    <br /> - Mobile Apps
                    </p>
                    <Button url="/contact" text="Contact"/>
                </div>
            </div>
        </div>
     );
}
 
export default About;