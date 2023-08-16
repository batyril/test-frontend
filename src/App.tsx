import './App.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import 'react-dadata/dist/react-dadata.css';
import FullName from './components/Form/FullName.tsx';

export interface Form {
  fullName: string;
  date: '';
  telephone?: number;
  gender: string;
  ClientGroup: [];
  doctor: [];
}

function App() {
  const {
    register,
    watch,
    setValue,
    formState: { errors, isValid, dirtyFields },
    handleSubmit,
    reset,
  } = useForm<Form>({
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      date: '',
      gender: '',
      doctor: [],
    },
  });

  const onSubmit: SubmitHandler<Form> = (data) => {
    console.log(data);
    reset();
  };

  const validateTelephone = (value: number) => {
    if (!value.startsWith('7')) {
      return 'Номер телефона должен начинаться с 7';
    }
    if (value.length !== 11) {
      return 'Номер телефона должен содержать 11 цифр';
    }
    return true;
  };

  console.log(watch('fullName'));

  return (
    <section className='client'>
      <h2>Форма клиента поликлиники</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <FullName
          dirtyFields={dirtyFields}
          watch={watch}
          register={register}
          errors={errors}
          setValue={setValue}
        />

        <label>
          Дата рождения
          <input
            className='form__input'
            type='date'
            {...register('date', {
              required: 'Поле обязательное ',
            })}
          />
        </label>

        <div>{errors?.date && <p>{errors?.date?.message} </p>}</div>
        <div className='form__wrapper'>
          <input
            className={`form__input ${dirtyFields.telephone ? 'changed' : ''}`}
            {...register('telephone', {
              required: 'Поле обязательное ',
              validate: validateTelephone,
            })}
            type='number'
          />
          <div className='form__placeholder'>Номер телефона</div>
          <div>{errors?.telephone && <p>{errors?.telephone?.message} </p>}</div>
        </div>

        <div className='form__wrapper'>
          <input
            className={`form__input ${dirtyFields.gender ? 'changed' : ''}`}
            {...register('gender')}
          />
          <div className='form__placeholder'>Пол</div>
        </div>

        <label className='form__wrapper'>
          Группа клиентов
          <select
            multiple
            className={`form__input ${dirtyFields.gender ? 'changed' : ''}`}
            {...register('ClientGroup', { required: true })}
          >
            <option value='VIP'>VIP</option>
            <option value=' Проблемные'> Проблемные</option>
            <option value=' ОМС'> ОМС</option>
            <option value=' ДМС'> ДМС</option>
          </select>
        </label>

        <label className='form__wrapper'>
          <select
            className={`form__input ${dirtyFields.doctor ? 'changed' : ''}`}
            {...register('doctor', { required: true })}
          >
            <option value='' disabled></option>
            <option value='Петров'>Петров</option>
            <option value='Захаров'>Захаров</option>
            <option value='Черниговская'>Черниговская</option>
          </select>
          <div className='form__placeholder'> Группа клиентов</div>
        </label>

        <button type='reset'>Сбросить </button>
        <button disabled={!isValid} type='submit'>
          Создать{' '}
        </button>
      </form>
    </section>
  );
}

export default App;
