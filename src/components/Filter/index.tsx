import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState, } from '../../app/store';
import { setTypeFilter } from '../../features/filters/filtersSlice';
import styles from './styles.module.scss';

export const Filter = () => {
  const { types } = useAppSelector((state: RootState) => state.filters)
  const [input, setInput] = useState<string[]>([])

  const dispatch = useAppDispatch();
  
  console.log(`Filter/index.tsx - line: 12 ->> types`, types)
  
  const handleChange = (number: string) => {
    setInput((prev) => prev.length > 0 ? [] : [number])
    
    dispatch(setTypeFilter(input.length > 0 ? [] : [number]))
  }
  
  return (
    <div className={styles.wrapper}>
      <div>
        1
        <input type="checkbox" checked={input[0] === '1'} onChange={() => handleChange('1')} />
      </div>
    </div>
  )
}
