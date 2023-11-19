import {useState} from 'react';
import axios, {AxiosError} from 'axios';

type AuthData = {
  username: string;
  password: string;
};

type AuthResponse = {
  token: string;
};

type AuthHookResult = {
  data?: AuthResponse;
  isLoading: boolean;
  error: string;
  auth: (URL: string, authData: AuthData) => Promise<void>;
};

function useAuth(): AuthHookResult {
  const [data, setData] = useState<AuthResponse | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const auth = async (URL: string, authData: AuthData): Promise<void> => {
    setIsLoading(true);
    try {
      const res = await axios.post<AuthResponse>(URL, authData);
      setData(res.data);
      setError('');
    } catch (err) {
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

  return {data, isLoading, error, auth};
}

export default useAuth;
