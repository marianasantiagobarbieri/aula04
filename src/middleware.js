'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value; //pegando o cookie c/ nome token
    const urlLogin = new URL('/', request.url); //acessando a rota Login
    const isTokenValidated = validateToken(token);

    if (!isTokenValidated || !token) { //se ñ tiver um token validado ou se ñ tiver token
        if (request.nextUrl.pathname === '/pages/dashboard') { //verificando se o servidor está renderizando a rota Dashboard
            return NextResponse.redirect(urlLogin); // usuário redirecionado p/ a página de Login/Home
        }
    } // resumo: se ñ tiver um token validado ou até mesmo se ñ tiver um token o usuário vai p/ a página Login/Home
    NextResponse.next(); //Se o houver um cookie token, o servidor permite prosseguir: indica p/ continuar a aoperação que foi solicitada pelo cliente
};
export const config = {
    matcher: ['/', '/pages/dashboard'] //configuração das rotas q o middleware vai controlar
};

//para acessar a página de dashboard, é necessário um cookie com nome token.