import { connect } from "react-redux";

import Presenter from "./common-body-presenter-01";
import * as Selectors from "../../Logic/selectors";

const mapStateToProps = state => ({

});

const Container = connect(mapStateToProps)(Presenter);

export default Container;