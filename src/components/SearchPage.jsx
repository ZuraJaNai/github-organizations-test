import React from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import Input from './Input';
import List from './List';

class SearchPage extends React.Component {
  delayedCallback = debounce(() => {
    const { value } = this.state;
    localStorage.setItem('value', value);
    this.setState({ search: true });
  }, 500);

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '',
      search: false,
    };
  }

  componentDidMount() {
    const { value } = this.state;
    if (value) {
      this.setState({ search: true });
    }
  }

  handleInputChange = (event) => {
    event.persist();
    this.setState({ value: event.target.value, search: false });
    this.delayedCallback();
  };

  createItem = (data) => {
    const name = data.login;
    return (
      <div key={name}>
        <Link to={`/organization/${name}`}>
          <h3>{name}</h3>
        </Link>
      </div>
    );
  };

  render() {
    const { value, search } = this.state;
    return (
      <div>
        <Input
          inputId="orgName"
          inputText="Organization name"
          value={value}
          handleChange={this.handleInputChange}
        />
        {search ? (
          <List
            createItem={this.createItem}
            url={`https://api.github.com/search/users?q=${value}+type:org`}
          />
        ) : null}
      </div>
    );
  }
}

SearchPage.propTypes = {
  value: PropTypes.string.isRequired,
};

export default SearchPage;
