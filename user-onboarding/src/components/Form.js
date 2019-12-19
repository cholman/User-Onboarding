import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserForm = ({
    values,
    errors,
    touched,
    status
}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        console.log(
            "status has changed",
            status
        );
        status && 
        setUsers(users => [...users, status
        ]);
    }, [status]);
    return (
        <div className="user-form">
            <Form>
                <label htmlFor="username">
                    username:
                </label>
                <Field
                    id="username"
                    type="text"
                    name="username"/>
                <br/>
                <label htmlFor="email">
                    email:
                </label>
                <Field
                    id="email"
                    type="text"
                    name="email"/>
                <br/>
                <label htmlFor="password">
                    password:
                </label>
                <Field
                    id="password"
                    type="text"
                    name="password"/>
                <br/>
                <label htmlFor="tos">
                    Terms of Service
                </label>
                <Field
                    id="tos"
                    type="checkbox"
                    name="Terms of Service"
                    checked={values.tos}/>
                <br/>
                <button type="submit">Submit</button>
            </Form>
            {users.map(user => (
                <ul key={user.id}>
                    <li>User: {user.username}</li>
                    <li>email: {user.email}</li>
                    <li>password: {user.password}</li>
                </ul>
            ))}
        </div>
    )
}




const FormikUserForm = withFormik({
    mapPropsToValues({ 
        username,
        email,
        password
     }) {
        return {
            username: username || "",
            email: "",
            password: ""
        };
    }
    // handleSubmit(
    //     values,
    //     {setStatus, resetForm}
    // ) {
    //     console.log("submitting", values);
    //     axios
    //         .post(
    //             "https://reqres.in/api/users",
    //             values
    //         )
    //         .then(res => {
    //             console.log("success", res);
    //             setStatus(res.data);
    //             resetForm();
    //         })
    //         .catch(err => 
    //             console.log(err.response)
    //             );
    // }

    
})(UserForm);
export default FormikUserForm;