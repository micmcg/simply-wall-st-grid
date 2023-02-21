import React, { memo } from 'react';
import GridHeader from './grid-header';
import GridBody from './grid-body';
import { useGridData } from './use-grid-data';

import './grid.css';

const getHeaderMessage = ({ data, error, isLoading }) => {
    if (isLoading) {
        return 'Loading...';
    }

    if (error) {
        return `Error: ${error.message}`;
    }

    const companyCount = data?.pages[0]?.meta.total_records;

    if (companyCount != null) {
        return `${companyCount} companies`;
    }

    return null;
};

const Grid = ({ country, sortDirection, setCountry, setSortDirection }) => {
    const { data, error, fetchNextPage, hasNextPage, isLoading } = useGridData({
        country,
        sortDirection,
    });

    const headerMessage = getHeaderMessage({ data, error, isLoading });

    return (
        <div id="the-grid">
            <GridHeader
                country={country}
                setCountry={setCountry}
                headerMessage={headerMessage}
                sortDirection={sortDirection}
                setSortDirection={setSortDirection}
            />
            <GridBody
                data={data}
                fetchNextPage={fetchNextPage}
                hasNextPage={hasNextPage}
            />
        </div>
    );
};

export default memo(Grid);
