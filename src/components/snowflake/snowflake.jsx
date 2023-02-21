import React, { memo } from 'react';
import SnowflakeTarget from './snowflake-target';
import SnowflakeLabels from './snowflake-labels';
import SnowflakeBlob from './snowflake-blob';

import './snowflake.css';

const DEFAULT_MAX_SCORE = 6;
const DEFAULT_SEGMENTS = ['value', 'future', 'past', 'health', 'dividend'];

const SNOWFLAKE_SIZES = {
    small: 'snowflake-small',
    medium: 'snowflake-medium',
    large: 'snowflake-large',
    xlarge: 'snowflake-x-large',
};

const Snowflake = ({
    scores,
    maxScore = DEFAULT_MAX_SCORE,
    segments = DEFAULT_SEGMENTS,
    size = 'medium',
    showTextLabels,
}) => {
    const viewBoxSize = 100;
    const center = { x: viewBoxSize / 2, y: viewBoxSize / 2 };

    //Use up more of the viewbox with the target/blob when not showing text labels
    const targetRadius = ((showTextLabels ? 0.8 : 0.9) * viewBoxSize) / 2;

    return (
        <svg
            className={`snowflake ${SNOWFLAKE_SIZES[size]}`}
            viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <SnowflakeTarget
                ringCount={maxScore}
                targetRadius={targetRadius}
                segmentCount={segments.length}
                center={center}
            />
            <SnowflakeLabels
                segments={segments}
                center={center}
                targetRadius={targetRadius}
                showTextLabels={showTextLabels}
            />
            <SnowflakeBlob
                scores={scores}
                segments={segments}
                center={center}
                maxScore={maxScore}
                blobRadius={targetRadius}
            />
        </svg>
    );
};

export default memo(Snowflake);
