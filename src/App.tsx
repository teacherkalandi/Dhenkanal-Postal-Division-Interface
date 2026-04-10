import { motion } from "motion/react";
import { ExternalLink, Search, Mail } from "lucide-react";
import { useState } from "react";
import { links } from "./data/links";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLinks = links.filter((link) =>
    link.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-[#f4f7f6] text-slate-900 font-sans selection:bg-red-100">
      {/* Header */}
      <header className="bg-indiapost-red text-white shadow-lg relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-indiapost-yellow rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-indiapost-yellow rounded-full blur-3xl opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between py-3 gap-4">
            
            {/* Left Section: Emblem + Title */}
            <div className="flex items-center gap-3 md:gap-4">
              <motion.img 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                alt="National Emblem of India" 
                className="h-10 md:h-12 w-auto brightness-0 invert opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="h-8 w-[1px] bg-white/20 hidden sm:block" />
              <div className="text-left">
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-lg md:text-xl font-bold tracking-tight text-indiapost-yellow leading-tight"
                >
                  Dhenkanal Postal Division Interface
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-[10px] md:text-xs text-white/80 font-medium uppercase tracking-wider"
                >
                  BD Branch — Quick Access Portal
                </motion.p>
              </div>
            </div>

            {/* Right Section: Search + Logo */}
            <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative flex-grow md:w-64"
              >
                <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                  <Search className="h-3.5 w-3.5 text-white/60" />
                </div>
                <input
                  type="text"
                  placeholder="Search links..."
                  className="block w-full pl-8 pr-3 py-1.5 border border-white/20 rounded-lg leading-5 bg-white/10 backdrop-blur-md text-white placeholder-white/50 text-xs focus:outline-none focus:bg-white focus:text-slate-900 focus:ring-2 focus:ring-indiapost-yellow transition-all duration-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </motion.div>
              <div className="h-8 w-[1px] bg-white/20 hidden md:block" />
              <motion.img 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                src="https://upload.wikimedia.org/wikipedia/en/3/32/India_Post.svg" 
                alt="India Post Logo" 
                className="h-10 md:h-12 w-auto bg-white p-1 rounded-lg shadow-sm flex-shrink-0"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {filteredLinks.length > 0 ? (
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.title}
                  variants={item}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${link.color} text-white overflow-hidden min-h-[160px]`}
                >
                  {/* Decorative background element */}
                  <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Icon size={120} />
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} />
                    </div>
                    <span className="font-semibold text-lg leading-tight">
                      {link.title}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={16} className="text-white/70" />
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg italic">No links found matching "{searchQuery}"</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-200 text-center">
        <div className="flex justify-center mb-4">
          <div className="h-1 w-24 bg-indiapost-red rounded-full" />
        </div>
        <p className="text-slate-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Dhenkanal Division. All rights reserved.
        </p>
        <p className="text-indiapost-red/60 text-xs mt-1 font-bold uppercase tracking-widest">
          India Post
        </p>
      </footer>
    </div>
  );
}
