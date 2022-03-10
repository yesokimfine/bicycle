import React, { Component } from "react";
import { Card, Button,Modal } from "antd";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';

export default class Rich extends Component {
  state = {};
  onEditorStateChange = (editorState) => {
    this.setState({ editorState });
  };
  render() {
    let { editorState } = this.state;
    return (
      <div>
        <Card title="富文本编辑器">
          <Button type="primary" style={{ marginRight: 30 }} onClick={()=>{
              Modal.info({
                  title:"HTML内容",
                  content:draftToHtml(this.state.contentState)
              })
          }}>
            获取文本
          </Button>
          <Button onClick={()=>this.setState({editorState:""})}>清空内容</Button>
        </Card>
        <Card>
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
            onContentStateChange={(contentState)=>this.setState({contentState})}
          />
        </Card>
      </div>
    );
  }
}
