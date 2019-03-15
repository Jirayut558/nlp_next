import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Icon , Row , Col} from "antd";

import Home from './route/Home'
import News from './route/News'
import Tokenize from './route/Tokenize'
import App from './App'

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
        <Router>
      <Layout>
        <Sider  theme= "light" trigger={null} collapsible collapsed={this.state.collapsed}>
          <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="home" />
              <span>Home</span>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="file-search" />
              <span>News</span>
              <Link to="/news" />
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="scissor" />
              <span>Word tokenization</span>
              <Link to="/tokenize" />
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="highlight" />
              <span>NER</span>
              <Link to="/NER" />
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="ordered-list" />
              <span>EDU</span>
              <Link to="/EDU" />
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="file-text" />
              <span>News summarization</span>
              <Link to="/summarization" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: '12px 0px' }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            <Route exact path="/" component={Home}/>
            <Route path="/news" component={News}/>
            <Route path="/tokenize" component={Tokenize}/>
            <Route path="/NER" component={Tokenize}/>
            <Route path="/EDU" component={Tokenize}/>
            <Route path="/summarization" component={App}/>
          </Content>
        </Layout>
      </Layout>
      </Router>
    );
  }
}

ReactDOM.render(<SiderDemo />, document.getElementById("container"));
