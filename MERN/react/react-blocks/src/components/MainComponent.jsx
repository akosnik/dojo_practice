import React, { Component } from 'react';
import styles from './MainComponent.module.css';
import SubContents from './SubContentsComponent';
import Advertisement from './AdvertisementComponent';

class Main extends Component {
  render() {
    return (<div className={ styles.main }>
      <SubContents></SubContents>
      <SubContents></SubContents>
      <SubContents></SubContents>
      <Advertisement></Advertisement>
    </div>);
  }
}

export default Main;