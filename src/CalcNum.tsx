
export function CalcNum(props: { fn: (simb: string) => () => void, simb: string; }) {
  const {  simb } = props
  return <button className="buttons" onClick={props.fn(simb)}>
    {simb}
  </button>
}