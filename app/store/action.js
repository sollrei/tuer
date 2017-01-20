


export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_LOGOUT = 'USER_LOGIN';


let defaultUser = {
    'name': 'guest',
    'userid': '0'
};


export function setLogin (user) {
    return {
        type: USER_REGISTERED,
        user: user
    }
}

export function setLogout () {
    return {
        type: USER_LOGOUT,
        user: defaultUser
    }
}