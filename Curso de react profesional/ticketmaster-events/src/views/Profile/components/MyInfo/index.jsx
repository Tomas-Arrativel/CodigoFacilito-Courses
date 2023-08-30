import { useForm } from 'react-hook-form';
import styles from './MyInfo.module.css';
import { useEffect } from 'react';

const USER_DATA = 'userData';

const MyInfo = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    try {
      const userData = JSON.parse(localStorage.getItem(USER_DATA)) || {};
      setValue('name', userData?.name);
      setValue('email', userData?.email);
      setValue('age', userData?.age);
    } catch (error) {
      console.error(error);
    }
  }, [setValue]);

  const handleFormSubmit = (data) => {
    try {
      localStorage.setItem(USER_DATA, JSON.stringify(data));
      alert('Usuario cargado correctamente');
    } catch (error) {
      alert('Ha ocurrido un error');
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          {...register('name', { required: true, min: 1, max: 120 })}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          {...register('email', { required: true, min: 1, max: 200 })}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Age
        <input
          type='number'
          {...register('age', {
            required: true,
            min: 1,
            max: 130,
            valueAsNumber: true,
          })}
          className={styles.input}
        />
      </label>
      <button type='submit' className={styles.submitBtn}>
        Save
      </button>
    </form>
  );
};

export default MyInfo;
