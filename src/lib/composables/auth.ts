// const router = useRouter();

// async function authenticateUser(datas: Object) {
//   try {
//     const response = await useAxios().post("login", datas);
//     localStorage.setItem("jwtToken", response.data);
//     const newResp = await useAxios().get("users/me");
//     router.replace({
//       path: "/",
//       query: newResp.data
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }