export function allocateOffer  (customer, offer){
//validierung noch durchführen

customer.allocatedOffers.push({
    ...offer,
    addedDate: new Date(),
});
}