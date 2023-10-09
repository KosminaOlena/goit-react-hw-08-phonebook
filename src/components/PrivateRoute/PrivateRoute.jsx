import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserAuth } from "redux/selectors";


export const PrivateRoute = ({ children, redirectTo = '/'}) => {

    const authenteficated = useSelector(selectUserAuth);
    return authenteficated ? children : <Navigate to={redirectTo} />
}