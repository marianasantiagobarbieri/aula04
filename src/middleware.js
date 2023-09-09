'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";
import handlerAcessUser from "./app/functions/handlerAcess";

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value; //pegando o valor do cookie c/ nome token
    const urlLogin = new URL('/', request.url); //acessando a rota Login
    const isTokenValidated = validateToken(token); // informando o token e verificando se é válido

    if (!isTokenValidated || !token) { //se ñ tiver um retorno da verificação for falso ou se ñ tiver token
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
/*
Dentro do arquivo middleware.js, estabeleça a seguinte 
restrição: caso um usuário não autenticado tente acessar as 
páginas "alter" e "register", ele será automaticamente 
redirecionado para a página de login.


//  const urlLoginDashboard = new URL('/pages/dashboard/alter', && '/pages/dashboard/register' request.url); //acessando a rota Alterar e Registrar
    const isUsuarioAtenticado = validateUser(user);   

     if (!isUsuarioAtenticado || !user) { 
            return NextResponse.redirect(urlLoginDashboard); 
        
    } 
    NextResponse.next();
*/