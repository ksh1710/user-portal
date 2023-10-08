import './App.css';
import { getDatabase, ref, set } from "firebase/database";
import { config } from "./firebaseConfig/config";

const db = getDatabase(config);
function App() {
  const putData = () => {
    set(ref(db, "users/name2"), {
      id: "1",
      fullName: "my name",
      emailId: "name@gmail.com",
      kietEmail: "name@kiet.edu",
      course: "Btech",
      branch: "CSE",
      year: "2",
    });
  };

  return (
    <div className="App">
      <button onClick={putData}>Put Data</button>
    </div>
  );
}

export default App;
