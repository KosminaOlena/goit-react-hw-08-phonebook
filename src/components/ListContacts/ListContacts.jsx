import { ItemListContact } from "components/ItemListContact/ItemListContact"
import { List } from "./ListContacts.styled"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { choiceVisibleArray } from "redux/selectors"
import { requestContactsThunk } from "redux/contactsServices"

export const ListContacts = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(choiceVisibleArray)

    useEffect(() => {
        dispatch(requestContactsThunk())
    },[dispatch])

    const showContacts = Array.isArray(contacts) && contacts.length > 0;

    return(
        <List>
            {showContacts && contacts.map(contact => {
                return(
                    <ItemListContact 
                    key={contact.id}
                    id={contact.id} 
                    name={contact.name} 
                    number={contact.number}
                    />
                )
        })}
        </List>
    )
}
