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
                  Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJkNzAxYTgyYS0zYzlmLTQ5NWQtYjZhYy05M2EyYmU5NjVhZjgiLCJzdWIiOiJzQGdtYWlsLmNvbSIsImlhdCI6MTcxODAzNzMyNSwiZXhwIjoxNzE4MTIzNzI1fQ.K1ZLrbz2SLrQUkgA9p5_3q5q0SnpVM3LVMGCNlOPYV4`,
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
