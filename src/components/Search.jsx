import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import List from "./List";
import debounce from "lodash.debounce";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      search: false
    };
  }

  delayedCallback = debounce(() => {
    this.setState({ search: true });
  }, 500);

  handleInputChange = event => {
    event.persist();
    this.setState({ value: event.target.value, search: false });
    this.delayedCallback(event);
  };

  createItem = data => {
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
    const { value } = this.state;
    return (
      <div>
        <Input handleChange={this.handleInputChange} />
        {this.state.search ? (
          <List
            value={value}
            createItem={this.createItem}
            url={`https://api.github.com/search/users?q=${value}+type:org`}
          />
        ) : null}
      </div>
    );
  }
}

export default Search;
