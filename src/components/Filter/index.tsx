import { useDispatch } from 'react-redux';
import { setTypeFilter } from '../../features/filters/filtersSlice';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export const Filter = () => {
  const { types } = useSelector((state: RootState) => state.filters)
  
  const dispatch = useDispatch();
  
  
  const handleChange = (number: string) => {
    dispatch(setTypeFilter([...types, number]))
  }
  
  return (
    <div className={styles.wrapper}>

      <div>
        1
        <input type="checkbox" onChange={() => handleChange('1')} />
      </div>
    </div>
  )
}
