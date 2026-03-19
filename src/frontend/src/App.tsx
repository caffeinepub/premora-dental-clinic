import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Activity,
  AlignJustify,
  ArrowRight,
  Clock,
  Heart,
  MapPin,
  Menu,
  Phone,
  Shield,
  Smile,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

const WA_LINK = "https://wa.me/919389333597";
const PHONE_PRIMARY = "tel:+919389333597";

const services = [
  {
    icon: <Star className="w-5 h-5" />,
    title: "General Checkup",
    desc: "Comprehensive oral health examinations and professional consultations.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Teeth Cleaning",
    desc: "Professional scaling and polishing for a healthier, brighter smile.",
  },
  {
    icon: <Smile className="w-5 h-5" />,
    title: "Teeth Whitening",
    desc: "Advanced whitening treatments to restore your smile's natural radiance.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Dental Implants",
    desc: "State-of-the-art implants for permanent, natural-looking tooth replacement.",
  },
  {
    icon: <AlignJustify className="w-5 h-5" />,
    title: "Braces & Orthodontics",
    desc: "Metal, ceramic, and clear aligners to straighten and align your teeth.",
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: "Root Canal Treatment",
    desc: "Pain-free endodontic therapy to save and restore damaged teeth.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Tooth Extraction",
    desc: "Safe, gentle extractions with minimal discomfort and fast recovery.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Smile Makeover",
    desc: "Personalised cosmetic treatment plans to transform your smile completely.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi! I'd like to book an appointment.\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`,
    );
    window.open(`${WA_LINK}?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* ── NAVBAR (frosted glass) ── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/60 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              type="button"
              onClick={() => scrollTo("home")}
              className="flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-md bg-teal-500 flex items-center justify-center shadow-sm">
                <Smile className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight text-left">
                <p className="text-sm font-bold text-foreground tracking-widest font-display uppercase">
                  Premora
                </p>
                <p className="text-[9px] text-muted-foreground tracking-[0.2em] -mt-0.5 uppercase">
                  Dental Clinic
                </p>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {["home", "about", "services", "contact"].map((sec) => (
                <button
                  type="button"
                  key={sec}
                  data-ocid={`nav.${sec}.link`}
                  onClick={() => scrollTo(sec)}
                  className="text-muted-foreground hover:text-teal-500 capitalize font-medium text-sm transition-colors relative group"
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <a href={WA_LINK} target="_blank" rel="noreferrer">
                <Button
                  data-ocid="nav.book_appointment.button"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-5 rounded-md text-sm gap-1.5"
                >
                  <SiWhatsapp className="w-3.5 h-3.5" />
                  Book Appointment
                </Button>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              data-ocid="nav.mobile_menu.toggle"
              className="md:hidden p-2 text-muted-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-border/60 px-4 pb-4 overflow-hidden"
            >
              {["home", "about", "services", "contact"].map((sec) => (
                <button
                  type="button"
                  key={sec}
                  data-ocid={`nav.mobile_${sec}.link`}
                  onClick={() => scrollTo(sec)}
                  className="block w-full text-left py-3 text-muted-foreground hover:text-teal-500 capitalize font-medium text-sm border-b border-border/40 last:border-0"
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </button>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="block mt-3"
              >
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md text-sm gap-1.5">
                  <SiWhatsapp className="w-3.5 h-3.5" />
                  Book Appointment
                </Button>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ── */}
      <section id="home" className="relative bg-white overflow-hidden">
        {/* Background decorative gradient */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 80% 50%, oklch(0.93 0.045 192 / 0.25) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 90%, oklch(0.93 0.045 192 / 0.15) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-0 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="pb-16 pt-8 md:pt-16"
            >
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 text-xs font-semibold px-3 py-1.5 rounded-md mb-6 border border-teal-100"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                Multispeciality Dental Care & Implant Centre
              </motion.span>

              <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-6">
                Expert Dental
                <br />
                Care <span className="text-teal-500">You Can</span>
                <br />
                <span className="text-teal-500">Trust.</span>
              </h1>

              <p className="text-muted-foreground text-base lg:text-lg mb-8 leading-relaxed max-w-md">
                Welcome to Premora Dental Clinic — your trusted partner in
                advanced dental care, cosmetic treatments, and implantology in
                Meerut.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href={WA_LINK} target="_blank" rel="noreferrer">
                  <Button
                    data-ocid="hero.book_appointment.button"
                    className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2.5 rounded-md gap-2 text-sm"
                  >
                    <SiWhatsapp className="w-4 h-4" />
                    Book Appointment
                  </Button>
                </a>
                <a href={PHONE_PRIMARY}>
                  <Button
                    data-ocid="hero.call_now.button"
                    variant="outline"
                    className="border-border hover:border-teal-500 hover:text-teal-500 font-semibold px-6 py-2.5 rounded-md gap-2 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </a>
              </div>

              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-teal-50 border border-teal-100 flex items-center justify-center">
                    <Star className="w-3.5 h-3.5 text-teal-500" />
                  </div>
                  BDS & MDS Qualified
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-teal-50 border border-teal-100 flex items-center justify-center">
                    <Heart className="w-3.5 h-3.5 text-teal-500" />
                  </div>
                  12+ Years Experience
                </div>
              </div>
            </motion.div>

            {/* Right — Clinic Photo with layered composition */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex justify-end items-end self-end"
            >
              {/* Decorative shapes behind image */}
              <div
                aria-hidden
                className="absolute top-8 right-0 w-4/5 h-4/5 rounded-2xl"
                style={{ background: "oklch(0.93 0.045 192 / 0.35)" }}
              />
              <div
                aria-hidden
                className="absolute bottom-0 left-4 w-32 h-32 rounded-full"
                style={{
                  background: "oklch(0.87 0.07 192 / 0.25)",
                  filter: "blur(32px)",
                }}
              />

              <div className="relative w-full max-w-lg">
                <img
                  src="/assets/uploads/image-1.png"
                  alt="Premora Dental Clinic exterior"
                  className="relative z-10 w-full rounded-t-2xl object-cover shadow-lift"
                  style={{ maxHeight: "520px", objectPosition: "center top" }}
                />
                {/* Floating stat card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute z-20 bottom-8 -left-6 bg-white rounded-xl shadow-lift px-5 py-3.5 border border-border/60"
                >
                  <p className="text-xs text-muted-foreground font-medium">
                    Trusted by
                  </p>
                  <p className="text-2xl font-bold text-foreground font-display tracking-tight">
                    5,000+
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Happy Patients
                  </p>
                </motion.div>
                {/* Second floating card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.75 }}
                  className="absolute z-20 top-6 -left-4 bg-teal-500 text-white rounded-xl shadow-lift px-4 py-3"
                >
                  <p className="text-xs font-medium text-teal-100">
                    Established
                  </p>
                  <p className="text-xl font-bold font-display">2012</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "5,000+", label: "Happy Patients" },
              { num: "12+", label: "Years Experience" },
              { num: "8", label: "Specialities" },
              { num: "2", label: "Expert Doctors" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <p className="text-3xl font-bold font-display text-teal-200 tracking-tight">
                  {stat.num}
                </p>
                <p className="text-sm text-white/60 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-600 text-xs font-semibold px-3 py-1.5 rounded-md mb-4 border border-teal-100">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              What We Offer
            </span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
                Our Dental
                <br />
                <span className="text-teal-500">Services</span>
              </h2>
              <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                Comprehensive care from routine checkups to advanced
                implantology — all under one roof.
              </p>
            </div>
          </motion.div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border rounded-2xl overflow-hidden"
            data-ocid="services.list"
          >
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                data-ocid={`services.item.${i + 1}`}
                className="p-6 border-b border-r border-border hover:bg-teal-50/60 transition-colors group relative"
              >
                {/* Large number decoration */}
                <span className="absolute top-3 right-4 text-5xl font-bold font-display text-border select-none group-hover:text-teal-100 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-10 h-10 rounded-md bg-teal-500/10 border border-teal-200 flex items-center justify-center text-teal-600 mb-5 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 transition-all">
                  {svc.icon}
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm mb-2 leading-tight">
                  {svc.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <a href={WA_LINK} target="_blank" rel="noreferrer">
              <Button
                data-ocid="services.book_appointment.button"
                variant="outline"
                className="border-teal-500 text-teal-600 hover:bg-teal-50 rounded-md gap-2 font-semibold"
              >
                Book a Service <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                aria-hidden
                className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl border-2 border-teal-200"
              />
              <img
                src="/assets/uploads/image-1.png"
                alt="Premora Dental Clinic"
                className="relative z-10 w-full rounded-2xl object-cover shadow-lift border border-border/60"
                style={{ maxHeight: "440px" }}
              />
              {/* Experience badge */}
              <div className="absolute z-20 -top-5 -right-5 bg-teal-500 text-white rounded-2xl shadow-lift px-5 py-4 text-center">
                <p className="text-2xl font-bold font-display leading-none">
                  12+
                </p>
                <p className="text-xs text-teal-100 mt-0.5">Yrs Exp.</p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-600 text-xs font-semibold px-3 py-1.5 rounded-md mb-5 border border-teal-100">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                About Us
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-5">
                Meet Dr. Ashmit
                <br />
                <span className="text-teal-500">Agarwal</span>
              </h2>
              <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                Premora Dental Clinic is a premier multispeciality dental care
                and implant centre located in the heart of Shastri Nagar,
                Meerut. We are committed to providing world-class dental
                treatment with the latest technology and a compassionate
                approach.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
                Dr. Ashmit Agarwal (BDS, MDS, FAGE) brings years of expertise
                from prestigious institutions including Deza Dayal Hospital,
                Delhi and Cantonment General Hospital, Meerut, ensuring every
                patient receives exceptional care.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { label: "BDS, MDS, FAGE", sub: "Qualified Specialist" },
                  { label: "Ex. Deza Dayal Hospital", sub: "New Delhi" },
                  { label: "Cantonment General Hospital", sub: "Meerut" },
                  { label: "Multispeciality", sub: "Implant Centre" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white border border-border rounded-lg p-3.5 shadow-soft"
                  >
                    <p className="text-foreground font-semibold text-sm leading-tight">
                      {item.label}
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>

              <a href={WA_LINK} target="_blank" rel="noreferrer">
                <Button
                  data-ocid="about.book_appointment.button"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 rounded-md gap-2"
                >
                  Book a Consultation <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-600 text-xs font-semibold px-3 py-1.5 rounded-md mb-4 border border-teal-100">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              Get In Touch
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Book Your
              <br />
              <span className="text-teal-500">Appointment</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md text-sm leading-relaxed">
              Fill the form and we&apos;ll reach out via WhatsApp to confirm
              your visit.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-muted border border-border/60 rounded-2xl p-8"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Send a Message
              </h3>
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-ocid="contact.form"
              >
                <div>
                  <Label
                    htmlFor="name"
                    className="text-muted-foreground text-xs font-semibold mb-1.5 block uppercase tracking-wide"
                  >
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    data-ocid="contact.name.input"
                    placeholder="Dr. Ravi Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="bg-white border-border/60 focus-visible:ring-teal-500 rounded-md"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-muted-foreground text-xs font-semibold mb-1.5 block uppercase tracking-wide"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    data-ocid="contact.phone.input"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    required
                    className="bg-white border-border/60 focus-visible:ring-teal-500 rounded-md"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="text-muted-foreground text-xs font-semibold mb-1.5 block uppercase tracking-wide"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    data-ocid="contact.message.textarea"
                    placeholder="Tell us about your dental concern..."
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="bg-white border-border/60 focus-visible:ring-teal-500 rounded-md resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  data-ocid="contact.submit.button"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md gap-2"
                >
                  <SiWhatsapp className="w-4 h-4" />
                  Send via WhatsApp
                </Button>
              </form>
            </motion.div>

            {/* Clinic Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Clinic Information
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: <MapPin className="w-4 h-4" />,
                      label: "Address",
                      content: (
                        <p className="text-muted-foreground text-sm mt-0.5">
                          Sector 3, Shastri Nagar,
                          <br />
                          Meerut, Uttar Pradesh 250004
                        </p>
                      ),
                    },
                    {
                      icon: <Phone className="w-4 h-4" />,
                      label: "Phone",
                      content: (
                        <div className="mt-0.5 space-y-0.5">
                          <a
                            href="tel:+919389333597"
                            className="text-teal-500 hover:underline text-sm block"
                          >
                            +91 93893 33597
                          </a>
                          <a
                            href="tel:+917300846996"
                            className="text-teal-500 hover:underline text-sm block"
                          >
                            +91 73008 46996
                          </a>
                        </div>
                      ),
                    },
                    {
                      icon: <Clock className="w-4 h-4" />,
                      label: "Clinic Hours",
                      content: (
                        <div className="mt-0.5">
                          <p className="text-muted-foreground text-sm">
                            Monday – Saturday: 9:00 AM – 8:00 PM
                          </p>
                          <p className="text-muted-foreground text-sm">
                            Sunday: By Appointment Only
                          </p>
                        </div>
                      ),
                    },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-4">
                      <div className="w-9 h-9 rounded-md bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 flex-shrink-0">
                        {row.icon}
                      </div>
                      <div>
                        <p className="text-foreground font-semibold text-sm">
                          {row.label}
                        </p>
                        {row.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency CTA */}
              <div className="bg-navy rounded-2xl p-6 text-white">
                <h4 className="font-display font-bold text-lg mb-2">
                  Emergency Dental Care?
                </h4>
                <p className="text-white/60 text-sm mb-5 leading-relaxed">
                  We understand dental emergencies can&apos;t wait. Call us or
                  reach out on WhatsApp for priority assistance.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href={WA_LINK} target="_blank" rel="noreferrer">
                    <Button
                      data-ocid="contact.whatsapp.button"
                      className="bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md text-sm gap-2"
                    >
                      <SiWhatsapp className="w-4 h-4" />
                      WhatsApp
                    </Button>
                  </a>
                  <a href={PHONE_PRIMARY}>
                    <Button
                      data-ocid="contact.call.button"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 font-semibold rounded-md text-sm gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-md bg-teal-500 flex items-center justify-center">
                  <Smile className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold tracking-widest font-display uppercase">
                    Premora
                  </p>
                  <p className="text-[9px] text-white/50 tracking-[0.2em] -mt-0.5 uppercase">
                    Dental Clinic
                  </p>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Committed to your smile. Advanced dental care with a personal
                touch in Shastri Nagar, Meerut.
              </p>
              <div className="flex gap-2.5">
                {[
                  {
                    href: "https://www.facebook.com",
                    label: "Facebook",
                    icon: <SiFacebook className="w-4 h-4" />,
                  },
                  {
                    href: "https://www.instagram.com",
                    label: "Instagram",
                    icon: <SiInstagram className="w-4 h-4" />,
                  },
                  {
                    href: WA_LINK,
                    label: "WhatsApp",
                    icon: <SiWhatsapp className="w-4 h-4" />,
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-8 h-8 rounded-md bg-white/10 hover:bg-teal-500 flex items-center justify-center transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-sm mb-5 text-white/80 uppercase tracking-widest">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {["home", "about", "services", "contact"].map((sec) => (
                  <li key={sec}>
                    <button
                      type="button"
                      onClick={() => scrollTo(sec)}
                      className="text-white/50 hover:text-white text-sm capitalize transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 text-teal-500 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                      {sec.charAt(0).toUpperCase() + sec.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-semibold text-sm mb-5 text-white/80 uppercase tracking-widest">
                Contact
              </h4>
              <div className="space-y-3.5 text-sm text-white/50">
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-teal-400" />
                  <span>Sector 3, Shastri Nagar, Meerut, UP 250004</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-4 h-4 flex-shrink-0 text-teal-400" />
                  <div>
                    <a
                      href="tel:+919389333597"
                      className="hover:text-white block"
                    >
                      +91 93893 33597
                    </a>
                    <a
                      href="tel:+917300846996"
                      className="hover:text-white block"
                    >
                      +91 73008 46996
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 text-teal-400" />
                  <span>Mon – Sat: 9 AM – 8 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/30">
            <p>
              © {new Date().getFullYear()} Premora Dental Clinic. All rights
              reserved.
            </p>
            <p>
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-white"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
