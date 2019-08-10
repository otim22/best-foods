import React from 'react';
// import { dataURLToBlob } from 'blob-util';
import { Collection, CollectionItem } from 'react-materialize';

const RestuarantList = ({ restuarantNames }) => (
  <Collection header="Restuarants">
    {
      restuarantNames.length === 0
        ?
        (
          <CollectionItem style={{ color: 'gray' }}>
            ( No restuarant added )
          </CollectionItem>
        )
        :
        (
          restuarantNames.map((restuarant, index) => (
            <CollectionItem key={index}>
              { restuarant }
            </CollectionItem>
          ))
        )
    }
  </Collection>
);

export default RestuarantList;
