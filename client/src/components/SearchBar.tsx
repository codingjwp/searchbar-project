import styles from './searchBar.module.scss';

interface SearchBarProps {
  name: string;

}

const SearchBar = () => {
  return (
    <div className={""}>
      <label htmlFor={""} className={""}>Search</label>
      <input id={""} type='search' name={""} pattern='.*\S.*' />
    </div>
  )
}
export default SearchBar;