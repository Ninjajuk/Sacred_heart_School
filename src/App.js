import { motion } from 'framer-motion';


function App() {
  return (
    <div className="">

      
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-red-600 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-center font-bold text-purple-800">Welcome Samsu!</h1>
      <motion.div
      initial={{ x: -100, opacity: 0, scale: 0.8 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-5 bg-blue-500 text-white rounded-md"
    >
      Hello, Sacred Heart School!
    </motion.div>
      </div>
      <div class="h-[calc(100vh-40rem)] bg-gray-200">Remaining Height</div>


    </div>
  );
}

export default App;
