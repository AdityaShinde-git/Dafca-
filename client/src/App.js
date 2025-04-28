

import { GoogleOAuthProvider } from '@react-oauth/google';


import Messenger from "./components/Messenger";
import AccountProider from './context/AccountProvider';



function App() {

const clientId='102880211766-jd3736psvlrciqoh0n72dde84fapitv1.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProider>
      <Messenger/>
      </AccountProider>

    </GoogleOAuthProvider>
  );
}

export default App;
