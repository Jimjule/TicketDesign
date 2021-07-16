import CounterInput from "react-counter-input";

const PassengerCounter = () => {
  return(
    <div className="form-column">
      <label>Passengers</label>
      <CounterInput count={1} min={1} max={20} />
    </div>
  )
}

export default PassengerCounter;
