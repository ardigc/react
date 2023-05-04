
export function CalcComa(props: { setNumber: any; simb: any; num1Arr: any }) {
  const { setNumber, simb } = props
  let { num1Arr } = props
  function clickHandler() {
    num1Arr.push(".")
    console.log(num1Arr.join(''))
    setNumber(parseFloat(num1Arr.join('')))
  }
  return <button className="buttons" onClick={() => clickHandler()}>
    {simb}
  </button>
}