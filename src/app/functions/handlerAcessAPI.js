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
   return userAuth;
}//receber o usuario


const getUsers = async () => {
   try{
    const responseOfApiGET = await fetch(url + "/users");
    const listaDeUsuarios = await responseOfApiGET.json(); //formatando a informação p/ formato json
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


export { getUsers, getUserAuthenticated, postUser };