
export function CalcNum(props: { setNumber: any; simb: any;num1Arr: any}){
    const {setNumber, simb}=props
    let {num1Arr}=props
    function clickHandler() {
    num1Arr.push(simb)
    setNumber(parseFloat(num1Arr.join('')))
      }
return <button className="buttons" onClick={()=> clickHandler()}>
    {simb}
</button>
}