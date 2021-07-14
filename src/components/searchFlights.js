const SearchFlights = () => {
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
          <input type="radio" value="return" name="trip-type" checked="checked" />
          <p className="helper-text">Return trip</p>
          <input type="radio" value="single" name="trip-type" />
          <p className="helper-text">One-way trip</p>
        </div>
        <div className="form-row">
          <div>
            <label className="helper-text">Departure From</label>
            <input type="text" label="Departure From" placeholder="From where?" value="London, All Airports" />
          </div>

          <div>
            <label className="helper-text">To Destination</label>
            <input type="text" label="To Destination" placeholder="Where to?" />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label className="helper-text">Date Departing</label>
            <input type="date" min={dateToday()} />
          </div>

          <div>
            <label className="helper-text">Date Returning</label>
            <input type="date" label="Date Returning" />
            <input className="button" type="submit" value="Search Flights" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchFlights;
