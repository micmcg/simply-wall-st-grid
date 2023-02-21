import React, { memo } from 'react';

import './snowflake-target.css';

const SnowflakeTarget = ({ ringCount, targetRadius, segmentCount, center }) => {
    const circles = [];
    const lines = [];
    //add an extra ring's worth of buffer for the center circle
    const ringWidth = targetRadius / (ringCount + 1);
    const segmentRadians = (2 * Math.PI) / segmentCount;
    //Start with the first line parallel to the y-axis
    const segmentOffset = (Math.PI / 2) * 3;

    for (let i = 0; i < ringCount; i++) {
        const radius = targetRadius - i * ringWidth;
        circles.push(
            <circle
                key={`target-ring-radius-${radius}`}
                cx={center.x}
                cy={center.y}
                r={radius}
            />
        );

        const lineAngle = segmentOffset + i * segmentRadians;
        lines.push(
            <line
                key={`target-line-angle-${lineAngle}`}
                x1={center.x}
                y1={center.y}
                x2={center.x + targetRadius * Math.cos(lineAngle)}
                y2={center.y + targetRadius * Math.sin(lineAngle)}
            />
        );
    }

    return <g className="snowflake-target">{circles.concat(lines)}</g>;
};

export default memo(SnowflakeTarget);
