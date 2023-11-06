import {useState, useEffect} from 'react';
import axios from 'axios';
import {ProductTypes} from '../pages/Products/types';

function useFetch(URL: string | any) {
  const [data, setData] = useState<ProductTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const respone = await axios(URL);
      if (Array.isArray(respone.data)) {
        setData(respone.data);
      } else {
        setData([respone.data]);
      }
      setIsLoading(false);
    } catch (err: any) {
      // TODO: axios error type
      console.log(err.message);
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [URL]);

  return {data, isLoading, error};
}

export default useFetch;
