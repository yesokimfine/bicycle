import React, { Component } from 'react';
import { Card, Carousel } from 'antd';
import './ui.less'
export default class Carousels extends Component {
    render() {
        return <div>
            <Card title="焦点轮播图" className="slider-wrap">
                <Carousel autoplay>
                    <div><img src="https://images.pexels.com/photos/1191377/pexels-photo-1191377.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /></div>
                    <div><img src="https://images.pexels.com/photos/1008739/pexels-photo-1008739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /></div>
                    <div><img src="https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /></div>
                    <div><img src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /></div>
                </Carousel>
            </Card>
        </div>;
    }
}
