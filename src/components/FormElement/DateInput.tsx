import {
  FieldErrors,
  UseFormRegister,
  UseFormSetError,
  UseFormTrigger,
  UseFormWatch,
} from 'react-hook-form';
import { FC } from 'react';
import { Form } from '../../const/interfaces.ts';
import styles from './Form.module.scss';
interface IDateInput {
  register: UseFormRegister<Form>;
  errors: FieldErrors<Form>;
  trigger: UseFormTrigger<Form>;
  setError: UseFormSetError<Form>;
  watch: UseFormWatch<Form>;
}

const DateInput: FC<IDateInput> = ({ register, setError, errors, watch }) => {
  const onSubmit = () => {
    if (!watch('date')) {
      setError('date', {
        type: 'manual', // указываем, что это ручная ошибка
        message: 'Поле обязательное', // текст ошибки
      });
    }
  };
  return (
    <label className={styles.form__wrapper}>
      <p className={styles.form__title}>Дата рождения</p>
      <input
        className={styles.form__input}
        type='date'
        onClick={onSubmit}
        {...register('date', {
          required: 'Поле обязательное',
        })}
      />
      <div className={`${styles.form__error} ${styles['form__error-date']}`}>
        {errors?.date && <p>{errors?.date?.message} </p>}
      </div>
    </label>
  );
};

export default DateInput;
