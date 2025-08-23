import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import s from './CatalogItem.module.css';
import {
  Map,
  StarRating,
  Heart,
  HeartT,
} from '../../assets/icons/iconsComp.js';
import { mapFeatures } from '../../utils/featuresMapper.js';
import Button from '../Button/Button.jsx';
import { toggleFavorite } from '../../redux/favorite/favoriteSlice.js';

const CatalogItem = ({ camper }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorite.items);
  const isFavorite = favorites.includes(camper.id);

  const features = mapFeatures(camper);

  const handleShowMore = () => {
    navigate(`/catalog/${camper.id}`);
  };

  const handleFavorite = () => {
    dispatch(toggleFavorite(camper.id));
  };

  console.log('Favorites:', favorites);
  console.log('isFavorite:', isFavorite);

  return (
    <div className={s.card}>
      <div className={s.imageWrapper}>
        <img
          src={camper.gallery?.[0]?.thumb || camper.image}
          alt={camper.name}
          className={s.image}
        />
      </div>

      <div className={s.content}>
        <div className={s.header}>
          <h3 className={s.name}>{camper.name}</h3>
          <div className={s.price}>
            €{Number(camper.price).toFixed(2)}
            <button
              className={`${s.favorite} ${isFavorite ? s.active : ''}`}
              onClick={handleFavorite}
            >
              <Heart width={24} height={24} />
            </button>
          </div>
        </div>

        <div className={s.meta}>
          <span className={s.rating}>
            <StarRating />
            {camper.rating || 4.5} ({camper.reviews?.length || 0} Reviews)
          </span>
          <span className={s.location}>
            <Map />
            {camper.location}
          </span>
        </div>

        <p className={s.description}>{camper.description}</p>

        <ul className={s.features}>
          {features.map(({ label, icon: Icon }) => (
            <li key={label}>
              <Icon /> {label}
            </li>
          ))}
        </ul>

        <Button onClick={handleShowMore}>Show more</Button>
      </div>
    </div>
  );
};

export default CatalogItem;
