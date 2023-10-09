import { useSelector } from "react-redux"
import { Invitation, Title, StyledLink } from "./Home.styled"
import { selectUserAuth } from "redux/selectors"

const HomePage = () => {

    const authentificated = useSelector(selectUserAuth)

    return(
        <>
        <Invitation>
            <Title>
            Welcome to Phonebook :)
            </Title>
            {authentificated ? (
                <StyledLink to="/contacts">to my contacts</StyledLink>
            ) : (
                <h3>To get started, please register or log in to your account...</h3>
            )}      
        </Invitation>
        </>
    )
}
export default HomePage