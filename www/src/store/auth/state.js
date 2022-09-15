export const AUTH_MODES = {
    USER: 'USER',
    ROOT: 'ROOT',
}

export default state = {
    AUTH_MODE: AUTH_MODES.USER,
    AUTH_LOGGED_IN: false,
    AUTH_USER: {
        username: null,
        email: null,
        pfp_url: null
    },
}