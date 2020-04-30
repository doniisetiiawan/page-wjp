import React, { Component } from 'react';

class PageView extends Component {
  onDelete = () => {
    this.props.onDelete(
      this.props.id,
    );
  };

  render() {
    return (
      <div>
        {this.props.title}
        <button type="button" onClick={this.props.onEdit}>
          edit
        </button>
        <button type="button" onClick={this.onDelete}>
          delete
        </button>
      </div>
    );
  }
}

export default PageView;
