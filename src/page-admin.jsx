import React, { Component } from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import Page from './page';
import Backend from './backend';

class PageAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: [],
    };

    this.props.backend.on('update', (pages) => this.setState({ pages }));
  }

  componentDidMount() {
    this.setState({
      pages: this.props.backend.all(),
    });
  }

  onInsert = () => {
    this.props.backend.insert();
  };

  onUpdate = (id, field, value) => {
    this.props.backend.update(id, field, value);
  };

  onDelete = (id) => {
    this.props.backend.delete(id);
  };

  render() {
    const contentClassNames = [
      'mdl-layout__content',
      'mdl-color--grey-100',
    ].join(' ');

    const addButtonClassNames = [
      'mdl-button',
      'mdl-js-button',
      'mdl-button--fab',
      'mdl-js-ripple-effect',
      'mdl-button--colored',
    ].join(' ');

    const itemStyle = this.props.itemStyle || {
      minHeight: '40px',
      lineHeight: '40px',
      fontSize: '18px',
      fontFamily: 'Helvetica',
    };

    return (
      <div className={contentClassNames}>
        <button
          type="button"
          onClick={this.onInsert}
          className={addButtonClassNames}
        >
          <i className="material-icons">add</i>
        </button>
        <ol>
          <TransitionGroup>
            {this.state.pages
              ? this.state.pages.map((page) => (
                <CSSTransition
                  key={page.id}
                  timeout={500}
                  classNames="my-node"
                >
                  <Page
                    {...page}
                    key={page.id}
                    onUpdate={this.onUpdate}
                    onDelete={this.onDelete}
                  />
                </CSSTransition>
              ))
              : 'Undefined...'}
          </TransitionGroup>
        </ol>
      </div>
    );
  }
}

export default PageAdmin;

PageAdmin.propTypes = {
  // eslint-disable-next-line no-unused-vars,react/require-default-props
  backend(props, propName, componentName) {
    if (props.backend instanceof Backend) {
      return;
    }
    return new Error(
      'Required prop `backend` is not a `Backend`.',
    );
  },
};
