import { connect } from "react-redux";
import Presenter from "./book-form-presenter";

const mapStateToProps = state => {
    return {
        formConfig:[
            {id: "contactFirstName" ,
                label : 'First Name' ,
                width: "45%",
                errMsg1: "Name must be longer than 2 characters.",
                errMsg2: "Not a valid first name."
            },

            {id: "contactLastName" ,
                label : 'Last Name' ,
                width: "45%",
                errMsg1: "Name must be longer than 2 characters.",
                errMsg2: "Not a valid last name."
            }
        ],
    };
};

const Container = connect(mapStateToProps)(Presenter);

export default Container;