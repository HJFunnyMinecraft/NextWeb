import React from "react";
import { Card, Col, Container, Row, Text } from "@nextui-org/react";
import styles from "./Servers.module.css";

function ServerCard(props: { title: string; content: string; img: string }) {
  return (
    <Card
      // className={styles.cardWrapper}
      style={{ marginBottom: 20 }}
    >
      <Card.Header css={{ padding: "10px", position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text
            size={30}
            weight="bold"
            transform="uppercase"
            color="white"
            css={{ m: 10 }}
          >
            {props.title}
          </Text>
          <Text h4 color="white" css={{ m: 10 }}>
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
  );
}

export default function Servers() {
  return (
    <Container gap={0} className={styles.wrapper}>
      <Row>
        <Col>
          <ServerCard
            title="hjMC 生电服务器"
            content="hjfunnyMC 群组服务器的核心。它是 hjfunnyMC 群组服务器中活跃玩家最多、开服历史最久的服务器，拥有相对完善的生电设施。"
            img="http://static.mc.hjfunny.site/imgs/hjmc3-railsys.png"
          />
          <ServerCard
            title="Bedwars 起床战争服务器"
            content="在这个 1.8.9 版本的小游戏中，你将保护自己的床，同时破坏敌人的床。策略、技巧和团队合作缺一不可。收集资源，购买装备，升级能力，成为最后的胜者！"
            img="http://static.mc.hjfunny.site/imgs/bedwars-rushmode.png"
          />
          <ServerCard
            title="Earth 世界服务器"
            content="这个服务器拥有独特主世界地图——一幅巨大的平面投影世界地图，真实还原了世界的地形地貌。从壮丽的喜马拉雅山脉到广袤的亚马逊雨林，从繁华的都市到遥远的海岛，探索这个熟悉又陌生的世界。在这里，你可以选择在世界上任何一个地区进行建设，甚至是……学习地理！"
            img="http://static.mc.hjfunny.site/imgs/earth-beijing.png"
          />
          <ServerCard
            title="Minigames 小游戏服"
            content="这里有各种精彩纷呈的小游戏等你体验。在刺激的密室杀手中，你可能是神秘的杀手、机智的侦探或是谨慎的平民。跑酷挑战则考验你的跑酷技巧。我们会不定期推出新的小游戏，带来源源不断的乐趣。"
            img="http://static.mc.hjfunny.site/imgs/minigames-towerfall.png"
          />
        </Col>
      </Row>
    </Container>
  );
}
