import s from './Button.module.css';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button onClick={onClick} type={type} className={`${s.btn} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
