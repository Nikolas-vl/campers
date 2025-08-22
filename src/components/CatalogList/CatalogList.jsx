import CatalogItem from '../CatalogItem/CatalogItem';

const CatalogList = ({ campers = [] }) => {
  if (!Array.isArray(campers)) return <p>campers is not an array!</p>;
  if (!campers.length) return <p>No campers found.</p>;

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
