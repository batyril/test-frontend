import {
  FieldErrors,
  FieldNamesMarkedBoolean,
  UseFormRegister,
} from 'react-hook-form';
import { FC } from 'react';
import { Form } from '../../const/interfaces.ts';
import styles from './Form.module.scss';

interface IGenderInput {
  register: UseFormRegister<Form>;
  dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<Form>>>;
  errors: FieldErrors<Form>;
}
const GenderSelect: FC<IGenderInput> = ({ dirtyFields, register, errors }) => {
  return (
    <label className={styles.form__wrapper}>
      <select
        className={`${styles.form__input} ${
          dirtyFields.gender ? styles.changed : ''
        }`}
        {...register('gender')}
      >
        <option value='' disabled></option>
        <option value='Мужской'>Мужской</option>
        <option value='Женский'>Женский</option>
      </select>
      <div className={styles.form__placeholder}>Пол</div>
      <div>{errors?.gender && <p>{errors?.gender?.message} </p>}</div>
    </label>
  );
};

export default GenderSelect;
