import {animated, useSpring} from "@react-spring/web";

type SquareType = {
    sqrNumber: number
    height: number
}

export const Square: React.FC<SquareType> = ({sqrNumber, height}) => {




    return (

        // <animated.div style={{
        //     ...props,
        //     display: 'flex',
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     width: '20%',
        //     minHeight: height,
        //     backgroundColor: 'blue',
        //     fontSize: '30px',
        //     color: 'white',
        //     border: '1px solid white'
        // }}>
        //     {sqrNumber}
        // </animated.div>
    );
};

