import { FieldNamesMarkedBoolean, UseFormRegister } from 'react-hook-form';
import { FC } from 'react';
import { Form } from '../../const/interfaces.ts';
import styles from './Form.module.scss';

interface IDoctorSelect {
  register: UseFormRegister<Form>;
  dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<Form>>>;
}

const DoctorSelect: FC<IDoctorSelect> = ({ dirtyFields, register }) => {
  return (
    <label className={styles.form__wrapper}>
      <select
        className={`${styles.form__input} ${
          dirtyFields.doctor ? styles.changed : ''
        }`}
        {...register('doctor', { required: true })}
      >
        <option value=''></option>
        <option value='Петров'>Петров</option>
        <option value='Захаров'>Захаров</option>
        <option value='Черниговская'>Черниговская</option>
      </select>
      <div className={styles.form__placeholder}> Лечащий врач</div>
    </label>
  );
};

export default DoctorSelect;
