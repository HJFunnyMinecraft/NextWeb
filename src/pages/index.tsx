import styles from './styles.module.css'
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Introduction from "@/components/Introduction";
import { Text } from '@nextui-org/react';

export default function Home() {
    return (
        <main>
            <Head>
                <title>hjfunny | 官方网站</title>
            </Head>

            <Banner />
            <Navbar />

            <div className={styles.joinWrapper}>
                <Text h5 size={35}>
                    服务器地址<br />
                    「 mc.hjfunny.site 」
                </Text>
            </div>
            <Introduction />
            <div className={styles.joinWrapper}>
                <Text h5 size={35}>
                    现在加入「 mc.hjfunny.site 」
                </Text>
            </div>

            {/* Footer */}
            <div className={styles.footer}>
                Copyright &copy; 2022-2023 hjfunnyMC.
            </div>
        </main>
    )
}
