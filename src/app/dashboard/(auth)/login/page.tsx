"use client"

import { useRouter } from "next/navigation";
import styles from "./page.module.scss"
import {signIn, useSession} from "next-auth/react"

const Login = () => {
    const session = useSession();
    const router = useRouter();

    if (session.status === "loading") {
        return <p>Loading...</p>
    } else if (session.status === "authenticated") {
        router.push("/dashboard");
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        

        const emailTarget = (event.target as HTMLFormElement)[0] as HTMLInputElement;
        const email = emailTarget.value;

        const passwordTarget = (event.target as HTMLFormElement)[1] as HTMLInputElement;
        const password = passwordTarget.value;


        signIn("credentials", {email, password})
    }

    return ( 
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="email" placeholder="email" required className={styles.input} />
                <input type="password" placeholder="password" required className={styles.input} />
                <button className={styles.button}>Login</button>
            </form>
            <button onClick={() => signIn('google')}>Login with Google</button>
        </div>
     );
}
 
export default Login;