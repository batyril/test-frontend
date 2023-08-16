import { FieldNamesMarkedBoolean, UseFormRegister } from 'react-hook-form';
import { FC } from 'react';
import { Form } from '../../const/interfaces.ts';

interface IClientGroupSelect {
  register: UseFormRegister<Form>;
  dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<Form>>>;
}

const ClientGroupSelect: FC<IClientGroupSelect> = ({
  register,
  dirtyFields,
}) => {
  return (
    <label className='form__wrapper'>
      Группа клиентов
      <select
        multiple
        className={`form__input ${dirtyFields.clientGroup ? 'changed' : ''}`}
        {...register('clientGroup', { required: true })}
      >
        <option value='VIP'>VIP</option>
        <option value=' Проблемные'> Проблемные</option>
        <option value=' ОМС'> ОМС</option>
        <option value=' ДМС'> ДМС</option>
      </select>
    </label>
  );
};

export default ClientGroupSelect;
