"use client"
import Link from "next/link";
import styles from "./navbar.module.scss"
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

const Navbar = () => {

    const session  = useSession();
    console.log(session)
    return ( 
        <div className={styles.container}>
            <Link href={"/"} className={styles.logo}>Lama</Link>
            <div className={styles.links}>
              <DarkModeToggle />
                {links.map(link => (
                    <Link href={link.url} key={link.id}>{link.title}</Link>
                ))}
                {session.status === "authenticated" &&
                  <button onClick={() => signOut()}>Logout</button>
                }
                
            </div>
        </div>
     );
}
 
export default Navbar; 