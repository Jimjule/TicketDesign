const LocationsFromDatalist = () => {
  return(
    <div className="form-column datalist-locations">
      <label>Departure From</label>
        <input list="locations-from" placeholder="From where?" />
          <datalist id="locations-from">
            <option>London, All Airports</option>
            <option>London, Stanstead, STN</option>
          </datalist>
    </div>
  )
}

export default LocationsFromDatalist;
