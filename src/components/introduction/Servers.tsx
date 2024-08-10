import React from 'react';
import { Card, Col, Container, Row, Text } from "@nextui-org/react";
import styles from './Serveres.module.css';

function ServerCard(props:{
    title:string,
    content:string,
    img:string
}) {
    return (
        <Card
            // className={styles.cardWrapper}
        >
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={30} weight="bold" transform="uppercase" color="white" css={{ m: 0 }}>
                        {props.title}
                    </Text>
                    <Text h4 color="white" css={{ m: 0 }}>
                        {props.content}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Image
                src={props.img}
                objectFit="cover"
                width="100%"
                height={340}
                alt="Card image background"
            />
        </Card>
    )
}

export default function Servers() {
    return (
        <Container gap={0} className={styles.wrapper}>
            <Row gap={1}>
                <Col>
                    <ServerCard title="hjMC 生电服务器" content="hjfunnyMC 群组服务器的核心。它是 hjfunnyMC 群组服务器中活跃玩家最多、开服历史最久的服务器，拥有相对完善的生电设施。" img="http://hjmc-static.hecodemc.eu.org/imgs/hjmc3-railsys.png" />
                </Col>
            </Row>
        </Container>
    )
}