import { saveArrOnLocalStorage, getArrFromLocaStorage } from './use-local-storage';
import { useState } from 'react';
import { addToUniqueArray, removeFromArray } from '../utils/manage-array';

const SITE_LIST_KEY = 'SITE_LIST';

const useSiteList = () => {
  const [siteList, setSiteList] = useState<string[]>(getArrFromLocaStorage(SITE_LIST_KEY));

  const addSiteOnList = (value: string): void => {
    const newSiteList = addToUniqueArray(value, siteList);
    setSiteList(newSiteList);
    saveArrOnLocalStorage(newSiteList, SITE_LIST_KEY);
  }

  const removeSiteFromList = (value: string) => {
    const newSiteList = removeFromArray(value, siteList)
    setSiteList(newSiteList);
    saveArrOnLocalStorage(newSiteList, SITE_LIST_KEY);
  }

  return { siteList, addSiteOnList, removeSiteFromList }
}

export default useSiteList;