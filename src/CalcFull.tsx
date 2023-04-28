function Calcfull() {
  return <div className="calc-box">
  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => <button className={"numer-"+number}>{number}</button>)}
  </div>
}
export default Calcfull