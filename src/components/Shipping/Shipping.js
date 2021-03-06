import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { clearTheCart, getStoredCart } from "../../utilities/fakedb";
import "./Shipping.css";
const Shipping = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const onSubmit = (data) => {
    const savedCart = getStoredCart();
    data.order = savedCart;

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("successFully");
          clearTheCart();
          reset();
        }
      });
    // console.log(data);
  };
  return (
    <div>
      <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="name"
          defaultValue={user.displayName}
          {...register("name")}
        />
        <input
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        <input placeholder="address" defaultValue="" {...register("address")} />
        <input placeholder="City" defaultValue="" {...register("city")} />
        <input placeholder="phone" defaultValue="" {...register("phone")} />

        {errors.email && <span className="error">This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Shipping;
