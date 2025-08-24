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

const Tabs = ({ active, onChange }) => (
  <div className={s.tabs}>
    {['features', 'reviews'].map(key => (
      <button
        key={key}
        className={`${s.tab} ${active === key ? s.active : ''}`}
        onClick={() => onChange(key)}
      >
        {key === 'features' ? 'Features' : 'Reviews'}
      </button>
    ))}
  </div>
);

const Camper = ({ camper, tab, setTab }) => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const images =
    camper.gallery?.map(img => ({
      src: img.original,
      thumb: img.thumb,
    })) || [];

  useEffect(() => {
    if (location.hash === '#reviews' && tab !== 'reviews') {
      setTab('reviews');
    }
  }, [location.hash, tab, setTab]);

  useEffect(() => {
    if (tab === 'reviews') {
      const el = document.getElementById('reviews');
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    }
  }, [tab]);

  return (
    <div className={'container'}>
      <h1>{camper.name}</h1>

      <div className={s.meta}>
        <span>
          {camper.rating} ({camper.reviews?.length || 0} Reviews)
        </span>
        <span>
          <Map /> {camper.location}
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
            <section id="reviews">
              <Reviews reviews={camper.reviews} />
            </section>
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
