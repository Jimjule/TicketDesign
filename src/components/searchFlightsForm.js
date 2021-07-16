import CounterInput from "react-counter-input";

const SearchFlightsForm = () => {
  function dateToday() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  }

  return(
    <div className="search-flights">
      <form className="form">
        <div className="form-row">
          <h2>
            Search Flights
          </h2>
        </div>
        <div className="form-row">
          <div className="form-column">
            <label>
              <input type="radio" value="return" name="trip-type" checked="checked" />
              Return trip
            </label>
          </div>
          <div className="form-column">
            <label>
              <input type="radio" value="single" name="trip-type" />
              One-way trip
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="form-column">
            <label>Departure From</label>
            <input type="text" label="Departure From" placeholder="From where?" value="London, All Airports" />
          </div>
          <div className="form-column">
            <label>To Destination</label>
            <input type="text" label="To Destination" placeholder="Where to?" />
          </div>
          <div className="form-column">
            <label>Passengers</label>
            <CounterInput count={1} min={1} max={20} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-column">
            <label>Date Departing</label>
            <input type="date" min={dateToday()} />
          </div>

          <div className="form-column">
            <label>Date Returning</label>
            <input type="date" label="Date Returning" />
            <button>
              Search Flights
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchFlightsForm;
