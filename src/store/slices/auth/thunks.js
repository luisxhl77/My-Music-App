import { setAuth } from "./authSlice";


export const setAuthUser = () => {
    return async( dispatch ) => {
        
        const data =  getTokenFromURL();
        dispatch(setAuth({
            access_token: data.access_token, 
            expires_in: data.expires_in,
            stateUser: true,            
        }));
    }
}