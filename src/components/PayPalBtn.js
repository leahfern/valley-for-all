import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

class PayPalBtn extends React.Component {
    render() {
      const { amount, onSuccess, currency } = this.props;
        return (
            <PayPalButton
              amount={amount}
              currency={currency}
              onSuccess={(details, data) => onSuccess(details, data)}
              options={{
                clientId: "ATJRB5ykilAeF-zKqT8-650aKbaEjHH6QI3rJbc1H95jYV8Qg5LGnfQTW7-gNUDf_CRPjxsWWjfXvpYB"
              }}
          />
        );
    }
}
export default PayPalBtn;