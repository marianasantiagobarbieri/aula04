'use server'
const url = "https://aula-17-10-tawny.vercel.app";


const getUserAuthenticated = async (user) => {
  const responseOfApi = await fetch(url + "/user/authenticated",
     {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(user)
     }
   );
   const userAuth = await responseOfApi.json(); //formatando a informação p/ formato json
   console.log(userAuth);
   return userAuth;
}//receber o usuario


const getUsers = async () => {
   try{
    const responseOfApiGET = await fetch(url + "/users",{
      cache:"no-cache"
    });
    const listaDeUsuarios = await responseOfApiGET.json(); //formatando a informação p/ formato json
      console.log(listaDeUsuarios)
    return listaDeUsuarios;
   }catch{
      return [];
   }
}


const postUser = async (user) => {
   try  {
         const responseOfApi = await fetch(url + "/user", {
         method: "POST",
         headers: { "Content-Type": "application/json"},
         body: JSON.stringify(user)
      });
    
        const usarioSalvo = await responseOfApi.json(); //formatando a informação p/ formato json
        return usarioSalvo;
 } catch{
   return null;
 }
}

const uptadeUser = async (user, id) => {
   try  {
         const responseOfApi = await fetch(url + "/user/" + id, {
         method: "PUT",
         headers: { "Content-Type": "application/json"},
         body: JSON.stringify(user)
      });
    
        const userUptade = await responseOfApi.json(); //formatando a informação p/ formato json
        return userUptade;
 } catch{
   return null;
 }
}

const getUser = async (user, id) => {
   try  {
         const responseOfApi = await fetch(url + "/user/" + id, {
         method: "GET",
         headers: { "Content-Type": "application/json"},
         body: JSON.stringify(user)
      });
    
        const userUptade = await responseOfApi.json(); //formatando a informação p/ formato json
        return userUptade;
 } catch{
   return null;
 }
}



export { getUsers, getUserAuthenticated, postUser, uptadeUser, getUser };