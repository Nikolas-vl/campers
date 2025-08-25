import { useEffect } from 'react';
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
import {
  setPage,
  setAppliedFilters,
  resetUi,
} from '../../redux/ui/catalogUiSlice';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const campers = useSelector(selectCampers);
  const total = useSelector(selectTotal);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);

  const page = useSelector(state => state.catalogUi.page);
  const appliedFilters = useSelector(state => state.catalogUi.appliedFilters);

  const limit = 4;

  useEffect(() => {
    const haveEnough = campers.length >= page * limit;
    if (!haveEnough) {
      dispatch(fetchCampers({ page, limit, filters: appliedFilters }));
    }
  }, [dispatch, page, limit, campers.length, appliedFilters]);

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  const handleSearch = () => {
    dispatch(clearCampers());
    dispatch(setPage(1));
    dispatch(setAppliedFilters(filters));
  };

  const handleReset = () => {
    dispatch(resetFilters());
    dispatch(clearCampers());
    dispatch(resetUi());
  };

  return (
    <div className={`container`}>
      <section className={s.wrapper}>
        <Filter onSearch={handleSearch} onReset={handleReset} />
        <div className={s.right}>
          <CatalogList campers={campers} />
          {isLoading && <Loader />}
          {campers.length < total && !isLoading && (
            <div className={s.loadMoreWrapper}>
              <Button className={s.btn} onClick={handleLoadMore}>
                Load More
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CatalogPage;
