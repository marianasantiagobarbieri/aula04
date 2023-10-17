'use server'
const url = "https://aula-17-10-tawny.vercel.app";


const getUserAuthenticated = async (user) => {
  const responseOfApi = await fetch(url + "/user/authenticate",
     {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(user)
     }
   );
   const userAuth = await responseOfApi.json(); //formatando a informação p/ formato json
   return userAuth;
}//receber o usuario


const getUsers = () => {
   
}


export { getUsers, getUserAuthenticated };