// import { response } from "express";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");

  function addNewTransaction(e) {
    e.preventDefault();
    // const url = process.env.REACT_APP_API_URL + "/transaction";
    const url = "http://localhost:5000/api" + "/transaction";
    // const url = "https://localhost:4000/api/test" ;
    // const url = "https://localhost:4000/api" + "/test";
    console.log(url);

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, datetime }),
    }).then((response) => {
      response.json().then((json) => {
        console.log("result", json);
      });
    });
  }

  return (
    <main>
      <form action="" onSubmit={addNewTransaction}>
        <div className="basic">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"name"}
          />
          <input
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
            type="datetime-local"
          />
        </div>
        <div className="description">
          <input
            type="text"
            value={description}
            onChange={(e) => e.target.value}
            placeholder={"description"}
          />
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">It was time for new TV</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2023-05-05 15:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">It was time for new TV</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2023-05-06 15:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Commission income</div>
            <div className="description">from clients</div>
          </div>
          <div className="right">
            <div className="price green">$400</div>
            <div className="datetime">2023-05-07 15:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
