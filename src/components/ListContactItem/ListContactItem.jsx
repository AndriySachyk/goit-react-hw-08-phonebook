import PropTypes from 'prop-types';
import { ItemContact, ButtonDelete } from './ListContactItem-style';
import { useDispatch,   } from 'react-redux';
import { deleteContactsThunk } from 'redux/thunks';


export const ListContactItem = ({name, number, id,}) => {
    const dispatch = useDispatch()
    
    const handleDelete = ()=>{

        dispatch(deleteContactsThunk(id))
    } 




    return (
        <>
            <ItemContact key={id}>
                {name}: {number}
                <ButtonDelete onClick={handleDelete}>Delete</ButtonDelete>
            </ItemContact>
        </>
    )
}

ListContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}