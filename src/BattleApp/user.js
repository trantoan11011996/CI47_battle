import React from "react"

export function generateInitUser() {
    const initTialUser = [
        {
            id: "1",
            name: "admin",
            email: 'admin@meme.com',
            password: "123"
        }
    ]

    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(initTialUser))
    }
}

export function getUsers() {
    let json = localStorage.getItem('users')
    if (!json) {
        return []
    }
    else {
        return JSON.parse(json)
    }
}
export function login(email, password) {
    const users = getUsers()
    const foundUser = users.find(user => user.email===email && user.password===password)
    if(foundUser){
        localStorage.setItem('current-user',JSON.stringify(foundUser))
    }

    return foundUser
}
export function autoLogin(){
    const json = localStorage.getItem('current-user')
    return json ? JSON.parse(json) : null
}

export function RemoveUser(){
    localStorage.removeItem('current-user')
}
export function register(name, email, password) {

}

export const AuthContext = React.createContext(null)