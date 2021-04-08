import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledTest = styled.div` 
  font-size: 2rem;
  color: #009FF7;
  padding: 1rem 0;
  line-height: 1.5;
  h4 {
    font-size: 1.2rem;
    color: white;
  }
  a.checkpayment {
    height: 45px;
    display: block;
    width: 100%;
    border-radius: 3px;
    margin-bottom: 1rem;
    background-color: #009FF7;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border: none;
    font-size: 1.2rem;
    font-family: inherit;
    line-height: 1.2;
    padding-top: 10px;

    :hover {
      transform: scale(1.0);
      background: #14a8f7;
    }
  }
  .assistance {
    color: white;
    font-size: 1rem;

    a {
      color: white;
    }
  }
`

export default function PayPalTest(props) {
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { total, setFormValues, type } = props;

  const paypalRef = React.useRef();
  
  React.useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: `Valley For All ${type}`,
                amount: {
                  currency_code: "USD",
                  value: total,
                },
              },
            ],
          });
        },
        shippingPreference: "NO_SHIPPING",
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          setFormValues({name: '', email: '', phone: '', amount: ''})
        },
        onError: (err) => {
          setError(err);
          // console.error(err);
        },
        style: {
          layout:  'vertical',
          color:   'blue',
          shape:   'rect',
          label:   'paypal'
        }
      })
      .render(paypalRef.current);
  }, [total]);

  if (paid) {
    return <StyledTest className="status">Payment successful. THANK YOU for your donation!</StyledTest>;
  }

  // If any error occurs
  if (error) {
    return <StyledTest className="status">Error Occurred in processing payment! Please try again. If problems persist, please contact us at ValleyForAll@gmail.com.</StyledTest>;
  }
  
  return (
    <StyledTest>
      <h4>Select a payment type:</h4>
      <Link to="/donate/check" className="checkpayment">Check Payment</Link>
      <div ref={paypalRef} />
      <p className="assistance">Having trouble? Contact Eric Foster at <a href="mailto:valleyforall@gmail.com">ValleyForAll@gmail.com</a> or <a href="tel:310-877-3822">310-877-3822</a></p>
    </StyledTest>
  )
}