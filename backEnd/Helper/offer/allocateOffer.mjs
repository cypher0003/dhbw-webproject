export function allocateOffer(customer, offer) {
  //VALIDATION required => is user able to allocate?
  //allocates offer to a customer
  customer.allocatedOffers.push({
    ...offer,
    addedDate: new Date(),
  });
}
