import axios from 'axios'
import React, { Component } from "react";
import ReactPaginate from 'react-paginate';
import { RouteComponentProps, withRouter } from "react-router-dom";

import List from "../components/List";
import { Posts } from '../types';

const PostListApi = "https://jsonplaceholder.typicode.com/posts";

const PostsPerPage = 3;

interface DashboardProps extends RouteComponentProps {
   posts: Posts[];
}

interface DashboardState {
  offset:number;
  posts: Posts[]; 
  perPage: number; 
  currentPage: number; 
  pageCount:number;
}

class DashboardPage extends Component<DashboardProps, DashboardState> {
  constructor(props: RouteComponentProps & { posts: Posts[] }) {
    super(props);

    this.state = {
      offset: 0,
      posts: [],
      perPage: PostsPerPage,
      currentPage: 0,
      pageCount: 1,
    };

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e: any) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      this.receivedData()
    });
  };

  receivedData() {
    axios
      .get(PostListApi)
      .then(res => {
          const data = res.data;
          const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
          this.setState({
              pageCount: Math.ceil(data.length / this.state.perPage),
              posts: slice
          })
      });
  }

  async componentDidMount() {
    this.receivedData();
  }

  render() {
    return (
      <main>
        <main><List items={this.state.posts} /></main>
        <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}/>
      </main>
    )
  }
}

export default withRouter(DashboardPage);
