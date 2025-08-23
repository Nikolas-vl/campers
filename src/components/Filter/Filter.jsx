import { useDispatch, useSelector } from 'react-redux';
import {
  setLocation,
  setVehicleType,
  toggleEquipment,
} from '../../redux/filters/filtersSlice';
import {
  selectLocation,
  selectVehicleType,
  selectEquipment,
} from '../../redux/filters/filtersSelectors';

import s from './Filter.module.css';

const Filter = ({ onSearch, onReset }) => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  const vehicleType = useSelector(selectVehicleType);
  const equipment = useSelector(selectEquipment);

  const handleEquipmentClick = key => {
    dispatch(toggleEquipment(key));
  };

  const handleSearch = () => {
    if (onSearch) onSearch();
  };

  return (
    <div className={s.panel}>
      <h3>Location</h3>
      <input
        type="text"
        value={location}
        onChange={e => dispatch(setLocation(e.target.value))}
        placeholder="Enter location..."
      />

      <h3>Vehicle equipment</h3>
      <div className={s.group}>
        <button
          className={equipment.ac ? s.active : ''}
          onClick={() => handleEquipmentClick('ac')}
        >
          AC
        </button>
        <button
          className={equipment.automatic ? s.active : ''}
          onClick={() => handleEquipmentClick('automatic')}
        >
          Automatic
        </button>
        <button
          className={equipment.kitchen ? s.active : ''}
          onClick={() => handleEquipmentClick('kitchen')}
        >
          Kitchen
        </button>
        <button
          className={equipment.TV ? s.active : ''}
          onClick={() => handleEquipmentClick('TV')}
        >
          TV
        </button>
        <button
          className={equipment.bathroom ? s.active : ''}
          onClick={() => handleEquipmentClick('bathroom')}
        >
          Bathroom
        </button>
      </div>

      <h3>Vehicle type</h3>
      <div className={s.group}>
        <button
          className={vehicleType === 'van' ? s.active : ''}
          onClick={() => dispatch(setVehicleType('van'))}
        >
          Van
        </button>
        <button
          className={vehicleType === 'fullyIntegrated' ? s.active : ''}
          onClick={() => dispatch(setVehicleType('fullyIntegrated'))}
        >
          Fully Integrated
        </button>
        <button
          className={vehicleType === 'alcove' ? s.active : ''}
          onClick={() => dispatch(setVehicleType('alcove'))}
        >
          Alcove
        </button>
      </div>

      <button className={s.search} onClick={handleSearch}>
        Search
      </button>
      <button
        className={s.reset}
        onClick={() => {
          if (onReset) onReset();
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Filter;
