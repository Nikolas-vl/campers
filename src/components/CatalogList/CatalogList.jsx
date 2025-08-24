import CatalogItem from '../CatalogItem/CatalogItem';
import s from './CatalogList.module.css';

const CatalogList = ({ campers }) => {
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
