import { Filter } from "components/Filter/Filter";
import FormContact from "components/FormContact/FormContact";
import { ListContacts } from "components/ListContacts/ListContacts";
import { Loader } from "components/Loader/Loader";
import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { requestContactsThunk } from "redux/contactsServices";
import { selectUserAuth, selectorContacts, selectorError, selectorIsLoading } from "redux/selectors";
import { Title } from "./Contacts.styled";

export const ContactsPage = () => {
    const authentificated = useSelector(selectUserAuth);
    const isLoading = useSelector(selectorIsLoading);
    const error = useSelector(selectorError);
    const contacts = useSelector(selectorContacts);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!authentificated) return;
        dispatch(requestContactsThunk());

    }, [authentificated, dispatch]);

    return (
        <div>

            {error && <p>Oops, some error occurent...</p>}
            <div>
             <h1>Phonebook</h1>
             <FormContact />
             <h2>Contacts</h2>
             {contacts && contacts.length > 0 ? (
                <>
                  <Filter/>
                  <ListContacts />
                </>
             ):(
                <Title>You don't have any contacts</Title>
             )}
            </div>
            {isLoading && <Loader />}
        </div>
    )
    
}