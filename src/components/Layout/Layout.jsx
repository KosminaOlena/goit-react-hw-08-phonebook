import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";
import { Container, Section } from "./Layout.styled";

const Layout = () => {

    return(
        <div>
        <Container>
            <Header />
        </Container>
        <Section>
            <Outlet />  
        </Section>             
        </div>
    )
}

export default Layout