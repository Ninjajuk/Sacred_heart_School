
import DynamicForm from './components/DynamicForm';
import FloatingNewsList from './components/FloatingNews';
import Header from './components/Header';
import HeroSection from './components/Hero';
import PrincipalMessage from './components/PrincipalMessage';
import Skills from './components/Skills';
import WelcomeSection from './components/WelcomeSection';


function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <WelcomeSection/>
      <PrincipalMessage/>
      <Skills/>
      <FloatingNewsList/>
      <DynamicForm/>


    </>
  );
}

export default App;
