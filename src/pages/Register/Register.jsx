import { useDispatch, useSelector } from "react-redux";
import { Form, Label, Input, Button } from "./Register.styled"
import { registerUserThunk } from "redux/authServices";
import { selectUserAuth } from "redux/selectors";
import { Navigate } from "react-router-dom";


const RegisterPage = () => {
    const dispatch = useDispatch();
    const authentificated = useSelector(selectUserAuth);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.elements.userName.value;
        const email = form.elements.userEmail.value;
        const password = form.elements.userPassword.value;

      dispatch(registerUserThunk({
        name,
        email,
        password
      }))
    };
    if (authentificated) return <Navigate to='/contacts' />;


    return(
        <div>
        <h2>Register your account</h2>
        <Form onSubmit={handleSubmit}>
            <Label>
                Name  
                <Input 
                     type="text"
                     name="userName"
                     placeholder="name"
                     minLength={2}
                     title="Enter your name"
                     required
                />
            </Label>
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
                     title="The password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long"
                     required
                />
            </Label>


            <Button type='submit'>Register</Button>
</Form>
</div>
    )
}
export default RegisterPage