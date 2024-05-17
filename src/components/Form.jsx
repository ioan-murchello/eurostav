import { ErrorMessage, Field, Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as YUP from 'yup';

const schema = YUP.object({
  name: YUP.string().min(3, 'Minimal 3 characters').required('Required field'),
  email: YUP.string().email('Wrong email').required('Required field'),
  work: YUP.string().min(5, 'More than 5 characters'),
});

const CustomForm = () => {
  return (
    <section className='container border border-green-400 rounded-lg p-8 my-8 mx-auto grid gap-x-5 gap-y-5 grid-cols-1 lg:grid-cols-2'>
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
      <Formik
        initialValues={{
          name: '',
          email: '',
          work: '',
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className='flex flex-col justify-between gap-y-5'>
          <div className='flex flex-col gap-y-3'>
            <label htmlFor='name'>Vase Jmeno</label>
            <Field
              className='border rounded-lg p-3 relative'
              placeholder='Milan Milosovic'
              id='name'
              name='name'
              type='text'
            />
            <ErrorMessage
              className='text-red-400 order-3 absolute top-[-24px] right-0'
              name='name'
              component='div'
            />
            <label htmlFor='email'>Email</label>
            <Field
              className='border rounded-lg p-3 relative'
              placeholder='example@gmail.com'
              id='email'
              name='email'
              type='email'
            />
            <ErrorMessage
              className='text-red-400 order-3 absolute top-[-24px] right-0'
              name='email'
              component='div'
            />
            <label htmlFor='name'>Vase sprava</label>

            <Field
              className='border rounded-lg p-3 relative'
              placeholder='Hci udelat fasady'
              id='work'
              name='work'
              type='text'
            />
            <ErrorMessage
              className='text-red-400 order-3 absolute top-[-24px] right-0'
              name='work'
              component='div'
            />
          </div>

          <button className='btn btn-success' type='submit'>
            Submit
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default CustomForm;
