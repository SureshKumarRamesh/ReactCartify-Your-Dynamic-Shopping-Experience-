import TableTitle from "./components/TableTile";
import TableHeader from "./components/TableHeader";
import TableData from "./components/TableData";
import { useAppState } from "./AppState";

function DiscountTable() {
  const { state } = useAppState();

  const propertyList = [
    {
      propertyName: "vendor",
    },
    {
      propertyName: "TRADE A",
    },
    {
      propertyName: "TRADE B",
    },
    {
      propertyName: "TRADE C",
    },
    {
      propertyName: "TRADE D",
    },
  ];

  return (
    <div className="discount_table">
      <TableTitle title={"Discount Table"} />
      <table>
        <TableHeader
          columnList={["Vendor", "Trade A", "Trade B", "Trade C", "Trade D"]}
        />
        <TableData
          propertyList={[...propertyList]}
          dataList={[...state.discountList]}
        />
      </table>
    </div>
  );
}

export default DiscountTable;
