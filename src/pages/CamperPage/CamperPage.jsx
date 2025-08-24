import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperById } from '../../redux/campers/campersOperations';
import {
  selectSelectedCamper,
  selectIsLoading,
  selectError,
} from '../../redux/campers/campersSelectors';
import { clearSelectedCamper } from '../../redux/campers/campersSlice';
import Loader from '../../components/Loader/Loader';
import Camper from '../../components/Camper/Camper';

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectSelectedCamper);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [tab, setTab] = useState('features');

  useEffect(() => {
    dispatch(fetchCamperById(id));
    return () => dispatch(clearSelectedCamper());
  }, [dispatch, id]);

  if (isLoading) return <Loader />;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!camper) return null;

  return <Camper camper={camper} tab={tab} setTab={setTab} />;
};

export default CamperPage;
