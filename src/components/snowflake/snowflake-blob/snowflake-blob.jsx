import React, { memo } from 'react';
import { smoothPathFromPoints } from './curves';
const redHue = 0;
const greenHue = 120;

const SnowflakeBlob = ({ scores, center, segments, maxScore, blobRadius }) => {
    const segmentRadians = (2 * Math.PI) / segments.length;
    //Start with the first score line parallel to the y-axis
    const segmentOffset = (Math.PI / 2) * 3;

    const blobPadding = blobRadius / (maxScore + 1);
    const points = segments.map((segmentName, i) => {
        const scorePercent = scores[segmentName] / maxScore;
        const distanceFromCenter =
            scorePercent * (blobRadius - blobPadding) + blobPadding;
        const angle = segmentOffset + i * segmentRadians;

        return {
            x: center.x + distanceFromCenter * Math.cos(angle),
            y: center.y + distanceFromCenter * Math.sin(angle),
        };
    });

    const path = smoothPathFromPoints(points);

    const totalScorePercent = scores.total / (maxScore * segments.length);

    const totalScoreHue = redHue + (greenHue - redHue) * totalScorePercent;

    return (
        <path
            className="blob"
            d={path}
            fill={`hsla(${totalScoreHue}, 100%, 50%, 0.7)`}
            stroke={`hsl(${totalScoreHue}, 100%, 50%)`}
        />
    );
};

export default memo(SnowflakeBlob);
