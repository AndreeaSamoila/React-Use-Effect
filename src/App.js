import { useEffect, useState } from "react";
import "./App.css";
import { ScrollInfo } from "./components/ScrollInfo";
import { UserItem } from "./components/UserItem";
import { UserList } from "./components/UserList";
import { getUsers } from "./services/user";
import {getPosts} from "./services/post";
import {PostItem} from "./components/PostItem";
import {PostList} from "./components/PostList";

const users = [
  {
    networthStatus: "up",
    name: "Bill Gates",
    email: "bill.gates@microsoft.com",
  },
  {
    networthStatus: "same",
    name: "Lionel Messi",
    email: "lionel.messi@gmail.com",
  },
  {
    networthStatus: "down",
    name: "Steve Jobs",
    email: "steve.jobs@apple.com",
  },
];

function App() {
  const [contor, setContor] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const [apiUsers, setApiUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  const [apiPosts, setApiPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(false);

  const [pare, setPare] = useState(0);
  const [array, setArray] = useState([1, 2, 3]);

  useEffect(() => {
    setPare(array.filter((element) => element % 2 === 0).length);
  }, [array]);

  useEffect(() => {
    console.log("App was rendered", contor);
  });

  useEffect(() => {
    console.log("Loaded component");
  }, []);

  useEffect(() => {
    console.log("Contor has changed");
  }, [contor]);

  useEffect(() => {
    getUsers().then((data) => {
      setApiUsers(data);
    });
  }, []);

  useEffect(() => {
    getPosts().then((data) => {
      setApiPosts(data);
    });

  }, []);

  function handleToggleDropdown() {
    setShowDropdown((showDropdown) => !showDropdown);
  }

  // avem un effect cand se modifica array, sa se modifice si state-ul `pare`
  // cu numarul de elemente pare din array

  function handleAddNumbers() {
    // 1. Sa se adauge un numar in plus la finalul listei
    setArray([...array, array[array.length - 1] + 1]);
  }
  function handleDisplayUsers() {
    setShowUsers(!showUsers);
  }

  function handleDisplayPosts() {
    setShowPosts(!showPosts);
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          setContor(contor + 1);
        }}
      >
        Contor {contor}
      </button>

      <button onClick={handleToggleDropdown}>
        {showDropdown ? "Hide" : "Show"}
      </button>

      {showDropdown && <div>Dropdown present</div>}
      {showDropdown && <ScrollInfo />}

      {/*solution 1 */}

      <button onClick={handleDisplayUsers}>{showUsers ? "Hide Users List" : "Display Users List" }</button>
      <button onClick={handleDisplayPosts}>{showPosts ? "Hide Posts List" : "Display Posts List"}</button>

      {showUsers &&  <UserList users={apiUsers} />}
      {showPosts && <PostList posts={apiPosts} />}

      {/*solution 2  */}

      {/*<button onClick={handleDisplayUsers}>Display the users</button>*/}
      {/*<button onClick={handleDisplayPosts}>Display the posts</button>*/}

      {/*{showUsers ? <UserList users={apiUsers} /> : 'Users are not displayed ' }*/}
      {/*{showPosts ? <PostList posts={apiPosts} /> : 'Posts are not displayed' }*/}

      {users.map((user, index) => {
        return (
          <UserItem
            key={index}
            email={user.email}
            name={user.name}
            networthStatus={user.networthStatus}
          />
        );
      })}

      <p>In array exista {pare} elemente pare</p>
      {array.map((nr) => (
        <p key={nr}>{nr}</p>
      ))}
      <button onClick={handleAddNumbers}>Add Numbers</button>

    </div>
  );
}

export default App;
