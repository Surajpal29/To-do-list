import React from "react";
import { useState } from "react";

function TodoList() {
  const [activity, setAcitvity] = useState("");
  const [listData, setListData] = useState([]);
  function addActivity() {
    //     setListData([...listData, activity]);
    //     console.log(listData);
    setListData((listData) => {
      const updateList = [...listData, activity];
      console.log(updateList);
      setAcitvity("");
      return updateList;
    });
  }

  function removeActivity(i) {
    const updatedListData = listData.filter((elem, id) => {
      return i != id;
    });
    setListData(updatedListData);
  }

  function removeAll() {
    setListData("");
  }

  return (
    <>
      <div className="container">
        <div className="header">ToDo List</div>
        <input
          type="text"
          placeholder="Add activity"
          value={activity}
          onChange={(e) => setAcitvity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className="List-heading">Here is your List : 😃</p>
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i} i>
                  <div className="listData">{data}</div>
                  <div className="btn-position">
                    <button onClick={() => removeActivity(i)}>remove(-)</button>
                  </div>
                </p>
              </>
            );
          })}
        {listData.length >= 1 && (
          <button onClick={removeAll}>Remove all</button>
        )}
      </div>
    </>
  );
}

export default TodoList;
