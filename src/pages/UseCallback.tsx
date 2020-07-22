import React from 'react';
import useArt from '../hooks/useArtWithCallback';
import ArtListItem from '../components/ArtListItem';

const ArtList = () => {
  // use callback is utilized in this hook's implementation!
  const { info, records, error, fetchNextPage } = useArt();

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
        <h1>Art (useCallback)</h1>
        <h2>Page: {info?.page}</h2>
      </hgroup>
      <button onClick={fetchNextPage}>Next Page</button>
      {(records || []).map((record) => {
        return <ArtListItem key={record.id} record={record} />;
      })}
    </>
  );
};

export default ArtList;
