import { useState, useEffect } from 'react';

export const useResize = ():{currentWidth:number,currentHeight:number} => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        currentWidth:width,
       currentHeight:width/5
    };
};
