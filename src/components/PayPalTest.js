import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import venmo from '../assets/images/venmo-logo.png';

const StyledTest = styled.div` 
  font-size: 2rem;
  color: #329CD6;
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
    background-color: #329CD6;
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
  a.venmopayment {
    height: 45px;
    display: block;
    width: 100%;
    border-radius: 3px;
    margin-bottom: 1rem;
    background-color: white;
    color: #3d95ce;
    text-decoration: none;
    font-weight: bold;
    border: none;
    font-size: 1.2rem;
    font-family: inherit;
    line-height: 1.2;
    padding-top: 10px;

    :hover {
      transform: scale(1.0);
      background: #efefef;
    }

    img {
      height: 22px;
      width: auto;
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
  // const [paid, setPaid] = React.useState(false);
  // const [error, setError] = React.useState(null);
  // const { total, setFormValues, type, order } = props;

  // const paypalRef = React.useRef();
  // const autoResponseTemplateID = "template_80n79yr";
  // const autoResponseServiceID = "service_a8kogah";

  // const autoResponse = (serviceID, templateId, variables) => {
  //   window.emailjs.send(
  //     serviceID, templateId, variables
  //   ).then(res => {
  //     console.log('auto response email sent');
  //   }).catch( err => {
  //     console.error('Error', err)
  //   })
  // }
  
  //const initialValues = {
  //   companyName: '',
  //   contactName: '',
  //   contactTitle: '',
  //   email: '',
  //   phone: '',
  //   amount: '',
  //   level: ''
  // }

  //const initialValues = {
  //   name: '',
  //   email: '',
  //   phone: '',
  //   brick: '',
  //   brickName: ''
  // }

  //const initialValues = {
  //   name: '',
  //   email: '',
  //   phone: '',
  //   brick: '',
  //   amount: '',
  //   brickName: ''
  // }

  // const submitPaidOrder = async () => {
  //   try {
  //     const response = await fetch('https://v1.nocodeapi.com/leahfern/google_sheets/rkKLSMqOufyVjLPe?tabId=Paid', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify([[
  //         order.name ? order.name : '',
  //         order.email ? order.email : '',
  //         order.phone ? order.phone : '',
  //         order.amount ? order.amount : '',
  //         order.companyName ? order.companyName : '',
  //         order.contactName ? order.contactName : '',
  //         order.contactTitle ? order.contactTitle : '',
  //         order.level ? order.level : '',
  //         order.brick ? order.brick : '',
  //         order.brickName ? order.brickName : '',
  //         new Date().toLocaleString()]])
  //     });
  //     await response.json()
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // React.useEffect(() => {
  //   console.log(total)
  //   console.log(type)
  //   window.paypal
  //     .Buttons({
  //       createOrder: (data, actions) => {
  //         return actions.order.create({
  //           intent: "CAPTURE",
  //           purchase_units: [
  //             {
  //               description: `Valley For All ${type}`,
  //               amount: {
  //                 currency_code: "USD",
  //                 value: total,
  //               },
  //             },
  //           ],
  //         });
  //       },
  //       shippingPreference: "NO_SHIPPING",
  //       onApprove: async (data, actions) => {
  //         // const order = await actions.order.capture();
  //         // console.log(order);
  //         setPaid(true);
  //         submitPaidOrder();
  //         autoResponse(autoResponseServiceID, autoResponseTemplateID, {
  //           to_name: order.contactName ? order.contactName : order.name,
  //           to_email: order.email
  //         })
  //         alert("Payment successful. THANK YOU for your donation! You will receive a personalized receipt reflecting your tax-deductible donation within 7-10 business days.")
  //         setFormValues({name: '', email: '', phone: '', amount: ''})
  //       },
  //       onError: (err) => {
  //         setError(err);
  //         // console.error(err);
  //       },
  //       style: {
  //         layout:  'vertical',
  //         color:   'blue',
  //         shape:   'rect',
  //         label:   'paypal'
  //       }
  //     })
  //     .render(paypalRef.current);
  // }, [total]);

  // if (paid) {
  //   return <StyledTest className="status">Payment successful. THANK YOU for your donation! You will receive a personalized receipt reflecting your tax-deductible donation within 7-10 business days. </StyledTest>;
  // }

  // // If any error occurs
  // if (error) {
  //   return <StyledTest className="status">Error Occurred in processing payment! Please try again. If problems persist, please contact us at ValleyForAll@gmail.com.</StyledTest>;
  // }
  
  return (
    <StyledTest>
      <h4>Please select payment type:</h4>
      <Link to='/donate/venmo' className="venmopayment"><img src={venmo} alt="venmo" /></Link>
      <Link to="/donate/check" className="checkpayment">Check Payment</Link>
      {/* <div ref={paypalRef} /> */}
      <p className="assistance">Questions or need assistance? Contact Eric Foster at <a href="mailto:valleyforall@gmail.com">ValleyForAll@gmail.com</a> or <a href="tel:310-877-3822">310-877-3822</a></p>
    </StyledTest>
  )
}