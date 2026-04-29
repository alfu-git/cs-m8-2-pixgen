export const getAllGenerations = async () => {
  const res = await fetch("https://cs-m8-2-pixgen.vercel.app/data.json");
  return res.json();
};
