import React from "react";
import { Card, Col, Container, Row, Text } from "@nextui-org/react";
import styles from "./Shinings.module.css";

import { AiOutlineFullscreen, AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiMessageRoundedCheck } from "react-icons/bi";

import { IconContext } from "react-icons";

function IconWrapper({ children }: any) {
  return (
    <>
      <IconContext.Provider value={{ size: "3rem" }}>
        {children}
      </IconContext.Provider>
    </>
  );
}

function ShiningsCard(props: {
  title: string;
  content: string;
  children: any;
}) {
  return (
    <Card isHoverable variant="bordered" css={{ mb: 3, mr: 3 }}>
      <Card.Header>
        <IconWrapper>{props.children}</IconWrapper>
        <Text h3 size={30} b css={{ m: 0 }}>
          {props.title}
        </Text>
      </Card.Header>
      <Card.Body>
        <Text h6 size={15} css={{ m: 0, width: "90%" }}>
          {props.content}
        </Text>
      </Card.Body>
    </Card>
  );
}

export default function Shinings() {
  return (
    <div className={styles.wrapper}>
      <ShiningsCard
        title="多元"
        content="服务器各式各样, 生存、建筑、科技、小游戏……"
      >
        <AiOutlineAppstoreAdd />
      </ShiningsCard>
      <ShiningsCard
        title="开放"
        content="我们的服务器群组是开放的, 任何服务器都可以与我们联合"
      >
        <AiOutlineFullscreen />
      </ShiningsCard>
      <ShiningsCard
        title="共生"
        content="我们支持跨服聊天, 你可以与另一个服务器的玩家畅快交流, 消除服与服之间隔阂"
      >
        <BiMessageRoundedCheck />
      </ShiningsCard>
    </div>
  );
}
