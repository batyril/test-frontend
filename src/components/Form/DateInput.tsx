import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FC } from 'react';
import { Form } from '../../const/interfaces.ts';

interface IDateInput {
  register: UseFormRegister<Form>;
  errors: FieldErrors<Form>;
}

const DateInput: FC<IDateInput> = ({ register, errors }) => {
  return (
    <label>
      Дата рождения
      <input
        className='form__input'
        type='date'
        {...register('date', {
          required: 'Поле обязательное ',
        })}
      />
      <div>{errors?.date && <p>{errors?.date?.message} </p>}</div>
    </label>
  );
};

export default DateInput;
