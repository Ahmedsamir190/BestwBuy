import { useEffect, useState } from "react";
import { auth } from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";

function UseAuth() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);
  return {
    currentUser,
  };
}

export default UseAuth;
