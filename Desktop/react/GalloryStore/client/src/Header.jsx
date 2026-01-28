import { useAuth } from "./context/authContext";
import { loginWithGoogle } from "./googleAuth";

export const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <img src={user.photoURL} width={40} />
          <span>{user.displayName}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={loginWithGoogle}>Login with Google</button>
      )}
    </div>
  );
};
