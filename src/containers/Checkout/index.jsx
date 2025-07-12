
import {Elements} from "@stripe/react-stripe-js"
import stripePromise from "../../config/stripeConfig";
import {CheckoutForm} from "../../components/Stripe/CheckoutForm";
import {useLocation} from "react-router-dom";

export function Checkout() {

const {state:{clientSecret},
} = useLocation();

  console.log(clientSecret);
  
  if(!clientSecret){
    return<div>Erro, tente novamente</div>

    
  }

  
  

  return (
    <Elements stripe={stripePromise} options={{clientSecret}}>
      <CheckoutForm />
    </Elements>
  );
}
