import { FC } from 'react';
import { Form } from '../../const/interfaces.ts';
import { UseFormReset } from 'react-hook-form';
import styles from './Buttons.module.scss';

interface IResetButton {
  reset: UseFormReset<Form>;
}
const ResetButton: FC<IResetButton> = ({ reset }) => {
  return (
    <button
      className={`${styles.reset} ${styles.button}`}
      onClick={() =>
        reset({
          clientGroup: 'ОМС',
          doctor: '',
          fullName: '',
          gender: '',
          telephone: '',
          date: '',
          checkbox: false,
        })
      }
    >
      Сбросить{' '}
    </button>
  );
};

export default ResetButton;
