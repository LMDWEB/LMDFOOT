import { authenticationService } from '../services/authentification.service';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
        return { Authorization: `${currentUser.token}` };
    } else {
        return {};
    }
}