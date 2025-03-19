import { useState } from "react";
export default function UserProfile() {
  const [user, setUser] = useState({ name: "Alice", age: 12 });
  const increaseAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <>
      <h1>{user.name}</h1>
      <h1>Age {user.age}</h1>
      <button onClick={increaseAge} >increase</button>
    </>
  );
}
