"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { GlowingCard, CardContent, CardHeader, CardTitle } from "../../components/GlowingCard"

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: 'John Doe', role: 'Web Developer', image: '/team1.webp' },
  { name: 'Jane Smith', role: 'UI/UX Designer', image: '/team2.webp' },
  { name: 'Mike Johnson', role: 'Content Writer', image: '/team3.webp' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto py-16 px-4">
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About TechVista
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlowingCard className="h-full">
              <CardHeader>
                <CardTitle className="text-3xl mb-4">Our Story</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-lg text-gray-300">
                  TechVista was founded with a simple mission: to provide a platform for sharing knowledge, ideas, and experiences in the most engaging and visually appealing way possible. Our team of passionate writers and tech enthusiasts work tirelessly to bring you the latest insights and trends in the world of technology and beyond.
                </p>
                <p className="text-lg text-gray-300">
                  We believe in the power of words and design to inspire, educate, and connect people from all walks of life. Through our blog, we aim to create a community of lifelong learners and innovators who are always eager to explore new horizons.
                </p>
              </CardContent>
            </GlowingCard>
          </motion.div>
          <motion.div
            className="relative h-full min-h-[400px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image src="/about.jpg" alt="About TechVista" layout="fill" objectFit="cover" className="rounded-lg" />
          </motion.div>
        </div>
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Define the TeamMemberCard component prop types
interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
    >
      <GlowingCard 
        className="text-center overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader>
          <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
            <Image 
              src={member.image} 
              alt={member.name} 
              layout="fill" 
              objectFit="cover"
              className="transition-transform duration-300 transform"
              style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
            />
          </div>
          <CardTitle className="text-2xl mb-2">{member.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-gray-300 mb-4'>{member.role}</p>
          <motion.p 
            className='text-sm text-gray-400'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            {member.name} is a dedicated professional specializing in {member.role.toLowerCase()}. They bring creativity and technical expertise to every project, contributing to TechVista`s mission of delivering high-quality content and experiences.
          </motion.p>
        </CardContent>
      </GlowingCard>
    </motion.div>
  )
}
