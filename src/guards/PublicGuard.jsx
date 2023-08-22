import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { selectToken } from 'redux/selectors'

const PublicGuard = ({children}) => {
  
    const token = useSelector(selectToken)
    const location = useLocation()

  
    return !token? children : <Navigate to={location.state ?? '/'} />
} 


export default PublicGuard