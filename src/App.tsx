import './App.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import 'react-dadata/dist/react-dadata.css';
import FullName from './components/Form/FullName.tsx';
import DoctorSelect from './components/Form/DoctorSelect.tsx';
import ClientGroupSelect from './components/Form/ClientGroupSelect.tsx';
import TelInput from './components/Form/TelInput.tsx';
import GenderInput from './components/Form/GenderInput.tsx';
import DateInput from './components/Form/DateInput.tsx';
import { Form } from './const/interfaces.ts';

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
      clientGroup: [],
    },
  });

  const onSubmit: SubmitHandler<Form> = (data) => {
    reset();
  };

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

        <DateInput register={register} errors={errors} />

        <GenderInput
          register={register}
          dirtyFields={dirtyFields}
          errors={errors}
        />

        <TelInput
          register={register}
          dirtyFields={dirtyFields}
          errors={errors}
        />

        <ClientGroupSelect register={register} />

        <DoctorSelect dirtyFields={dirtyFields} register={register} />

        <button type='reset'>Сбросить </button>
        <button disabled={!isValid} type='submit'>
          Создать{' '}
        </button>
      </form>
    </section>
  );
}

export default App;
