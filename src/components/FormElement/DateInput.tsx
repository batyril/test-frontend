import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FC } from 'react';
import { Form } from '../../const/interfaces.ts';
import styles from './Form.module.scss';
interface IDateInput {
  register: UseFormRegister<Form>;
  errors: FieldErrors<Form>;
}

const DateInput: FC<IDateInput> = ({ register, errors }) => {
  return (
    <label className={styles.form__wrapper}>
      <p className={styles.form__title}>Дата рождения</p>
      <input
        className={styles.form__input}
        type='date'
        {...register('date', {
          required: 'Поле обязательное ',
        })}
      />
      <div className={styles.form__error}>
        {errors?.date && <p>{errors?.date?.message} </p>}
      </div>
    </label>
  );
};

export default DateInput;
