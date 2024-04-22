export interface FetchOptions {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'; // Specify other HTTP methods as needed
    url: string;
    headers?: HeadersInit;
    body?: BodyInit | null;
  }
  
  interface FetchResponse<T> {
    data?: T;
    statusCode: number;
  }
  
  async function fetchData<T>(options: FetchOptions): Promise<FetchResponse<T>> {
    const { method, url, headers, body } = options;
  
    try {
      const response = await fetch(url, {
        method,
        headers,
        body,
      });
  
      const statusCode = response.status;
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data: T = await response.json();
  
      return { data, statusCode };
    } catch (error) {
      console.error('Fetch error:', error);
      return { statusCode: 500 }; 
    }
  }

  export {fetchData}