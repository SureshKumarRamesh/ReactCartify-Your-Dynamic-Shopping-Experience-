import TableTitle from "./components/TableTile";
import TableHeader from "./components/TableHeader";
import TableData from "./components/TableData";
import { useAppState } from "./AppState";

function ProductTable() {
  const { state, update } = useAppState();

  const addToCart = (value) => {
    let calculatedCartInfo = { ...value };
    if (calculatedCartInfo.discount) {
      calculatedCartInfo.discountedPrice = (value.price * value.discount) / 100;
    } else {
      calculatedCartInfo.discountedPrice = value.price;
    }
    update("SET_SHOPPINGLIST_DETAILS", { ...calculatedCartInfo });
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
      propertyName: "tags",
      customRender: (value, index) => {
        return <span>{value.tags ? value.tags.join() : ""}</span>;
      },
    },
    {
      propertyName: "vendor",
    },
    {
      propertyName: "",
      customRender: (value, index) => {
        return (
          <div
            tag={index}
            onClick={() => addToCart(value, index)}
            style={{
              backgroundColor: "green",
              color: "white",
              width: "100%",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <span tag={index} style={{ width: "100%" }}>
              Add To Cart
            </span>
          </div>
        );
      },
    },
  ];

  return (
    <div className="discount_table">
      <TableTitle title={"Product Table"} />
      <table>
        <TableHeader
          columnList={["#", "Product Name", "Price", "Tags", "Vendor", "Cart"]}
        />
        <TableData
          propertyList={[...propertyList]}
          dataList={[...state.productList]}
        />
      </table>
    </div>
  );
}

export default ProductTable;
