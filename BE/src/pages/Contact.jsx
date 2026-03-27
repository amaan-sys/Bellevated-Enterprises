import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Globe, 
  MessageSquare 
} from "lucide-react";

export default function Contact() {


  const [formData, setFormData] = useState({
  name: "",
  email: "",
  interest: "Courier & Logistics",
  message: "",
});
const [status, setStatus] = useState("");



const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        interest: "Courier & Logistics",
        message: "",
      });
    } else {
      setStatus("Failed to send message");
    }
  } catch {
    setStatus("Server error");
  }
};



  const contactInfo = [
    { 
      icon: <Mail size={20} />, 
      label: "Direct Strategy", 
      value: "ceo@bellevated.com",
      sub: "Typical response: < 2hrs" 
    },
    { 
      icon: <Phone size={20} />, 
      label: "Direct Line", 
      value: "678-388-3964",
      sub: "Text or Call available" 
    },
    { 
      icon: <MessageSquare size={20} />, 
      label: "Support Desk", 
      value: "(888) 200-0472",
      sub: "24/7 Priority Support" 
    }
  ];

  return (
    <div className="bg-black text-white selection:bg-[#C9A24D] selection:text-black">
      
      {/* 1. CINEMATIC HEADER */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#C9A24D] font-mono text-sm tracking-[0.5em] uppercase mb-4 block"
          >
            Connection
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
          >
            LET’S <span className="text-gray-500 italic font-light">BEGIN.</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. CONTACT HUB (SPLIT SECTION) */}
      <section className="pb-10 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          
          {/* Left Side: Brand Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-md">
              Whether you're looking for elite courier contracts or strategic 
              business formation, we are ready to elevate your mission.
            </p>

            <div className="space-y-8">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="mt-1 p-3 rounded-xl bg-zinc-900 border border-white/5 text-[#C9A24D] group-hover:bg-[#C9A24D] group-hover:text-black transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-1">{item.label}</p>
                    <p className="text-xl font-bold tracking-tight">{item.value}</p>
                    <p className="text-xs text-gray-600 mt-1">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-3xl bg-zinc-950 border border-white/5 space-y-4">
              <div className="flex items-center gap-3 text-[#C9A24D]">
                <MapPin size={18} />
                <span className="text-sm font-bold tracking-widest uppercase">Headquarters</span>
              </div>
              <p className="text-gray-400 font-light">
                300 Lenora St. #6342, <br />
                Seattle, WA 98121
              </p>
              <div className="flex items-center gap-3 text-gray-600 pt-4">
                <Globe size={16} />
                <span className="text-xs">Serving Clients Nationwide</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Lead Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-10 md:p-14 bg-zinc-900/50 border border-white/10 rounded-[3rem] backdrop-blur-xl"
          >
            <div className="absolute top-0 right-0 p-8">
              <Clock className="text-[#C9A24D]/20" size={80} />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-2">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#C9A24D] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-2">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#C9A24D] transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-2">Interested In</label>
                <select name="interest" value={formData.interest} onChange={handleChange} className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#C9A24D] transition-colors appearance-none">
                  <option>Courier & Logistics</option>
                  <option>Credit Restoration</option>
                  <option>Business Formation</option>
                  <option>Consulting & Strategy</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-2">Your Mission</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="How can we help you rise?" className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#C9A24D] transition-colors resize-none"></textarea>
              </div>

              <motion.button type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#C9A24D] text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 uppercase tracking-widest text-sm shadow-[0_20px_40px_rgba(201,162,77,0.2)]"
              >
                Send Message <Send size={18} />
              </motion.button>
              {status && <p className="text-center text-sm mt-4">{status}</p>}
            </form>
          </motion.div>
        </div>
      </section>

      {/* 3. MAP / SOCIAL PROOF STRIP */}
      <section className="bg-zinc-950 py-20 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
           <div>
             <h3 className="text-2xl font-bold mb-2">Global Presence.</h3>
             <p className="text-gray-500 font-light">Operating across major U.S. hubs nationwide.</p>
           </div>
           <div className="flex gap-12">
              <div className="text-center">
                <p className="text-3xl font-black text-[#C9A24D]">24/7</p>
                <p className="text-[10px] text-gray-600 uppercase tracking-widest">Available</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-white">100%</p>
                <p className="text-[10px] text-gray-600 uppercase tracking-widest">Secure</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}