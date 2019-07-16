import React from 'react';
import Grow from "@material-ui/core/Grow";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



const styles={
    root:{
        position: "absolute",
        top: "7rem",
        bottom: "7rem",
        left: "2rem",
        right: "2rem",
        textAlign: "center",
        backgroundColor: "transparent"
    }
};

const SuccessBook = (props)=>{
    const { classes } = props;


    return(
        <Grow in={props.showModal4}>
            <Paper className={classes.root}>
                <h2>SUCCESS</h2>
            </Paper>
        </Grow>
    )
};

export default withStyles(styles)(SuccessBook);
//See higher order comp @ https://material-ui.com/styles/basics/#hook-api