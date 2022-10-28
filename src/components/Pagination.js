import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Pagination from "react-js-pagination";

import "./styles.css";

class Users extends Component {
  state = {
    data: [],
    activePage: 1
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?_page=1&_limit=10").then((res) => {
      this.setState({
        data: res.data.results
      });
    });
  }
  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    axios
      .get(`https://randomuser.me/api/?_page=${pageNumber}&_limit=20`)
      .then((res) => {
        this.setState({
          data: res.data.results
        });
      });
    this.setState({ activePage: pageNumber });
  };
  render() {
    const allData = this.state.data.map((item) => {
      return (
        <>
          <li key={item.id}>{item.name.title}</li>
          <li>{item.name.first}</li>
          <li key={item.id}>{item.name.last}</li>
          <li>{item.gender}</li>
        </>
      );
    });
    return (
      <div className="App">
        <p>React pagination test</p>
        <ul>{allData}</ul>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={500}
          pageRangeDisplayed={3}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}
export default Users
