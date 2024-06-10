type FetchCustomOptions = RequestInit & { body?}; // Permitir cualquier tipo de cuerpo
export type FetchCustom = <T>(
   url: string,
   options?: FetchCustomOptions,
   body?: T
) => Promise<DataCustom<T> | undefined>;
export type DataCustom<T> = { data: T; message?: string };

export const useFetch = () => {
   const fetchCustom: FetchCustom = async <T>(
      url: string,
      options?: FetchCustomOptions,
      body?: T
   ): Promise<DataCustom<T> | undefined> => {
      try {
         if (body) {
            options = {
               ...options,
               body: JSON.stringify(body),
               headers: {
                  "Content-Type": "application/json",
                  ...options?.headers,
               },
            };
         }
         const response = await fetch(url, options);
         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
         }
         const data: DataCustom<T> = await response.json();
         return data
      } catch (error) {
         console.error("Fetch error:", error);
         throw error;
      }
   };

   return fetchCustom;
};
