import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import VerifyEmail from "./pages/authentication/VerifyEmail";
import AboutPage from "./pages/about/AboutPage";
import UserDashboard from "./pages/dashboard/UserDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import AdminCampaigns from "./pages/dashboard/AdminCampaigns";
import AdminUsers from "./pages/dashboard/AdminUsers";
import AdminTransactions from "./pages/dashboard/AdminTransactions";
import ProfileManagement from "./pages/dashboard/ProfileManagement";
import MyCampaigns from "./pages/dashboard/MyCampaigns";
import DonationsReceived from "./pages/dashboard/DonationsReceived";
import CampaignsPage from "./pages/campaigns/CampaignsPage";
import CampaignDetails from "./pages/campaigns/CampaignDetails";
import StartCampaign from "./pages/campaigns/StartCampaign";
import CategoryFilter from "./pages/campaigns/CategoryFilter";
import ExplorePage from "./pages/search/ExplorePage";
import SearchResults from "./pages/search/SearchResults";
import TrendingCampaigns from "./pages/search/TrendingCampaigns";
import PaymentPage from "./pages/transactions/PaymentPage";
import PaymentSuccess from "./pages/transactions/PaymentSuccess";
import DonationHistory from "./pages/transactions/DonationHistory";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dashboard/user" element={<UserDashboard />} />
        {/*Opening admin's dashboard from navbar for now        */}
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/admin/campaigns" element={<AdminCampaigns />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/transactions" element={<AdminTransactions />} /> 
        <Route path="/dashboard/profile" element={<ProfileManagement />} />
        <Route path="dashboard/my-campaigns" element={<MyCampaigns />} />
        <Route path="/dashboard/donations-received" element={<DonationsReceived />} />
        <Route path="/campaigns" element={<CampaignsPage />} />
        <Route path="/campaigns/:id" element={<CampaignDetails />} />
        <Route path="/campaigns/start" element={<StartCampaign />} />
        <Route path="/campaigns/category" element={<CategoryFilter />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/trending" element={<TrendingCampaigns />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/donation-history" element={<DonationHistory />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;