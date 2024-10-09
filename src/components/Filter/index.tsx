import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState, } from '../../app/store';
import { setTypeFilter } from '../../features/filters/filtersSlice';
import styles from './styles.module.scss';

export const Filter = () => {
  const { types } = useAppSelector((state: RootState) => state.filters)
  
  const dispatch = useAppDispatch();
  
  console.log(`Filter/index.tsx - line: 12 ->> types`, types)
  
  const handleChange = (number: string) => {
    dispatch(setTypeFilter([number]))
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
