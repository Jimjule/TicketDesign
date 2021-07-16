const SingleReturnJourneyRadio = () => {
  return(
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
  )
}

export default SingleReturnJourneyRadio;
