import React from "react";
import axios from "axios";
import parse from "parse-link-header";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: {},
      results: []
    };
  }

  componentDidMount() {
    const { url } = this.props;
    this.search(url);
  }

  search = url => {
    axios.get(url).then(res => {
      this.setState({
        links: parse(res.headers.link),
        results: [...this.state.results, ...res.data.items]
      });
    });
  };

  render() {
    const { results } = this.state;
    return <div>{results.map(element => this.props.createItem(element))}</div>;
  }
}

export default List;
