export const getCoordinatesFromAddress = async (address: string) => {
  const key = process.env.EXPO_PUBLIC_GOOGLE_API;
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${key}`
  );
  const data = await res.json();

  return data.results[0]?.geometry.location;
};
