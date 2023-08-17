import FullName from '../FormElement/FullName.tsx';
import DateInput from '../FormElement/DateInput.tsx';
import GenderInput from '../FormElement/GenderInput.tsx';
import TelInput from '../FormElement/TelInput.tsx';
import ClientGroupSelect from '../FormElement/ClientGroupSelect.tsx';
import DoctorSelect from '../FormElement/DoctorSelect.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Form } from '../../const/interfaces.ts';
import styles from './AddClientForm.module.scss';
import SubmitButton from '../Buttons/SubmitButton.tsx';
import ResetButton from '../Buttons/ResetButton.tsx';

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
      doctor: '',
      clientGroup: [],
    },
  });

  const onSubmit: SubmitHandler<Form> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <section className={styles.addClient}>
      <h2 className={styles.form__name}>Форма клиента поликлиники</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <FullName
          dirtyFields={dirtyFields}
          watch={watch}
          register={register}
          errors={errors}
          setValue={setValue}
        />

        <GenderInput
          register={register}
          dirtyFields={dirtyFields}
          errors={errors}
        />
        <DoctorSelect dirtyFields={dirtyFields} register={register} />

        <TelInput
          register={register}
          dirtyFields={dirtyFields}
          errors={errors}
        />

        <DateInput register={register} errors={errors} />

        <ClientGroupSelect register={register} />

        <div className={styles.form__buttons}>
          <ResetButton reset={reset} />
          <SubmitButton isValid={isValid} />
        </div>
      </form>
    </section>
  );
};

export default AddClientForm;
