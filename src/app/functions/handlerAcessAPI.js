'use server'
const url = "https://aula-17-10-tawny.vercel.app";


const getUserAuthenticated = async (user) => {
  const responseOfApi = await fetch(url + "/user/authenticate");
}//receber o usuario


const getUsers = () => {
   
}


export { getUsers, getUserAuthenticated };