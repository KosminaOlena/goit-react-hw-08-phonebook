import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "redux/authServices";
import { selectUserAuth } from "redux/selectors";
import { Navigate } from "react-router-dom";
import { Form, Label, Input, Button } from './Login.styled';

const LoginPage = () => {
    const dispatch = useDispatch();
    const authentificated = useSelector(selectUserAuth);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        const email = form.elements.userEmail.value;
        const password = form.elements.userPassword.value;


    dispatch(loginUserThunk({
        email,
        password
    }))
};
if (authentificated) return <Navigate to='/contacts' />;
    return(
        <div>
        <h2>Login into your account</h2>
        <Form onSubmit={handleSubmit}>
        <Label>
                Email 
                <Input
                     type="email"
                     name="userEmail"
                     placeholder="email"
                     title="Enter a valid email address"
                     required
                />
            </Label>
            <Label>
                Password
                <Input
                     type="password"
                     name="userPassword"
                     placeholder="password"
                     pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                     title="please enter your password"
                     required
                />
            </Label>


            <Button type='submit'>Log in</Button>
</Form>
</div>
    )
}
export default LoginPage