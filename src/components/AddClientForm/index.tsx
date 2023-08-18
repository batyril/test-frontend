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
import CheckboxSMS from '../FormElement/CheckboxSMS.tsx';
import { useState } from 'react';
import Modal from '../Modal';

const defaultValues = {
  fullName: '',
  gender: '',
  doctor: '',
  clientGroup: 'ОМС',
  checkbox: false,
};

const AddClientForm = () => {
  const [active, setActive] = useState(false);
  const {
    register,
    watch,
    setError,
    setValue,
    formState: { errors, isValid, dirtyFields },
    handleSubmit,
    reset,
    trigger,
  } = useForm<Form>({
    mode: 'onChange',
    defaultValues,
  });

  const onSubmit: SubmitHandler<Form> = () => {
    setActive(true);
    reset({
      clientGroup: 'ОМС',
      doctor: '',
      fullName: '',
      gender: '',
      telephone: '',
      date: '',
      checkbox: false,
    });
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

        <DateInput
          watch={watch}
          setError={setError}
          trigger={trigger}
          register={register}
          errors={errors}
        />

        <ClientGroupSelect errors={errors} register={register} />

        <div className={styles.form__buttons}>
          <CheckboxSMS register={register} />
          <ResetButton reset={reset} />
          <SubmitButton isValid={isValid} />
        </div>
      </form>
      <Modal active={active} setActive={setActive} />
    </section>
  );
};

export default AddClientForm;
