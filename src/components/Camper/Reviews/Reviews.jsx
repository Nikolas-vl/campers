import Star from '../../Star/Star';
import s from './Reviews.module.css';

const Stars = ({ value = 0 }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (i < value ? '★' : '☆'));
  return <span className={s.stars}>{stars.join(' ')}</span>;
};

const Reviews = ({ reviews = [] }) => {
  if (!reviews.length) return <p>No reviews yet.</p>;

  return (
    <ul className={s.list}>
      {reviews.map((r, idx) => (
        <li key={idx} className={s.item}>
          <div className={s.avatar}>{r.reviewer_name?.[0] || 'U'}</div>
          <div>
            <div className={s.head}>
              <strong>{r.reviewer_name}</strong>
              <Star value={Number(r.reviewer_rating) || 0} mode="multi" />
            </div>
            <p>{r.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
