import { mapFeatures } from '../../../utils/featuresMapper';
import s from './Features.module.css';

const Features = ({ camper }) => {
  const chips = mapFeatures(camper);

  const details = [
    ['Form', camper.form],
    ['Length', camper.length],
    ['Width', camper.width],
    ['Height', camper.height],
    ['Tank', camper.tank],
    ['Consumption', camper.consumption],
  ].filter(([, v]) => v);

  return (
    <div className={s.wrapper}>
      <ul className={s.chips}>
        {chips.map(({ label, icon: Icon }) => (
          <li key={label}>
            <Icon /> {label.charAt(0).toUpperCase() + label.slice(1)}
          </li>
        ))}
      </ul>

      <div className={s.details}>
        <h4>Vehicle details</h4>
        <div className={s.divider} />

        <dl className={s.rows}>
          {details.map(([k, v]) => (
            <div key={k} className={s.row}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Features;
