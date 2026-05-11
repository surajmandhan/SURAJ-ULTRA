export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const month = newDate.toLocaleString("en-US", { month: "2-digit" }); 
  const year = newDate.getFullYear();
  return { month, year };
};
