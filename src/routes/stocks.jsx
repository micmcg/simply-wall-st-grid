import React, { memo } from 'react';
import { useRoutes, Redirect, navigate } from 'raviger';

import { DESC } from '_/utils/sort-directions';
import Grid from '_/features/grid';

const DEFAULT_COUNTRY = 'au';
const DEFAULT_SORT = DESC;

const StocksRoute = ({ basePath }) =>
    useRoutes(
        {
            '/': () => (
                <Redirect
                    to={`${basePath}/${DEFAULT_COUNTRY}/${DEFAULT_SORT}`}
                />
            ),
            '/:country': ({ country }) => (
                <Redirect to={`${basePath}/${country}/${DEFAULT_SORT}`} />
            ),
            '/:country/:sortDirection': ({ country, sortDirection }) => (
                <Grid
                    country={country}
                    sortDirection={sortDirection}
                    setCountry={(newCountry) => {
                        navigate(`${basePath}/${newCountry}/${sortDirection}`);
                    }}
                    setSortDirection={(newDirection) => {
                        navigate(`${basePath}/${country}/${newDirection}`);
                    }}
                />
            ),
        },
        { basePath }
    );

export default memo(StocksRoute);
