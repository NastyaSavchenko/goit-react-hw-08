import { Formik, Field, Form, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

function ContactForm() {
  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too small")
      .max(30, "too long")
      .required("Required"),
    number: Yup.string()
      .matches(/^[0-9]{3,30}$/, "Must be a valid number")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (value, options) => {
    const newContact = {
      ...value,
    };
    dispatch(addContact(newContact));
    options.resetForm();
  };

  return (
    <div className={s.formBox}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <Form>
          <label htmlFor="" className={s.label}>
            <span>Name</span>
            <Field type="text" name="name" className={s.field} />

            <div className={s.errorContainer}>
              <ErrorMessage name="name" component="p" className={s.error} />
            </div>
          </label>
          <label htmlFor="">
            <span>Number</span>
            <Field type="number" name="number" className={s.field} />

            <div className={s.errorContainer}>
              <ErrorMessage name="number" component="p" className={s.error} />
            </div>
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
