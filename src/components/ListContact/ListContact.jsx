import { List } from './ListContact-style';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ListContactItem } from 'components/ListContactItem/ListContactItem';


export const ListContact = ()=>{

const contacts = useSelector(selectContacts)

const filter = useSelector(selectFilter)


const handleFil = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()))
    
        return (
            <>
                <List>
                    {handleFil.map(({ id, name, number }) =>
                        <ListContactItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        /> )}
                </List>
            </>
        )
    }

