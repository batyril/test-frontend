import { FC } from 'react';
import styles from './Buttons.module.scss';
interface ISubmitButton {
  isValid: boolean;
}

const SubmitButton: FC<ISubmitButton> = ({ isValid }) => {
  return (
    <button
      className={`${styles.submit} ${styles.button}`}
      disabled={!isValid}
      type='submit'
    >
      Создать{' '}
    </button>
  );
};

export default SubmitButton;
