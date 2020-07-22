import React from "react";
import { ArtRecord } from "../types";

const ArtListItem = ({ record }: { record: ArtRecord }) => {
  return (
    <article key={record.id}>
      <h3>{record.title}</h3>
      {record.images.length ? (
        <img
          alt={record.title}
          width="400px"
          src={record.images[0].baseimageurl}
        />
      ) : (
        <p>No image</p>
      )}
    </article>
  );
};

export default ArtListItem;
