import React from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Introduction from "@/components/Introduction";
import { Text } from "@nextui-org/react";

export default function Home() {
  return (
    <main style={{ overflowX: "hidden" }}>
      <Head>
        <title>hjfunnyMC | 官方网站</title>
      </Head>

      <Navbar />
      <Banner />

      <div className={styles.joinWrapper}>
        <Text h5 size={35}>
          服务器地址
          <br />
          「&nbsp;
          <span style={{ fontFamily: "Mojangles" }}>mc.hjfunny.site</span>
          &nbsp;」
        </Text>
      </div>
      <Introduction />
      <div className={styles.joinWrapper}>
        <Text h5 size={35}>
          现在加入「 hjfunnyMC 」！
        </Text>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        Copyright &copy; 2022-2024 hjfunnyMC Team
        <br />
        <Text css={{ fontSize: "small" }}>
          hjfunnyMC
          是公益项目，不接受任何资金支持。如有任何人员要求充值/赞助请立即拒绝并尽快联系管理员。
        </Text>
      </div>
    </main>
  );
}
