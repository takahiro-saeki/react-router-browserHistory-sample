import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import Header from '../component/header';

export default class Page1 extends Component {
  constructor(props) {
    super(props);
  }

  location() {
    browserHistory.push(`/template`);
  }

  render() {
    return (
      <main>
        <Header />
        <h2 className='title'>ページ２</h2>
        <div onClick={this.location} className='back-btn'>戻る</div>
      </main>
    )
  }
}
