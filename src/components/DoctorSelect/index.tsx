import React, { useState } from 'react';

const DoctorSelect = () => {
  const [doctor, setDoctor] = useState('');

  const handleDoctor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDoctor(e.target.value);
  };
  return (
    <label>
      Лечащий врач
      <select value={doctor} onChange={handleDoctor}>
        <option value='Петров'>Петров</option>
        <option value='Захаров'>Захаров</option>
        <option value='Черниговская'>Черниговская</option>
      </select>
    </label>
  );
};

export default DoctorSelect;
