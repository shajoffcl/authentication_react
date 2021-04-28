import { authenticationService } from '../services/index';

export function handleResponse(response) {
    console.log(response);

    if(response.data['statusCode']!==200){
        authenticationService.Logout();
        const error = response.data['message'];
        return Promise.reject(error);
    }
    return response.data;
    
}