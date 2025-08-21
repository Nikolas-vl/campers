import s from './Button.module.css';

const Button = ({ children, onClick, type = 'button' }) => {
  return (
    <button onClick={onClick} type={type} className={s.btn}>
      {children}
    </button>
  );
};

export default Button;
