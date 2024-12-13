'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { GlowingCard, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/GlowingCard"
import NeonButton from '../../components/NeonButton'
import SocialIcons from '../../components/SocialIcons'

// Latest Tech Blogs
const latestTechBlogs = [
  {
    id: 1,
    title: "The Quantum Revolution in Computing",
    description: "Explore how quantum computing is set to transform industries from cryptography to drug discovery, potentially solving problems that are intractable for classical computers.",
    image: "/quantumc.jpg",
  },
  {
    id: 2,
    title: "AI's Role in Personalized Medicine",
    description: "Discover how artificial intelligence is enabling tailored medical treatments based on individual genetic profiles, revolutionizing healthcare outcomes of Ai in Healthcare industry.",
    image: "/aiinhealth.jpg",
  },
  {
    id: 3,
    title: "5G: Powering the Internet of Things",
    description: "Uncover the potential of 5G networks in creating smart cities, enhancing autonomous vehicles, and enabling real-time remote surgeries with 5g spped and its connectivity.",
    image: "/5gtech.png",
  },
  {
    id: 4,
    title: "Blockchain: Beyond Cryptocurrencies",
    description: "Learn about blockchain's applications in supply chain management, voting systems, and digital identity verification, reshaping trust in digital transactions.",
    image: "/blockchain.jpeg",
  },
]

// Featured Blogs
const featuredBlogs = [
  {
    id: 5,
    title: "The Ethics of Artificial Intelligence",
    description: "Delve into the moral implications of AI decision-making in autonomous systems and the need for responsible AI development to ensure fairness and transparency to dive into the ethics of Ai.",
    image: "/ethics.png",
  },
  {
    id: 6,
    title: "Cybersecurity in the Age of Quantum Computing",
    description: "Examine the challenges quantum computing poses to current encryption methods and the race to develop quantum-resistant cryptography.",
    image: "/quantumc.jpg",
  },
  {
    id: 7,
    title: "The Future of Work: AI and Automation",
    description: "Analyze how AI and automation are reshaping job markets, creating new roles, and the skills needed to thrive in an AI-augmented workplace.",
    image: "/aifuture.jpg",
  },
];

// Other Technology Blogs Titles
const specificTitles = [
  "The Future of Edge Computing in Internet of Things",
  "Augmented Reality in Education and Training",
  "The Impact of 3D Printing and AI in Manufacturing",
  "Advancements in Natural Language Processing",
  "Sustainable and Eco-Friendly Tech Solutions",
  "Biotechnology and AI in Drug Discovery"
];

// Other Technology Blogs
const otherBlogs = Array.from({ length: 18 }, (_, i) => ({
  id: i + 8,
  title: specificTitles[i % specificTitles.length],
  description: [
    "Exploring the potential of edge computing in reducing latency for IoT devices and improving real-time data processing in the field of IoT.",
    "Investigating the role of augmented reality in enhancing educational experiences and professional training.",
    "Analyzing the impact of 3D printing technology on manufacturing, medicine, and consumer products and the effects of AI on it.",
    "Examining the advancements in natural language processing and its applications in chatbots and virtual assistants.",
    "Discussing the challenges and opportunities in developing sustainable and eco-friendly tech solutions.",
    "Exploring the intersection of biotechnology and AI in accelerating drug discovery and personalized medicine.",
  ][i % 6],
  image: `/tech-blog-${(i % 6) + 1}.jpg`,
}))

export default function BlogPage() {
  const [ ,setHoveredCard] = useState<number | null>(null)

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="container mx-auto py-16 px-4">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          TechVista: Exploring the Digital Frontier
        </motion.h1>
        
        {/* Latest Technology Blogs */}
        <section className="mb-20">
          <motion.h2 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Cutting-Edge Tech Insights
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {latestTechBlogs.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <GlowingCard 
                  className="group h-full flex flex-col"
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setHoveredCard(post.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <CardHeader className="p-0">
                    <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-48 object-cover rounded-t-lg" />
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <CardTitle className="text-xl font-semibold mb-3">{post.title}</CardTitle>
                    <CardDescription className="text-sm">{post.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-6">
                    <NeonButton href={`/blog/${post.id}`}>
                      Explore
                    </NeonButton>
                  </CardFooter>
                </GlowingCard>
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        {/* Featured Posts */}
        <section className="mb-20">
          <motion.h2 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Featured Tech Deep Dives
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredBlogs.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <GlowingCard 
                  className="group h-full flex flex-col"
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setHoveredCard(post.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <CardHeader className="p-0">
                    <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-48 object-cover rounded-t-lg" />
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <CardTitle className="text-xl font-semibold mb-3">{post.title}</CardTitle>
                    <CardDescription className="text-sm">{post.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center p-6">
                    <NeonButton href={`/blog/${post.id}`}>
                      Read More
                    </NeonButton>
                    <SocialIcons />
                  </CardFooter>
                </GlowingCard>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Other Technology Blogs */}
        <section>
          <motion.h2 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600"
          >
            More Tech Explorations
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {otherBlogs.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <GlowingCard 
                  className="group h-full flex flex-col"
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setHoveredCard(post.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <CardHeader className="p-0">
                    <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-48 object-cover rounded-t-lg" />
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <CardTitle className="text-xl font-semibold mb-3">{post.title}</CardTitle>
                    <CardDescription className="text-sm">{post.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center p-6">
                    <NeonButton href={`/blog/${post.id}`}>
                      Discover
                    </NeonButton>
                    <SocialIcons />
                  </CardFooter>
                </GlowingCard>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </motion.div>
  )
}

