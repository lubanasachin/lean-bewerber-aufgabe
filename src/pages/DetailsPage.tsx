import {
  withStyles,
  TextField,
  Typography,
  WithStyles,
  Theme,
} from "@material-ui/core";
import { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import DATABASE from "../db.json"

class DetailsPage extends Component<
  RouteComponentProps<{ id: string }> & WithStyles,
  { name: string; description: string } // this can be removed to see how he will set this component state types
> {

  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      description: "",
    };
  }

  async componentDidMount() {
    for (let i = 0; i < DATABASE.details.length; i++) {
      if (this.props.match.params.id === DATABASE.details[i].id) {
        this.setState({
          name: DATABASE.details[i].name,
          description: DATABASE.details[i].description
        })
      }
    }
  }

  handleNameChange = () => {
    // change should have a debounce
    // after debounce -> name should be updated on db.json
    // docs (json-server): https://github.com/typicode/json-server
  };
  render() {
    const { match, classes } = this.props;

    return (
      // this main should be minimally adjusted to have an acceptable UI
      // card, centered, ...?
      <main className={classes.main}>
        <Typography variant="h4">Item id: {match.params.id}</Typography>
        <TextField
          placeholder="Item name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <TextField
          placeholder="Item description"
          value={this.state.description}
          onChange={this.handleNameChange}
        />
      </main>
    );
  }
}

const styles = (theme: Theme) => ({
  main: {},
});

export default withRouter(withStyles(styles)(DetailsPage));
