import {
  FieldErrors,
  FieldNamesMarkedBoolean,
  UseFormRegister,
} from 'react-hook-form';
import { FC } from 'react';
import { Form } from '../../const/interfaces.ts';

interface IGenderInput {
  register: UseFormRegister<Form>;
  dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<Form>>>;
  errors: FieldErrors<Form>;
}
const GenderInput: FC<IGenderInput> = ({ dirtyFields, register, errors }) => {
  return (
    <label className='form__wrapper'>
      <input
        className={`form__input ${dirtyFields.gender ? 'changed' : ''}`}
        {...register('gender')}
      />
      <div className='form__placeholder'>Пол</div>
      <div>{errors?.gender && <p>{errors?.gender?.message} </p>}</div>
    </label>
  );
};

export default GenderInput;
