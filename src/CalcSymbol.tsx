
export function CalcSymbol(props: { setNum1Arr: any;setNum1: any ;setNumber: any; resFunct:any ; setOperation:any; setPrevNumber: any; simb: any;number: number; operation:any }){
    let {setNumber,setNum1Arr, setNum1,resFunct, setPrevNumber, simb,setOperation, operation, number}=props
    function clickHandler() {
       const res=resFunct(number,operation);
       console.log(res)
      // setNumber(result(number))
      setNum1(res)
      setNumber(res)
      setPrevNumber(res + "/")
      setNum1Arr([])
      setOperation(simb)
      }
return <button className="buttons" onClick={()=> clickHandler()}>
    {simb}
</button>
}