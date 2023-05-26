import axiosInstance from "../config/axios";

export const generateOutput = async (data: {
  method: string;
  input: string;
}) => {
  try {
    const res = await axiosInstance.post("/ai", data);
    return res.data;
  } catch (error: any) {
    console.log("error", error);
    throw new Error(error?.response?.data?.message || "Something went wrong!");
  }
};
