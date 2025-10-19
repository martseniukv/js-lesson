import React, {useEffect, useState} from 'react';
import './counter.css';

export function FunctionCounter() {

    const [count, setCount] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    useEffect(() => {
        console.log('Render or mounting or componentDidMount');
        //fetch
        return () => {
            console.log('cleanup');
        };
    }, []);

    useEffect(() => {
        console.log('Updating count or componentDidUpdate');
    }, [count, multiplier]) ;

    useEffect(() => {
        console.log('unmount imitation');
       return () => {
           console.log('Unmount componentWillUnMount');
       }
    }, [])

    let increment = () => {
        setCount( prevState => prevState + multiplier)
    };

    let decrement = () => {
        setCount( prevState => prevState - multiplier)
    }

    return (
        <div>
            <div className="Counter">{count}</div>
            <div>
                <div className="button-wrapper">
                    <button
                        className=""
                        onClick={increment}
                    >
                        Increase
                    </button>
                    <button onClick={decrement}>Decrease</button>
                </div>
                <div className="dropdown">
                    <select onChange={e => setMultiplier(Number(e.target.value))}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>

                </div>
            </div>
        </div>
    )
}