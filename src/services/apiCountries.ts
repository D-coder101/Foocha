import apiClient from "./axiosConfig";

export const fetchStates = async () => {
  try {
    const res = await apiClient.post("/states", {
      country: "Nigeria",
    });
    // if (res.data.error) throw new Error(res.data.msg);
    return res.data.data.states || [];
  } catch {
    // console.error("Error fetching states:", err.message);
    throw new Error("Failed to fetch states");
  }
};

export const fetchLgas = async (state: string) => {
  try {
    const res = await apiClient.post("/state/cities", {
      country: "Nigeria",
      state,
    });
    return res.data.data || [];
  } catch {
    throw new Error("Failed to fetch lga");
  }
};
