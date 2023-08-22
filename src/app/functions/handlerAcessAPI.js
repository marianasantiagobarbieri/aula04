'use server'

const lista = [
    {
        name: "Anne",
        email: "anne@gmail.com",
        password: "123",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

    },
    {
        name: "Cordelia",
        email: "Cordelia@gmail.com",
        password: "456",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

    },
    {
        name: "Jorge",
        email: "Jorge@gmail.com",
        password: "56785978",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

    }
]

const getUserAuthenticated = (userLogin) => {
    let userAutenticado = {};

    {
        lista.map(user => {
            if (userLogin.email === user.email && userLogin.password === user.password) {
                userAutenticado = user;
            }
        })
        return userAutenticado;

    }
}//receber o usuario


const getUsers = () => {
    return lista;
}
export { getUsers, getUserAuthenticated };