import Cookies from "js-cookie";
import { validateToken } from "./validateToken";
import { getUserAuthenticated } from "./handlerAcessAPI";

const handlerAcessUser = async (user) => {

    const userAuth = await getUserAuthenticated(user);
    
    const isTokenValidate = validateToken(userAuth.token);

    if (isTokenValidate) {
        Cookies.set('token', userAuth.token, { expires: 1 });
    }
     return userAuth;

     /* Armazena o userAuth no localStorage, perguntar para o professor se está certo
        localStorage.setItem("usuarioAutenticado", userAuth); ou
        localStorage.usuarioAutenTicado = userAuth;

      // Para recuperar o dado
         document.getElementById().innerHTML =  localStorage.usuarioAutenTicado;
    
     // Armazene o userAuth no localStorage (convertido em uma string)
        localStorage.setItem("objetoChave", JSON.stringify(userAuth));

    // Recupere o objeto do localStorage e converta-o de volta para um objeto
    const objetoRecuperado = JSON.parse(localStorage.getItem("objetoChave"));
     */
}
export default handlerAcessUser;

