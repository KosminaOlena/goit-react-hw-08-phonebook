import { useState } from 'react'
import { Form, Label, Input, Button } from "./FormContact.styled"
import { useDispatch, useSelector } from "react-redux"
import { addContactThunk } from 'redux/contactsServices'
import { selectorContacts } from 'redux/selectors'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const toastConfig = {
  
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    
}

const FormContact = () => {

const dispatch = useDispatch()
const contacts = useSelector(selectorContacts)
    
const [name, setName] = useState('')
const [number, setNumber] = useState('')

    const handleChange = ({target}) => {

        switch(target.name){

            case 'name': setName(target.value);
            break;

            case 'number': setNumber(target.value);
            break;

            default: return;
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkName = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
        if(checkName){
            return toast.info(`${name} is already in contacts`, toastConfig)
        }else{
            dispatch(addContactThunk({name, number}));
        }
        setName('');
        setNumber('');
    }

        return(
            <>
            <Form onSubmit={handleSubmit}>
            <Label htmlFor="777">Name</Label>
            <Input
                type="text"
                autoComplete='on'
                id='777'
                name="name"
                placeholder="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChange}
                value={name}
            />
            <Label htmlFor="888">Number</Label>
            <Input
                type="tel"
                autoComplete='on'
                id='888'
                name="number"
                placeholder="number"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChange}
                value={number}
            />
            <Button type='submit'>Add contact</Button>
        </Form>
        </>
        )
    }

export default FormContact

