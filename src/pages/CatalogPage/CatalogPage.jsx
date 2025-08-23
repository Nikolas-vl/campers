import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogList from '../../components/CatalogList/CatalogList';
import Loader from '../../components/Loader/Loader';
import { fetchCampers } from '../../redux/campers/campersOperations';
import {
  selectCampers,
  selectIsLoading,
  selectError,
  selectTotal,
} from '../../redux/campers/campersSelectors';
import Button from '../../components/Button/Button';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const total = useSelector(selectTotal);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [page, setPage] = useState(1);
  const limit = 4;

  useEffect(() => {
    dispatch(fetchCampers({ page, limit }));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div>
      <h1>Catalog</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <CatalogList campers={campers} />

      {isLoading && <Loader />}

      {campers.length < total && !isLoading && (
        <Button onClick={handleLoadMore}>Load More</Button>
      )}
    </div>
  );
};

export default CatalogPage;
