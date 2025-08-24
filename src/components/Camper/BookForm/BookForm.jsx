import { useState } from 'react';
import s from './BookForm.module.css';

const BookForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    comment: '',
  });

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (!form.name || !/\S+@\S+\.\S+/.test(form.email)) {
      alert('Enter valid name and email');
      return;
    }
    alert('Booking request sent!');
    setForm({ name: '', email: '', date: '', comment: '' });
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <h4>Book your campervan now</h4>
      <p>Stay connected! We are always ready to help you.</p>
      <input
        name="name"
        value={form.name}
        onChange={onChange}
        placeholder="Name*"
      />
      <input
        name="email"
        value={form.email}
        onChange={onChange}
        placeholder="Email*"
      />
      <input type="date" name="date" value={form.date} onChange={onChange} />
      <textarea
        name="comment"
        value={form.comment}
        onChange={onChange}
        placeholder="Comment"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default BookForm;
