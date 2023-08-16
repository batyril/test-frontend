import { FieldNamesMarkedBoolean, UseFormRegister } from 'react-hook-form';
import { FC } from 'react';
import { Form } from '../../const/interfaces.ts';

interface IDoctorSelect {
  register: UseFormRegister<Form>;
  dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<Form>>>;
}

const DoctorSelect: FC<IDoctorSelect> = ({ dirtyFields, register }) => {
  return (
    <label className='form__wrapper'>
      <select
        className={`form__input ${dirtyFields.doctor ? 'changed' : ''}`}
        {...register('doctor', { required: true })}
      >
        <option value='' disabled></option>
        <option value='Петров'>Петров</option>
        <option value='Захаров'>Захаров</option>
        <option value='Черниговская'>Черниговская</option>
      </select>
      <div className='form__placeholder'> Лечащий врач</div>
    </label>
  );
};

export default DoctorSelect;
