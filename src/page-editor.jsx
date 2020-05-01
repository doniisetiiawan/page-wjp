import React, { Component } from 'react';
import PropTypes from 'prop-types';

class pageEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changed: false,
    };
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      changed: this.isChanged(props, this.props),
    });
  }

  isChanged = (next, previous) => JSON.stringify(next) !== JSON.stringify(previous);

  onSave = (event) => {
    event.preventDefault();
    this.props.onSave();
  };

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
    let cancelButtonStyle = null;
    let saveButton = null;

    if (this.state.changed) {
      cancelButtonStyle = this.props.cancelButtonStyle || {
        margin: '0 0 0 10px',
      };

      saveButton = (
        <button type="button" onClick={this.onSave}>
          save
        </button>
      );
    }

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
          {saveButton}
          <button
            type="button"
            style={cancelButtonStyle}
            onClick={this.onCancel}
          >
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
