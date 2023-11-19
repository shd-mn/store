import {useState, useEffect} from 'react';
import axios, {AxiosError} from 'axios';
import {ProductTypes} from '../pages/Products/types';

function useFetch(URL: string | any) {
  const [data, setData] = useState<ProductTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respone = await axios(URL);
        if (Array.isArray(respone.data)) {
          setData(respone.data);
        } else {
          setData([respone.data]);
        }
      } catch (err: any) {
        handleAuthError(err);
      } finally {
        setIsLoading(false);
      }
    };

    const handleAuthError = (err: any): void => {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;
        if (axiosError.response) {
          setError(`Server error: ${axiosError.response.status}`);
        } else if (axiosError.request) {
          setError('Network error');
        } else {
          setError(`Error: ${axiosError.message}`);
        }
      } else {
        setError(`Error: ${String(err.message)}`);
      }
    };

    fetchData();
  }, [URL]);

  return {data, isLoading, error};
}

export default useFetch;
