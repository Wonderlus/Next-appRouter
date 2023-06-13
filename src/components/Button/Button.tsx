import { FunctionComponent } from "react";
import styles from "./button.module.scss";
import Link from "next/link";

interface ButtonProps {
    text: string;
    url: string;
}
 
const Button: FunctionComponent<ButtonProps> = ({text, url}) => {
    return ( 
        <Link href={url}>
            <button className={styles.container}>{text}</button>
        </Link>
     );
}
 
export default Button;