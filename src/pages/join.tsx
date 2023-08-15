import React from "react"
import Navbar from "@/components/Navbar";
import { Button, Card, Col, Container, Row, Spacer, Text } from "@nextui-org/react";
import styles from './join.module.css'

function P(props: {
    content: string,
    size?: number
}) {
    return (
        <Text p size={props.size || 20} css={{ m: 2 }}>{props.content}</Text>
    )
}

export default function Join() {
    console.log(styles);
    return (
        <>
            <Navbar />
            <Container gap={0}>
                <Row gap={1} justify="center" className={styles.container}>
                    <Col className={styles.wrapper}>
                        <Card>
                            <Card.Header>
                                <Text h6 size={30} css={{ m: 0 }}>加入游戏</Text>
                            </Card.Header>
                            <Card.Body>
                                <P content="首先, 您需要点击下方链接注册账号并加入QQ群:" />
                                <a href="/register" className={styles.hideLink}>
                                    <Button auto color="secondary">hjfunnyMC - 注册账号</Button>
                                </a>
                                <Spacer y={0.5} />
                                <a href="https://qm.qq.com/cgi-bin/qm/qr?k=-l6F_4v1HU1Xyk01Gu_kD7d2mc2eKO1L&jump_from=webapi&authKey=wgXsOUYz0lvwCzcHc7FWBSgCbGx4rIeW8Gd4EcxcrPOiI6isHRm3kGVvuZWzpwOE" className={styles.hideLink}>
                                    <Button auto flat color="secondary">hjfunnyMC - 加入QQ群 (可选)</Button>
                                </a>
                                <P content="注意:" />
                                <P content="1. 用户名即为 Minecraft 档案名" />
                                <P content="2. 注册后不可修改用户名，如需删除账户请联系管理员" />
                                <P content="3. 同一 IP 只能注册 3 个账户" />
                                <P content="服务器地址如下" size={24} />
                                <Text h6 size={20} css={{ m: 3 }}>mc.hjfunny.site</Text>
                            </Card.Body>
                            <Card.Divider />
                            <Card.Body>
                                <Text h6 size={24} css={{ m: 3 }}>hjMC生电分服白名单申请</Text>
                                <P content="如果您想要申请hjMC生电分服的白名单, 请加入上述QQ群联系hjfunny" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}