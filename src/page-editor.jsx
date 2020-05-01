import React, { Component } from 'react';
import PropTypes from 'prop-types';

class pageEditor extends Component {
  onCancel = (event) => {
    event.preventDefault();
    this.props.onCancel();
  };

  onUpdate = (event) => {
    this.props.onUpdate(
      this.props.id,
      event.target.name,
      event.target.value,
    );
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="title"
            value={this.props.title}
            onChange={this.onUpdate}
          />
          <textarea
            name="body"
            value={this.props.body}
            onChange={this.onUpdate}
          />
          <button type="button" onClick={this.onCancel}>
            back
          </button>
        </form>
      </div>
    );
  }
}

export default pageEditor;

pageEditor.propTypes = {
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onCancel: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
