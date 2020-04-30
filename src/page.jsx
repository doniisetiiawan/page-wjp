import React, { Component } from 'react';
import PageEditor from './page-editor';
import PageView from './page-view';

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };
  }

  render() {
    if (this.state.isEditing) {
      return <PageEditor {...this.props} />;
    }

    return <PageView {...this.props} />;
  }
}

export default Page;
