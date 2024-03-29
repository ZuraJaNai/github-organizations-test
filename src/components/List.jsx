import React from 'react';
import axios from 'axios';
import parse from 'parse-link-header';
import PropTypes from 'prop-types';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: {},
      results: [],
    };
  }

  componentDidMount() {
    const { url } = this.props;
    this.getList(url);
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = () => {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const { body } = document;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      const { links } = this.state;
      if (links && links.next) {
        this.getList(links.next.url);
      }
    }
  };

  getList = (url) => {
    axios.get(url).then((res) => {
      let results = res.data;
      if (!Array.isArray(res.data)) {
        results = res.data.items;
      }
      this.setState(prevState => ({
        links: parse(res.headers.link),
        results: [...prevState.results, ...results],
      }));
    });
  };

  render() {
    const { results } = this.state;
    const { createItem } = this.props;
    return <div className="list">{results.map(element => createItem(element))}</div>;
  }
}

List.propTypes = {
  url: PropTypes.string.isRequired,
  createItem: PropTypes.func.isRequired,
};

export default List;
