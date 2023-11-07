import axios from "axios";
import {ref} from "vue";

// const tokenStr = ref<any>(`Bearer ${localStorage.getItem("jwtToken")}`)
// console.log('tokenStr' , tokenStr.value);

// const cliHttp = axios.create(
//   {
//     baseURL : "http://localhost:3000/",
//     headers : {
//       Accept : "application/json",
//       "Content-Type": "application/json",
//       Authorization : tokenStr.value
//     }

//   }
// )

const cliHttp = axios.create({
  baseURL: 'http://localhost:3000/', // Replace with your API base URL
  headers : {
     Accept : "application/json",
    "Content-Type": "application/json",
    } 
});

cliHttp.interceptors.request.use(config => {
  const token = localStorage.getItem('jwtToken'); // Assuming token is stored in localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


// export const useAxios = ()=>{
//   const get = (url : string)=>{
//       return cliHttp.get(url)
//   };
  
//   const post = (url : string , data :{})=>{
//       return cliHttp.post(url , data)
//   };

//   return {
//     get, post
//   };

// }

export const useAxios = {
  get : (url : string)=>{
    return cliHttp.get(url);
  },

  post : (url : string , datas : Object)=>{
    return cliHttp.post(url , datas);
  },

  patch : (url : string , datas : Object)=>{
    return cliHttp.patch(url , datas);
  },

  cliHttp : cliHttp
}
