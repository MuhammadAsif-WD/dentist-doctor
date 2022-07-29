import React from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { CheckoutId } = useParams();

  return (
    <div className="p-10 text-sm xl:pt-64 xl:pb-56 ">
      <h1 className="text-xs xl:text-2xl">Service Details: {CheckoutId}</h1>
    </div>
  );
};

export default Checkout;
