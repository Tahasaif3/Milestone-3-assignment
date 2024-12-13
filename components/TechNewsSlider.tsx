'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const newsItems = [
  "Artificial Intelligence breakthrough: New model surpasses human-level performance in complex problem-solving tasks",
  "SpaceX successfully launches first civilian mission to Mars",
  "Quantum computing reaches new milestone with 1000-qubit processor",
  "Revolutionary battery technology triples electric vehicle range",
  "Neuralink receives FDA approval for human trials of brain-computer interface",
]

const TechNewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length)
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative bg-gray-900 p-6 rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-between">
        <Button onClick={goToPrevious} variant="ghost" size="icon" className="text-white z-10">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="flex-1 overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.p
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="text-center text-lg px-4 absolute w-full"
            >
              {newsItems[currentIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
        <Button onClick={goToNext} variant="ghost" size="icon" className="text-white z-10">
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="mt-4 flex justify-center">
        {newsItems.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${index === currentIndex ? 'bg-purple-500' : 'bg-gray-500'}`}
            initial={false}
            animate={{ scale: index === currentIndex ? 1.5 : 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  )
}

export default TechNewsSlider
