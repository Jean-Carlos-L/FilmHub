type FetchCustomOptions = RequestInit & { body?};
export type FetchCustom = <T>(url: string, options?: RequestInit, body?: T) => Promise<T | undefined>;

export const useFetch = () => {
   const fetchCustom: FetchCustom = async <T>(url: string, options?: FetchCustomOptions, body?: T): Promise<T | undefined> => {
      try {
         if (body) {
            options.body = JSON.stringify(body);
         }
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
         }
         const data: T = await response.json();
         return data;
      } catch (error) {
         console.error(error);
         return undefined;
      }
   }

   return fetchCustom
}