import { useSelector, useDispatch } from 'react-redux'
import classnames from 'classnames'
import "./search-form.scss"

const SearchForm = () => {
  const visible = useSelector(state => state.app.searchFormVisible)
  const className = classnames('search-form', { 'visible': visible })

  return <div className={className}>
    <form>
      <input type="text" />
    </form>
  </div>
}

export default SearchForm