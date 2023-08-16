import { useEffect, useState } from 'react';
import { requestName } from '../../request.ts';
import {
  FieldErrors,
  FieldNamesMarkedBoolean,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import styles from './Form.module.scss';
import { Form } from '../../App.tsx';

interface IFullName {
  watch: UseFormWatch<Form>;
  register: UseFormRegister<Form>;
  dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<Form>>>;
  errors: FieldErrors<Form>;
  setValue: UseFormSetValue<Form>;
}

const FullName = ({
  watch,
  register,
  dirtyFields,
  errors,
  setValue,
}: IFullName) => {
  const [names, setNames] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    requestName(watch('fullName')).then((res) =>
      setNames(res.suggestions.slice(5)),
    );
  }, [watch('fullName')]);

  const handleName = (name: string) => {
    setValue('fullName', name);
    setIsOpen(false);
  };

  return (
    <label className={styles.form__wrapper}>
      <input
        onClick={() => {
          setIsOpen(true);
        }}
        {...register('fullName', {
          required: 'Поле обязательное ',
          minLength: { value: 4, message: 'Слишком короткое сообщение ' },
        })}
        className={`${styles.form__input} ${
          dirtyFields.fullName ? 'changed' : ''
        }`}
      />
      <div className={styles.form__placeholder}>ФИО</div>
      {names.length > 0 && isOpen ? (
        <ul className={styles.form__helpName}>
          {names.map((item, index) => (
            <li
              onClick={() => handleName(item.value)}
              className={styles.form__helpNameItem}
              key={index}
            >
              {item.value}
            </li>
          ))}
        </ul>
      ) : null}

      <div>{errors?.fullName && <p>{errors?.fullName?.message} </p>}</div>
    </label>
  );
};

export default FullName;