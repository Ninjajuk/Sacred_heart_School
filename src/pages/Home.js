import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/Hero'
import BannerSlider from '../components/Slider/BannerSlider'
import WelcomeSection from '../components/WelcomeSection'
import PrincipalMessage from '../components/PrincipalMessage'
import CopyrightFooter from '../components/CopyrightFooter'
import FloatingNewsEvents from '../components/FloatingNews'
import ImageGallery from '../components/Gallary'
import Toppers from '../components/Toppers'
import {motion} from 'framer-motion'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
          <Header />
          <HeroSection />
          <BannerSlider />
          <WelcomeSection />
          <FloatingNewsEvents/>
          <PrincipalMessage/>
          <Toppers/>
     
          <ImageGallery/>
                             {/* FAQ Section */}
                             <motion.section
                        className="bg-white py-12"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="max-w-6xl mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        id: 1,
                                        question: "What happens if a student violates the rules?",
                                        answer: "Depending on the severity of the violation, the student may face disciplinary action, suspension, or even expulsion.",
                                    },
                                    {
                                        id: 2,
                                        question: "Can parents visit the school to discuss disciplinary issues?",
                                        answer: "Yes, parents are encouraged to visit the school and discuss any concerns with the Principal or Vice Principal.",
                                    },
                                ].map((faq) => (
                                    <motion.div
                                        key={faq.id}
                                        className="bg-gray-100 p-6 rounded-lg shadow-sm"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                                        <p className="text-gray-700">{faq.answer}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* Video Section */}
                    <motion.section
                        className="bg-gray-100 py-12"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="max-w-6xl mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center mb-8">Watch Our School in Action</h2>
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    className="w-full h-full rounded-lg shadow-lg"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </motion.section>
          {/* <Skills/>
      <DynamicForm/> */}
      <Footer/>
          <CopyrightFooter />
    </>
  )
}

export default HomePage