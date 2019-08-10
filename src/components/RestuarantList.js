import React from 'react';
// import { dataURLToBlob } from 'blob-util';
import { Collection, CollectionItem } from 'react-materialize';

const RestuarantList = ({ restuarantNames }) => (
  <Collection header="Restuarants">
    <RestuarantItems restuarantNames={restuarantNames}/>
  </Collection>
);

const RestuarantItems = ({ restuarantNames }) => (
  restuarantNames.length === 0
    ? <NoRestuarantItems />
    : <SomeRestuarantItems restuarantNames={restuarantNames}/>
);

const NoRestuarantItems = () => (
  <CollectionItem style={{ color: 'gray' }}>
    ( No restuarant added )
  </CollectionItem>
);

const SomeRestuarantItems = ({ restuarantNames }) => (
  restuarantNames.map((restuarant, index) => (
    <CollectionItem key={index}>
      { restuarant }
    </CollectionItem>
  ))
);

export default RestuarantList;
