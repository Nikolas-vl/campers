import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';

// стилі
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const CamperGallery = ({ images }) => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      {/* Сітка превʼю зображень */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '12px',
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`camper-${i}`}
            onClick={() => setIndex(i)}
            style={{
              width: '100%',
              height: '100px',
              objectFit: 'cover',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>

      {/* Lightbox (відкривається при кліку) */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map(src => ({ src }))}
        plugins={[Thumbnails]}
      />
    </>
  );
};

export default CamperGallery;
