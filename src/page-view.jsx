import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PageView extends Component {
  onDelete = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    const rowStyle = this.props.rowStyle || {
      fontSize: '18px',
      fontFamily: 'Helvetica',
    };
    const labelStyle = this.props.labelStyle || {
      whiteSpace: 'nowrap',
    };
    const buttonStyle = this.props.buttonStyle || {
      margin: '0 0 0 10px',
      verticalAlign: 'middle',
    };

    return (
      <div style={rowStyle}>
        <label style={labelStyle}>{this.props.title}</label>
        <button
          type="button"
          style={buttonStyle}
          onClick={this.props.onEdit}
        >
          edit
        </button>
        <button
          type="button"
          style={buttonStyle}
          onClick={this.onDelete}
        >
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
