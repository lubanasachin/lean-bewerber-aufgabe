import { Component } from "react";
import MuiList from "@material-ui/core/List";

import ListItem from "./ListItem";

class List extends Component<{ items: any[] }> {
  render() {
    const { items } = this.props;
    const itemList: JSX.Element[] = []
    items.forEach(item => {
      itemList.push(<ListItem key={item.id} id={item.id} name={item.title} />)
    })
    return (
      <MuiList>{itemList}</MuiList>
    );
  }
}

export default List;
