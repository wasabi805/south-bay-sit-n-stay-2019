import React, {Component} from "react";
import CalendarContainer from "../Calendar/calendar-container";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SimpleModal from "../Modal/modal-conatainer";

let useStyles = makeStyles(theme => ({
  bookingContainer: {
    "& h1": {
      marginBottom: "5rem"
    },
    background:
      "url('https://sb-sit-2019.s3.amazonaws.com/calendar01-transparent.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize: "55%"
  }
}));

class BookingSection extends Component{
    constructor(props){
        super(props);

        this.state={
            open : false,
            test: 'TIM',
            confirmMonthOne: null
        };

        this.setStateConfirmDates = this.setStateConfirmDates.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    setStateConfirmDates(){
        this.setState(
            {open: true}
        )
    }

    openModal(){
        this.setState({
            open : true
        })
    }

    closeModal(){
        this.setState({
            open : false
        })
    }

    render(){
        return (
            <Box p={6} className={useStyles.bookingContainer}>
                <Typography variant={"h1"} align="left">
                    Check out which days we can provide you service
                </Typography>

                <button>THIS DOT PROPS</button>

                <Box
                    component="div"
                    display="inline-block"
                >
                    <CalendarContainer
                        openModal={this.openModal}
                        confirmCalendarDates={this.props.confirmCalendarDates}
                        setStateConfirmDates={this.setStateConfirmDates} />


                    <SimpleModal
                        firstMonth={this.props.firstMonth}
                        firstMonthDays={this.props.firstMonthDays}
                        secondMonth={this.props.secondMonth}
                        secondMonthDays={this.props.secondMonthDays}

                        open={this.state.open}
                        openModal={this.openModal}
                        closeModal={this.closeModal}

                    />
                </Box>
            </Box>
        );
    }
}

export default BookingSection;

BookingSection.propTypes = {
    open : PropTypes.bool
};
