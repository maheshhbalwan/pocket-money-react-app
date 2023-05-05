function App() {
  return (
    <main>
      <form action="">
        <div className="basic">
          <input type="text" placeholder={"+200 new samsung tv"} />
          <input type="datetime-local" />
        </div>
        <div className="description">
          <input type="text" placeholder={"description"} />
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
            <div className="name">Comission income</div>
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
