export const getDiscountedPricePercentage = (
    originalPrice: any,
    discountedPrice: any
) => {
    const discount = originalPrice - discountedPrice;

    const discountPercentage = (discount / originalPrice) * 100;

    return discountPercentage.toFixed(2);
};
