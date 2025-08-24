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

import {
  Wind,
  CupHot,
  Shower,
  Tv,
  Diagram,
  Map,
} from '../../assets/icons/iconsComp';

import s from './Filter.module.css';
import Button from '../Button/Button';

const Filter = ({ onSearch, onReset }) => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  const vehicleType = useSelector(selectVehicleType);
  const equipment = useSelector(selectEquipment);

  const handleEquipmentClick = key => dispatch(toggleEquipment(key));
  const handleSearch = () => onSearch && onSearch();

  return (
    <div className={s.panel}>
      <h3 className={s.subtitle}>Location</h3>
      <div className={s.inputWrapper}>
        <Map className={s.icon} />
        <input
          className={s.input}
          type="text"
          value={location}
          onChange={e => dispatch(setLocation(e.target.value))}
          placeholder="Enter location..."
        />
      </div>
      <h3 className={s.mainTitle}>Filters</h3>
      <h3 className={s.sectionTitle}>Vehicle equipment</h3>
      <div className={s.group}>
        <button
          type="button"
          className={`${s.chip} ${equipment.ac ? s.active : ''}`}
          onClick={() => handleEquipmentClick('ac')}
        >
          <Wind width={32} height={32} />
          <span>AC</span>
        </button>

        <button
          type="button"
          className={`${s.chip} ${equipment.automatic ? s.active : ''}`}
          onClick={() => handleEquipmentClick('automatic')}
        >
          <Diagram width={32} height={32} />
          <span>Automatic</span>
        </button>

        <button
          type="button"
          className={`${s.chip} ${equipment.kitchen ? s.active : ''}`}
          onClick={() => handleEquipmentClick('kitchen')}
        >
          <CupHot width={32} height={32} />
          <span>Kitchen</span>
        </button>

        <button
          type="button"
          className={`${s.chip} ${equipment.TV ? s.active : ''}`}
          onClick={() => handleEquipmentClick('TV')}
        >
          <Tv width={32} height={32} />
          <span>TV</span>
        </button>

        <button
          type="button"
          className={`${s.chip} ${equipment.bathroom ? s.active : ''}`}
          onClick={() => handleEquipmentClick('bathroom')}
        >
          <Shower width={32} height={32} />
          <span>Bathroom</span>
        </button>
      </div>

      <h3 className={s.sectionTitle}>Vehicle type</h3>
      <div className={s.group}>
        <button
          type="button"
          className={`${s.chip} ${
            vehicleType === 'panelTruck' ? s.active : ''
          }`}
          onClick={() => dispatch(setVehicleType('panelTruck'))}
        >
          <span>Van</span>
        </button>

        <button
          type="button"
          className={`${s.chip} ${
            vehicleType === 'fullyIntegrated' ? s.active : ''
          }`}
          onClick={() => dispatch(setVehicleType('fullyIntegrated'))}
        >
          <span>Fully Integrated</span>
        </button>

        <button
          type="button"
          className={`${s.chip} ${vehicleType === 'alcove' ? s.active : ''}`}
          onClick={() => dispatch(setVehicleType('alcove'))}
        >
          <span>Alcove</span>
        </button>
      </div>

      <div className={s.actions}>
        <Button type="button" className={s.search} onClick={handleSearch}>
          Search
        </Button>
        <Button
          type="button"
          className={s.reset}
          onClick={() => onReset && onReset()}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Filter;
