import { decode } from "jsonwebtoken";

const validateToken = (token) => {
    const isTokenValidate = decode(token);
    if (isTokenValidate) {
        return token = true
    }
    return token = false;
}
export { validateToken };

/*
linha 1: lib instalada: jwt
linha 4: verificando se o token é válido, ou seja, se foi criado pela JWT
linha 6: retorna verdadeira caso exista um token
linha 10: exportando a função criada
*/