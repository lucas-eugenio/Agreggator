import { saveOnLocalStorage, getFromLocaStorage } from './use-local-storage';
import { useState } from 'react';
import { addToUniqueArray, removeFromArray } from '../utils/manage-array';

const useSiteList = () => {
  const [siteList, setSiteList] = useState<string[]>(getFromLocaStorage());

  const addSiteOnList = (value: string): void => {
    const newSiteList = addToUniqueArray(value, siteList);
    setSiteList(newSiteList);
    saveOnLocalStorage(newSiteList);
  }

  const removeSiteFromList = (value: string) => {
    console.log('Value:', value);
    const newSiteList = removeFromArray(value, siteList)
    console.log('newSiteList:', newSiteList);
    setSiteList(newSiteList);
    saveOnLocalStorage(newSiteList);
  }

  return { siteList, addSiteOnList, removeSiteFromList }
}

export default useSiteList;