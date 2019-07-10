import { connect } from "react-redux";
import Presenter from "./book-form-presenter";


const mapStateToProps = state => {
    return {
        bookingReducer : state.bookingReducer
    };
};

const Container = connect(mapStateToProps, )(Presenter);

export default Container;