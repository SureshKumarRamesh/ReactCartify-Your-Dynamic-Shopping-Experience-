function TableHeader({ columnList }) {
  return (
    <thead>
      <tr>
        {columnList.map((value, index) => {
          return (
            <th key={index} style={{ textAlign: "center" }}>
              {value}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default TableHeader;
