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
                    <ServerCard title="hjmc" content="hjfunny群组服的“前世”就是hjmc, 它有完善的生电装置和优美的建筑物" img="http://hjmc-static.hecodemc.eu.org/imgs/hjmc-night.png" />
                </Col>
            </Row>
        </Container>
    )
}