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

  onEdit = () => {
    this.setState({
      isEditing: true,
      title: this.props.title,
    });
  };

  onSave = () => {
    this.setState({
      isEditing: false,
    });
  };

  onCancel = () => {
    this.props.onUpdate(
      this.props.id,
      'title',
      this.state.title,
    );

    this.setState({
      isEditing: false,
    });
  };

  render() {
    if (this.state.isEditing) {
      return (
        <PageEditor
          {...this.props}
          onCancel={this.onCancel}
          onSave={this.onSave}
        />
      );
    }

    return (
      <PageView {...this.props} onEdit={this.onEdit} />
    );
  }
}

export default Page;
