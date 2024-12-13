"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GlowingCard, CardContent, CardHeader, CardTitle } from "../../components/GlowingCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, LucideIcon } from 'lucide-react'
import SocialIcons from '@/components/SocialIcons'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto py-16 px-4">
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlowingCard>
              <CardHeader>
                <CardTitle className="text-3xl mb-4">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-gray-800 text-white border-gray-700 focus:border-purple-500 transition-colors duration-300"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Input
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-gray-800 text-white border-gray-700 focus:border-purple-500 transition-colors duration-300"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Textarea
                      placeholder="Your message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-gray-800 text-white border-gray-700 focus:border-purple-500 transition-colors duration-300 min-h-[150px]"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      type="submit" 
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <Send className="w-5 h-5 mr-2" />
                        </motion.div>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </GlowingCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlowingCard>
              <CardHeader>
                <CardTitle className="text-3xl mb-4">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <ContactInfo icon={MapPin} text="123 TechVista Street, Innovate City, TC 12345" />
                <ContactInfo icon={Mail} text="contact@techvista.com" />
                <ContactInfo icon={Phone} text="(123) 456-7890" />
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <motion.div 
                    className="flex space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <SocialIcons />
                  </motion.div>
                </div>
              </CardContent>
            </GlowingCard>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

interface ContactInfoProps {
  icon: LucideIcon;
  text: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon: Icon, text }) => (
  <motion.div 
    className="flex items-center"
    whileHover={{ scale: 1.05, x: 10 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <Icon className="w-6 h-6 mr-4 text-purple-400" />
    <p>{text}</p>
  </motion.div>
);
