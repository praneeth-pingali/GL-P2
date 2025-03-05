import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createEmployee, updateEmployee } from "../api";

const EmployeeForm = ({ employee, onSuccess }) => {
  const initialValues = employee || {
    name: "",
    address: "",
    dept: "",
    manager: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    dept: Yup.string().required("Required"),
    manager: Yup.string().required("Required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    if (employee) {
      await updateEmployee(employee.id, values);
    } else {
      await createEmployee(values);
    }
    resetForm();
    onSuccess();
  };

  return (
    <div className="container">
      <h2 className="mt-3">{employee ? "Edit Employee" : "Add Employee"}</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="border p-3 mt-3">
          <div className="mb-3">
            <label>Name</label>
            <Field type="text" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label>Address</label>
            <Field type="text" name="address" className="form-control" />
            <ErrorMessage
              name="address"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="mb-3">
            <label>Department</label>
            <Field type="text" name="dept" className="form-control" />
            <ErrorMessage name="dept" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label>Manager</label>
            <Field type="text" name="manager" className="form-control" />
            <ErrorMessage
              name="manager"
              component="div"
              className="text-danger"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            {employee ? "Update" : "Add"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default EmployeeForm;
