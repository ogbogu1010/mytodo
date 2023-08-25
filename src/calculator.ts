// Html Elements
const shippingDesc = document.querySelector<HTMLDivElement>(".shipping_desc");
const inputElem = document.querySelector<HTMLInputElement>("input");
const buttonElem = document.querySelector<HTMLButtonElement>("button");
const totalShippingFee =
  document.querySelector<HTMLParagraphElement>("p.total");

// holds product cost value
let productCost: number = 0;
const productCostForFreeShipping: number = 5000;
const shippingFee: number = 500;

//
const handleProductCost: EventListener = (event: Event): void => {
  const targetValue = event.target as HTMLInputElement;
  productCost = Number(targetValue.value);
};

//
const calculateShippingCost = () => {
  if (productCost <= productCostForFreeShipping) {
    productCost = productCost + shippingFee;
    //
    totalShippingFee!.innerText = `Total const = ₦${productCost}`;
    shippingDesc!.innerHTML = `shipping fee = ₦${shippingFee}`;
  } else {
    //
    totalShippingFee!.innerText = `Total cost = ₦${productCost}`;
    shippingDesc!.innerHTML = `shipping fee = Free`;
  }
};

//
totalShippingFee!.innerText = `Total cost = ₦${productCost}`;

//
inputElem?.addEventListener("change", handleProductCost);
buttonElem?.addEventListener("click", calculateShippingCost);








