import { connect } from "react-redux";
import Presenter from "./book-form-presenter";

const mapStateToProps = state => {
    return {
        formConfig:[
            {id: "contactFirstName" ,
                label : 'First Name' ,

            },
            {id: "contactLastName" ,
                label : 'Last Name' ,
            }
        ],
    };
};

const Container = connect(mapStateToProps)(Presenter);

export default Container;