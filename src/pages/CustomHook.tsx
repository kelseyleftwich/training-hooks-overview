import React from "react";
import useArt from '../hooks/useArt'
import ArtListItem from '../components/ArtListItem'

const ArtList = () => {
  const {info, records, error} = useArt();

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
        <h1>Art (custom hook)</h1>
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
