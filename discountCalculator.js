function calculateDiscountedPrice(quantity, pricePerItem) {
    // compute total price as quantity times unit price
    let totalPrice = quantity * pricePerItem;

    // apply 10% discount when buying 10 or more items
    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}


module.exports = calculateDiscountedPrice;