import React, { Component } from 'react';
import Tabbar from './tabs';
import styles from './index.less';
export default class Index extends Component{
    render(){
      return (
        <div className={styles.container}>
          {/* <div className={styles.content}>{this.props.children}</div> */}
          {this.props.children}
          <Tabbar {...this.props}/>
        </div>
      );
    }
}