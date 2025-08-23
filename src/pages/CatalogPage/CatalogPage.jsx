import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogList from '../../components/CatalogList/CatalogList';
import s from './CatalogPage.module.css';
import Loader from '../../components/Loader/Loader';
import { fetchCampers } from '../../redux/campers/campersOperations';
import {
  selectCampers,
  selectIsLoading,
  selectError,
  selectTotal,
} from '../../redux/campers/campersSelectors';
import Button from '../../components/Button/Button';
import Filter from '../../components/Filter/Filter';
import { selectFilters } from '../../redux/filters/filtersSelectors';
import { clearCampers } from '../../redux/campers/campersSlice';
import { resetFilters } from '../../redux/filters/filtersSlice';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const total = useSelector(selectTotal);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);

  const [page, setPage] = useState(1);
  const [appliedFilters, setAppliedFilters] = useState({});
  const limit = 4;

  useEffect(() => {
    dispatch(fetchCampers({ page, limit, filters: appliedFilters }));
  }, [dispatch, page, limit, appliedFilters]);

  const handleLoadMore = () => setPage(prev => prev + 1);

  const handleSearch = () => {
    dispatch(clearCampers());
    setPage(1);
    setAppliedFilters(filters);
  };

  const handleReset = () => {
    dispatch(resetFilters());
    setAppliedFilters({});
    dispatch(clearCampers());
    setPage(1);
  };

  return (
    <div className={s.wrapper}>
      <Filter onSearch={handleSearch} onReset={handleReset} />
      <div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <CatalogList campers={campers} />
        {isLoading && <Loader />}
        {campers.length < total && !isLoading && (
          <Button onClick={handleLoadMore}>Load More</Button>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
