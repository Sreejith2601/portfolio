import React, { useRef } from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_5mas806', 'template_od1pgmm', form.current, 'MlS9wUg7_QFv51_1u')
        .then(() => {
          toast.success('Message sent successfully!');
          form.current?.reset();
        }, () => {
          toast.error('Failed to send message. Please try again.');
        });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Toaster position="top-right" />
      
      {/* Hero Section */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Sreejith B
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">About</a></li>
              <li><a href="#education" className="text-gray-600 hover:text-purple-600 transition-colors">Education</a></li>
              <li><a href="#skills" className="text-gray-600 hover:text-purple-600 transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-purple-600 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                I am a passionate MCA student at Kumaraguru College of Technology, with a strong foundation in computer science and a keen interest in software development. I specialize in web development and have experience with various modern technologies.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:sreejith.24mca@kct.ac.in" 
                   className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </a>
                <a href="https://github.com/Sreejith2601/" 
                   className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/sreejith-b-990596296" 
                   className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
              {/* <img src="/sreee....jpeg" alt="Sreejith B" 
                   className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-10px h-10px"  /> */}
              <img 
                src="/sreee....jpeg" 
                alt="Sreejith B"
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-[300px] h-[250px] object-cover" 
              />

            </div>
          </div>
        </div>
      </section> 

      

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-12">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Master of Computer Applications</h3>
              <p className="text-gray-600">Kumaraguru College of Technology</p>
              <p className="text-gray-500">2024 - Present</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">BSc Physics</h3>
              <p className="text-gray-600">Govt Arts and Science College - Gudalur</p>
              <p className="text-gray-500">2020 - 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-12">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Programming Languages</h3>
              <ul className="space-y-2 text-gray-600">
                <li>JavaScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Web Technologies</h3>
              <ul className="space-y-2 text-gray-600">
                <li>React.js</li>
                <li>Node.js</li>
                <li>HTML5/CSS3</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Tools & Platforms</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Git</li>
                <li>VS Code</li>
                <li>Docker</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Wildlife Intrusion Detection System</h3>
              <p className="text-gray-600 mb-4"> Developed an integrated system using proximity, thermal, and motion sensors to detect animal movements in a predefined area.</p>
              <div className="flex space-x-2">
                
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Data literacy with tableau.</h3>
              <p className="text-gray-600 mb-4">  India's agricultural crop production analysis</p>
              <div className="flex space-x-2">
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-12">
            Contact Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-600 mb-8">
                Feel free to reach out to me for any opportunities or collaborations.
              </p>
              <div className="space-y-4">
                <a href="mailto:sreejith.24mca@kct.ac.in" 
                   className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
                  <Mail className="w-5 h-5 mr-2" />
                  sreejith.24mca@kct.ac.in
                </a>
                <a href="tel:+1234567890" 
                   className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
                  <Phone className="w-5 h-5 mr-2" />
                  +91 6369913696
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg shadow-lg">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input type="text" name="user_name" id="name" required
                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input type="email" name="user_email" id="email" required
                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea name="message" id="message" rows={4} required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                </div>
                <button type="submit" 
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p>© 2024 Sreejith B. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/Rethu21" className="hover:text-purple-300 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/sreejith-b-990596296" className="hover:text-purple-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
