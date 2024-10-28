const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const USERS_URI = `${API_BASE_URL}/auth`;

export function login(username, password){
    return fetch(`${USERS_URI}/login`, {
                method : 'POST',
                headers : {'accept' : 'Application/json', 'content-type' : 'Application/json'},
                body : JSON.stringify({
                    username,
                    password
                })
            })
            .then( res => res.json())
            .then(data => {return data})
            .catch(err => console.log(err))
}


export function signup(username, password){
    return fetch(`${USERS_URI}/signup`, {
                method : 'POST',
                headers : {'accept' : 'Application/json', 'content-type' : 'Application/json'},
                body : JSON.stringify({
                    username,
                    password
                })
            })
            .then( res => res.json())
            .then(data => {return data})
            .catch(err => console.log(err))
}