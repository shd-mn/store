import {useCallback, useState} from 'react';
import axios from 'axios';
import {UserTypes} from '../pages/Products/types';

function useFetchUser() {
  const [data, setData] = useState<UserTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUsers = useCallback(async (URL: string | any) => {
    try {
      const respone = await axios<UserTypes[]>(URL);
      if (respone.data) {
        setData(respone.data);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {data, isLoading, error, fetchUsers};
}

export default useFetchUser;
