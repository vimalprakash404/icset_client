
import './App.css';
import checkServerStatus from './components/ServerFunction';
import { getAllUsers } from './components/ServerFunction';
import { getAllIbm } from './components/ServerFunction';
import { getAllGoogle } from './components/ServerFunction';
import { getUserById } from './components/ServerFunction';
import { getGoogleById } from './components/ServerFunction';
import { getIbmById } from './components/ServerFunction';
import { verifyUsersById } from './components/ServerFunction';
function App() {
  let online = false;
  
  checkServerStatus().then((status) => {
    online=status;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  
  
let userdata=undefined;
let googledata = undefined;
let ibmdata=undefined;
let singleuser = undefined;
let singlegoogle = undefined;
let singleibm = undefined;
let verfiyuser = undefined;
  async function getusers() {
    try {
      const userData = await getAllUsers();
      userdata=userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  async function getgoogle() {
    try {
      const userData = await getAllGoogle();
      googledata=userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  async function getibm() {
    try {
      const userData = await getAllIbm();
      ibmdata=userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  async function getsingluser(userId) {
    try {
      const userData = await getUserById(userId);
      singleuser = userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  async function getsingleIbm(userId) {
    try {
      const userData = await getIbmById(userId);
      singleibm = userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  async function getsingleGoogle(userId) {
    try {
      const userData = await getGoogleById(userId);
      singlegoogle = userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  async function verfiyUser(userId) {
    try {
      const userData = await verifyUsersById(userId);
      verfiyuser = userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  getusers()
  getgoogle()
  getibm()
  getsingluser("0001")
  getsingleIbm("0001")
  getsingleGoogle("0001")
  verfiyUser("0002")
  setTimeout(() => {
    console.log(online)
    console.log({user:userdata})
    console.log({google:googledata})
    console.log({ibm: ibmdata})
    console.log({singleuser:singleuser})
    console.log({singlegoogle:singlegoogle})
    console.log({singleibm:singleibm})
    console.log({verfiyuser:verfiyuser})
  }, 1000); 
  return (
    <div className="App">
      
    </div>
  );
}



export default App;
