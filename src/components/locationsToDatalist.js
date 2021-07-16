const LocationsToDatalist = () => {
  return(
    <div className="form-column datalist-locations">
      <label>To Destination</label>
        <input list="locations-to" placeholder="Where to?" />
          <datalist id="locations-to">
            <option>Aalborg, Denmark, AAL</option>
            <option>Aarhus, Denmark, AAR</option>
          </datalist>
    </div>
  )
}

export default LocationsToDatalist;
