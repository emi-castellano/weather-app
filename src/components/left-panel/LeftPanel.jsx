import { useSelector, useDispatch } from 'react-redux'
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import RoomIcon from '@material-ui/icons/Room';
import weatherImg from '../../assets/images/light-cloud.png'
import SearchForm from '../search-form/SearchForm'
import { toggleSearchForm } from '../../reducers/appReducer'
import './left-panel.scss'

const LeftPanel = _ => {
  const searchFormVisible = useSelector((state) => state.app.searchFormVisible)
  const dispatch = useDispatch()

  return <div className='left-panel'>
    <div className='top-block'>
      <div className='top-buttons'>
        <button className='open-search-form' onClick={() => dispatch(toggleSearchForm())}>
          Search for places
        </button>
        <div className='my-location'>
          <GpsFixedIcon className='get-location-icon' />
        </div>
      </div>
      <div className='weather-image-wrapper'>
        <img className='weather-img' src={weatherImg} alt='Weather' />
      </div>
    </div>
    <div className='bottom-block'>
      <span className='temperature'>15<span className='temp-unit'>°C</span></span>
      <span className='weather-text'>Cloudy</span>
      <div className='date'>
        <span>Today</span>
        <span className='dot'>•</span>
        <span>Fri, 5 Jun</span>
      </div>
      <span className='location'>
        <RoomIcon />
        Helsinki
      </span>
    </div>
    <SearchForm />
  </div>
}

export default LeftPanel