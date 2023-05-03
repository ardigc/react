
export function CalcButton(props: { setNumber: any; simb: any }){
        const {setNumber, simb}=props
    return <button className="buttons">
        {simb}
    </button>
}