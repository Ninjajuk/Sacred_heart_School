
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import IntroductionPage from './pages/IntroductionPage';
import ContactusPage from './pages/ContactUs';
import AdminiatrationAndJurisdiction from './pages/AdminiatrationAndJurisdiction';
import VisionMission from './pages/VisionMission';
import PrincipalMessage from './components/PrincipalMessage';
import HeadmistressMessage from './pages/HeadmistressMessage';
import PrincipalMessagePage from './pages/PrincipalMessagePage';
import CourseOfStudyPage from './pages/CourseOfStudyPage';
import FeeStructurePage from './pages/FeeStructurePage';
import FacultyPage from './pages/FacultyPage';
import UniformPage from './pages/UniformPage';
import AdmissionEligibilty from './pages/AdmissionEligibilty';
import ApplicationProcessPage from './pages/ApplicationProcessPage';
import AdmissionProcedure from './pages/AdmissionProcedure';
import RulesAndRegulation from './pages/RulesAndRegulation';
import GallaryPage from './pages/GallaryPage';



function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route path="/introduction" element={<IntroductionPage />} />
        <Route path="/administration-jurisdiction" element={<AdminiatrationAndJurisdiction />} />
        <Route path="/vission-mission" element={<VisionMission />} />
        <Route path="/principal-message" element={<PrincipalMessagePage />} />
        <Route path="/headmistress-message" element={<HeadmistressMessage />} />
        <Route path="/academic-course" element={<CourseOfStudyPage />} />
        <Route path="/academic-fee-structure" element={<FeeStructurePage />} />
        <Route path="/academic-faculty" element={<FacultyPage />} />
        <Route path="/academic-uniform" element={<UniformPage />} />
        <Route path="/admission-eligibility" element={<AdmissionEligibilty />} />
        <Route path="/admission-application-procedure" element={<ApplicationProcessPage />} />
        <Route path="/admission-admission-procedure" element={<AdmissionProcedure />} />
        <Route path="/rules-regulations" element={<RulesAndRegulation />} />
        <Route path="/gallary" element={<GallaryPage />} />
        <Route path="/contact-us" element={<ContactusPage />} />
         </Routes>

    </BrowserRouter>

  );
}

export default App;
