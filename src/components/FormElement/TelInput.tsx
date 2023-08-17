import {
  FieldErrors,
  FieldNamesMarkedBoolean,
  UseFormRegister,
} from 'react-hook-form';
import { FC } from 'react';
import { Form } from '../../const/interfaces.ts';
import styles from './Form.module.scss';
import validateTelephone from '../../utils/validateTelephone.ts';

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
