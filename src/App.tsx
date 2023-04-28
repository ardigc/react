import { useState } from 'react';
import './styles.css';

function App() {
    const [number, setNumber] = useState(0);

    const clickHandler = () => {
      setNumber(number + 1)
    };

    return (
        <div>
            <button onClick={clickHandler} className="button">
                Click me
            </button>
            <span style={{ fontSize: '2rem' }}>{number}</span>
        </div>
    );
}

export default App;
