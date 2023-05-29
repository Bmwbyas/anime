import {Button} from "./components/Button";
import {useResize} from "./assets/hook/useResize";
import {useAppDispatch, useAppSelector} from "./store";
import {addElem, removeLastElem} from "./app-reducer";
import {animated, useTransition} from "@react-spring/web";


function App() {

    const {currentHeight} = useResize()
    const items = useAppSelector(state => state.app)
    const dispatch = useAppDispatch()

    const transitions = useTransition(items, {
        from: {transform: 'translateX(-500%)'},
        enter: {transform: 'translateX(0%)'},
        leave: {transform: 'translateX(500%)'},
    });

    return (
        <div style={{margin: '0 auto'}}>
            <div style={{textAlign: 'center'}}>
                <Button name={'Добавить'} onClick={() => dispatch(addElem())}/>
                <Button name={'Удалить'} onClick={() => dispatch(removeLastElem())}/>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    border: '1px solid black',
                    width: '100%',
                    minHeight: currentHeight
                }}
            >
                {transitions((style, item) => {
                    return (
                        <animated.div style={{
                            width: '20%',
                            minHeight: currentHeight,
                            backgroundColor: 'blue',
                            color: 'white',
                            border: '1px solid white'
                            , ...style
                        }}
                                      key={item.id}>
                            {item.text}
                        </animated.div>
                    );
                })}
            </div>
        </div>
    )
}

export default App
