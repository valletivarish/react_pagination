import React from "react";

const Filter = (props) => {
    const options=props.dataList.filter(key => key !== "senderAccount" && key !== "receiverAccount" && key!== "transactionType")  
    .map(key => (
        <option key={key}>{key}</option> 
    ));

    const search=()=>{
        const fromValue = document.querySelector("input[name='from']").value;
        const toValue = document.querySelector("input[name='to']").value;
        const sortByValue = document.querySelector("select[name='sortBy']").value;
        const directionValue = document.querySelector("select[name='direction']").value;

        const setDirection= props.setDirection;
        if(directionValue!=="Direction"){
            setDirection(directionValue)
        }
        const setSortBy = props.setSortBy;
        if(sortByValue!=="Sort By"){
            setSortBy(sortByValue)
        }
        const setFromDate= props.setFromDate;
        setFromDate(fromValue)
        const setToDate = props.setToDate;
        setToDate(toValue)
    }
    const reset = () => {
        document.querySelector("input[name='from']").value = "";
        document.querySelector("input[name='to']").value = "";
        document.querySelector("select[name='sortBy']").value = "Sort By";
        document.querySelector("select[name='direction']").value = "Direction";
    };

  return (
    <>
      <div className="input-container">
        <label>From Date :</label>
        <input type="date" name="from" />
      </div>
      <div className="input-container">
        <label>To Date :</label>
        <input type="date" name="to" />
      </div>
      <div className="input-container">
        <select
          class="form-select"
          aria-label="Default select example"
          name="sortBy"
        >
          <option selected>Sort By</option>
          {options}
        </select>
      </div>
      <div className="input-container">
        <select
          class="form-select"
          aria-label="Default select example"
          name="direction"
        >
          <option selected>Direction</option>
          <option value="asc">Ascending</option>
          <option value="desc">descending</option>
        </select>
      </div>
      <div className="input-container">
        <button type="button" class="btn btn-primary" onClick={search}>
          Search
        </button>
      </div>
      <div className="input-container">
        <button type="button" class="btn btn-primary" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Filter;
