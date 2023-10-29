function loginChecker() {
    if (typeof window != "undefined") {
        const isLoggedIn = window.localStorage.getItem('isLoggedIn')
        return (isLoggedIn === 'true');
    }

    return false
}

export default loginChecker