import { useFormik } from 'formik';
import * as yup from 'yup';

const movieValidationSchema = yup.object({
  email: yup.string().min(8).required().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
  password: yup.string().min(8, 'use min 8 character and strong password with symbols => @#$%').required(),
})

export function BasicForm() {
  const {handleBlur, handleChange, handleSubmit,touched,errors,values} = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: movieValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  })
  return (
    <form className='add-movie-form' onSubmit={handleSubmit}>
      <input value={values.email} type="email" placeholder="Email" name='email' onChange={handleChange} onBlur={handleBlur} />
      {touched.email && errors.email ? errors.email : null}
      <input value={values.password} type="password" placeholder="Password" name='password' onChange={handleChange} onBlur={handleBlur} />
      {touched.password && errors.password ? errors.password : null}
      {/* <h2>Errors</h2>
      <pre>{JSON.stringify(formik.errors)}</pre>
      <h2>Touched</h2>
      <pre>{JSON.stringify(formik.touched)}</pre> */}

      <button type="submit">Submit</button>
    </form>
  );
}
