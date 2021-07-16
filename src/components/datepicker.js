const Datepicker = () => {
  function dateToday() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  }

  return(
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
  )
}

export default Datepicker;
