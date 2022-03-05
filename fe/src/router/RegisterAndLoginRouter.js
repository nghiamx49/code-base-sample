import { Navigate } from "react-router-dom";
import ApplicationLayout from "../layout/application";
import {connect} from 'react-redux'


const RegisterAndLoginRouter = ({authReducer, children}) => {
    const {isAuthenticated} = authReducer;
    return (isAuthenticated ? <Navigate to="/" /> : <ApplicationLayout>{children}</ApplicationLayout>)
}

const mapStateToProps = (state) => {
    return {
      authReducer: state.authReducer,
    };
}

export default connect(mapStateToProps)(RegisterAndLoginRouter)