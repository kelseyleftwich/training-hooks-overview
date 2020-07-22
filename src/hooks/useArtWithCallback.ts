import { useState, useEffect, useCallback } from "react";
import { SearchInfo, ArtRecord } from "../types";
import { initialHarvardUri } from "../config";

const useArt = () => {
  const [info, setInfo] = useState<undefined | SearchInfo>(undefined);
  const [nextPage, setNextPage] = useState<undefined | string>(undefined);
  const [records, setRecords] = useState<undefined | ArtRecord[]>(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    let cancelled = false;
    const uriToFetch = nextPage || initialHarvardUri;
    fetch(uriToFetch)
      .then(response => response.json())
      .then(({ info, records }: { info: SearchInfo; records: ArtRecord[] }) => {
        if (!cancelled) {
          setInfo(info);
          setRecords(records || []);
        }
      })
      .catch(error => {
        if (!cancelled) {
          setError(error);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [nextPage]);

  const fetchNextPage = useCallback(() => {
    if (info) {
      setNextPage(info.next);
    }
  }, [info]);

  return { info, records, error, fetchNextPage };
};

export default useArt;
