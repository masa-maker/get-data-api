import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

    const onClickUsers = () => {
      axios.get("https://jsonplaceholder.typicode.com/users").then((rez) => {
        console.log(rez.data);
      });
    };
    
  const onClickUser1 = () => {
    alert("user1");
  };

  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のuser</button>
    </div>
  );
}

export default App;
