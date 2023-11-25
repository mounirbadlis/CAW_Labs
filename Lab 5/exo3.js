// 1.
const AuthenticationForm = () => {
  };
  
  // 2.
  const UserList = ({ users }) => {
    return (
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} - <button>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  
  // 3.
  
  // 4.
  const AppWithAuthentication = () => {
    const [users, setUsers] = useState([]);
  
    const handleFormSubmit = (user) => {
      setUsers([...users, user]);
    };
  
    return (
      <div>
        <AuthenticationForm onSubmit={handleFormSubmit} />
        <UserList users={users} />
      </div>
    );
  };
  