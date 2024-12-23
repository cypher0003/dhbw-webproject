import Head from "next/head";
import styles from "@/styles/Home.module.css";
import {
  Button,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Webprojekt DHBW</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
          <div className="navbar">
          <Navbar position="static" >
            <NavbarContent style={{ gap: "1rem" }} justify="center">
              <NavbarItem>
                <Link href="#" className="button">
                  Home
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="#" className="button">
                  Kunden
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="#" className="button">
                  Analyse
                </Link>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
          </div>
        </main>
    </>
  );
}