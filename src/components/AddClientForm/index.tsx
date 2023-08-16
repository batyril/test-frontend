import FullName from '../FormElement/FullName.tsx';
import DateInput from '../FormElement/DateInput.tsx';
import GenderInput from '../FormElement/GenderInput.tsx';
import TelInput from '../FormElement/TelInput.tsx';
import ClientGroupSelect from '../FormElement/ClientGroupSelect.tsx';
import DoctorSelect from '../FormElement/DoctorSelect.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Form } from '../../const/interfaces.ts';
import styles from './AddClientForm.module.scss';

const AddClientForm = () => {
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
    console.log(data);
    reset();
  };
  return (
    <section className={styles.client}>
      <h2>Форма клиента поликлиники</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
};

export default AddClientForm;
