import { useNavigate } from 'react-router-dom';
import s from './CatalogItem.module.css';
import { Map, StarRating, Heart } from '../../assets/icons/iconsComp.js';
import { mapFeatures } from '../../utils/featuresMapper.js';
import Button from '../Button/Button.jsx'; // ← підключаємо твій компонент

const CatalogItem = ({ camper }) => {
  const navigate = useNavigate();
  const features = mapFeatures(camper);

  const handleShowMore = () => {
    navigate(`/catalog/${camper.id}`);
  };

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
            <button className={s.favorite}>
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
