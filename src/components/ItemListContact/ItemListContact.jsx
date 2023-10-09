import PropTypes from 'prop-types'
import { Item, Button } from "./itemListContact.styled"
import { useDispatch } from "react-redux"
import { deleteContactThunk } from 'redux/contactsServices'


export const ItemListContact = ({id, name, number}) => {
    const dispatch = useDispatch()
    const handleDelete = id => dispatch(deleteContactThunk(id))
    return(
        <Item>
                {name}: <br />{number}
                <Button type='button' onClick={() => handleDelete(id)}>Delete</Button>
        </Item>
    )
}

ItemListContact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired}