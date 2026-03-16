import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function Contact() {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [buttonText, setButtonText] = useState("Send Message");
  const [newsBtnText, setNewsBtnText] = useState("Subscribe");
  const [phone, setPhone] = useState("");

  // ENGINE 1: Contact Form
  const onContactSubmit = async (event) => {
    event.preventDefault();
    if (!captchaValue) {
      alert("Please verify that you are a human.");
      return;
    }
    setButtonText("Sending...");
    const formData = new FormData(event.target);
    formData.append("WhatsApp_Number", phone);

    try {
      const response = await fetch("https://formspree.io/f/xeerrora", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        alert("Message sent successfully!");
        event.target.reset();
        setPhone("");
        setCaptchaValue(null);
      }
    } catch (error) {
      alert("Network Error. Please try again.");
    } finally {
      setButtonText("Send Message");
    }
  };

  // ENGINE 2: Newsletter Form
  const onNewsletterSubmit = async (event) => {
    event.preventDefault();
    setNewsBtnText("...");
    const formData = new FormData(event.target);
    try {
      const response = await fetch("https://formspree.io/f/xeerrora", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        alert("Thanks for subscribing to Olife!");
        event.target.reset();
      }
    } catch (error) {
      alert("Could not subscribe. Try again later.");
    } finally {
      setNewsBtnText("Subscribe");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-20 pb-10 space-y-24 md:space-y-32">
      {/* CSS HOVER FIX */}
      <style>{`
        .country-list { background-color: #0f172a !important; color: #e2e8f0 !important; border: 1px solid #1e293b !important; }
        .country-list .country:hover { background-color: #1e293b !important; }
        .country-list .country.highlight { background-color: #0ea5e9 !important; color: white !important; }
        .country-list .search { background-color: #0f172a !important; color: #e2e8f0 !important; }
      `}</style>
      
      {/* SECTION 1: THE PHILOSOPHY */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-2xl md:text-4xl font-light text-slate-300 leading-relaxed italic">
          “At <span className="text-cyan-500 font-bold not-italic">Olife</span>, we provide a judgment-free space.”
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
            <a href="https://chat.whatsapp.com/H3j7yRTaKIvLFA8xNNjJ2S" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-green-500 transition-all group">
              <span className="font-bold text-slate-200 tracking-widest uppercase text-xs">WhatsApp Group</span>
              <span className="bg-green-600 text-white px-4 py-1 rounded-full text-[10px] font-black group-hover:bg-green-500 transition-colors uppercase">Join Group</span>
            </a>
            <a href="https://whatsapp.com/channel/0029VbChk337oQhilYhgdA0Z" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-green-400 transition-all group">
              <span className="font-bold text-slate-200 tracking-widest uppercase text-xs">WhatsApp Channel</span>
              <span className="bg-green-700 text-white px-4 py-1 rounded-full text-[10px] font-black group-hover:bg-green-600 transition-colors uppercase">Follow</span>
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

        <form onSubmit={onContactSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">First Name</label>
            <input type="text" name="First_Name" required className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-slate-200 focus:outline-none focus:border-cyan-600 transition-colors" placeholder="John" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Last Name</label>
            <input type="text" name="Last_Name" required className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-slate-200 focus:outline-none focus:border-cyan-600 transition-colors" placeholder="Doe" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Email Address</label>
            <input type="email" name="email" required className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-slate-200 focus:outline-none focus:border-cyan-600 transition-colors" placeholder="john@example.com" />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">WhatsApp Number (Optional)</label>
            <PhoneInput
              country={'ht'}
              value={phone}
              onChange={setPhone}
              inputStyle={{ width: '100%', backgroundColor: 'rgba(15, 23, 42, 0.5)', border: '1px solid #1e293b', borderRadius: '0.5rem', color: '#e2e8f0', padding: '1rem', paddingLeft: '3rem', height: '58px' }}
              buttonStyle={{ backgroundColor: 'transparent', border: 'none', paddingLeft: '10px' }}
              dropdownStyle={{ backgroundColor: '#0f172a', color: '#e2e8f0', border: '1px solid #1e293b' }}
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Subject</label>
            <input type="text" name="Subject" required className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-slate-200 focus:outline-none focus:border-cyan-600 transition-colors" placeholder="Deep Questions" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Message</label>
            <textarea rows="5" name="Message" required className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-slate-200 focus:outline-none focus:border-cyan-600 transition-colors resize-none" placeholder="Share your thoughts..."></textarea>
          </div>

          <div className="md:col-span-2 py-4 flex justify-center">
            <ReCAPTCHA sitekey="6Lfg54ssAAAAAPeqsyBjNY_FSFRXYryjQrFyCLgm" onChange={(value) => setCaptchaValue(value)} theme="dark" />
          </div>

          <button type="submit" className="md:col-span-2 py-4 bg-slate-100 text-slate-950 font-black uppercase tracking-[0.3em] rounded-lg hover:bg-cyan-500 hover:text-white transition-all shadow-xl disabled:opacity-50" disabled={buttonText === "Sending..."}>
            {buttonText}
          </button>
        </form>
      </div>

      {/* SECTION 4: NEWSLETTER (CONNECTED) */}
      <form onSubmit={onNewsletterSubmit} className="bg-cyan-950/20 border border-cyan-900/30 rounded-3xl p-8 md:p-16 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-black text-slate-100 uppercase tracking-tighter">The Newsletter</h2>
          <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
            Subscribe to receive our latest fragments directly in your inbox.
          </p>
        </div>
        <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
          <input type="email" name="Newsletter_Email" required className="flex-grow bg-slate-950 border border-slate-800 rounded-full px-6 py-3 text-slate-200 focus:outline-none focus:border-cyan-500" placeholder="your@email.com" />
          <button type="submit" className="bg-cyan-600 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-cyan-500 transition-all shadow-lg min-w-[140px]">
            {newsBtnText}
          </button>
        </div>
      </form>

      <footer className="pt-20 border-t border-slate-900 flex flex-col space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link to="/" className="text-2xl font-black text-slate-100 tracking-tighter hover:text-cyan-400 transition-colors">
            OLIFE<span className="text-cyan-600">.</span>
          </Link>
          <div className="flex gap-6 text-slate-500 text-[10px] md:text-sm font-bold uppercase tracking-widest">
            <Link to="/fragments" className="hover:text-cyan-400 transition-colors">Fragments</Link>
            <Link to="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
            <Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-700 font-bold uppercase tracking-[0.2em] border-t border-slate-900/50 pt-8 text-center">
          <p>© 2026 Olife Sanctuary. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-slate-400 transition-colors">Data Privacy</Link>
            <Link to="/copyright" className="hover:text-slate-400 transition-colors">Copyright Notice</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}