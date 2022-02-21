import React, { Component } from 'react'
import { Card, Table, Switch } from 'antd'
import './table.less'
export default class BasicTable extends Component {
    state = {
        hasBorder: false,
        hasPage: false
    }
    componentDidMount() {
        const dataSource = [
            {
                userName: "元飞瑶",
                gender: "女",
                subContent: "体育",
                isSub: "是",
                birthday: "1991-06-17"
            },
            {
                userName: "韩松",
                gender: "男",
                subContent: "综艺",
                isSub: "是",
                birthday: "1997-10-22"
            },
            {
                userName: "字彗云",
                gender: "男",
                subContent: "小说",
                isSub: "是",
                birthday: "1995-04-06"
            },
            {
                userName: "乐谷雪",
                gender: "女",
                subContent: "手绘",
                isSub: "是",
                birthday: "1999-11-19"
            }
        ];
        this.setState({ dataSource })
    }
    render() {
        const columns = [
            {
                title: "用户名",
                dataIndex: "userName"
            },
            {
                title: "性别",
                dataIndex: "gender"
            },
            {
                title: "订阅频道",
                dataIndex: "subContent"
            },
            {
                title: "是否推送",
                dataIndex: "isSub"
            },
            {
                title: "出生日期",
                dataIndex: "birthday"
            }
        ]
        let { dataSource, hasBorder,hasPage } = this.state;
        return (
            <div>
                <Card title="基础表格" className="card-wrapper">
                    <Switch
                        checkedChildren="有边框"
                        unCheckedChildren="无边框"
                        onChange={()=>{
                            this.setState({hasBorder:!hasBorder});
                        }}
                    />
                    <Switch
                        checkedChildren="有分页"
                        unCheckedChildren="无分页"
                        onChange={()=>{
                            this.setState({hasPage:!hasPage});
                        }}
                    />
                    <Table
                        bordered={hasBorder}
                        columns={columns}
                        dataSource={dataSource}
                        pagination={hasPage}
                        style={{marginTop:20}}
                    />
                </Card>
            </div>
        )
    }
}

