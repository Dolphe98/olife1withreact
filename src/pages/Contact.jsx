import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  // State to track if the user passed the CAPTCHA
  const [captchaValue, setCaptchaValue] = useState(null);

  // THE ENGINE: This handles the form submission
  const onSubmit = async (event) => {
    event.preventDefault();

    // The Shield: Stop them if they didn't check the box
    if (!captchaValue) {
      alert("Please verify that you are a human by checking the reCAPTCHA box.");
      return;
    }

    const formData = new FormData(event.target);

    // Your personal Web3Forms Access Key
    formData.append("access_key", "3b196b3a-8467-4f08-ba11-7a0cc495b85f");
    formData.append("from_name", "Olife Sanctuary");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        alert("Message sent successfully! We will reach out soon.");
        event.target.reset(); // Clears the form after sending
        setCaptchaValue(null); // Resets the captcha
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-20 pb-10 space-y-24 md:space-y-32">
      
      {/* SECTION 1: THE PHILOSOPHY */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-2xl md:text-4xl font-light text-slate-300 leading-relaxed italic">
          “At <span className="text-cyan-500 font-bold not-italic">Olife</span>, we explore deep questions, elaborate on the reasons behind them, and, more importantly, we provide a judgment-free space.”
        </h1>
        <div className="w-24 h-1 bg-cyan-900 mx-auto rounded-full"></div>
      </div>

      {/* SECTION 2: WHATSAPP COMMUNITY */}
      <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-900/20 border border-slate-800 p-8 md:p-16 rounded-3xl shadow-2xl">
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl md:text-4xl font-black text-slate-100 uppercase tracking-tighter">
            Join our community on <span className="text-green-500">WhatsApp</span>
          </h2>
          <div className="flex flex-col gap-4">
            <a href="https://chat.whatsapp.com/H3j7yRTaKIvLFA8xNNjJ2S?mode=gi_t" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-between p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-green-500 transition-all group">
              <span className="font-bold text-slate-200 tracking-widest uppercase text-xs">WhatsApp Group</span>
              <span className="bg-green-600 text-white px-4 py-1 rounded-full text-[10px] font-black group-hover:bg-green-500 transition-colors">JOIN GROUP</span>
            </a>
            <a href="https://whatsapp.com/channel/0029VbChk337oQhilYhgdA0Z" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-between p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-green-400 transition-all group">
              <span className="font-bold text-slate-200 tracking-widest uppercase text-xs">WhatsApp Channel</span>
              <span className="bg-green-700 text-white px-4 py-1 rounded-full text-[10px] font-black group-hover:bg-green-600 transition-colors">FOLLOW</span>
            </a>
          </div>
        </div>
        <div className="flex-1 w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
          <img src="/olifecontact1.jpg" alt="Olife Community" className="w-full h-full object-cover opacity-80" />
        </div>
      </div>

      {/* SECTION 3: CONTACT FORM */}
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-slate-100 uppercase tracking-widest">Send a Message</h3>
          <p className="text-slate-500 text-sm tracking-widest uppercase">We value your curiosity</p>
        </div>

        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">First Name</label>
            <input type="text" name="First_Name" required className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-slate-200 focus:outline-none focus:border-cyan-600 transition-colors" placeholder="John" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Last Name</label>
            <input type="text" name="Last_Name" required className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-slate-200 focus:outline-none focus:border-cyan-600 transition-colors" placeholder="Doe" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">WhatsApp Number (Optional)</label>
            <input type="text" name="WhatsApp_Number" className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-slate-200 focus:outline-none focus:border-cyan-600 transition-colors" placeholder="+1 000 000 000" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Subject</label>
            <input type="text" name="Subject" required className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-slate-200 focus:outline-none focus:border-cyan-600 transition-colors" placeholder="Deep Questions" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Message</