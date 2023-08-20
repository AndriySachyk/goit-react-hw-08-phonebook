import Error from "components/Error/Error"
import { Filter } from "components/FilterContact/FilterContact"
import { FormContact } from "components/FormContact/FormContact"
import { ListContact } from "components/ListContact/ListContact"
import Loading from "components/Loading/Loading"
import { Section } from "components/Section/Section"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectContacts, selectError, selectIsLoading } from "redux/selectors"
import { getAllContactsThunk } from "redux/thunks"

const ContactsPage = () => {
    const dispatch = useDispatch()
  
    const contacts = useSelector(selectContacts)
    
    const isLoading = useSelector(selectIsLoading) 
    
    const error = useSelector(selectError)
    
    
    useEffect(()=>{
      dispatch(getAllContactsThunk())
    },[dispatch])
    
    return (
      <>
          <Section title="Phonebook">
            <FormContact />
          </Section>
          <Section title="Contacts">
            <Filter/>
            {isLoading&& <Loading/>}
            {error && <Error error={error}/>}
            {contacts&&<ListContact/>}
          
          </Section>
        </>
      );
}

export default ContactsPage