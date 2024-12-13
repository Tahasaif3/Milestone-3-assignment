'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { GlowingCard, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/GlowingCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SocialIcons from '../../../components/SocialIcons'
import NeonButton from '../../../components/NeonButton'
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react'

const allBlogPosts = [
  {
    id: 1,
    title: "The Quantum Revolution in Computing",
    description: "Explore how quantum computing is set to transform industries from cryptography to drug discovery, potentially solving problems that are intractable for classical computers.",
    content: `
      Quantum computing stands at the forefront of technological innovation, promising to revolutionize how we process information and solve complex problems. Unlike classical computers that use bits (0s and 1s), quantum computers leverage quantum bits or qubits, which can exist in multiple states simultaneously through a phenomenon called superposition.

      ## The Power of Quantum Computing

      Quantum computers harness several key quantum mechanical principles:
      
      1. **Superposition**: Qubits can exist in multiple states at once, enabling parallel processing at an unprecedented scale.
      2. **Entanglement**: Quantum particles can be correlated in ways that classical physics cannot explain, allowing for more complex computations.
      3. **Quantum Interference**: This phenomenon helps quantum computers arrive at solutions by reinforcing correct paths and canceling incorrect ones.

      ## Real-World Applications

      The potential applications of quantum computing are vast and transformative:

      ### Cryptography and Security
      - Breaking current encryption methods
      - Developing quantum-resistant cryptography
      - Secure communication through quantum key distribution

      ### Drug Discovery
      - Simulating molecular interactions
      - Accelerating drug development processes
      - Personalized medicine optimization

      ### Financial Modeling
      - Portfolio optimization
      - Risk analysis
      - High-frequency trading strategies

      ## Current Challenges

      Despite the promising potential, several challenges remain:

      1. Maintaining quantum coherence
      2. Scaling up qubit systems
      3. Error correction
      4. Cost and accessibility

      ## The Road Ahead

      As we continue to advance quantum computing technology, we're seeing:
      - Increased investment from major tech companies
      - Growing collaboration between academia and industry
      - Development of quantum-specific programming languages and tools
      - Emergence of quantum computing startups

      The quantum computing revolution is not just about raw computational power; it's about transforming how we approach problem-solving across industries. As this technology matures, we can expect to see breakthrough applications that were previously thought impossible.
    `,
    image: "/quantumc.jpg",
    author: "Dr. Sarah Chen",
    date: "2023-12-13",
    readTime: "8 min read",
    category: "Quantum Computing",
  },
  {
    id: 2,
    title: "AI's Role in Personalized Medicine",
    description: "Discover how artificial intelligence is enabling tailored medical treatments based on individual genetic profiles, revolutionizing healthcare outcomes.",
    content: `
      Artificial Intelligence is revolutionizing healthcare by enabling unprecedented levels of personalization in medical treatment. This transformation is particularly evident in how we approach patient care, drug development, and disease prevention.

      ## The AI Revolution in Healthcare

      ### Personalized Treatment Plans
      AI algorithms can analyze vast amounts of patient data, including:
      - Genetic information
      - Medical history
      - Lifestyle factors
      - Environmental conditions

      This comprehensive analysis helps doctors create highly personalized treatment plans that are more effective than one-size-fits-all approaches.

      ## Key Applications

      1. **Genetic Analysis**
         - Identifying genetic markers for diseases
         - Predicting drug responses
         - Determining optimal dosages

      2. **Disease Prediction**
         - Early detection of conditions
         - Risk assessment
         - Preventive care recommendations

      3. **Treatment Optimization**
         - Drug efficacy prediction
         - Side effect analysis
         - Treatment response monitoring

      ## Impact on Healthcare Delivery

      The integration of AI in personalized medicine is transforming:
      - Diagnostic accuracy
      - Treatment effectiveness
      - Patient outcomes
      - Healthcare costs

      ## Future Prospects

      As AI technology continues to evolve, we can expect:
      - More precise treatment methods
      - Better disease prevention
      - Improved patient care
      - Reduced healthcare costs

      The future of healthcare lies in personalization, and AI is the key enabler of this transformation.
    `,
    image: "/aiinhealth.jpg",
    author: "Dr. Michael Roberts",
    date: "2023-12-13",
    readTime: "6 min read",
    category: "Healthcare Technology",
  },
  {
    id: 3,
    title: "5G: Powering the Internet of Things",
    description: "Uncover the potential of 5G networks in creating smart cities, enhancing autonomous vehicles, and enabling real-time remote surgeries.",
    content: `
      5G technology is set to revolutionize connectivity, offering unprecedented speeds, lower latency, and the ability to connect a vast number of devices simultaneously. This next-generation network is not just about faster smartphones; it's about enabling a whole new era of interconnected devices and services.

      ## What Makes 5G Different?

      1. **Speed**: 5G can deliver peak data rates up to 20 Gbps.
      2. **Low Latency**: Response times as low as 1 millisecond.
      3. **Increased Capacity**: Ability to connect up to 1 million devices per square kilometer.
      4. **Network Slicing**: Customizable network capabilities for different use cases.

      ## Transformative Applications

      ### Smart Cities
      - Intelligent traffic management systems
      - Smart energy grids
      - Enhanced public safety and emergency response

      ### Autonomous Vehicles
      - Vehicle-to-everything (V2X) communication
      - Real-time traffic and road condition updates
      - Enhanced safety features

      ### Remote Surgery
      - Low-latency, high-definition video streaming
      - Haptic feedback for surgeons
      - AI-assisted surgical procedures

      ## Challenges and Considerations

      - Infrastructure development costs
      - Cybersecurity concerns
      - Spectrum allocation
      - Privacy issues

      ## The Future with 5G

      As 5G networks continue to roll out globally, we can expect:
      - New business models and services
      - Accelerated IoT adoption
      - Enhanced augmented and virtual reality experiences
      - Revolutionary changes in industries like healthcare, manufacturing, and entertainment

      5G is not just an incremental improvement in mobile technology; it's a foundational change that will enable the next wave of digital innovation.
    `,
    image: "/5gtech.png",
    author: "Emma Thompson",
    date: "2023-12-13",
    readTime: "7 min read",
    category: "Telecommunications",
  },
  {
    id: 4,
    title: "Blockchain: Beyond Cryptocurrencies",
    description: "Learn about blockchain's applications in supply chain management, voting systems, and digital identity verification, reshaping trust in digital transactions.",
    content: `
      While blockchain technology gained fame as the foundation of cryptocurrencies like Bitcoin, its potential applications extend far beyond digital currencies. At its core, blockchain is a distributed ledger technology that offers transparency, security, and immutability of records.

      ## Key Features of Blockchain

      1. **Decentralization**: No single point of control or failure.
      2. **Transparency**: All transactions are visible to network participants.
      3. **Immutability**: Once recorded, data cannot be altered without consensus.
      4. **Smart Contracts**: Self-executing contracts with the terms directly written into code.

      ## Innovative Applications

      ### Supply Chain Management
      - Real-time tracking of goods
      - Verification of product authenticity
      - Streamlined documentation processes

      ### Voting Systems
      - Secure and transparent electronic voting
      - Reduced risk of voter fraud
      - Increased accessibility for remote voters

      ### Digital Identity Verification
      - Self-sovereign identity solutions
      - Enhanced privacy control for users
      - Simplified KYC (Know Your Customer) processes

      ## Challenges to Overcome

      - Scalability issues
      - Energy consumption concerns
      - Regulatory uncertainties
      - Interoperability between different blockchain networks

      ## The Future of Blockchain

      As blockchain technology matures, we can anticipate:
      - Increased adoption in government and enterprise sectors
      - Development of more user-friendly blockchain applications
      - Integration with other emerging technologies like IoT and AI
      - Evolution of regulatory frameworks to support blockchain innovations

      Blockchain has the potential to reshape how we approach trust and transactions in the digital world, promising a future of more secure, transparent, and efficient systems across various industries.
    `,
    image: "/blockchain.jpeg",
    author: "Alex Johnson",
    date: "2023-12-13",
    readTime: "8 min read",
    category: "Blockchain Technology",
  },
  {
    id: 5,
    title: "The Ethics of Artificial Intelligence",
    description: "Delve into the moral implications of AI decision-making in autonomous systems and the need for responsible AI development to ensure fairness and transparency.",
    content: `
      Artificial Intelligence (AI) is revolutionizing industries, but its rapid advancements bring significant ethical challenges. The ability of AI systems to make decisions autonomously raises concerns about bias, accountability, and transparency.

      ## Key Ethical Concerns in AI

      1. **Bias and Fairness**: AI models can inherit biases from training data, leading to unfair outcomes.
      2. **Transparency**: Many AI systems operate as "black boxes," making their decision-making processes hard to understand.
      3. **Accountability**: Determining responsibility for AI-driven decisions is a complex issue, particularly in cases involving harm.

      ## Real-World Implications

      ### Autonomous Vehicles
      - Ethical dilemmas in life-and-death scenarios
      - Responsibility for accidents involving AI-driven cars

      ### Facial Recognition
      - Privacy violations
      - Potential misuse for surveillance and discrimination

      ### Employment
      - Job displacement vs. job creation
      - Ensuring fair hiring practices with AI

      ## Responsible AI Development

      To address these challenges, organizations and governments must:
      - Implement rigorous testing for fairness and bias
      - Develop clear regulations for accountability
      - Promote transparency and explainability in AI systems

      The ethical development of AI is not just a technological issue but a societal one, requiring collaboration across disciplines to ensure a fair and equitable future.
    `,
    image: "/ethics.png",
    author: "Dr. Emily Turner",
    date: "2023-12-13",
    readTime: "7 min read",
    category: "AI Ethics",
  },
  {
    id: 6,
    title: "Cybersecurity in the Age of Quantum Computing",
    description: "Examine the challenges quantum computing poses to current encryption methods and the race to develop quantum-resistant cryptography.",
    content: `
      Quantum computing promises groundbreaking advancements but also threatens current cybersecurity paradigms. The immense computational power of quantum computers could render traditional encryption obsolete.

      ## Quantum Threats to Cybersecurity

      1. **Breaking RSA and ECC**: Quantum algorithms like Shor's algorithm can factorize large numbers efficiently, breaking widely-used cryptographic methods.
      2. **Challenges in Key Distribution**: Current methods of secure key exchange are vulnerable to quantum attacks.

      ## Quantum-Resistant Cryptography

      To counter these threats, researchers are developing:
      - **Lattice-based cryptography**
      - **Hash-based signatures**
      - **Multivariate polynomial cryptography**

      ## Preparing for a Quantum Future

      Organizations must:
      - Invest in quantum-safe encryption
      - Conduct risk assessments for quantum vulnerabilities
      - Participate in global efforts to standardize post-quantum cryptographic methods

      Quantum computing is both a challenge and an opportunity for cybersecurity, necessitating proactive measures to secure digital systems in the quantum era.
    `,
    image: "/quantumc.jpg",
    author: "Dr. Alan Hayes",
    date: "2023-12-13",
    readTime: "6 min read",
    category: "Cybersecurity",
  },
  {
    id: 7,
    title: "The Future of Work: AI and Automation",
    description: "Analyze how AI and automation are reshaping job markets, creating new roles, and the skills needed to thrive in an AI-augmented workplace.",
    content: `
      AI and automation are redefining the workplace, transforming industries, and changing how we approach work. While these technologies streamline operations, they also raise questions about employment and the skills required in the future.

      ## Impacts on Job Markets

      1. **Job Displacement**: Automation is replacing repetitive tasks, affecting manufacturing, logistics, and administrative roles.
      2. **Job Creation**: New roles are emerging in AI development, data analysis, and robotics maintenance.

      ## Essential Skills for the AI Age

      - Adaptability and continuous learning
      - Technical skills in AI and machine learning
      - Creativity and problem-solving abilities
      - Emotional intelligence for roles requiring human interaction

      ## Preparing for the Future

      Workers and organizations must:
      - Invest in upskilling and reskilling programs
      - Foster collaboration between humans and machines
      - Embrace lifelong learning to stay competitive

      The future of work is not about replacing humans but augmenting their capabilities. By adapting to these changes, individuals and organizations can thrive in an AI-driven world.
    `,
    image: "/aifuture.jpg",
    author: "Dr. Sophia Evans",
    date: "2023-12-13",
    readTime: "8 min read",
    category: "Future of Work",
  },
  {
    id: 8,
    title: "Exploring the Potential of Edge Computing",
    description: "Exploring the potential of edge computing in reducing latency for IoT devices and improving real-time data processing.",
    content: `
      Edge computing is transforming the way data is processed and analyzed, particularly in the context of IoT devices. By bringing computation closer to the data source, edge computing significantly reduces latency and enhances real-time processing.

      ## Advantages of Edge Computing

      1. **Reduced Latency**: Minimizes delays in data transmission by processing data locally.
      2. **Enhanced Privacy**: Keeps sensitive data closer to its source, improving security.
      3. **Scalability**: Distributes computational load across edge devices, reducing the burden on central servers.

      ## Applications in IoT

      - **Smart Cities**: Real-time traffic management and monitoring.
      - **Healthcare**: Remote patient monitoring and diagnostics.
      - **Industrial IoT**: Real-time equipment monitoring and predictive maintenance.

      Edge computing is pivotal in addressing the challenges of modern IoT applications, offering faster, safer, and more reliable data processing capabilities.
    `,
    image: "/tech-blog-1.jpg",
    author: "Dr. Liam Carter",
    date: "2023-12-13",
    readTime: "5 min read",
    category: "Edge Computing",
  },
  {
    id: 9,
    title: "The Role of Augmented Reality in Education",
    description: "Investigating the role of augmented reality in enhancing educational experiences and professional training.",
    content: `
      Augmented Reality (AR) is reshaping education and professional training by creating immersive and interactive learning environments. It bridges the gap between theoretical knowledge and practical application.

      ## Benefits of AR in Education

      1. **Enhanced Engagement**: Interactive AR experiences capture students' attention.
      2. **Practical Learning**: Simulates real-world scenarios for hands-on training.
      3. **Accessible Resources**: Offers 3D models and visualizations for complex concepts.

      ## Real-World Applications

      - **Medical Training**: Simulating surgeries and anatomy explorations.
      - **STEM Education**: Visualizing scientific experiments and concepts.
      - **Corporate Training**: Role-playing scenarios for customer service and leadership skills.

      AR is revolutionizing the way we learn, making education more engaging and effective across diverse fields.
    `,
    image: "/tech-blog-2.jpg",
    author: "Dr. Grace Lee",
    date: "2023-12-13",
    readTime: "6 min read",
    category: "Augmented Reality",
  },
  {
    id: 10,
    title: "Impact of 3D Printing on Industries",
    description: "Analyzing the impact of 3D printing technology on manufacturing, medicine, and consumer products.",
    content: `
      3D printing is revolutionizing industries by enabling the creation of complex and customized products. Its versatility spans manufacturing, medicine, and consumer goods.

      ## Key Benefits

      1. **Customization**: Allows personalized production at scale.
      2. **Cost Efficiency**: Reduces material wastage and production costs.
      3. **Rapid Prototyping**: Accelerates product development cycles.

      ## Industry Applications

      - **Healthcare**: Custom prosthetics and implants.
      - **Automotive**: Rapid prototyping of vehicle components.
      - **Consumer Goods**: On-demand creation of bespoke products.

      3D printing is driving innovation and efficiency, reshaping the landscape of modern industries.
    `,
    image: "/tech-blog-3.jpg",
    author: "Dr. Ethan Brooks",
    date: "2023-12-13",
    readTime: "7 min read",
    category: "3D Printing",
  },
  {
    id: 11,
    title: "Advancements in Natural Language Processing",
    description: "Examining the advancements in natural language processing and its applications in chatbots and virtual assistants.",
    content: `
      Natural Language Processing (NLP) is at the forefront of AI advancements, enabling machines to understand and respond to human language with remarkable accuracy.

      ## Recent Advancements

      1. **Transformers and BERT**: Revolutionizing NLP tasks with deep learning.
      2. **Conversational AI**: Building more natural and context-aware chatbots.
      3. **Sentiment Analysis**: Gauging public opinion and customer feedback.

      ## Key Applications

      - **Virtual Assistants**: Enhancing user interactions with AI-driven tools like Siri and Alexa.
      - **Customer Support**: Automating responses to common queries.
      - **Content Creation**: Generating human-like text for marketing and communication.

      NLP is unlocking new possibilities for communication and interaction, making AI systems more intuitive and user-friendly.
    `,
    image: "/tech-blog-4.jpg",
    author: "Dr. Olivia Green",
    date: "2023-12-13",
    readTime: "6 min read",
    category: "Natural Language Processing",
  },
  {
    id: 12,
    title: "Sustainable Tech Solutions",
    description: "Discussing the challenges and opportunities in developing sustainable and eco-friendly tech solutions.",
    content: `
      Sustainable technology is crucial for addressing environmental challenges and fostering eco-friendly innovation. Balancing technological advancement with sustainability is the need of the hour.

      ## Challenges

      1. **Energy Consumption**: High power usage of data centers and devices.
      2. **E-Waste**: Managing the growing volume of discarded electronics.
      3. **Resource Scarcity**: Dependence on finite raw materials for tech production.

      ## Opportunities

      - **Green Energy**: Utilizing renewable energy sources in tech operations.
      - **Recycling Programs**: Encouraging circular economies in electronics.
      - **Energy-Efficient Designs**: Creating devices with reduced energy footprints.

      Sustainable tech solutions are not just beneficial for the environment but also for creating long-term value in the technology sector.
    `,
    image: "/tech-blog-5.jpg",
    author: "Dr. Ava Taylor",
    date: "2023-12-13",
    readTime: "7 min read",
    category: "Sustainable Tech",
  },
  {
    id: 13,
    title: "Biotechnology and AI in Medicine",
    description: "Exploring the intersection of biotechnology and AI in accelerating drug discovery and personalized medicine.",
    content: `
      The convergence of biotechnology and AI is transforming medicine, driving innovation in drug discovery and personalized healthcare.

      ## Key Contributions

      1. **Drug Discovery**: Accelerating research through AI-driven simulations.
      2. **Personalized Medicine**: Tailoring treatments based on genetic profiles.
      3. **Disease Prediction**: Using AI to identify health risks and preventive measures.

      ## Real-World Impact

      - **Cancer Research**: AI-enhanced analysis of genetic mutations.
      - **Rare Diseases**: Identifying potential treatments for less-studied conditions.
      - **Clinical Trials**: Optimizing participant selection and trial efficiency.

      The integration of biotechnology and AI is setting new standards in medical innovation, promising a future of more effective and targeted healthcare.
    `,
    image: "/tech-blog-6.jpg",
    author: "Dr. Mathew Green",
    date: "2023-12-13",
    readTime: "6 min read",
    category: "Biotechnology and Ai in Medicine",
  },
  {
    id: 14,
    title: "Exploring the Potential of Edge Computing",
    description: "Exploring the potential of edge computing in reducing latency for IoT devices and improving real-time data processing.",
    content: `
      Edge computing is transforming the way data is processed and analyzed, particularly in the context of IoT devices. By bringing computation closer to the data source, edge computing significantly reduces latency and enhances real-time processing.

      ## Advantages of Edge Computing

      1. **Reduced Latency**: Minimizes delays in data transmission by processing data locally.
      2. **Enhanced Privacy**: Keeps sensitive data closer to its source, improving security.
      3. **Scalability**: Distributes computational load across edge devices, reducing the burden on central servers.

      ## Applications in IoT

      - **Smart Cities**: Real-time traffic management and monitoring.
      - **Healthcare**: Remote patient monitoring and diagnostics.
      - **Industrial IoT**: Real-time equipment monitoring and predictive maintenance.

      Edge computing is pivotal in addressing the challenges of modern IoT applications, offering faster, safer, and more reliable data processing capabilities.
    `,
    image: "/tech-blog-1.jpg",
    author: "Dr. Liam Carter",
    date: "2023-12-13",
    readTime: "5 min read",
    category: "Edge Computing",
  },
  {
    id: 15,
    title: "The Role of Augmented Reality in Education",
    description: "Investigating the role of augmented reality in enhancing educational experiences and professional training.",
    content: `
      Augmented Reality (AR) is reshaping education and professional training by creating immersive and interactive learning environments. It bridges the gap between theoretical knowledge and practical application.

      ## Benefits of AR in Education

      1. **Enhanced Engagement**: Interactive AR experiences capture students' attention.
      2. **Practical Learning**: Simulates real-world scenarios for hands-on training.
      3. **Accessible Resources**: Offers 3D models and visualizations for complex concepts.

      ## Real-World Applications

      - **Medical Training**: Simulating surgeries and anatomy explorations.
      - **STEM Education**: Visualizing scientific experiments and concepts.
      - **Corporate Training**: Role-playing scenarios for customer service and leadership skills.

      AR is revolutionizing the way we learn, making education more engaging and effective across diverse fields.
    `,
    image: "/tech-blog-2.jpg",
    author: "Dr. Grace Lee",
    date: "2023-12-13",
    readTime: "6 min read",
    category: "Augmented Reality",
  },
  {
    id: 16,
    title: "Impact of 3D Printing on Industries",
    description: "Analyzing the impact of 3D printing technology on manufacturing, medicine, and consumer products.",
    content: `
      3D printing is revolutionizing industries by enabling the creation of complex and customized products. Its versatility spans manufacturing, medicine, and consumer goods.

      ## Key Benefits

      1. **Customization**: Allows personalized production at scale.
      2. **Cost Efficiency**: Reduces material wastage and production costs.
      3. **Rapid Prototyping**: Accelerates product development cycles.

      ## Industry Applications

      - **Healthcare**: Custom prosthetics and implants.
      - **Automotive**: Rapid prototyping of vehicle components.
      - **Consumer Goods**: On-demand creation of bespoke products.

      3D printing is driving innovation and efficiency, reshaping the landscape of modern industries.
    `,
    image: "/tech-blog-3.jpg",
    author: "Dr. Ethan Brooks",
    date: "2023-12-13",
    readTime: "7 min read",
    category: "3D Printing",
  },
  {
    id: 17,
    title: "Advancements in Natural Language Processing",
    description: "Examining the advancements in natural language processing and its applications in chatbots and virtual assistants.",
    content: `
      Natural Language Processing (NLP) is at the forefront of AI advancements, enabling machines to understand and respond to human language with remarkable accuracy.

      ## Recent Advancements

      1. **Transformers and BERT**: Revolutionizing NLP tasks with deep learning.
      2. **Conversational AI**: Building more natural and context-aware chatbots.
      3. **Sentiment Analysis**: Gauging public opinion and customer feedback.

      ## Key Applications

      - **Virtual Assistants**: Enhancing user interactions with AI-driven tools like Siri and Alexa.
      - **Customer Support**: Automating responses to common queries.
      - **Content Creation**: Generating human-like text for marketing and communication.

      NLP is unlocking new possibilities for communication and interaction, making AI systems more intuitive and user-friendly.
    `,
    image: "/tech-blog-4.jpg",
    author: "Dr. Olivia Green",
    date: "2023-12-13",
    readTime: "6 min read",
    category: "Natural Language Processing",
  },
  {
    id: 18,
    title: "Sustainable Tech Solutions",
    description: "Discussing the challenges and opportunities in developing sustainable and eco-friendly tech solutions.",
    content: `
      Sustainable technology is crucial for addressing environmental challenges and fostering eco-friendly innovation. Balancing technological advancement with sustainability is the need of the hour.

      ## Challenges

      1. **Energy Consumption**: High power usage of data centers and devices.
      2. **E-Waste**: Managing the growing volume of discarded electronics.
      3. **Resource Scarcity**: Dependence on finite raw materials for tech production.

      ## Opportunities

      - **Green Energy**: Utilizing renewable energy sources in tech operations.
      - **Recycling Programs**: Encouraging circular economies in electronics.
      - **Energy-Efficient Designs**: Creating devices with reduced energy footprints.

      Sustainable tech solutions are not just beneficial for the environment but also for creating long-term value in the technology sector.
    `,
    image: "/tech-blog-5.jpg",
    author: "Dr. Ava Taylor",
    date: "2023-12-13",
    readTime: "7 min read",
    category: "Sustainable Tech",
  },
  {
    id: 19,
    title: "Biotechnology and AI in Medicine",
    description: "Exploring the intersection of biotechnology and AI in accelerating drug discovery and personalized medicine.",
    content: `
      The convergence of biotechnology and AI is transforming medicine, driving innovation in drug discovery and personalized healthcare.

      ## Key Contributions

      1. **Drug Discovery**: Accelerating research through AI-driven simulations.
      2. **Personalized Medicine**: Tailoring treatments based on genetic profiles.
      3. **Disease Prediction**: Using AI to identify health risks and preventive measures.

      ## Real-World Impact

      - **Cancer Research**: AI-enhanced analysis of genetic mutations.
      - **Rare Diseases**: Identifying potential treatments for less-studied conditions.
      - **Clinical Trials**: Optimizing participant selection and trial efficiency.

      The integration of biotechnology and AI is setting new standards in medical innovation, promising a future of more effective and targeted healthcare.
    `,
    image: "/tech-blog-6.jpg",
    author: "Dr. Mathew Green",
    date: "2023-12-13",
    readTime: "6 min read",
    category: "Biotechnology and Ai in Medicine",
  },
  {
    id: 20,
    title: "Exploring the Potential of Edge Computing",
    description: "Exploring the potential of edge computing in reducing latency for IoT devices and improving real-time data processing.",
    content: `
      Edge computing is transforming the way data is processed and analyzed, particularly in the context of IoT devices. By bringing computation closer to the data source, edge computing significantly reduces latency and enhances real-time processing.

      ## Advantages of Edge Computing

      1. **Reduced Latency**: Minimizes delays in data transmission by processing data locally.
      2. **Enhanced Privacy**: Keeps sensitive data closer to its source, improving security.
      3. **Scalability**: Distributes computational load across edge devices, reducing the burden on central servers.

      ## Applications in IoT

      - **Smart Cities**: Real-time traffic management and monitoring.
      - **Healthcare**: Remote patient monitoring and diagnostics.
      - **Industrial IoT**: Real-time equipment monitoring and predictive maintenance.

      Edge computing is pivotal in addressing the challenges of modern IoT applications, offering faster, safer, and more reliable data processing capabilities.
    `,
    image: "/tech-blog-1.jpg",
    author: "Dr. Liam Carter",
    date: "2023-12-13",
    readTime: "5 min read",
    category: "Edge Computing",
  },
  {
    id: 21,
    title: "The Role of Augmented Reality in Education",
    description: "Investigating the role of augmented reality in enhancing educational experiences and professional training.",
    content: `
      Augmented Reality (AR) is reshaping education and professional training by creating immersive and interactive learning environments. It bridges the gap between theoretical knowledge and practical application.

      ## Benefits of AR in Education

      1. **Enhanced Engagement**: Interactive AR experiences capture students' attention.
      2. **Practical Learning**: Simulates real-world scenarios for hands-on training.
      3. **Accessible Resources**: Offers 3D models and visualizations for complex concepts.

      ## Real-World Applications

      - **Medical Training**: Simulating surgeries and anatomy explorations.
      - **STEM Education**: Visualizing scientific experiments and concepts.
      - **Corporate Training**: Role-playing scenarios for customer service and leadership skills.

      AR is revolutionizing the way we learn, making education more engaging and effective across diverse fields.
    `,
    image: "/tech-blog-2.jpg",
    author: "Dr. Grace Lee",
    date: "2023-12-13",
    readTime: "6 min read",
    category: "Augmented Reality",
  },
  {
    id: 22,
    title: "Impact of 3D Printing on Industries",
    description: "Analyzing the impact of 3D printing technology on manufacturing, medicine, and consumer products.",
    content: `
      3D printing is revolutionizing industries by enabling the creation of complex and customized products. Its versatility spans manufacturing, medicine, and consumer goods.

      ## Key Benefits

      1. **Customization**: Allows personalized production at scale.
      2. **Cost Efficiency**: Reduces material wastage and production costs.
      3. **Rapid Prototyping**: Accelerates product development cycles.

      ## Industry Applications

      - **Healthcare**: Custom prosthetics and implants.
      - **Automotive**: Rapid prototyping of vehicle components.
      - **Consumer Goods**: On-demand creation of bespoke products.

      3D printing is driving innovation and efficiency, reshaping the landscape of modern industries.
    `,
    image: "/tech-blog-3.jpg",
    author: "Dr. Ethan Brooks",
    date: "2023-12-13",
    readTime: "7 min read",
    category: "3D Printing",
  },
  {
    id: 23,
    title: "Advancements in Natural Language Processing",
    description: "Examining the advancements in natural language processing and its applications in chatbots and virtual assistants.",
    content: `
      Natural Language Processing (NLP) is at the forefront of AI advancements, enabling machines to understand and respond to human language with remarkable accuracy.

      ## Recent Advancements

      1. **Transformers and BERT**: Revolutionizing NLP tasks with deep learning.
      2. **Conversational AI**: Building more natural and context-aware chatbots.
      3. **Sentiment Analysis**: Gauging public opinion and customer feedback.

      ## Key Applications

      - **Virtual Assistants**: Enhancing user interactions with AI-driven tools like Siri and Alexa.
      - **Customer Support**: Automating responses to common queries.
      - **Content Creation**: Generating human-like text for marketing and communication.

      NLP is unlocking new possibilities for communication and interaction, making AI systems more intuitive and user-friendly.
    `,
    image: "/tech-blog-4.jpg",
    author: "Dr. Olivia Green",
    date: "2023-12-13",
    readTime: "6 min read",
    category: "Natural Language Processing",
  },
  {
    id: 24,
    title: "Sustainable Tech Solutions",
    description: "Discussing the challenges and opportunities in developing sustainable and eco-friendly tech solutions.",
    content: `
      Sustainable technology is crucial for addressing environmental challenges and fostering eco-friendly innovation. Balancing technological advancement with sustainability is the need of the hour.

      ## Challenges

      1. **Energy Consumption**: High power usage of data centers and devices.
      2. **E-Waste**: Managing the growing volume of discarded electronics.
      3. **Resource Scarcity**: Dependence on finite raw materials for tech production.

      ## Opportunities

      - **Green Energy**: Utilizing renewable energy sources in tech operations.
      - **Recycling Programs**: Encouraging circular economies in electronics.
      - **Energy-Efficient Designs**: Creating devices with reduced energy footprints.

      Sustainable tech solutions are not just beneficial for the environment but also for creating long-term value in the technology sector.
    `,
    image: "/tech-blog-5.jpg",
    author: "Dr. Ava Taylor",
    date: "2023-12-13",
    readTime: "7 min read",
    category: "Sustainable Tech",
  },
  {
    id: 25,
    title: "Biotechnology and AI in Medicine",
    description: "Exploring the intersection of biotechnology and AI in accelerating drug discovery and personalized medicine.",
    content: `
      The convergence of biotechnology and AI is transforming medicine, driving innovation in drug discovery and personalized healthcare.

      ## Key Contributions

      1. **Drug Discovery**: Accelerating research through AI-driven simulations.
      2. **Personalized Medicine**: Tailoring treatments based on genetic profiles.
      3. **Disease Prediction**: Using AI to identify health risks and preventive measures.

      ## Real-World Impact

      - **Cancer Research**: AI-enhanced analysis of genetic mutations.
      - **Rare Diseases**: Identifying potential treatments for less-studied conditions.
      - **Clinical Trials**: Optimizing participant selection and trial efficiency.

      The integration of biotechnology and AI is setting new standards in medical innovation, promising a future of more effective and targeted healthcare.
    `,
    image: "/tech-blog-6.jpg",
    author: "Dr. Mathew Green",
    date: "2023-12-13",
    readTime: "6 min read",
    category: "Biotechnology and Ai in Medicine",
  },
]

