
export const accountSetLevelGuard = async (to : any , from : any , next : any)=>{
  const accountSetLevel = await JSON.parse(`${localStorage.getItem("authUser")}`).userId["accountSetLevel"]
  if(accountSetLevel != 1){
    return next(`/${accountSetLevel}`)
  }else{
    return next()
  }
  
}