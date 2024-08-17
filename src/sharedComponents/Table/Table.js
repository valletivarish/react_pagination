import React from "react";
import "./Table.css";
import Filter from "../Filters/Filter";
const Table = (props) => {
  const { data, setPage, setDirection, setFromDate, setSize, setSortBy, setToDate } = props;

  const content = data.content;

  if (content && content.length > 0) {
    const tableHeaders = (
      <tr>
        {/* //["id","senderAccount"] */}
        {Object.keys(content[0]).map((key) => (
          <th>{key}</th>
        ))}
      </tr>
    );
    const optionsList=Object.keys(content[0]);
    

    
    const tableData = content.map((d) => {
      return (
        <tr>
          {Object.keys(d).map((k) => {
            if (k === "senderAccount" || k === "receiverAccount") {
              return <td>{d[k].accountNumber || "N/A"}</td>;
            } else {
              return <td>{d[k]}</td>;
            }
          })}
        </tr>
      );
    });

    
    
    return (
      <div className="block-container">
        <div>
          <h2>Transactions</h2>
        </div>
        <div className="top">
        <Filter 
            dataList={optionsList}
            setDirection={setDirection}
            setFromDate={setFromDate}
            setSize={setSize}
            setSortBy={setSortBy}
            setToDate={setToDate}
          />
        </div>
        <div className="bottom">
          <table className="table">
            <thead>{tableHeaders}</thead>
            <tbody>{tableData}</tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default Table;
