import { useState, useEffect } from 'react';
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

  return { info, records, error };
};

export default useArt;
