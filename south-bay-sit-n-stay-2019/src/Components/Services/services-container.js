import {connect} from 'react-redux'
import Presenter from "./services-presenter";

const mapStateToProps = state => {
    let { hero } = state.servicesReducer;
    return {
        heroContext: hero
    };
};

const Container = connect(mapStateToProps)(Presenter);

export default Container;