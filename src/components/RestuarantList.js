import React from 'react';
// import { dataURLToBlob } from 'blob-util';

const RestuarantList = ({ restuarantNames }) => (
  <ul>
    {
      restuarantNames.map((restuarant, index) => (
        <li key={index}>
          { restuarant }
        </li>
      ))
    }
  </ul>
);

export default RestuarantList;
