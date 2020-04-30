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

  render() {
    return (
      <div>
        <ol>
          {this.state.pages.map((page) => (
            <li key={page.id}>
              <Page {...page} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default PageAdmin;
