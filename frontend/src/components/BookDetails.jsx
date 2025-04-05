import React from "react";
import { Typography, Card, Descriptions, Divider } from "antd";

const { Title, Link, Paragraph } = Typography;

const BookDetails = () => {
  return (
    <Card title="📘 Book Details" style={{ marginTop: 24 }}>
      <Descriptions column={1} size="middle" labelStyle={{ fontWeight: 600 }}>
        <Descriptions.Item label="Edition Notes">
          Includes bibliographical references (p. 75–78) and index.
        </Descriptions.Item>

        <Descriptions.Item label="Published In">
          San Marino, Calif
        </Descriptions.Item>

        <Descriptions.Item label="Classifications">
          <div>Dewey Decimal Class: <strong>821/.7</strong></div>
          <div>Library of Congress: <strong>PR4144.V5 2002, PR4144.V5 2002</strong></div>
        </Descriptions.Item>

        <Descriptions.Item label="External Links">
          <Link href="#">Contributor biographical information</Link><br />
          <Link href="#">Publisher description</Link>
        </Descriptions.Item>

        <Descriptions.Item label="Pagination">
          v, 78 p., 11 p. of plates
        </Descriptions.Item>

        <Descriptions.Item label="Number of Pages">
          78
        </Descriptions.Item>

        <Descriptions.Item label="Edition Identifiers">
          <div>Open Library: <strong>OL3953744M</strong></div>
          <div>Internet Archive: <Link href="#">visionsofdaughte00blak</Link></div>
          <div>ISBN 10: <strong>087328187X</strong></div>
          <div>LCCN: <strong>2001051909</strong></div>
          <div>Library Thing: <strong>895344</strong></div>
          <div>Goodreads: <strong>1192954</strong></div>
        </Descriptions.Item>

        <Descriptions.Item label="Work ID">
          OL575430W
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default BookDetails;
