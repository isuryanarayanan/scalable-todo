export const state = {
    AUTH_LOGGED_IN: false,
    AUTH_USER: {
        username: null,
        email: null,
        pfp_url: null
    },
    // Tokens are stored in local storage
    ACCESS_TOKEN: localStorage.getItem('ACCESS_TOKEN'),
    REFRESH_TOKEN: localStorage.getItem('REFRESH_TOKEN')
}