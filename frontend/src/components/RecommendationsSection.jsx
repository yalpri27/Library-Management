import React from "react";
import { Carousel, Typography, Image, Button, Card } from "antd";

const { Title } = Typography;

const recommendations = [
  {
    sectionTitle: "You might also like",
    items: [
      { title: "The Canterbury Tales", img: "https://covers.openlibrary.org/b/id/8231856-L.jpg", action: "Read" },
      { title: "Foundation Drawing for Art", img: "https://covers.openlibrary.org/b/id/11592167-L.jpg", action: "Read" },
      { title: "Poetry", img: "https://covers.openlibrary.org/b/id/11135342-L.jpg", action: "Read" },
      { title: "Pluto", img: "https://covers.openlibrary.org/b/id/10577530-L.jpg", action: "Borrow" },
      { title: "Stories from the Jatakas", img: "https://covers.openlibrary.org/b/id/13041057-L.jpg", action: "Borrow" },
      { title: "Global Poetry Anthology", img: "https://covers.openlibrary.org/b/id/8231980-L.jpg", action: "Borrow" },
    ],
  },
  {
    sectionTitle: "More by this author",
    items: [
      { title: "The Marriage of Heaven and Hell", img: "https://covers.openlibrary.org/b/id/7262150-L.jpg", action: "Borrow" },
      { title: "Prentice Hall Literature", img: "https://covers.openlibrary.org/b/id/7109832-L.jpg", action: "Borrow" },
      { title: "William Blake: The Painter at Work", img: "https://covers.openlibrary.org/b/id/12887522-L.jpg", action: "Borrow" },
      { title: "Prentice Hall Literature Student Edition", img: "https://covers.openlibrary.org/b/id/7270416-L.jpg", action: "Borrow" },
      { title: "William Blake: Selected Poems", img: "https://covers.openlibrary.org/b/id/6312215-L.jpg", action: "Borrow" },
      { title: "Literature: The British Tradition", img: "https://covers.openlibrary.org/b/id/12887531-L.jpg", action: "Borrow" },
    ],
  },
];

const RecommendationsSection = () => {
  return (
    <>
      {recommendations.map((recSection) => (
        <div key={recSection.sectionTitle} style={{ marginTop: 40 }}>
          <Title level={5}>{recSection.sectionTitle}</Title>
          <Carousel dots={false} slidesToShow={6} arrows>
            {recSection.items.map((item, index) => (
              <Card
                key={index}
                hoverable
                style={{ width: 130, marginRight: 8, textAlign: "center" }}
                cover={
                  <Image
                    alt={item.title}
                    src={item.img}
                    preview={false}
                    style={{ height: 180, objectFit: "cover" }}
                  />
                }
              >
                <div style={{ marginTop: 8 }}>
                  <Button size="small" block>{item.action}</Button>
                </div>
              </Card>
            ))}
          </Carousel>
        </div>
      ))}
    </>
  );
};

export default RecommendationsSection;
