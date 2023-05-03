export function CalcRare(props: { setNumber: any; number: number; setPrevNumber: any; simb: any; num1Arr: any }) {
    const { setNumber, number, setPrevNumber, simb } = props
    let { num1Arr } = props
    function clickHandler() {
        if (simb === "1/x") {
            setPrevNumber("1/(" + number + (")"))
            num1Arr = []
            setNumber(1 / number)
        } else if (simb === "x^2") {
            setPrevNumber("sqr(" + number + ")")
            num1Arr = []
            setNumber(number * number)
        } else if (simb==="+/-") {
            setNumber(-number)
        } else {
            setPrevNumber("sqrt(" + number + ")")
            num1Arr = []
            setNumber(Math.sqrt(number))
        }
    }
    return <button className="buttons" onClick={() => clickHandler()}>
        {simb}
    </button>
}