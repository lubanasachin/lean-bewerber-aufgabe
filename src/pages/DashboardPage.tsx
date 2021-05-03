import { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import List from "../components/List";

import DATABASE from "../db.json"

class DashboardPage extends Component<
  RouteComponentProps & { items: any[] },
  { items: any[] }
> {
  constructor(props: RouteComponentProps & { items: any[] }) {
    super(props);
    this.state = {
      items: [],
    };
  }
  async componentDidMount() {
    const items = getItems();
    this.setState({ items });
  }
  render() {
    const { items } = this.state;
    return (
      <main>
        <List items={items} />
      </main>
    );
  }
}

const getItems = () => {
  return DATABASE.items
};

export default withRouter(DashboardPage);
