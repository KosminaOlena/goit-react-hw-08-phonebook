import { useDispatch, useSelector } from "react-redux"
import { StyledLink, NavBar, Wrapper } from "./Header.styled"
import { logoutUserThunk } from "redux/authServices";
import { selectUserAuth, selectUserUserData } from "redux/selectors";

const Header = () => {
  const dispatch = useDispatch();
  const authenteficated = useSelector(selectUserAuth);
  const userData = useSelector(selectUserUserData)
  const handleLogOut = () => {
    dispatch(logoutUserThunk())

  }
    return (
        <NavBar>
          <StyledLink to="/">Home</StyledLink>
          <div>
            {!authenteficated ? (
              <Wrapper>
              <StyledLink to="/login">Log in</StyledLink>
              <StyledLink to="/register">Register</StyledLink>
            </Wrapper>
            ):(
              <Wrapper>
                <div>{userData.name}</div>
              <StyledLink onClick={handleLogOut}>Log out</StyledLink>
              </Wrapper>
            )} 
          </div>

        </NavBar>
    )
}

export default Header