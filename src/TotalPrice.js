import { useAppState } from "./AppState";

function TotalPrice() {
  const { state } = useAppState();
  let shoppingList = [...state.shoppingCart];

  let totalPrice =
    shoppingList && shoppingList.length > 0
      ? shoppingList.reduce(
          (sum, currentValue) => sum + currentValue.discountedPrice,
          0
        )
      : 0;

  return (
    <div className="total_price">
      <h2>{`Total Price: Rs.${totalPrice.toFixed(2)}`}</h2>
    </div>
  );
}

export default TotalPrice;
