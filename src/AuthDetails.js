import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";

function AuthDetails() {
  const [authuser, setAuthuser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthuser(user);
      } else {
        setAuthuser(null);
      }
    });
  }, []);
  return (
    <div>
      {authuser ? <p>{`signin as ${authuser.email}`}</p> : <p>signout</p>}
    </div>
  );
}

export default AuthDetails;
