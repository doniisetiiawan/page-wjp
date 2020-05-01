import React, { Component } from 'react';
import Page from './page';
import Backend from './backend';

class PageAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: [],
    };
  }

  componentDidMount() {
    this.setState({
      pages: this.props.backend.all(),
    });
  }

  onUpdate = (...params) => {
    this.props.backend.update(...params);

    this.setState({
      pages: this.props.backend.all(),
    });
  };

  onDelete = (...params) => {
    this.props.backend.delete(...params);

    this.setState({
      pages: this.props.backend.all(),
    });
  };

  render() {
    return (
      <div>
        <ol>
          {this.state.pages
            ? this.state.pages.map((page) => (
              <li key={page.id}>
                <Page
                  {...page}
                  onUpdate={this.onUpdate}
                  onDelete={this.onDelete}
                />
              </li>
            ))
            : 'Undefined...'}
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
