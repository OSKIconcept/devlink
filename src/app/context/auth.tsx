// import { onAuthStateChanged } from "firebase/auth";
// import firebase from "firebase/compat/app";
// import { createContext, useContext, useEffect, useState } from "react";
// import { auth } from "@/firebase";

// type State = {
//   currentUser: firebase.User;
// };

// export const AuthContext = createContext<firebase.User | null>(null);

// export const AUthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [currentUser, SetCurrentUser] = useState<firebase.User | null>(null);

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         SetCurrentUser({
//           email: user.email,
//           password: user.password,
//         });
//       } else {
//         SetCurrentUser(null);
//       }
//     });
//   }, []);

//   return (
//     <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
