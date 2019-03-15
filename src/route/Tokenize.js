import React, { Component } from "react";
import {Row , Col} from "antd";

class Tokenize extends Component {
  render() {
    return (
      <div>
        <Row gutter={8}>
          <Col span={12} >Full</Col>
          <Col span={12} >Text</Col>
        </Row>
      </div>
    );
  }
}
export default Tokenize;
