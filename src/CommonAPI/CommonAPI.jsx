// api.js

import axios from "axios";

export const LoginAPI =
  "https://mdqualityapps.in/API/dockal/development/user_sign_in";

//post API

const postData = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    throw error; // Handle error in your components
  }
};

export default postData;
