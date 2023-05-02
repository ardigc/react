// import { useState } from 'react';
import './styles.css';
// import Calc from './Calc';
import Calcfull from './CalcFull';
import { Component, InnerComponent } from './Comp';

function App() {
  //     const [number, setNumber] = useState(0);

  //     const clickHandler = () => {
  //         if (number>=20) {

  //         } else {
  //             setNumber(number + 1)      
  //         }
  //     };
  //     const clickHandlersub = () => {
  //         if (number<=0) {

  //         } else {

  //             setNumber(number - 1)
  //         }
  //     };

  const button = <button>El tronchas</button>

  return (
    <div>
      {/* <div>

            <button onClick={clickHandlersub} className='button'>sub</button>
            <span style={{ fontSize: '2rem' }}>{number}</span>
            <button onClick={clickHandler} className="button">
                Up
            </button>
   
            
            </div> */}
      {/* <Calc /> */}
      <Calcfull />
      <Component message="Un mensaje" >
        <h4>Hola que pasa</h4>
      </Component>
      <Component message="Adri el canutos" jsx={<span>El mingas</span>}>
        <InnerComponent button={button} />
      </Component>
    </div>

  );
}

export default App;
