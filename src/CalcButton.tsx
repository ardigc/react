
export function CalcButton(props: { setNumber: any; setPrevNumber: any; simb: any;num1Arr: any; num1: number;number: number; operation:string }){
        const {setNumber, setPrevNumber, simb, num1, operation, number}=props
        let {num1Arr}=props
        function clickHandler() {
          
          const porcentaje = (num1*number)/100
          const strNum1 = num1.toString()
            const strNumber = number.toString()
            if (operation === "+") {
              setNumber(num1 + porcentaje)
            } else if (operation === "-") {
              setNumber(num1 - porcentaje)
            } else if (operation === "*") {
              setNumber(num1 * porcentaje)
            } else if (operation === "/") {
              setNumber( num1 / porcentaje)
            } else {
              console.log("No hay operacion")
            }
            setPrevNumber(strNum1 + operation + strNumber + "%=")
            num1Arr = []
          }
    return <button className="buttons" onClick={()=> clickHandler()}>
        {simb}
    </button>
}