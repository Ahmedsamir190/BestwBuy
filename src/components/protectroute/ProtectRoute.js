import { useRouter } from "next/router";
import UseAuth from "../useAuth/UseAuth";
import { useEffect } from "react";
import { auth } from "../../Firebase";

const ProtectRoute = ({ children }) => {
  const { user } = UseAuth();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/signin");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return <>{children}</>;
};

export default ProtectRoute;
