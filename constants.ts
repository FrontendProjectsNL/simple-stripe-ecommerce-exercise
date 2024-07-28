export const constants = {
  paymentLinks: {
    monthly:
      process.env.NODE_ENV === 'development'
        ? 'https://buy.stripe.com/test_9AQ02R5ajbbP08M6oo'
        : '',
  },
};
