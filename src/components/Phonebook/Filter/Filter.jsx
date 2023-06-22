import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from '../../../redux/filtersSlice';
import { getContactsFilter } from '../../../redux/selector';

import css from './Filter.module.css'


export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getContactsFilter);

    const onChangeFilter = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setContactsFilter(normalizedValue));
  };

    return (
        <label className= {css.filter}>
            Find contacts by name
            <input
                className={css.filter__input}
                name="filter"
                type="text"
                value={filter}
                onChange={onChangeFilter} />
        </label>
    )
}

