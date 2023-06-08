import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import Button from '../Button';
import PropTypes from 'prop-types';
import s from './MoviesForm.module.css'

export default function MoviesForm({ forSearch, search }) {
  const [input, setInput] = useState('');

  return (
    <form className={s.form}
      onSubmit={e => {
        e.preventDefault();
        forSearch(input);
      }}
    >
      <input className={s.input}
        placeholder={search ?? 'Look for a movie...'}
        onChange={e => setInput(e.target.value)}
      />
      <Button type="submit">
        <ImSearch style={{ marginRight: 8, marginBottom: -1 }} />
        Search
      </Button>
    </form>
  );
}
MoviesForm.propTypes = {
  forSearch: PropTypes.func.isRequired,
  search: PropTypes.string,
};