import React, { memo, useRef, useCallback, useEffect } from 'react';
import GridSection from './grid-section';

import './grid-body.css';

const GridBody = ({ data, hasNextPage, fetchNextPage }) => {
    const scrollLoaderRef = useRef(null);

    const observe = useCallback(
        (entries) => {
            const [target] = entries;
            if (target.isIntersecting && hasNextPage) {
                fetchNextPage();
            }
        },
        [fetchNextPage, hasNextPage]
    );

    useEffect(() => {
        const scrollElement = scrollLoaderRef.current;

        const observer = new IntersectionObserver(observe, {
            rootMargin: `${window.innerHeight / 2}px`,
        });

        observer.observe(scrollElement);

        return () => observer.unobserve(scrollElement);
    }, [observe]);

    return (
        <div className="grid-container">
            {data?.pages.map((page, i) => (
                <GridSection key={`grid-page-${i}`} page={page} />
            ))}

            <div className="scroll-loader" ref={scrollLoaderRef} />
        </div>
    );
};

export default memo(GridBody);
