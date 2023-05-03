
export function CalcSymbol(props: { setNumber: any; resFunct:any ; setPrevNumber: any; simb: any;num1Arr: any; num1: number;number: number; operation:string }){
    let {setNumber,num1Arr,resFunct, setPrevNumber, simb, num1, operation, number}=props
    function clickHandler() {
       const res=resFunct(number);
      // setNumber(result(number))
      num1 = res
      setNumber(res)
      setPrevNumber(num1 + "/")
      num1Arr = []
      operation = simb
      }
return <button className="buttons" onClick={()=> clickHandler()}>
    {simb}
</button>
}