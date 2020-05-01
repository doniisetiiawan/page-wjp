import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

PageView.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
