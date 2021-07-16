import Datepicker from "./datepicker";
import LocationsFromDatalist from "./locationsFromDatalist";
import LocationsToDatalist from "./locationsToDatalist"
import PassengerCounter from "./passengerCounter";
import SingleReturnJourneyRadio from "./singleReturnJourneyRadio";

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
