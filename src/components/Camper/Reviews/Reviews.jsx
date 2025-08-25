import Star from '../../Star/Star';
import s from './Reviews.module.css';

const Reviews = ({ reviews = [] }) => {
  if (!reviews.length) return <p>No reviews yet.</p>;

  return (
    <ul className={s.list}>
      {reviews.map((r, idx) => (
        <li key={idx} className={s.item}>
          <div className={s.top}>
            <div className={s.avatar}>{r.reviewer_name?.[0] || 'U'}</div>
            <div className={s.info}>
              <strong className={s.name}>{r.reviewer_name}</strong>
              <Star value={Number(r.reviewer_rating) || 0} mode="multi" />
            </div>
          </div>
          <p className={s.comment}>{r.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
