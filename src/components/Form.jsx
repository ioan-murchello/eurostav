import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  } else if (values.name.length < 3) {
    errors.name = 'Must be minimal 3 characters';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      theme: '',
      deal: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <section className='container border border-green-400 rounded-lg p-8 my-8 mx-auto grid gap-x-5 gap-y-5 grid-cols-1 md:grid-cols-2'>
      <div className='flex flex-col gap-y-5 pt-0 pb-12 md:py-12'>
        <h2 className='text-xl md:text-3xl text-orange-400'>
          Pošlete nám zprávu
        </h2>
        <p className='text-xl '>
          Zavolejte nám, nebo vyplňte formulář a my vám v nejbližší době
          odpovíme.
        </p>
        <p className='text-xl md:text-2xl'>
          Volejte na <br />
          <Link
            className='ease-in duration-200 hover:text-orange-600'
            to='tel:+420 000 111 33'
          >
            +420 000 111 33
          </Link>
        </p>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className='flex flex-col justify-between gap-y-5'
      >
        <div className='flex flex-col gap-y-8'>
          <label className='input relative input-bordered flex items-center gap-2'>
            Name
            {formik.touched.name && formik.errors.name ? (
              <div className='text-red-400 order-3 absolute top-[-24px] right-0'>
                {formik.errors.name}
              </div>
            ) : null}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='w-4 h-4 opacity-70'
            >
              <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
            </svg>
            <input
              type='text'
              className='grow'
              placeholder='Milan Milosovic'
              id='name'
              name='name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </label>
          <label className='input relative input-bordered flex items-center gap-2'>
            Email
            {formik.touched.email && formik.errors.email ? (
              <div className='text-red-400 order-3 absolute top-[-24px] right-0'>
                {formik.errors.email}
              </div>
            ) : null}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='w-4 h-4 opacity-70'
            >
              <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
              <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
            </svg>
            <input
              className='grow'
              placeholder='example@gmail.com'
              id='email'
              name='email'
              type='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </label>
          <label className='input input-bordered flex items-center gap-2'>
            Vase sprava
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='w-4 h-4 opacity-70'
            >
              <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
              <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
            </svg>
            <input
              className='grow'
              placeholder='Hci udelat fasady'
              id='deal'
              name='deal'
              type='deal'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.deal}
            />
          </label>
        </div>

        <button className='btn btn-success' type='submit'>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
