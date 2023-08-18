import {
  FieldErrors,
  FieldNamesMarkedBoolean,
  UseFormRegister,
} from 'react-hook-form';
import { FC } from 'react';
import { Form } from '../../const/interfaces.ts';
import styles from './Form.module.scss';
import InputMask from 'react-input-mask';

interface ITelInput {
  register: UseFormRegister<Form>;
  dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<Form>>>;
  errors: FieldErrors<Form>;
}

const TelInput: FC<ITelInput> = ({ errors, dirtyFields, register }) => {
  return (
    <div className={styles.form__wrapper}>
      <InputMask
        mask='+7 (999) 999-99-99'
        className={`${styles.form__input} ${
          dirtyFields.telephone ? styles.changed : ''
        }`}
        {...register('telephone', {
          required: 'Поле обязательное',
          pattern: {
            value: /^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/,
            message: 'Номер телефона должен содержать 12 символов',
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
