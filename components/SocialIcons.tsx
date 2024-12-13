import { Facebook, Twitter, Instagram } from 'lucide-react'

const SocialIcons = () => {
  return (
    <div className="flex space-x-2">
      <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
        <Twitter className="w-5 h-5" />
      </a>
      <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors duration-300">
        <Facebook className="w-5 h-5" />
      </a>
      <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors duration-300">
        <Instagram className="w-5 h-5" />
      </a>
    </div>
  )
}

export default SocialIcons

