//General credit for smoothing approach to https://francoisromain.medium.com/smooth-a-svg-path-with-cubic-bezier-curves-e37b49d46c74

const makeLine = (startPoint, endPoint) => {
    const dX = endPoint.x - startPoint.x;
    const dY = endPoint.y - startPoint.y;

    const length = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));

    // Angle of line relative to x-axis
    const angle = Math.atan2(dY, dX);

    return { length, angle };
};

const getControlPoint = (prevPoint, currPoint, nextPoint, tension, isEnd) => {
    let { length, angle } = makeLine(prevPoint, nextPoint);

    // if it is the 2nd control point, reverse the angle
    angle += isEnd ? Math.PI : 0;
    length *= tension;

    return {
        x: currPoint.x + Math.cos(angle) * length,
        y: currPoint.y + Math.sin(angle) * length,
    };
};

const calculateControlPointsForBezier = (
    prevPoint,
    startPoint,
    endPoint,
    nextPoint,
    tension
) => [
    getControlPoint(prevPoint, startPoint, endPoint, tension),
    getControlPoint(startPoint, endPoint, nextPoint, tension, true),
];

const addControlPoints = (points, tension) => {
    return points.map((point, i, pointsArr) => {
        //using array.at() allows us to use negative indices
        //to travel back from the end of the array for a closed path
        const prevPoint = pointsArr.at(i - 1);
        const prevPrevPoint = pointsArr.at(i - 2);

        //wrap around to the start of the array for a closed path
        const nextPoint = pointsArr.at(i === pointsArr.length - 1 ? 0 : i + 1);

        const cPoints = calculateControlPointsForBezier(
            prevPrevPoint,
            prevPoint,
            point,
            nextPoint,
            tension
        );
        return {
            ...point,
            cPoints,
        };
    });
};

export const smoothPathFromPoints = (points, tension = 0.2) => {
    const annotatedPoints = addControlPoints(points, tension);

    //add a final segment closing the path
    annotatedPoints.push(annotatedPoints[0]);

    const pathParts = annotatedPoints.map(({ x, y, cPoints }, i, pointsArr) => {
        if (i === 0) {
            return `M ${x} ${y}`;
        }

        const [{ x: cp1x, y: cp1y }, { x: cp2x, y: cp2y }] = cPoints;

        return `C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${x} ${y}`;
    });

    return pathParts.join(' ');
};
