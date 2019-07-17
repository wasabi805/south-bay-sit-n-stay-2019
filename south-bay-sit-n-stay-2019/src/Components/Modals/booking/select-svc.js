import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    position: "absolute",
    padding: "2rem",
    backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
    // border: "1px solid blue",
    display: "inline-block",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    right: "0",
    margin: "0 auto"
  },

  chip: {
    margin: "2rem"
  },

  iconRow: {
    position: "relative",
    top: "0",
    bottom: "0",
    margin: "auto",
    height: "80%",
    alignItems: "center"
  },

  iconCol: {
    textAlign: "center",
    // border: "1px solid orange",
    margin: "6px",
    height: "16rem"
  },

  icon: {
    position: "relative",
    textAlign: "center",
    borderRadius: "50%",
    width: "10rem",
    height: "10rem",
    margin: "auto",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },

  dogHouse: {
    backgroundPosition: "50% 50%"
  }
};

const SelectSvc = props => {
  const { classes, serviceType, selectSvc, handleNextBtnBookingModal } = props;

  return (
    <Grow in={props.showModal1}>
      <Paper className={classes.root}>
        <Typography gutterBottom>Please Choose A Service</Typography>

        <div className={`row ${classes.iconRow}`}>

          {serviceType.map((svc, index) => {
            return (

                <div
                  className={`col ${classes.iconCol}`}
                  key={svc.name + "-book-modal-icon"}
                >
                  <div
                    className={`ch-item `}
                    onClick={e => {
                      selectSvc(name + "-book-modal-icon");
                      handleNextBtnBookingModal(e, null, "next-01");
                    }}
                  >
                    <div
                      id={svc.id + "-book-modal-icon"}
                      className={`ch-info-wrap  `}
                    >
                      <div className="ch-info">
                        <div className={`ch-info-front ${svc.bgImg}`} />
                        <div className="ch-info-back">
                          <h3>{svc.name}</h3>
                          <p>{svc.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*<div id={svc.id+'-book-modal-icon'}*/}
                  {/*className={`next-01 ${classes.icon} ${classes.dogHouse} `}*/}
                  {/*// style={{backgroundImage: `${svc.bgImg}`}}*/}

                  {/*onClick={(e)=>{*/}
                  {/*selectSvc(name+'-book-modal-icon');*/}
                  {/*handleNextBtnBookingModal(e, null, 'next-01')*/}
                  {/*}}>*/}
                  {/*{svc.name}*/}

                  {/**/}

                  {/*</div>*/}

                  {/*{console.log(Array.isArray(serviceType) , svc , 'serviceType'  )}*/}
                </div>

            );
          })}
        </div>

        <Typography gutterBottom>
          {/*We'll just need some additional information before we can book, click next*/}
        </Typography>
      </Paper>
    </Grow>
  );
};

export default withStyles(styles)(SelectSvc);
//See higher order comp @ https://material-ui.com/styles/basics/#hook-api
