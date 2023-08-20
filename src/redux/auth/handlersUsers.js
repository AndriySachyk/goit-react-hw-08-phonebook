import Notiflix from "notiflix";


export const handleSignUpFulfilled = (state, {payload}) => {
    Notiflix.Notify.info(`Wellcome ${payload.name} `);
    
    state.profile = payload 
}


export const handleLoginFulfilled = (state, {payload}) => {
    Notiflix.Notify.info(`Wellcome ${payload.name} `);

    state.profile = payload 
}
