import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { DarkModeSwitch } from "../components/DarkModeSwitch";
import MyCard from "../components/MyCard";
import { Box, Stack } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        {/* <meta charset="utf-8" /> */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content=" Finance lab is a Personal Finance Calculator App "
        />
        <meta name="theme-color" content="#000" />
        <title>FINANCE LAB - Powerd by Apple Bee</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* <link rel="apple-touch-icon" href="/apple-icon.png"></link> */}
      </Head>

      <main className={styles.main}>
        <DarkModeSwitch />

        <Stack direction={["column", "row"]} spacing="24px">
          <Box>
            {" "}
            <MyCard
              brand=""
              discription="Numeric Calculator"
              color="red.400"
              image="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1194.jpg?t=st=1654772407~exp=1654773007~hmac=a878fd7da96a9a2ef960207ec079e1ecc7750a24c80b0d0a58f11c6f5bf2007c&w=740"
              link="/numeric-calculator"
              backgroundImage="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1194.jpg?t=st=1654772407~exp=1654773007~hmac=a878fd7da96a9a2ef960207ec079e1ecc7750a24c80b0d0a58f11c6f5bf2007c&w=740"
            />
          </Box>

          <Box>
            <MyCard
              brand=""
              color="blue.400"
              discription="Interest Rate Calculator"
              image="https://img.freepik.com/free-vector/tax-concept-illustration_114360-5924.jpg?t=st=1654772544~exp=1654773144~hmac=23e66713e58244527a8a607d32a34f7dfc431a222d45ebc78597514d927c9ef4&w=740"
              link="/interest-calculator/rate"
              backgroundImage="https://img.freepik.com/free-vector/tax-concept-illustration_114360-5924.jpg?t=st=1654772544~exp=1654773144~hmac=23e66713e58244527a8a607d32a34f7dfc431a222d45ebc78597514d927c9ef4&w=740"
            />
          </Box>
          <Box>
            <MyCard
              brand=""
              discription="Future Value Calculator"
              image="https://img.freepik.com/free-vector/formula-concept-illustration_114360-8367.jpg?t=st=1654772618~exp=1654773218~hmac=d346fb2f9424515597284b0136045f45d4a79aa25bb990b4eed9ac66bef5d3d3&w=740"
              color="purple.400"
              link="/interest-calculator/future-value"
              backgroundImage="https://img.freepik.com/free-vector/formula-concept-illustration_114360-8367.jpg?t=st=1654772618~exp=1654773218~hmac=d346fb2f9424515597284b0136045f45d4a79aa25bb990b4eed9ac66bef5d3d3&w=740"
            />
          </Box>
        </Stack>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
