import React from "react";
import { useForm } from "react-hook-form";
import ApiHandler from "../ApiHandler";
import "./FavoriteForm.css";

function FavoriteForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    data.isFavorite = true;
    data.isUserCreated = true;
    ApiHandler.addFavorite(data);
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name" className="labelname">
        NAME
      </label>
      <input
        className="addfavorite__input inputname"
        name="name"
        defaultValue=""
        placeholder="Enter first name..."
        ref={register({ required: true })}
      />
      <label htmlFor="gender" className="labelgender">
        GENDER
      </label>

      <input
        className="addfavorite__input inputgender"
        name="gender"
        defaultValue=""
        placeholder="Enter gender..."
        ref={register}
      />
      <label htmlFor="birth_year" className="labelbirthyear">
        BIRTH YEAR (BBY / ABY)
      </label>

      <input
        className="addfavorite__input inputbirthyear"
        name="birth_year"
        defaultValue=""
        placeholder="Enter birth year..."
        ref={register}
      />
      <input type="submit" className="submitbutton" />
    </form>
  );
}

export default FavoriteForm;
