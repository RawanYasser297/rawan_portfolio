import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";


const provider = new GoogleAuthProvider();

const saveUserToDB = async (user) => {
  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      provider: "google",
      createdAt: new Date(),
    });
  }
};

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // بعد تسجيل الدخول نحفظه في Firestore
    await saveUserToDB(user);

    return user;
  } catch (err) {
    console.error(err);
  }
};
