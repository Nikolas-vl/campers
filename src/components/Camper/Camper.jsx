import { useEffect, useState } from 'react';
import Features from './Features/Features';
import Reviews from './Reviews/Reviews';
import BookForm from './BookForm/BookForm';
import { Map } from '../../assets/icons/iconsComp';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import s from './Camper.module.css';
import Star from '../Star/Star';
import { useLocation } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const Tabs = ({ active, onChange }) => {
  const navigate = useNavigate();

  const handleClick = key => {
    onChange(key);
    navigate(key === 'reviews' ? '#reviews' : '#features');
  };

  return (
    <div className={s.tabs}>
      {['features', 'reviews'].map(key => (
        <button
          key={key}
          className={`${s.tab} ${active === key ? s.active : ''}`}
          onClick={() => handleClick(key)}
        >
          {key === 'features' ? 'Features' : 'Reviews'}
        </button>
      ))}
    </div>
  );
};

const Camper = ({ camper, tab, setTab }) => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#reviews') {
      setTab('reviews');
    } else {
      setTab('features');
    }
  }, [location.hash, setTab]);

  const images =
    camper.gallery?.map(img => ({
      src: img.original,
      thumb: img.thumb,
    })) || [];

  return (
    <div className={'container'}>
      <h1 className={s.name}>{camper.name}</h1>

      <div className={s.meta}>
        <span className={s.rating}>
          <Star value={camper.rating || 4.5} mode="single" size={16} />
          {camper.rating || 4.5}{' '}
          <span className={s.reviewsLink} onClick={() => setTab('reviews')}>
            ({camper.reviews?.length || 0} Reviews)
          </span>
        </span>

        <span className={s.location}>
          <Map width={16} height={16} className={s.map} />
          {camper.location}
        </span>
      </div>

      <div className={s.price}>€{Number(camper.price).toFixed(2)}</div>

      <ul className={s.gallery}>
        {images.slice(0, 4).map((img, i) => (
          <li key={i} onClick={() => setLightboxIndex(i)}>
            <img src={img.thumb || img.src} alt={`Camper ${i + 1}`} />
          </li>
        ))}
      </ul>

      <p>{camper.description}</p>

      <Tabs active={tab} onChange={setTab} />

      <div className={s.content}>
        <div className={s.left}>
          {tab === 'features' ? (
            <Features camper={camper} />
          ) : (
            <Reviews reviews={camper.reviews} />
          )}
        </div>
        <div className={s.right}>
          <BookForm />
        </div>
      </div>

      {lightboxIndex >= 0 && (
        <Lightbox
          open={lightboxIndex >= 0}
          index={lightboxIndex}
          close={() => setLightboxIndex(-1)}
          slides={images}
          plugins={[Thumbnails]}
        />
      )}
    </div>
  );
};

export default Camper;
