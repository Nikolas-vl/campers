import s from './CatalogItem.module.css';
import { Map, StarRating, Heart } from '../../assets/icons/iconsComp.js';
import { mapFeatures } from '../../utils/featuresMapper.js';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx';

const CatalogItem = ({ camper }) => {
  const features = mapFeatures(camper);
  console.log(camper.gallery, camper.image);

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
              <img src={Heart} alt="favorite" width={24} height={24} />
            </button>
          </div>
        </div>

        <div className={s.meta}>
          <span className={s.rating}>
            <img src={StarRating} alt="rating" width={24} height={24} />{' '}
            {camper.rating || 4.5} ({camper.reviews?.length || 0} Reviews)
          </span>
          <span className={s.location}>
            <img src={Map} alt="location" width={24} height={24} />{' '}
            {camper.location}
          </span>
        </div>

        <p className={s.description}>{camper.description}</p>

        <ul className={s.features}>
          {features.map(({ label, icon }) => (
            <li key={label}>
              <img src={icon} alt={label} width={24} height={24} /> {label}
            </li>
          ))}
        </ul>

        <Link to={`/catalog/${camper.id}`}>
          <Button>Show more</Button>
        </Link>
      </div>
    </div>
  );
};

export default CatalogItem;
