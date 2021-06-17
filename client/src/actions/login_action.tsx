export const login_action = () => {
    return { type: 'LOGIN', payload: true}
}

export const logout_action = () => {
    return { type: 'LOGOUT', payload: false}
}