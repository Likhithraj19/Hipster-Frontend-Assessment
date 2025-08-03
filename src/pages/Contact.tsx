import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle, Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router';

export const Contact: React.FC = () => {
  const { themeConfig } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us an email',
      value: 'mailto:likhithrj@gmail.com',
      color: 'text-primary'
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'View the source code',
      value: 'https://github.com/Likhithraj19',
      color: 'text-foreground'
    },
    {
      icon: ExternalLink,
      title: 'Demo',
      description: 'Live demonstration',
      value: 'themeswitcher.demo',
      color: 'text-accent'
    }
  ];

  return (
    <div className={`space-y-16 ${themeConfig.fontFamily}`}>
      <motion.section
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center space-x-2 text-primary bg-primary/10 px-4 py-2 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-sm font-medium">Get In Touch</span>
        </motion.div>
        
        <motion.h1
          className={`
            text-4xl md:text-6xl font-bold text-foreground
            ${themeConfig.fontFamily}
          `}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Let's Connect
        </motion.h1>
        
        <motion.p
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Have questions about the theme system? Want to collaborate on a project? 
          Or just want to say hello? We'd love to hear from you!
        </motion.p>
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.h2
            className="text-3xl font-bold text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Send us a Message
          </motion.h2>

          {isSubmitted ? (
            <motion.div
              className="bg-success/10 border border-success/20 rounded-lg p-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
              >
                <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. This is a demo form, but we appreciate your interest!
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full theme-input focus:scale-105 transition-transform"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full theme-input focus:scale-105 transition-transform"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full theme-input focus:scale-105 transition-transform"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full theme-input resize-none focus:scale-105 transition-transform"
                  placeholder="Tell us more about your message..."
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full theme-button-primary flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </motion.button>
            </motion.form>
          )}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.h2
            className="text-3xl font-bold text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Other Ways to Connect
          </motion.h2>

          <div className="space-y-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  className="bg-surface border border-border rounded-lg p-6 theme-shadow hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className={`${method.color} bg-surface-variant p-3 rounded-lg group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: 5 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {method.title}
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        {method.description}
                      </p>
                      <Link to={method.value} className="text-primary font-medium">
                        {method.value}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </motion.section>
      </div>
    </div>
  );
};