import { endpoints } from "@/helper/endpoints";
import axiosInstance from "@/helper/axiosInstance";

export async function fetchEarthquakes(range = "day") {
  try {
    const url = endpoints[range]; 
    
    const relativeUrl = url.replace(import.meta.env.VITE_EARTHQUAKE_API_BASE, "");
    
    const { data } = await axiosInstance.get(relativeUrl);
    return data;
  } catch (error) {
    console.error("Error fetching earthquakes:", error);
    throw error;
  }
}
