import PropTypes from 'prop-types'

import './forecastCard.scss'

const ForecastCard = ({ day, weatherImage, minTemp, maxTemp }) => {
  return <div className="forecast-card">
    <span className="day">{day}</span>
    <img className="weather-img" src={weatherImage} alt='Weather Illustration' />
    <div className="temperature">
      <span className="max">{maxTemp}</span>
      <span className="min">{minTemp}</span>
    </div>
  </div>
}

ForecastCard.propTypes = {
  day: PropTypes.string,
  weatherImage: PropTypes.string,
  minTemp: PropTypes.string,
  maxTemp: PropTypes.string
}

export default ForecastCard