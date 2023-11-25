// 1.
const DisplayTab = () => {
    const tab = ["hello", "world", "from", "react"];
  
    return (
      <ul>
        {tab.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    );
  };
  
  // 2.
  const DisplayTabWithIndex = () => {
    const tab = ["hello", "world", "from", "react"];
  
    return (
      <ul>
        {tab.map((element, index) => (
          <li key={index}>{`Element ${index + 1} is: ${element}`}</li>
        ))}
      </ul>
    );
  };
  
  // 3.
  const DisplayTabWithClick = () => {
    const [tab, setTab] = useState(["hello", "world", "from", "react"]);
  
    const handleRemove = (index) => {
      const newTab = tab.filter((_, i) => i !== index);
      setTab(newTab);
    };
  
    return (
      <ul>
        {tab.map((element, index) => (
          <li key={index} onClick={() => handleRemove(index)}>
            {`Element ${index + 1} is: ${element}`}
          </li>
        ))}
      </ul>
    );
  };
  
  // 4.
  const DisplayTabWithProps = ({ table }) => {
    return (
      <ul>
        {table.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    );
  };
  
  // 5.
  const AppWithTwoTables = () => {
    const table1 = ["apple", "banana", "cherry"];
    const table2 = ["dog", "cat", "bird"];
  
    return (
      <div>
        <DisplayTabWithProps table={table1} />
        <DisplayTabWithProps table={table2} />
      </div>
    );
  };
  