import React, { Component } from 'react';
import { Card, Row, Col, Image } from 'antd';
import './ui.less'
import imgs from '../../config/galleryImageLinkConfig';
let imgList = imgs.map(item => item.map(value =>
    <Card
        className="card-wrapper"
        cover={<Image src={value} />}
    >
        <Card.Meta
            title="Card title"
            description="This is the description"
        />
    </Card>
))
export default class Gallery extends Component {
    render() {
        console.log(imgList);
        return <div>
            <Row gutter={15}>
                <Col md={5}>
                    {imgList[0]}
                </Col>
                <Col md={4}>
                    {imgList[1]}
                </Col>
                <Col md={5}>
                    {imgList[2]}
                </Col>
                <Col md={4}>
                    {imgList[3]}
                </Col>
                <Col md={5}>
                    {imgList[4]}
                </Col>
            </Row>
        </div>;
    }
}
