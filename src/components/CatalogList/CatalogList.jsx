import CatalogItem from '../CatalogItem/CatalogItem';
import s from './CatalogList.module.css';

const CatalogList = ({ campers }) => {
  if (!campers || campers.length === 0) {
    return (
      <div className={s.notFound}>
        <p>🔍 No campers found with the selected filters</p>
        <p className={s.hint}>Try changing your search criteria</p>
      </div>
    );
  }

  return (
    <ul className={s.list}>
      {campers.map(camper => (
        <li key={camper.id}>
          <CatalogItem camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CatalogList;
