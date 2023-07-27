import { Button, Navbar, Spacer, Text } from "@nextui-org/react"
import HJLogo from "./HJLogo"
import styles from './Navbar.module.css'
import { useEffect, useState } from "react"

export default function HJNavbar() {
    const [isLogin, setLogin] = useState(false);
    useEffect(() => {
        async function fetchData() {
            fetch('/login-check', { mode: 'no-cors', method: 'get' })
                .then(response => response.json())
                .then((data: { login: boolean }) => {
                    setLogin(data.login)
                    console.log('用户登陆状态', data);
                })
                .catch((e) => {
                    console.error(e);
                    console.warn('Navbar可能无法正常工作!')
                });
        }
        fetchData()
    })//backdrop-filter: "blur(10px)"; 

    return (
        <Navbar isBordered variant="static">
            <Navbar.Brand>
                <HJLogo />
                <Spacer x={1}></Spacer>
                <Text b color="inherit" hideIn="xs">
                    hjfunnyMC
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs">
                <Navbar.Link href="/rules">服务器规定</Navbar.Link>
                <Navbar.Link href="/news">近期新闻</Navbar.Link>
                <Navbar.Link href="/join">加入游戏</Navbar.Link>
                <Navbar.Link href="/join-us">加入我们</Navbar.Link>
                {/* 该功能已下架 */}
                {/* <Navbar.Link href="/support">工单支持</Navbar.Link> */}
            </Navbar.Content>
            <Navbar.Content>
                {isLogin ? (
                    <>
                        <Navbar.Item>
                            <a href="/me" className={styles.hideLink}>
                                <Button auto ghost color="primary">
                                    用户中心
                                </Button>
                            </a>
                        </Navbar.Item>
                        { /* <Navbar.Item>
                            <a href="/wp-admin/profile.php" className={styles.hideLink}>
                                <Button auto color="primary">
                                    账户管理
                                </Button>
                            </a>
                        </Navbar.Item> */ }</>
                ) : (
                    <>
                        <Navbar.Item>
                            <a href="/login" className={styles.hideLink}>
                                <Button auto ghost color="primary">
                                    登录
                                </Button>
                            </a>
                        </Navbar.Item>
                        <Navbar.Item>
                            <a href="/register" className={styles.hideLink}>
                                <Button auto shadow color="success">
                                    注册
                                </Button>
                            </a>
                        </Navbar.Item>
                        
                    </>
                )
                }
            </Navbar.Content>
        </Navbar>
    )
}