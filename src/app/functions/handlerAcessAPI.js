'use server'

const lista = [
    {
        name: "Anne",
        email: "anne@gmail.com",
        password: "123",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

    }
]

const getUserAuthenticated = (users) => {
    (lista.map(user => {
        if (user.name === user.name && user.email === user.email && user.password === user.password && user.token === user.token) {
            return users;
        }
        else {
            return null;
        }
    }))
}//receber o usuario


const getUsers = () => {
    return lista;
}
export { getUsers, getUserAuthenticated };