import { Button } from "@material-ui/core";
import React, { useState } from "react";
import PaypalGateway from './PaypalGateway';
import { green, purple } from '@material-ui/core/colors';

const Paypal = () => {
  const [pay, setPay] = useState(false);
  return (
    <div>
    {pay ? (
      <PaypalGateway/>
    ):(
      <Button
      size="large"
       variant="contained"
        color="primary"
        onClick={() => {
          setPay(true);
        }}
        className="btn btn-lg"
      >
        PayPal
      </Button>
      )}
    </div>
  );
};

export default Paypal;
