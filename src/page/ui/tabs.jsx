import React, { Component } from 'react';
import { Card, Tabs } from 'antd';
const TabPane = Tabs.TabPane;
const panes = new Array(2).fill(null).map((_, index) => {
    const id = String(index + 1);
    return { title: `Tab ${id}`, content: `Content of Tab Pane ${id}`, key: id };
});
let newTabIndex = 0;
export default class Tab extends Component {
    state = {
        activeKey: panes[0].key,
        panes,
    };
    
    onChange = activeKey => {
        this.setState({ activeKey });
    };
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };
    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    };
    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    }
    render() {
        let { panes, activeKey } = this.state;
        return <div>
            <Card title="Tab页签" className="card-wrapper">
                <Tabs defaultActiveKey="3">
                    <TabPane key="1" tab="新闻">新冠病毒被彻底消灭</TabPane>
                    <TabPane disabled tab="视频" />
                    <TabPane key="3" tab="音乐">
                        <p>听你所听，爱你所爱</p>
                        <p><span style={{ color: "#0c0" }}>●</span><span style={{ position: "relative", top: 1, color: "#0c0", fontWeight: "bold" }}>━━━━━━</span>─────── 1:02<br />
                            ⇆ ◁ ❚❚ ▷ ↻</p>
                    </TabPane>
                    <TabPane key="2" tab="体育">国足夺冠，举国同庆</TabPane>
                </Tabs>
            </Card>
            <Card title="动态页签">
                <Tabs type="editable-card"
                    onEdit={this.onEdit}
                    onChange={this.onChange}
                    activeKey={activeKey}
                >
                    {
                        panes.map(value => {
                            return (
                                <TabPane tab={value.title} key={value.key}
                                    on
                                >{value.content}</TabPane>
                            )
                        })
                    }
                </Tabs>
            </Card>
        </div>;
    }
}
