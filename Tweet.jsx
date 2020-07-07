function Tweet(props) {
    const [count, setCount] = React.useState(0);
    const handleClick = React.useCallback(() => {setCount(prev => prev + 1)},[]);
  
    return (
      <div className="tweet">
        <div className="icon-container">{props.icon}</div>
        <div className="body-container">
          <div className="status-display">
            <span className="display-name">{props.displayName}</span>
          </div>
          <div className="content">{props.content}</div>
          <div className="status-action">
            <button onClick={handleClick} className = "button">👏: {count}</button>
          </div>
        </div>
      </div>
    );
  }