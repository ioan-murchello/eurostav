import { ErrorMessage, Field, Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as YUP from 'yup';

const schema = YUP.object().shape({
  name: YUP.string().min(3, 'Minimal 3 characters').required('Required field'),
  email: YUP.string().email('Email format is not valid').required('Required field'),
  work: YUP.string().min(5, 'More than 5 characters'),
});

const CustomForm = () => {
  const onSubmitForm = async (obj) => {
    try {
      
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;c harset=UTF-8',
        },
        body: JSON.stringify(obj),
      });
      if(res.status === 201){
        alert('I wrhite you soon')
      }else{
        console.log('error', res.status);
      }
      console.log(res)
      return res;
    } catch (error) {
      console.log(error);
    }
  }
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
        onSubmit={(values, actions) => {
          onSubmitForm({ ...values, userId: 1 }); 
          actions.resetForm()
        }}
      >
        {() => (
          <Form className='flex flex-col justify-between gap-y-5'>
            <div className='flex flex-col gap-y-3'>
              <label htmlFor='name'>Vase Jmeno</label>
              <Field
                className='border rounded-lg p-3'
                placeholder='Milan Milosovic'
                 
                name='name'
                type='text'
              />
              <ErrorMessage
                className='text-red-400'
                name='name'
                component='div'
              />
              <label htmlFor='email'>Email</label>
              <Field
                className='border rounded-lg p-3'
                placeholder='example@gmail.com'
                
                name='email'
                type='email'
              />
              <ErrorMessage
                className='text-red-400'
                name='email'
                component='div'
              />
              <label htmlFor='work'>Vase sprava</label>
  
              <Field
                className='border rounded-lg p-3'
                placeholder='Hci udelat fasady'
                 
                name='work'
                type='text'
              />
              <ErrorMessage
                className='text-red-400'
                name='work'
                component='div'
              />
            </div>
  
            <button className='btn btn-success' type='submit'>
              Submit
            </button>
          </Form>

        )}
      </Formik>
    </section>
  );
};

export default CustomForm;
