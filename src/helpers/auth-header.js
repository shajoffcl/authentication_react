import { authenticationService } from '../services/index';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
        return currentUser.token;
    } else {
        return '';
    }
}