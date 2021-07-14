import ForecastCard from '../forecast-card/ForecastCard'
import HighlightCard from '../highlight-card/HighlightCard'

import Navigation from '@material-ui/icons/Navigation'

import './right-panel.scss'

import weatherImg from '../../assets/images/sleet.png'

const RightPanel = _ => {
  return <div className='right-panel'>
    <div className="panel-content">
      <div className='temp-unit-wrapper'>
        <button className="temp-unit">°C</button>
        <button className="temp-unit">°F</button>
      </div>
      <div className='forecast-wrapper'>
        <ForecastCard
          day='Tomorrow'
          weatherImage={weatherImg}
          minTemp='16°C'
          maxTemp='20°C'
        />
        <ForecastCard
          day='Sun, 7 Jun'
          weatherImage={weatherImg}
          minTemp='16°C'
          maxTemp='20°C'
        />
        <ForecastCard
          day='Mon, 8 Jun'
          weatherImage={weatherImg}
          minTemp='16°C'
          maxTemp='20°C'
        />
        <ForecastCard
          day='Wed, 9 Jun'
          weatherImage={weatherImg}
          minTemp='16°C'
          maxTemp='20°C'
        />
        <ForecastCard
          day='Wed, 9 Jun'
          weatherImage={weatherImg}
          minTemp='16°C'
          maxTemp='20°C'
        />
        <ForecastCard
          day='Wed, 9 Jun'
          weatherImage={weatherImg}
          minTemp='16°C'
          maxTemp='20°C'
        />
      </div>
      <div className="highlights-wrapper">
        <h2>Today's Highlights</h2>
        <div className="grid-wrapper">
          <HighlightCard>
            <span>Wind Status</span>
            <h1>7<span>mph</span></h1>
            <div className="icon-wrapper">
              <Navigation />
            </div>
          </HighlightCard>
          <HighlightCard>
            <span>Humidity</span>
            <h1>84<span>%</span></h1>
            <span>Humidity bar</span>
          </HighlightCard>
          <HighlightCard>
            <span>Visibility</span>
            <h1>6,4 <span>miles</span></h1>
          </HighlightCard>
          <HighlightCard>
            <span>Air Pressure</span>
            <h1>998 <span>mb</span></h1>
          </HighlightCard>
        </div>
      </div>
    </div>
    <div className="footer-text">
        <span>created by <a href="https://github.com/emi-castellano" target="blank">emi-castellano</a> - devChallenges.io</span>
      </div>
  </div>
}

export default RightPanel