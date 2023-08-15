import React, { useState } from 'react';

const ClientGroupSelect = () => {
  const [clientGroup, setClientGroup] = useState(['ОМС']);
  const handleChangeClientGroup = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const options = [...event.target.selectedOptions];
    const values = options.map((option) => option.value);
    setClientGroup(values);
  };
  return (
    <label>
      Группа клиентов
      <select
        required
        onChange={handleChangeClientGroup}
        value={clientGroup}
        multiple
      >
        <option value='VIP'>VIP</option>
        <option value='Проблемные'>Проблемные</option>
        <option value='ОМС'>ОМС</option>
        <option value='ДМС'>ДМС</option>
      </select>
    </label>
  );
};

export default ClientGroupSelect;
