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
  return (
    <div className={styles.form__wrapper}>
      <input
        className={`${styles.form__input} ${
          dirtyFields.telephone ? styles.changed : ''
        }`}
        {...register('telephone', {
          required: 'Поле обязательное',
          pattern: {
            value: /^7[0-9]{10}$/,
            message: 'Номер телефона должен начинаться с 7 и содержать 11 цифр',
          },
        })}
        type='tel'
      />
      <div className={styles.form__placeholder}>Номер телефона</div>
      <div className={styles.form__error}>
        {errors?.telephone && <p>{errors?.telephone?.message} </p>}
      </div>
    </div>
  );
};

export default TelInput;
