import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PageView extends Component {
  onDelete = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    const cardClassNames = [
      'demo-card-wide',
      'mdl-card',
      'mdl-shadow--2dp',
    ].join(' ');

    const buttonClassNames = [
      'mdl-button',
      'mdl-button--icon',
      'mdl-js-button',
      'mdl-js-ripple-effect',
    ].join(' ');

    return (
      <div className={cardClassNames}>
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">
            {this.props.title}
          </h2>
        </div>
        <div className="mdl-card__supporting-text">
          {this.props.body}
        </div>
        <div className="mdl-card__menu">
          <button
            type="button"
            className={buttonClassNames}
            onClick={this.props.onEdit}
          >
            <i className="material-icons">edit</i>
          </button>
          <button
            type="button"
            className={buttonClassNames}
            onClick={this.onDelete}
          >
            <i className="material-icons">delete</i>
          </button>
        </div>
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
