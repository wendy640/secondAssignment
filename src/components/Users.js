import React, { Component } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import "./pagination.css";
import Header2 from "./UserNav";

class Users extends Component {
  state = {
    data: [],
    activePage: 1,
		
  };

  componentDidMount() {
		  this.setState({ loading: true })
    axios.get("https://randomuser.me/api/?_page=1&_limit=10").then((res) => {
      this.setState({
        data: res.data.results,
			
			
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
					<Header2 />

					<div key={item.id} class="card">
						<img src={item.picture.large} alt="Avatar" style={{ width: 250 }} />
						<div class="container">
							<h4>
								<b>{item.name.title}</b>
							</h4>
							<h4>
								<b>
									{item.name.first} {item.name.last}
								</b>
							</h4>
							<p>{item.gender}</p>
							<p>{item.email}</p>
						</div>
					</div>
				</>
			)
    });
    return (
			<div className="App">	
				<ul>{allData}</ul>
				<Pagination
					activePage={this.state.activePage}
					itemsCountPerPage={10}
					totalItemsCount={500}
					pageRangeDisplayed={5}
					onChange={this.handlePageChange}
					nextPageText={'next'}
					prevPageText={'previous'}
					LinkClass="pagination"
					ClassPrev="page-num"
					ClassNext="page-num"
					activeLinkClass="active"
					activeClass="active"
				/>
			</div>
		)
  }
}

export default Users

