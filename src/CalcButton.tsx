
export function CalcButton(props: { setNumber: any; simb: any }){
        const {setNumber, simb}=props
        const porcentaje = (num1*number)/100
            const strNum1 = num1.toString()
            const strNumber = number.toString()
            if (operation === "+") {
              console.log(num, index);
              setNumber(num1 + porcentaje)
            } else if (operation === "-") {
              console.log(num, index);
              setNumber(num1 - porcentaje)
            } else if (operation === "*") {
              console.log(num, index);
              setNumber(num1 * porcentaje)
            } else if (operation === "/") {
              console.log(num, index);
              setNumber(num1 / porcentaje)
            } else {
              console.log("No hay operacion")
            }
            setPrevNumber(strNum1 + operation + strNumber + "%=")
            num1Arr = []
    return <button className="buttons">
        {simb}
    </button>
}