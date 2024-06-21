export const getToken = () => {
   const token = JSON.parse(localStorage.getItem('authState'))?.user.token;
   return token;
}