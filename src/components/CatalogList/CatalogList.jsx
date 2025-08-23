import CatalogItem from '../CatalogItem/CatalogItem';

const CatalogList = ({ campers }) => {
  return (
    <ul>
      {campers.map(camper => (
        <li key={camper.id}>
          <CatalogItem camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CatalogList;
