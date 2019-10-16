import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  ListItem,
  ListItemText
} from "@material-ui/core";
import uuid from "uuid";

const styles = {
  paper: {
    margin: 2,
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    height: 300,
    overflowY: "auto"
  }
};

export default ({ exercises }) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.paper}>
        {exercises.map(([group, exercises]) => {
          const result = (
            <Fragment key={uuid()}>
              <Typography variant="h5">{group}</Typography>
              {exercises.map(({ title, id }) => (
                <ListItem key={id}>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </Fragment>
          );
          return result;
        })}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.paper}>
        <Typography align="center" variant="h4">
          Welcome
        </Typography>
        <Typography align="center" style={{ marginTop: 20 }} variant="body2">
          Please Select Category group the Left Pane.
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
