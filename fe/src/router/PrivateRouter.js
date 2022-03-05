import { Navigate } from "react-router-dom";
import ApplicationLayout from "../layout/application";
import { connect } from "react-redux";

const PrivateRouter = ({ authReducer, children }) => {
  const { isAuthenticated } = authReducer;
  return isAuthenticated ? (
    <ApplicationLayout>{children}</ApplicationLayout>
  ) : ( 
    <Navigate to="/login" />
  );
};

const mapStateToProps = (state) => {
  return {
    authReducer: state.authReducer,
  };
};

export default connect(mapStateToProps)(PrivateRouter);
