import styles from './Modal.module.scss';
import React, { FC } from 'react';

interface IModal {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<IModal> = ({ active, setActive }) => {
  return (
    <div
      className={`${styles.modal} ${active ? styles.active : ''}`}
      onClick={() => setActive(false)}
    >
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        Форма клиента создана &#9989;
        <div
          onClick={() => setActive(false)}
          className={styles.modal__content__close}
        >
          &#10006;
        </div>
      </div>
    </div>
  );
};

export default Modal;
