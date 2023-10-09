import { Container, Label, Input } from "./Filter.styled"
import { useSelector, useDispatch } from "react-redux"
import { filterContact } from 'redux/contactSlice'
import { selectorFilter } from "redux/selectors"

export const Filter = () => {

    const dispatch = useDispatch()
    const filter = useSelector(selectorFilter)

    const handleFilter = (e) => {
        const value = e.target.value;
        dispatch({type:filterContact, payload: value } )
      }

    return(
        <Container>
        <Label>
            Find contacts by name
            <Input
                type="text"
                autoComplete="off"
                name="name"
                placeholder="name"
                value={filter}
                onChange={handleFilter}
                />
        </Label>
        </Container>
        
    )
}
