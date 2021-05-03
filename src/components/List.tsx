import { Component } from "react";
import MuiList from "@material-ui/core/List";
import ListItem from "./ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";

class List extends Component<{ items: any[] }> {
  render() {
    const { items } = this.props;
    let itemList: JSX.Element[] = []
    items.forEach(item => {
      itemList.push(<ListItem id={item.id} name={item.id} />)
    })

    return (
      <MuiList
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            List
          </ListSubheader>
        }
      >
        {itemList}
      </MuiList>
    );
  }
}

export default List;