export default function BlogPost() {
  const { id } = useParams()
  const post = allBlogPosts.find(post => post.id === Number(id))

  const [comments, setComments] = useState([
    { name: 'John Doe', comment: 'This is a fascinating insight into quantum computing! The explanation of superposition was particularly clear.', date: '2023-12-13' },
    { name: 'Jane Smith', comment: 'Great article! I would love to see more content about quantum cryptography applications.', date: '2023-12-13' },
  ])

  const [newComment, setNewComment] = useState({ name: '', comment: '' })

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const date = new Date().toISOString().split('T')[0]
    setComments([...comments, { ...newComment, date }])
    setNewComment({ name: '', comment: '' })
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <NeonButton href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </NeonButton>
        </div>
      </div>
    )
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="container mx-auto py-16 px-4">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NeonButton href="/blog">
            Back to Blog
          </NeonButton>
        </motion.div>

        <article className="max-w-4xl mx-auto">
          <GlowingCard className="mb-12">
            <CardHeader className="p-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  width={1200} 
                  height={600} 
                  className="w-full h-[400px] object-cover rounded-t-lg"
                />
              </motion.div>
            </CardHeader>
            <CardContent className="p-8">
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CardTitle className="text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{post.title}</CardTitle>
                <motion.div 
                  className="flex flex-wrap gap-4 text-sm text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-2" />
                    {post.category}
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="prose prose-invert max-w-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('##')) {
                    return <motion.h2 
                      key={index} 
                      className="text-2xl font-bold mt-8 mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      {paragraph.replace('## ', '')}
                    </motion.h2>
                  }
                  if (paragraph.startsWith('###')) {
                    return <motion.h3 
                      key={index} 
                      className="text-xl font-bold mt-6 mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      {paragraph.replace('### ', '')}
                    </motion.h3>
                  }
                  if (paragraph.startsWith('-')) {
                    return <motion.li 
                      key={index} 
                      className="ml-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      {paragraph.replace('- ', '')}
                    </motion.li>
                  }
                  if (paragraph.trim().length > 0) {
                    return <motion.p 
                      key={index} 
                      className="mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      {paragraph}
                    </motion.p>
                  }
                  return null
                })}
              </motion.div>
            </CardContent>
            <CardFooter className="p-8 flex justify-between items-center border-t border-gray-800">
              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="text-sm text-gray-400">Share this article:</span>
                <SocialIcons />
              </motion.div>
              <motion.span 
                className="text-sm text-gray-400"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Category: {post.category}
              </motion.span>
            </CardFooter>
          </GlowingCard>

          <GlowingCard>
            <CardHeader>
              <CardTitle className="text-2xl">Comments ({comments.length})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <AnimatePresence>
                {comments.map((comment, index) => (
                  <motion.div 
                    key={index} 
                    className="p-4 bg-gray-800 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <User className="w-4 h-4" />
                      <span className="font-semibold">{comment.name}</span>
                      <span className="text-sm text-gray-400">{comment.date}</span>
                    </div>
                    <p className="text-gray-300">{comment.comment}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </CardContent>
            <CardFooter>
              <form onSubmit={handleCommentSubmit} className="w-full space-y-4">
                <Input
                  type="text"
                  placeholder="Your name"
                  value={newComment.name}
                  onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                  className="bg-gray-800 text-white"
                  required
                />
                <Textarea
                  placeholder="Your comment"
                  value={newComment.comment}
                  onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                  className="bg-gray-800 text-white min-h-[100px]"
                  required
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Post Comment
                  </Button>
                </motion.div>
              </form>
            </CardFooter>
          </GlowingCard>
        </article>
      </div>
    </motion.div>
  )

}

