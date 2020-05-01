import React, { Component } from 'react';
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
    const itemStyle = this.props.itemStyle || {
      minHeight: '40px',
      lineHeight: '40px',
      fontSize: '18px',
      fontFamily: 'Helvetica',
    };

    return (
      <div>
        <div>
          <button type="button" onClick={this.onInsert}>
            create new page
          </button>
        </div>
        <ol>
          {this.state.pages
            ? this.state.pages.map((page) => (
              <li key={page.id} style={itemStyle}>
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
