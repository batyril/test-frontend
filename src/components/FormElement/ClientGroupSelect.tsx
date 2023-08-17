import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FC } from 'react';
import { Form } from '../../const/interfaces.ts';
import styles from './Form.module.scss';

interface IClientGroupSelect {
  register: UseFormRegister<Form>;
  errors: FieldErrors<Form>;
}

const ClientGroupSelect: FC<IClientGroupSelect> = ({ register, errors }) => {
  return (
    <label className={styles.form__wrapper}>
      <p className={styles.form__title}>Группа клиентов</p>
      <select
        multiple
        className={`${styles.form__input}`}
        {...register('clientGroup', { required: 'Поле обязательное' })}
      >
        <option value='VIP'>VIP</option>
        <option value=' Проблемные'> Проблемные</option>
        <option value='ОМС'>ОМС</option>
        <option value=' ДМС'> ДМС</option>
      </select>
      <div className={styles.form__error}>
        {errors?.clientGroup && <p>{errors?.clientGroup?.message} </p>}
      </div>
    </label>
  );
};

export default ClientGroupSelect;
