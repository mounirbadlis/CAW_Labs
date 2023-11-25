const AddDivForm = () => {
    const [divStyle, setDivStyle] = useState({
      height: '100px',
      width: '100px',
      backgroundColor: '#ccc',
    });
  
    const handleChange = (e) => {
      setDivStyle({
        ...divStyle,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Height:
          <input type="text" name="height" value={divStyle.height} onChange={handleChange} />
        </label>
        <label>
          Width:
          <input type="text" name="width" value={divStyle.width} onChange={handleChange} />
        </label>
        <label>
          Background Color:
          <input
            type="text"
            name="backgroundColor"
            value={divStyle.backgroundColor}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
        <div style={divStyle}></div>
      </form>
    );
  };
  