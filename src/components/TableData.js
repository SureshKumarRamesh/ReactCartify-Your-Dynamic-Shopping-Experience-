function TableData({ propertyList = [], dataList = [] }) {
  return (
    <tbody>
      {dataList.map((value, index) => {
        return (
          <tr key={index}>
            {propertyList.map((keyInfo, keyIndex) => {
              if (keyInfo.customRender) {
                return (
                  <td key={keyIndex} style={{ textAlign: "center" }}>
                    {keyInfo.customRender(value, index)}
                  </td>
                );
              } else {
                return (
                  <td key={keyIndex} style={{ textAlign: "center" }}>
                    {value[keyInfo.propertyName]
                      ? value[keyInfo.propertyName]
                      : "N/A"}
                  </td>
                );
              }
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableData;
