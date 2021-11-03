import './App.css';
import UserProfile  from './UserProfilewChildren'
import UserProfileNC  from './UserProfileNoChildren'

const friends=[{id:1, name:'Jo'},{id:2, name:'Jim'},{id:3, name:'Jamie'},{id:4, name:'Jane'},]
function App() {
  return (
    <div className="App">
        <UserProfile friends={friends} displayName={"List using children"} />
        <UserProfileNC  friends={friends} displayName={"List without using children"}/>
    </div>
  );
}

export default App;
