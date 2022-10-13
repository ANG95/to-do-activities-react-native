const currentDate = new Date();
export const CURRENT_DATE = currentDate.getDate() + "/"
  + (currentDate.getMonth() + 1) + "/"
  + currentDate.getFullYear() + " "
  + currentDate.getHours() + ":"
  + currentDate.getMinutes() + ":"
  + currentDate.getSeconds();