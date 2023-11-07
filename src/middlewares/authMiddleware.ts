import { ref } from "vue";
import { useAxios } from "@/lib/composables/useAxios";

export const authMiddleware = async (to : any, from : any, next : any) => {
  const jwtToken = localStorage.getItem("jwtToken");

  // Check if there's no token or it's an empty string, redirect to /signin
  if (!jwtToken) {
    return next("/signin");
  }

  try {
    const { data, status } = await useAxios.get("authentifyMe");

    if (status !== 200) {
      // If the server responds with an error, remove the token and redirect to /signin
      localStorage.removeItem("jwtToken");
      return next("/signin");
    }

    // Store user data in local storage
    localStorage.setItem("authUser", JSON.stringify(data));

    // Define redirection conditions
    const redirectToBasicInfo =
      data.userId["accountSetLevel"] == 0 &&
      data.userId["accountType"] == "consumer" &&
      to.name != "basic-infos";

    const redirectToBusinessInfo =
      data.userId["accountSetLevel"] == 0 &&
      data.userId["accountType"] == "restaurant" &&
      to.name != "business-infos";

    // Check and redirect as needed
    if (redirectToBasicInfo) {
      return next("/basic-infos");
    }
    
    if (redirectToBusinessInfo) {
      return next("/business-infos");
    }

    // Continue with normal navigation if no redirection conditions are met
    return next();
  } catch (err) {
    // Handle the error, remove the token, and redirect to /signin
    localStorage.removeItem("jwtToken");
    next("/signin");
  }
};
