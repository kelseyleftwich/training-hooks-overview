import { useState, useEffect, useCallback } from 'react';
import { SearchInfo, ArtRecord } from '../../types';
import defaultInfo from './mockInfo.json';
import defaultRecords from './mockRecords.json';

const useArt = () => {
  const [info, setInfo] = useState<undefined | SearchInfo>(undefined);
  const [records, setRecords] = useState<undefined | ArtRecord[]>(undefined);
  const [error] = useState<undefined | string>(undefined);

  useEffect(() => {
    // use timeout to simulate async API call
    setTimeout(() => {
      setInfo(defaultInfo);
      setRecords(defaultRecords);
    }, 500);
  });

  const fetchNextPage = useCallback(() => {
    if (info) {
      const updatedInfo: SearchInfo = { ...info, page: info.page + 1 };
      setInfo(updatedInfo);
    }
  }, [info]);

  return { info, records, error, fetchNextPage };
};

export default useArt;
