import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* steps for authentication
---------------------------
step-1:initial setUp
1.firebase:create project
2.create web app
3.get configaration
4.initialize firebase
5.Enable Auth Method

-------------------
step-2:Set Up Component
1.Create Login Component
2.Create Register component
3.Create Route for Login and Register

step-3: set auth system
1.set up sign In method
2.SetUp sign out method
3.user state
4.special observer
5.return necessary mehtods and states from useFirebase
---------------------
step-4: create auth context hook(useAuth)
1.create a auth context
2.Create context provider
3.set context provider context value
4.use auth provider
5.create useAuth Hook
-----------
step-5: create private Route
1.Create Private Route
2.Set private Route
---------------------
step-6:Redirect after login
1.after login redirect user to their desired destination

*/