import React from "react";
import { useForm } from "react-hook-form";
import { object, string, number, date } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../components/styles.css/index.css";

const UserProfilePage = () => {
  const regexForStr = /^[A-Za-z]+$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      object({
        name: string()
          .required("Name is required")
          .matches(regexForStr, "Name must contain only letters"),
        lastName: string()
          .required("Last Name is required")
          .matches(regexForStr, "Last Name must contain only letters"),
        age: number()
          .required("Age is a required field")
          .positive()
          .integer("Age must be an integer")
          .min(16, "Age must be between 16 and 100")
          .max(100, "Age must be between 16 and 100"),
        email: string().email(),
        createdOn: date().default(() => new Date()),
      })
    ),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="user-profile-container">
      <h2 className="user-profile-heading">User Profile </h2>
      <div className="user-profile-info">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder="Name" className="Name" />
          {errors.name && <p>{errors.name.message}</p>}
          <input
            {...register("lastName")}
            placeholder="Last Name"
            className="Last Name"
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
          <br />
          <input
            {...register("age")}
            placeholder="    Age"
            type="number"
            className="Age"
          />
          {errors.age && <p>{errors.age.message}</p>}
          <br />
          <input {...register("email")} placeholder="Email" className="Email" />
          {errors.email && <p>{errors.email.message}</p>}
          <br />

          <select {...register("gender")} className="Gender"  >
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Read The Bible</option>
          </select>
          <br />
          <input className="submit-button" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default UserProfilePage;
