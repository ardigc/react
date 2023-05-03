
export function CalcRes(props: { setNum1Arr: any;setNum1: any ;setNumber: any; resFunct:any;num1:number ; setOperation:any; setPrevNumber: any; simb: any;number: number; operation:any }){
    let {setNumber,setNum1Arr, num1, setNum1,resFunct, setPrevNumber, simb,setOperation, operation, number}=props
    function clickHandler() {
        
       const res=resFunct(number,operation);
       console.log(res)
      // setNumber(result(number))
      setNum1(res)
      setNumber(res)
    setPrevNumber(num1 + operation + number + "=")

      setNum1Arr([])
      setOperation(simb)
      }
return <button className="buttons" onClick={()=> clickHandler()}>
    {simb}
</button>
}