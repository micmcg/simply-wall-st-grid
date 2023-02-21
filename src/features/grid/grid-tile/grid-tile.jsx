import React, { memo, useMemo } from 'react';

import Snowflake from '_/components/snowflake';
import GridTileContent from '../grid-tile-content';

import './grid-tile.css';

const GridTile = ({ company }) => {
    const scores = useMemo(
        () => ({
            ...company.score.data,
            dividend: company.score.data.income,
        }),
        [company.score.data]
    );

    return (
        <div className="grid-tile">
            <header
                style={{
                    backgroundImage: `url(${company.grid.data.main_thumb})`,
                }}
                className={
                    !company.grid.data.main_thumb ? 'no-background' : ''
                }>
                <Snowflake scores={scores} size="large" showTextLabels />
            </header>
            <GridTileContent company={company} />
        </div>
    );
};

export default memo(GridTile);
