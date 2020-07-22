import { useState, useEffect } from 'react';
import { SearchInfo, ArtRecord } from '../types';
import { initialHarvardUri } from '../config';

const useArt = () => {
  const [info, setInfo] = useState<undefined | SearchInfo>(undefined);
  const [records, setRecords] = useState<undefined | ArtRecord[]>(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    let cancelled = false;
    fetch(initialHarvardUri)
      .then((response) => response.json())
      .then(({ info, records }: { info: SearchInfo; records: ArtRecord[] }) => {
        if (!cancelled) {
          setInfo(info);
          setRecords(records || []);
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setError(error);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { info, records, error };
};

export default useArt;
