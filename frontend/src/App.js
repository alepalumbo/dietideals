import {Route, Routes} from 'react-router-dom';
import Sidebar from './Sidebar.js';
import HomePage from './HomePage.js';
import Categories from './Categories.js';
import SellPage from './SellPage.js';
import BuyPage from './BuyPage.js';
import NotFound from './NotFound.js';
import SignIn from './SignIn.js';
import Signup from './SignUp.js';
import Profile from './Profile.js';
import EditProfile from './EditProfile.js';
import FixedTimeAuction from './FixedTimeAuction.js';
import ReverseAuction from './ReverseAuction.js';
import FixedDetail from './FixedDetail.js';
import ReverseDetail from './ReverseDetail.js';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route  path="/signup" element={<Signup />} />
      <Route path="/" element={<Sidebar />}>
        <Route exact path="/" element={<HomePage />} />
        <Route  path="/categorie" element={<Categories />} />
        <Route  path="/nuova-asta" element={<SellPage />} />
        <Route  path="/nuova-asta/asta-a-tempo-fisso" element={<FixedTimeAuction />} />
        <Route  path="/nuova-asta/asta-al-ribasso" element={<ReverseAuction />} />
        <Route  path="/compra" element={<BuyPage />} />
        <Route  path="/profilo" element={<Profile />} />
        <Route  path="/editprofile" element={<EditProfile />} />
        <Route  path="/fixeddetail" element={<FixedDetail />} />
        <Route  path="/reversedetail" element={<ReverseDetail />} />
        <Route  path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};