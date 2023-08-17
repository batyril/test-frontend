import { UseFormRegister } from 'react-hook-form';
import { Form } from '../../const/interfaces.ts';
import { FC } from 'react';
import styles from './Form.module.scss';

interface ICheckboxSms {
  register: UseFormRegister<Form>;
}

const CheckboxSMS: FC<ICheckboxSms> = ({ register }) => {
  return (
    <label
      className={`${styles.form__wrapper} ${styles['form__wrapper-checkbox']}`}
    >
      <input
        className={styles.form__checbox}
        type='checkbox'
        {...register('checkbox')}
      />
      <div className={styles.form__customChecbox}>
        <svg
          className={styles.form__checkMark}
          width='13'
          height='11'
          viewBox='0 0 13 11'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11 2L4.8125 9L2 5.81818'
            stroke='#1647ED'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
      Не отправлять СМС.
    </label>
  );
};

export default CheckboxSMS;
