import { Component } from "react";
import axios from 'axios'
import {
  withStyles,
  TextField,
  Typography,
  WithStyles,
  Theme,
  Card,
  CardActions,
  CardContent,
  Button
} from "@material-ui/core";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

const PostDetailsApi = "https://jsonplaceholder.typicode.com/posts";

interface PostDetailsState {
  title: string; 
  body: string;
}

class DetailsPage extends Component<
  RouteComponentProps<{ id: string }> & WithStyles,
  PostDetailsState
> {

  constructor(props: any) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }
  
  receivedData() {
    axios
      .get(`${PostDetailsApi}/${this.props.match.params.id}`)
      .then(res => {
          const data = res.data;
          this.setState({title: data.title, body: data.body});
      });
  }  

  async componentDidMount() {
    this.receivedData();
  }

  handleNameChange = () => {
    // change should have a debounce
    // after debounce -> name should be updated on db.json
    // docs (json-server): https://github.com/typicode/json-server
  };

  render() {
    const { match, classes } = this.props;

    return (
      <main>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5">Item id: {match.params.id}</Typography>
            <br/>
            <div >
              <TextField
                className={classes.textField}
                fullWidth
                id="standard-helperText"
                label="Title"
                value={this.state.title}
              />
            </div>
            <br />
            <div>
              <TextField
                className={classes.textField}
                fullWidth
                id="standard-helperText"
                label="Description"
                value={this.state.body}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button size="small"><Link to={`/`}>Back</Link></Button>
          </CardActions>
        </Card>
      </main>
    );
  }
}

const styles = (theme: Theme) => ({
  root: {
    marginLeft: theme.spacing(25),
    marginTop: theme.spacing(10),
    display: 'inline-block',
    width: '60%',
  },
  textField: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
});

export default withRouter(withStyles(styles)(DetailsPage));
