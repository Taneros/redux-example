import { useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from './store';
import { useSelector } from 'react-redux';

// export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();