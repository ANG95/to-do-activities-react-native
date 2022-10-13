const currentDate = new Date();
export const CURRENT_DATE = currentDate.getDate() + "/"
  + (currentDate.getMonth() + 1) + "/"
  + currentDate.getFullYear() + " "
  + currentDate.getHours() + ":"
  + currentDate.getMinutes() + ":"
  + currentDate.getSeconds();

export const UuID = () => {
  const n = Date.now();
  const r = Math.random();
  const s = String(n) + String(~~(r*9e4)+1e4);
  return `${s.slice(0,8)}-${s.slice(8,12)}-4${s.slice(12,15)}-${[8,9,'a','b'][~~(r*3)]}${s.slice(15,18)}-${s.slice(s.length-12)}`;
};