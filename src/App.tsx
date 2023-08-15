import './App.css';
import { useState } from 'react';
import ClientGroupSelect from './components/clientGroup';
import DoctorSelect from './components/DoctorSelect';

function App() {
  const [fullName, setFullName] = useState('');
  const [telephone, setTelephone] = useState('');

  return (
    <section className='client'>
      <h2>Форма клиента поликлиники</h2>
      <form className='client__form'>
        <input
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          required
          type='text'
          placeholder='фио'
        />
        <input required type='date' placeholder='дата' />
        <input
          onChange={(e) => setTelephone(e.target.value)}
          value={telephone}
          required
          type='tel'
          placeholder='телефон'
        />
        <input type='text' placeholder='пол' />
        <ClientGroupSelect />
        <DoctorSelect />
        <label>
          <input type='checkbox' /> Не отправлять СМС.
        </label>
        <button type='reset'>Сбросить </button>
        <button type='submit'>Создать </button>
      </form>
    </section>
  );
}

export default App;
