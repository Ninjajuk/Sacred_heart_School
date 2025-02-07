
import CopyrightFooter from './components/CopyrightFooter';
import DynamicForm from './components/DynamicForm';
import FloatingNewsList from './components/FloatingNews';

import Header from './components/Header';
import HeroSection from './components/Hero';
import PrincipalMessage from './components/PrincipalMessage';
import Skills from './components/Skills';
import BannerSlider from './components/Slider/BannerSlider';
import WelcomeSection from './components/WelcomeSection';


function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <BannerSlider/>
      <WelcomeSection/>
      <FloatingNewsList/>
      <PrincipalMessage/>
      {/* <Skills/>
      <DynamicForm/> */}
      <CopyrightFooter/>


    </>
  );
}

export default App;
