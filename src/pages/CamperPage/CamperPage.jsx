import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperById } from '../../redux/campers/campersOperations';
import {
  selectSelectedCamper,
  selectIsLoading,
  selectError,
} from '../../redux/campers/campersSelectors';
import Loader from '../../components/Loader/Loader';

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectSelectedCamper);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (isLoading) return <Loader />;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!camper) return <p>Camper not found</p>;

  return (
    <div>
      <h1>{camper.name}</h1>
      <p>{camper.description}</p>
      <p>Price: €{Number(camper.price).toFixed(2)}</p>
      {/* можна додати фото, характеристики, відгуки */}
    </div>
  );
};

export default CamperPage;
