import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campersSlice';
import CatalogList from '../../components/CatalogList/CatalogList';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(s => s.campers);
  const filters = useSelector(s => s.filters);

  useEffect(() => {
    dispatch(fetchCampers({ filters, page: 1, limit: 8 }));
  }, [dispatch, filters]);

  if (isLoading) return <p>Loading campers...</p>;
  if (error) return <p>Oops: {error}</p>;

  return (
    <div>
      <h1>Catalog</h1>
      <CatalogList campers={items} />
    </div>
  );
};

export default CatalogPage;
