import {GOOGLE_MAPS_API_KEY} from '@env';
import axios, {AxiosResponse} from 'axios';
import {useUserLocationContext} from 'context/UserLocationContext';
import {useEffect, useState} from 'react';
import type {TextSearchItem} from 'models/types/TextSearchItem';

type TextSearchQueryResponse = AxiosResponse<{
  status: string;
  results: TextSearchItem[];
}>;

export const useSearchQuery = (searchedQuery?: string) => {
  const [response, setResponse] = useState<TextSearchQueryResponse['data']>();
  const {userLocation} = useUserLocationContext();

  const url = 'https://maps.googleapis.com/maps/api/place/textsearch/json';

  const fetchResponse = async (): Promise<void> => {
    try {
      const {data} = await axios.get<any, TextSearchQueryResponse>(url, {
        params: {
          query: searchedQuery,
          location: `${userLocation?.coordinates.latitude}, ${userLocation?.coordinates.longitude}`,
          key: GOOGLE_MAPS_API_KEY,
        },
      });
      setResponse(data);
    } catch (error) {
      console.log('Error');
    }
  };

  useEffect(() => {
    if (searchedQuery && searchedQuery !== '') {
      fetchResponse();
    } else {
      setResponse(undefined);
    }
  }, [
    searchedQuery,
    userLocation?.coordinates.latitude,
    userLocation?.coordinates?.longitude,
  ]);

  return {response};
};
