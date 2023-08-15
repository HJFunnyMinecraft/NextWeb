import React from 'react';
import { Button, Container, Link, Row, Spacer, Text } from "@nextui-org/react";
import styles from './Banner.module.css'

export default function Banner() {
    return (
        <div className={styles.banner} >
            <Container className={styles.bannerContent}>
                {/* Title */}
                <Row justify="center" align="center">
                    <Text
                        h1
                        size={40}
                        css={{
                            textGradient: "45deg, $blue600 -20%, $pink600 40%, $yellow600 55%, $green500 70%",
                            m: 0
                        }}
                    >
                        hjfunnyMC
                    </Text>
                </Row>
                {/* Description */}
                <Row justify="center" align="center">
                    <Text h6 size={15} css={{
                        m: 0,
                        color: "rgb(126, 134, 140);"
                    }}>
                        Minecraft服务器群组, 欢迎您的到来!
                    </Text>
                </Row>
                <Spacer y={1}></Spacer>
                {/* Action */}
                <Row justify="center" align="flex-start">
                    <Link href="/join" className={styles.hideLink}>
                        <Button shadow color="primary" size="lg" auto>立即加入</Button>
                    </Link>
                    { /* <Spacer x={1}></Spacer>
                    <a href="/wp-admin/profile.php" className={styles.hideLink}>
                        <Button ghost size="lg">账户管理</Button>
                    </a> */ }  
                </Row>
            </Container>
        </div >
    )
}
