import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filters/filtersSlice';

const Filter = ({ filters, locations }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');

  const handleSelectCity = city => {
    setSelectedCity(city);
    dispatch(setFilter({ key: 'location', value: city === 'all' ? '' : city }));
    setIsOpen(false);
  };

  return (
    <form style={{ marginBottom: '20px' }}>
      <div>
        <label htmlFor="citySelect">City:</label>
        <input
          id="citySelect"
          type="text"
          value={selectedCity}
          readOnly
          onClick={() => setIsOpen(prev => !prev)}
        />

        {isOpen && (
          <ul style={{ border: '1px solid #ccc', padding: '5px' }}>
            <li onClick={() => handleSelectCity('all')}>All</li>
            {locations.map(city => (
              <li key={city} onClick={() => handleSelectCity(city)}>
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
};

export default Filter;
