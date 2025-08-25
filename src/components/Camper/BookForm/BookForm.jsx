import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './BookForm.module.css';

const BookForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (!form.name || !/\S+@\S+\.\S+/.test(form.email)) {
      alert('Enter valid name and email');
      return;
    }
    if (!startDate || !endDate) {
      alert('Please select booking dates');
      return;
    }
    alert(
      `Booking request sent!\nFrom: ${startDate.toLocaleDateString()} To: ${endDate.toLocaleDateString()}`
    );
    setForm({ name: '', email: '', comment: '' });
    setDateRange([null, null]);
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

      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={update => setDateRange(update)}
        placeholderText="Booking date*"
        className={s.dateInput}
        calendarClassName={s.calendar}
      />

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
