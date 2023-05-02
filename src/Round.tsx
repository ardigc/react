
function redondearNumero(numero: number) {
  // const strNum = numero.toString()
  // console.log(strNum.length)
  // console.log(Math.log10(Math.abs(numero)))
  let decimales = 16 - Math.floor(Math.log10(Math.abs(numero))) - 1;
  if (decimales > 15) {
    decimales = 15
  }
  // console.log(decimales)
  let numeroRedondeado = numero.toFixed(decimales);
  return numeroRedondeado.replace(/\.?0+$/, "");
}

function redondear(number:number) {
  let redNum: string = "0"
  if (number === 0) {
    redNum = number.toString()
  } else {
    const strNum = number.toString()
    if (!Number.isInteger(number)) {
      redNum = redondearNumero(number)
      // console.log("redondeando: " + redondearNumero(number))
    }else if(Number.isInteger(number)&&strNum.length>=16){
    redNum="desbordamiento"
    }else{
      redNum = number.toString()
      // console.log(strNum)
    }
  }
  return redNum
}
export function Round({ num }: { num: number }) {
  return <div className="result">
    {redondear(num)}
  </div>
}
// export function Component({ num, jsx, children }: { num: number, jsx?: JSX.Element, children?: ReactNode }) {
//   return <div className="result">
//     {redondear(num)}
//     {/* {jsx}
//     {children} */}
//   </div>
// }

// export function InnerComponent({ button }: { button: ReactNode }) {
//   // Cálculos super importantes
//   return <div>
//     <h3>My button</h3>
//     {button}
//   </div>
// }

// Hooks
// useState, useEffect, useRef, useId, useMemo, useCallback