
export const selectContacts = (state)=> state.contacts.items

export const selectFilter = (state)=> state.filter

export const selectIsLoading = (state)=> state.contacts.isLoading

export const selectError = (state)=> state.contacts.error

export const selectIsLoadingAuth = (state)=> state.auth.isLoading

export const selectErrorAuth = (state)=> state.auth.error

export const selectToken = (state)=> state.auth.token

export const selectProfile = (state)=> state.auth.user