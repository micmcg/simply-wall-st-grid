import React, { memo } from 'react';

import CountrySelector from '_/components/country-selector';
import GridSortSelector from './grid-sort-selector';

import './grid-header.css';

const GridHeader = ({
    country,
    setCountry,
    sortDirection,
    setSortDirection,
    headerMessage,
}) => {
    return (
        <header className="grid-header">
            <div className="filters">
                <CountrySelector
                    country={country}
                    setCountry={setCountry}
                    className="grid-country-selector"
                />
                <GridSortSelector
                    sortDirection={sortDirection}
                    setSortDirection={setSortDirection}
                />
            </div>
            {headerMessage && (
                <span className="grid-header-message">{headerMessage}</span>
            )}
        </header>
    );
};

export default memo(GridHeader);
