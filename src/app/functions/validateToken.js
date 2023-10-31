import { jwtVerify } from "jose";

const validateToken = async (token) => {
    const secret = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NTY5MTU0MiwiaWF0IjoxNjk1NjkxNTQyfQ.EG-A9n08TjSSm2affCX5Bl3yRpDbIytMIO5j2iMalLA";
    try{
        const isTokenValidate = await jwtVerify (token,
            new TextEncoder().encode(secret));
            if (isTokenValidate) {
                return true;
            }
    } catch{
    return false;
}
}

export { validateToken };

/*
linha 1: lib instalada: jwtVerify
linha 4: verificando se o token é válido, ou seja, se foi criado pela JWT
linha 6: retorna verdadeira caso exista um token
linha 10: exportando a função criada
*/