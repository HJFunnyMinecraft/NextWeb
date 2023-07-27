import Navbar from '@/components/Navbar'
import { Button, Card, Col, Container, Row, Text } from '@nextui-org/react'
import styles from './join.module.css'

export default function Join() {
    return (
        <>
            <Navbar />
            <Container gap={0}>
                <Row gap={1} justify='center' className={styles.container}>
                    <Col className={styles.wrapper}>
                        <Card variant='shadow' css={{ color: 'White' }}>
                            <Card.Header>
                                <Text h3 size={30}>加入游戏</Text>
                            </Card.Header>
                            <Card.Body>
                                <Text size={18} css={{ m: 0 }}>
                                    首先，您需要点击下方链接注册账号：<br />

                                    <Button auto flat color="secondary" as="a" href="/register" css={{w:"30%"}} className={styles.hideLink}>hjfunnyMC - 注册账号</Button>
                                    注意：<br />

                                    1. 用户名即为 Minecraft 档案名 <br />
                                    2. 注册后不可修改用户名, 如需删除账户请联系管理员 <br />
                                    3. 同一 IP 只能注册 3 个账户 <br />
                                    <br />
                                    服务器地址如下 <br />
                                    <br />
                                </Text>
                                <Text weight="bold" css={{ m: 0 }}>
                                    mc.hjfunny.site
                                </Text>
                                <Text size={18} css={{ m: 0 }}>
                                    <br />
                                    <br />
                                    hjMC生电分服白名单申请 <br />
                                    如果您想要申请hjMC生电分服的白名单, 可以加入QQ群: <br />
                                    799512425
                                </Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}