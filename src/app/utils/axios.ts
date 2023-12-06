import axios from "axios";

const url: string = "http://localhost:1237/api";

export const registerUser = async (data: any) => {
  try {
    return axios.post(`${url}/create-user`, data).then((res: any) => {
        console.log(res)
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};
