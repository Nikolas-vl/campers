import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogList from '../../components/CatalogList/CatalogList';
import Loader from '../../components/Loader/Loader';
import { fetchCampers } from '../../redux/campers/campersOperations';
import {
  selectCampers,
  selectIsLoading,
  selectError,
} from '../../redux/campers/campersSelectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div>
      <h1>Catalog</h1>

      {isLoading && <Loader />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!isLoading && !error && <CatalogList campers={campers} />}
    </div>
  );
};

export default CatalogPage;
