import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Container, Box } from "@material-ui/core";
import Header from "../../components/header";
import Caption from "./caption";

const useStyles = makeStyles(theme => ({
  centeredContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    marginTop: -1 * theme.spacing(16)
  }
}));

const Completed = props => {
  const classes = useStyles();

  const handleResetClick = () => {
    props.onReset();
  };

  return (
    <Container className={classes.centeredContent}>
      <Header>Your complaint has been submitted</Header>
      <Box my={2}>
        <Typography variant="body1">
          Please allow a few days for someone to contact you about the problem
          you reported
        </Typography>
        <Caption />
      </Box>
      <Button variant="contained" size="large" onClick={handleResetClick}>
        Reset
      </Button>
    </Container>
  );
};

export default Completed;
