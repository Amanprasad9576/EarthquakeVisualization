
const BASE_URL = import.meta.env.VITE_EARTHQUAKE_API_BASE;

export const endpoints = {
  day: `${BASE_URL}/all_day.geojson`,
  week: `${BASE_URL}/all_week.geojson`,
  month: `${BASE_URL}/all_month.geojson`,
};
