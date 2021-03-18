import React from 'react';
import styled from 'styled-components'

const StyledTest = styled.div`
  margin: 0 auto;
`

export default function PayPalTest(props) {
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { total } = props;

  const paypalRef = React.useRef();
  
  React.useEffect(() => {
    console.log(total)
    console.log(props.total)
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Your description",
                amount: {
                  currency_code: "USD",
                  value: total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          console.log(order);
        },
        onError: (err) => {
        //   setError(err),
          console.error(err);
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
    return <StyledTest>Payment successful. THANK YOU for your donation!</StyledTest>;
  }

  // If any error occurs
  if (error) {
    return <StyledTest>Error Occurred in processing payment! Please try again.</StyledTest>;
  }
  
  return (
    <StyledTest>
      <div ref={paypalRef} />
    </StyledTest>
  )
}
