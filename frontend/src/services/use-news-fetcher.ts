import { useEffect, useState } from "react";
import axios from 'axios';
import Feed from "../models/feed";

const FEED_URL = 'http://localhost:8080/feed';

const useNewsFetcher = (
  siteList: string[],
  keyWordList: string[],
  startAt: string,
  endAt: string,
) => {
  const [data, setData] = useState<Feed[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: 'post',
      url: FEED_URL,
      data: { 
        urls: siteList,
        keyWords: keyWordList,
        startAt: startAt,
        endAt: endAt,
      }
    })
      .then(d => setData(d.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [siteList, keyWordList, startAt, endAt])
  
    return { loading, data, error }
}

export default useNewsFetcher;
