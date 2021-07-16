import Datepicker from "../components/datepicker";
import LocationsFromDatalist from "../components/locationsFromDatalist";
import LocationsToDatalist from "../components/locationsToDatalist"
import PassengerCounter from "../components/passengerCounter";
import SingleReturnJourneyRadio from "../components/singleReturnJourneyRadio";

const SearchFlightsForm = () => {
  return(
    <div className="search-flights">
      <form className="form">
        <div className="form-row"><h2>Search Flights</h2></div>
        <SingleReturnJourneyRadio />

        <div className="form-row">
          <LocationsFromDatalist />
          <LocationsToDatalist />
          <PassengerCounter />
        </div>
        
        <Datepicker />
      </form>
    </div>
  )
}

export default SearchFlightsForm;
