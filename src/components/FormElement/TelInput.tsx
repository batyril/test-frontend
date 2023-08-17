import {
  FieldErrors,
  FieldNamesMarkedBoolean,
  UseFormRegister,
} from 'react-hook-form';
import { FC } from 'react';
import { Form } from '../../const/interfaces.ts';
import styles from './Form.module.scss';

interface ITelInput {
  register: UseFormRegister<Form>;
  dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<Form>>>;
  errors: FieldErrors<Form>;
}

const TelInput: FC<ITelInput> = ({ errors, dirtyFields, register }) => {
  const validateTelephone = (value: number) => {
    if (!value.startsWith('7')) {
      return 'Номер телефона должен начинаться с 7';
    }
    if (value.length !== 11) {
      return 'Номер телефона должен содержать 11 цифр';
    }
    return true;
  };
  return (
    <div className={styles.form__wrapper}>
      <input
        className={`${styles.form__input} ${
          dirtyFields.telephone ? styles.changed : ''
        }`}
        {...register('telephone', {
          required: 'Поле обязательное ',
          validate: validateTelephone,
        })}
        type='number'
      />
      <div className={styles.form__placeholder}>Номер телефона</div>
      <div className={styles.form__error}>
        {errors?.telephone && <p>{errors?.telephone?.message} </p>}
      </div>
    </div>
  );
};

export default TelInput;