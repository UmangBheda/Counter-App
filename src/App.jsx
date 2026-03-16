import React, { useState } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-[24px] shadow-sm border border-black/5 w-full max-w-md text-center"
      >
        <h1 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">
          Counter Application
        </h1>

        <div className="relative mb-12">
          <motion.div
            key={count}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-8xl font-light text-gray-900 tabular-nums"
          >
            {count}
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={decrement}
            className="flex items-center justify-center h-16 rounded-2xl bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors border border-black/5 active:scale-95"
            aria-label="Decrement"
          >
            <Minus size={24} />
          </button>

          <button
            onClick={reset}
            className="flex items-center justify-center h-16 rounded-2xl bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors border border-black/5 active:scale-95"
            aria-label="Reset"
          >
            <RotateCcw size={24} />
          </button>

          <button
            onClick={increment}
            className="flex items-center justify-center h-16 rounded-2xl bg-gray-900 hover:bg-gray-800 text-white transition-colors active:scale-95"
            aria-label="Increment"
          >
            <Plus size={24} />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            Built with React & Tailwind CSS
          </p>
        </div>
      </motion.div>
    </div>
  );
}
