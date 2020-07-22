import React, { useEffect, useState } from "react";
import { SearchInfo, ArtRecord } from '../types'
import ArtListItem from '../components/ArtListItem'
import {initialHarvardUri} from '../config'

const ArtList = () => {
  const [info, setInfo] = useState<undefined | SearchInfo>(undefined);
  const [records, setRecords] = useState<undefined | ArtRecord[]>(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    let cancelled = false;
    fetch(initialHarvardUri)
      .then(response => response.json())
      .then(({ info, records }: { info: SearchInfo; records: ArtRecord[] }) => {
        if(!cancelled){
          setInfo(info);
          setRecords(records || []);
        }
      })
      .catch(error => {
        if(!cancelled){
          setError(error);
        }
      });
    return () => {cancelled = true};
  }, []);

  if (error) {
    return (
      <>
        <h1>Error!</h1>
        <p>{JSON.stringify(error)}</p>
      </>
    );
  }

  if (!info && !records) {
    return <h1>No info or records</h1>;
  }

  return (
    <>
      <hgroup>
        <h1>Art (useEffect)</h1>
        <h2>Page: {info?.page}</h2>
      </hgroup>
      {
        (records || []).map(record => {
          return (
           <ArtListItem key={record.id} record={record}/>
          )
        })
      }
    </>
  );
};

export default ArtList;
