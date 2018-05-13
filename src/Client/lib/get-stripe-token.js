export const getStripeToken = (card) =>
new Promise((resolve, reject) => {
  Stripe.card.createToken(card, (status, { error, id }) => {
    console.log(id);
    debugger;
    if (error) {
      reject(error.message);
    } else {
      resolve(id);
    }
  });
});