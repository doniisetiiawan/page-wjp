import React, { Component } from 'react';
import Page from './page';

class PageAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: [],
    };
  }

  componentDidMount() {
    this.setState({
      pages: this.props.backend.getAll(),
    });
  }

  onUpdate = (...params) => {
    this.props.backend.update(...params);

    this.setState({
      pages: this.props.backend.getAll(),
    });
  };

  onDelete = (...params) => {
    this.props.backend.delete(...params);

    this.setState({
      pages: this.props.backend.getAll(),
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
