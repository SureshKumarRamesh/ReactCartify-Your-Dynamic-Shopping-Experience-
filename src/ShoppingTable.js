import TableTitle from "./components/TableTile";
import TableHeader from "./components/TableHeader";
import TableData from "./components/TableData";
import { useAppState } from "./AppState";

function ShoppingTable() {
  const { state, update } = useAppState();

  let shoppingCart = [...state.shoppingCart];

  const removeToCart = (index) => {
    shoppingCart.splice(index, 1);
    update("REMOVE_SHOPPINGLIST_DETAILS", [...shoppingCart]);
  };

  const propertyList = [
    {
      propertyName: "",
      customRender: (value, index) => {
        return <span>{index + 1}</span>;
      },
    },
    {
      propertyName: "name",
    },
    {
      propertyName: "price",
    },
    {
      propertyName: "discount",
    },
    {
      propertyName: "discountedPrice",
    },
    {
      propertyName: "vendor",
    },
    {
      propertyName: "",
      customRender: (value, index) => {
        return (
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <span tag={index} onClick={() => removeToCart(index)}>
              Remove Cart
            </span>
          </div>
        );
      },
    },
  ];

  return (
    <div className="discount_table">
      <TableTitle title={"Shopping Cart"} />
      <table>
        <TableHeader
          columnList={[
            "#",
            "Product Name",
            "Org Price",
            "Discount Percentage",
            "Discounted Price",
            "Vendor",
            "Remove Cart",
          ]}
        />
        <TableData propertyList={[...propertyList]} dataList={shoppingCart} />
      </table>
    </div>
  );
}

export default ShoppingTable;
