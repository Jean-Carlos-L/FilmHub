import moment from "moment";

type DateFormats = "YYYY-MM-DD" | "YYYY-MM-DD HH:mm:ss";

export const now = (format: DateFormats = "YYYY-MM-DD HH:mm:ss") => moment().format(format);

export const getYearsOfDate = (date: string) => {
   const currentDate = moment();
   const years = currentDate.diff(date, 'years', true);
   return Math.floor(years);
}