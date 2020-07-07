function App() {
    const [tweets, setTweets] = React.useState([
      {
        id: 0,
        icon: '👨',
        displayName: 'takumi',
        content: '電車で席を譲った'
      },
      {
        id: 1,
        icon: '👩',
        displayName: 'kana',
        content: '子供のお弁当を作った'
      }
    ]);
  
    const addTweet = React.useCallback((tweet) => setTweets((prev) => [tweet, ...prev]), [setTweets]);
  
    return (
      <div>
        <TweetInput addTweet={addTweet}/>
        <Timeline tweets={tweets}/>
      </div>
    );
  }
  
  const target = document.querySelector('#app');
  ReactDOM.render(<App/>, target);