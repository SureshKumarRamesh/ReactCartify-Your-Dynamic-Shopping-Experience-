import { useEffect } from "react";
import productList from "./products/products";
// import productList from "https://piperedge.com/screening-test/assets/json/products.json";
import DiscountTable from "./DiscountTable";
import ProductTable from "./ProductTable";
import ShoppingTable from "./ShoppingTable";
import TotalPrice from "./TotalPrice";
import { useAppState } from "./AppState";

function App() {
  const { update } = useAppState();

  const fetchProductDetails = () => {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "http://localhost:3000");

    fetch("https://piperedge.com/screening-test/assets/json/products.json", {
      mode: "no-cors",
      headers: headers,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => console.log(json))
      .catch((error) => console.log("Authorization failed: " + error.message));
  };

  useEffect(() => {
    // fetchProductDetails();
    let discountTableData = {};

    productList.forEach((value) => {
      if (discountTableData[value.vendor]) {
        let trade = value.tags[0];
        if (!discountTableData[value.vendor][trade]) {
          discountTableData[value.vendor][trade] = value.discount;
        }
      } else {
        discountTableData[value.vendor] = {};
        let trade = value.tags[0];
        discountTableData[value.vendor][trade] = value.discount;
        discountTableData[value.vendor]["vendor"] = value.vendor;
      }
    });

    let discountListInformation = Object.values(discountTableData).sort(
      (a, b) => {
        if (a.vendor > b.vendor) {
          return 1;
        } else if (a.vendor < b.vendor) {
          return -1;
        } else {
          return 0;
        }
      }
    );

    update("SET_PRODUCT_LIST_AND_DISCOUNT", {
      productList: [...productList],
      discountInformation: { ...discountTableData },
      discountList: [...discountListInformation],
    });
  }, []);

  return (
    <>
      <DiscountTable></DiscountTable>
      <ProductTable></ProductTable>
      <ShoppingTable></ShoppingTable>
      <TotalPrice></TotalPrice>
    </>
  );
}

export default App;
