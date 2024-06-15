import moment from "moment";

export const now = () => moment().format("YYYY-MM-DD HH:mm:ss");

export const getYearsOfDate = (date: string) => {
   const currentDate = moment();
   const years = currentDate.diff(date, 'years', true);
   return Math.floor(years);
}