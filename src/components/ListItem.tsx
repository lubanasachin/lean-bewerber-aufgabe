import { Component } from "react";
import { Link } from "react-router-dom";
import MuiListItem from "@material-ui/core/ListItem";
import {
  withStyles,
  WithStyles,
  Theme,
  Card,
  CardContent,
} from "@material-ui/core";

interface ListItemProps extends WithStyles {
  id: string;
  name: string;
}

class ListItem extends Component<ListItemProps> {
  render() {
    const { classes } = this.props;
    return (

      <Card className={classes.root}>
        <CardContent>
          <Link to={`/details/${this.props.id}`}>
            <MuiListItem button><strong>{this.props.id}</strong>: {this.props.name}</MuiListItem>
          </Link>
        </CardContent>
      </Card>
    );
  }
}

const styles = (theme: Theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(3),
    display: 'block',
    width: '95%',
  }
});

export default withStyles(styles)(ListItem);
