import React, { memo } from 'react';
import GridTile from '../grid-tile';

//This component exists to reduce memo check iterations
//for existing GridTile instances when a new page of data arrives
const GridSection = ({ page }) =>
    page.data.map((company) => (
        <GridTile key={`grid-tile-${company.name}`} company={company} />
    ));

export default memo(GridSection);
