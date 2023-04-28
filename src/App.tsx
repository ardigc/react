import { ChangeEventHandler, useState } from 'react';
import './styles.css';

function App() {
    const [number, setNumber] = useState(0);

    const clickHandler = () => {
      setNumber(number + 1)
    };

    const changeHandler: ChangeEventHandler<HTMLInputElement> = (ev) => {
        ev.target.value
    }

    return (
        <div>
            <button onClick={clickHandler} className="button">
                Click me
            </button>
            <span style={{ fontSize: '2rem' }}>{number}</span>
            <input onChange={changeHandler} />
        </div>
    );
}

export default App;
