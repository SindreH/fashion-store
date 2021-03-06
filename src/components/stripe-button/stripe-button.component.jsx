import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeChecOutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_xrzTFm1wYHuI5dtb5ZXJfPN10050uJC6g8'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Co Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeChecOutButton