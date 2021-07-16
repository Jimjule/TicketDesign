import SearchFlightsForm from "./searchFlightsForm";
import Robot from "../components/robot";

const SearchFlights = () => {
  return(
    <div>
      <div className="welcome-header"><h1>Welcome!</h1></div>
      <SearchFlightsForm />
      <Robot />
    </div>
  )
}

export default SearchFlights;
