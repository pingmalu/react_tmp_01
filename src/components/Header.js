import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>目录 | 测试</h1>
              { true ? 'Malu.me':'hello'}
          </div>
        </div>

      </div>
    );
  }
}

