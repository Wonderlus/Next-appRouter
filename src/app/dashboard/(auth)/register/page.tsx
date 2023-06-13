"use client"

import Link from "next/link";
import styles from "./page.module.scss"
import { useState } from "react";
import { useRouter } from "next/navigation";



const Register = () => {

    const [error, setError] = useState(false);
    const router = useRouter();


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const nameTarget = (event.target as HTMLFormElement)[0] as HTMLInputElement;
        const name = nameTarget.value;

        const emailTarget = (event.target as HTMLFormElement)[1] as HTMLInputElement;
        const email = emailTarget.value;

        const passwordTarget = (event.target as HTMLFormElement)[2] as HTMLInputElement;
        const password = passwordTarget.value;
        
        try {
            const res = await fetch("/api/auth/register", {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                })
            })

            res.status === 201 && router.push("/dashboard/login?success=Account has been created")
        } catch (error) {
            setError(true);
        }

    }

    return ( 
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="username" required className={styles.input} />
                <input type="email" placeholder="email" required className={styles.input} />
                <input type="password" placeholder="password" required className={styles.input} />
                <button className={styles.button}>Register</button>
            </form>
            {error && "Error!"}
            <Link href={"/dashboard/login"}>Login with an existing account</Link>
        </div>
     );
}
 
export default Register;