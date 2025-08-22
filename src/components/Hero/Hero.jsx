import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import s from './Hero.module.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className={s.hero}>
      <div className={`container ${s.wrapper}`}>
        <h1 className={s.title}>Campers of your dreams</h1>
        <p className={s.text}>
          You can find everything you want in our catalog
        </p>
        <Button onClick={() => navigate('/catalog')}>View Now</Button>
      </div>
    </section>
  );
};

export default Hero;
