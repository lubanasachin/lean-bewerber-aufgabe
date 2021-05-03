import { Component } from "react";
import { Link } from "react-router-dom";
import MuiListItem from "@material-ui/core/ListItem";
interface ListItemProps {
  id: string;
  name: string;
}

class ListItem extends Component<ListItemProps> {
  render() {
    return (
      <Link to={`/details/${this.props.id}`}>
        <MuiListItem button>some item {this.props.id}</MuiListItem>
      </Link>
    );
  }
}

export default ListItem;
