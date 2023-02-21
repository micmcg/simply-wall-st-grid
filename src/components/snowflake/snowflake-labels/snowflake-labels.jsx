import React, { memo } from 'react';

import './snowflake-labels.css';

//The gap between the outer edge of the targe and the baseline of the text
const labelPadding = 3;

const PathDefs = ({ center, segments, targetRadius }) => {
    const segmentRadians = (2 * Math.PI) / segments.length;
    //Start with the first line parallel to the y-axis
    const segmentOffset = (Math.PI / 2) * 3 - segmentRadians / 2;

    const paths = segments.map((segmentName, i) => {
        const startAngle = segmentOffset + i * segmentRadians;
        const endAngle = segmentOffset + (i + 1) * segmentRadians;
        const midpointAngle = startAngle + endAngle / 2;

        //If the path is in the lower half of the target,
        //invert the curve to avoid upside down text
        const invertCurve = midpointAngle % (2 * Math.PI) > Math.PI;

        //Add extra padding to inverted curves so the text sits in the right place
        const labelRadius = targetRadius + (invertCurve ? 2 : 1) * labelPadding;

        const sweep = invertCurve ? 0 : 1;

        let startPoint = {
            x: center.x + labelRadius * Math.cos(startAngle),
            y: center.y + labelRadius * Math.sin(startAngle),
        };

        let endPoint = {
            x: center.x + labelRadius * Math.cos(endAngle),
            y: center.y + labelRadius * Math.sin(endAngle),
        };

        if (invertCurve) {
            [startPoint, endPoint] = [endPoint, startPoint];
        }

        return (
            <path
                key={`snowflake-label-curve-${segmentName}`}
                id={`snowflake-label-curve-${segmentName}`}
                d={`M ${startPoint.x} ${startPoint.y} A ${labelRadius} ${labelRadius} 
                0 0 ${sweep} ${endPoint.x} ${endPoint.y}`}
            />
        );
    });

    return <defs>{paths}</defs>;
};

const SnowflakeLabels = ({
    segments,
    center,
    targetRadius,
    showTextLabels,
}) => {
    const segmentRadians = (2 * Math.PI) / segments.length;
    //Start with the first line parallel to the y-axis
    const segmentOffset = (Math.PI / 2) * 3;

    if (showTextLabels) {
        return [
            <PathDefs
                key="snowflake-label-path-defs"
                center={center}
                segments={segments}
                targetRadius={targetRadius}
            />,
            <text key="snowflake-text-labels" className="snowflake-text-labels">
                {segments.map((segmentName, i) => {
                    return (
                        <textPath
                            key={`snowflake-text-label-${segmentName}`}
                            href={`#snowflake-label-curve-${segmentName}`}
                            textAnchor="middle"
                            startOffset="50%">
                            {segmentName}
                        </textPath>
                    );
                })}
            </text>,
        ];
    }

    return segments.map((segmentName, i) => {
        return (
            <circle
                key={`snowflake-dot-label-${segmentName}`}
                className="snowflake-dot-label"
                cx={
                    center.x +
                    targetRadius * Math.cos(segmentOffset + i * segmentRadians)
                }
                cy={
                    center.y +
                    targetRadius * Math.sin(segmentOffset + i * segmentRadians)
                }
                r={2}
            />
        );
    });
};

export default memo(SnowflakeLabels);
