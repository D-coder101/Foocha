// import apiClient from "./axiosConfig";

import axios from "axios";

export const fetchStates = async () => {
  try {
    const res = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/states",
      {
        country: "Nigeria",
      }
    );
    // if (res.data.error) throw new Error(res.data.msg);
    return res.data.data.states || [];
  } catch {
    // console.error("Error fetching states:", err.message);
    throw new Error("Failed to fetch states");
  }
};

export const fetchLgas = async (state: string) => {
  try {
    const res = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/state/cities",
      {
        country: "Nigeria",
        state,
      }
    );
    return res.data.data || [];
  } catch {
    throw new Error("Failed to fetch lga");
  }
};
