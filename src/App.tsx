import { ChangeEventHandler, useState } from 'react';
import './styles.css';

function App() {
    const [number, setNumber] = useState(0);

    const clickHandler = () => {
        if (number>=20) {
            
        } else {
            setNumber(number + 1)      
        }
    };
    const clickHandlersub = () => {
        if (number<=0) {
            
        } else {
            
            setNumber(number - 1)
        }
    };

    const changeHandler: ChangeEventHandler<HTMLInputElement> = (ev) => {
        ev.target.value
    }

    return (
        <div>
            <button onClick={clickHandlersub} className='button'>sub</button>
            <span style={{ fontSize: '2rem' }}>{number}</span>
            <button onClick={clickHandler} className="button">
                Up
            </button>
            <span style={{ fontSize: '2rem' }}>{number}</span>
            <input onChange={changeHandler} />
        </div>
    );
}

export default App;
