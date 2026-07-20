// Static content for Fastech Solutions
export const BRAND = {
  name: "Fastech Solutions",
  tagline: "Securing Businesses. Powering Technology.",
  contact: "M.H. Faisal",
  phones: ["9949165646", "9246280817"],
  email: "fastechsolutions@hotmail.com",
  address: {
    line1: "17-1-182/A/1, I.S. Sadan",
    line2: "Santosh Nagar, CRIDA Road",
    city: "Hyderabad",
    state: "Telangana",
    pin: "500059",
  },
  hours: "Mon – Sat · 09:30 – 20:00",
  since: 2010,
  whatsapp:
    "https://wa.me/919949165646?text=Hello%20Fastech%20Solutions,%20I%20visited%20your%20website%20and%20I%20would%20like%20to%20know%20more%20about%20your%20products%20and%20services.",
  callHref: "tel:+919949165646",
  mapEmbed:
    "https://www.google.com/maps?q=I.S.+Sadan+Santosh+Nagar+Hyderabad+500059&output=embed",
};

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Ethos", href: "#ethos" },
  { label: "Contact", href: "#contact" },
];

export const FEATURE_STRIP = [
  { k: "01", t: "CCTV Solutions", d: "Design, install & maintain end-to-end surveillance." },
  { k: "02", t: "Computer Sales", d: "Desktops & laptops — new and refurbished, warranty backed." },
  { k: "03", t: "Networking", d: "Structured cabling, routers, mesh & enterprise Wi-Fi." },
  { k: "04", t: "Security Systems", d: "Access control, biometrics, alarms, intercoms." },
  { k: "05", t: "UPS & Backup", d: "APC, sizing, installation and battery replacement." },
  { k: "06", t: "Support & AMC", d: "Response-time SLA. Predictable annual contracts." },
];

export const BRANDS = [
  "HP", "Dell", "Lenovo", "Hikvision", "Dahua",
  "Canon", "Epson", "APC", "TP-Link", "D-Link", "Ubiquiti",
];

// Real product renders — sharp, editorial
export const PRODUCTS = [
  {
    id: "cctv",
    name: "Dome & Bullet CCTV",
    tag: "Surveillance",
    desc: "1080p / 4MP / 4K options. IR night vision, weather-sealed housings.",
    img: "https://images.unsplash.com/photo-1557583716-eaf9d8531d59?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "nvr",
    name: "NVR & DVR Systems",
    tag: "Recording",
    desc: "4/8/16/32 channel recording with mobile & cloud playback.",
    img: "https://images.unsplash.com/photo-1563452965085-2e2fb3990f1b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "laptop",
    name: "Business Laptops",
    tag: "Computing",
    desc: "HP · Dell · Lenovo. New & certified pre-owned with warranty.",
    img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "desktop",
    name: "Desktop Workstations",
    tag: "Computing",
    desc: "Home, office & CAD-grade builds. On-site setup included.",
    img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "router",
    name: "Routers & Access Points",
    tag: "Networking",
    desc: "TP-Link, D-Link, Ubiquiti. Mesh & enterprise Wi-Fi 6.",
    img: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "ups",
    name: "UPS & Inverter Systems",
    tag: "Power",
    desc: "APC line-interactive & online UPS. Sizing + battery service.",
    img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "biometric",
    name: "Biometric Access",
    tag: "Access Control",
    desc: "Fingerprint, RFID, face recognition — attendance & doors.",
    img: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "intercom",
    name: "Video Intercoms",
    tag: "Security",
    desc: "Villa & apartment IP intercom systems with mobile app.",
    img: "https://images.unsplash.com/photo-1585672840563-f2af764ba7f4?auto=format&fit=crop&w=1400&q=80",
  },
];

export const MANIFESTO = [
  {
    n: "01",
    t: "Engineered, not improvised.",
    d: "Every deployment starts with a site walk and a signed-off plan. We measure cable runs, camera arcs and blind spots before a single hole is drilled.",
  },
  {
    n: "02",
    t: "Genuine gear. Nothing else.",
    d: "We source directly from Hikvision, Dahua, HP, Dell, Lenovo, APC, TP-Link and Ubiquiti — with paper trails and manufacturer warranty.",
  },
  {
    n: "03",
    t: "Cabling you will never see.",
    d: "Concealed conduits, labelled ports, tidy racks. The install is judged not by what works, but by what is out of sight.",
  },
  {
    n: "04",
    t: "A support number that answers.",
    d: "Real engineers. Same-day response on AMC contracts. No offshore call trees, no ticket purgatory.",
  },
];

export const SERVICES = [
  { t: "CCTV Design & Installation", d: "Camera selection, lensing, coverage maps." },
  { t: "Structured Networking", d: "Cat6 cabling, patch panels, PoE switches." },
  { t: "UPS & Power Backup", d: "APC sizing, install & battery servicing." },
  { t: "Access Control", d: "RFID, biometric & mobile-credential doors." },
  { t: "Computer Repair", d: "Laptop & desktop diagnostics, OS, data recovery." },
  { t: "Annual Maintenance", d: "Predictable contracts. On-site & remote." },
  { t: "Intercom Systems", d: "Villa, apartment & office IP intercoms." },
  { t: "Security Consultation", d: "Site audits, risk mapping, ROI planning." },
  { t: "Router & Wi-Fi", d: "Mesh, enterprise Wi-Fi 6, guest networks." },
];

export const PROJECTS = [
  {
    t: "16-Camera Retail Chain",
    loc: "Charminar, Hyderabad",
    d: "IP surveillance across 3 branches with unified NVR dashboard.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
    tag: "Retail Stores",
  },
  {
    t: "Residential Villa Security",
    loc: "Banjara Hills",
    d: "Perimeter cameras, biometric main door, video intercom.",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80",
    tag: "Residential",
  },
  {
    t: "School Campus Network",
    loc: "Santosh Nagar",
    d: "Structured Cat6, 24 PoE cameras, biometric attendance.",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=80",
    tag: "Schools",
  },
  {
    t: "Corporate Office Rack",
    loc: "HITEC City",
    d: "Rack build-out, UPS backup, mesh Wi-Fi 6 across 4 floors.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    tag: "Corporate",
  },
  {
    t: "Hospital Access Control",
    loc: "Malakpet",
    d: "Multi-zone RFID + biometrics for restricted wards.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
    tag: "Healthcare",
  },
  {
    t: "Warehouse UPS Deployment",
    loc: "Uppal",
    d: "10kVA online UPS, generator sync, PDU distribution.",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80",
    tag: "Industrial",
  },
];

export const WHY = [
  { t: "Experienced Engineers", d: "Certified technicians. 10+ years on the ground." },
  { t: "Genuine Products", d: "Manufacturer-authorised sourcing only." },
  { t: "Fair, Written Pricing", d: "Itemised quotes. No surprise line items." },
  { t: "Fast Installation", d: "Most residential jobs closed in a single day." },
  { t: "Warranty Support", d: "Both product & workmanship covered." },
  { t: "Reliable After-Sales", d: "You call, we pick up. That's the whole thing." },
];

export const STATS = [
  { n: 1200, s: "+", l: "Projects Completed" },
  { n: 950, s: "+", l: "Happy Customers" },
  { n: 15, s: "yrs", l: "On the Ground" },
  { n: 24, s: "/7", l: "Support Availability" },
];

export const TESTIMONIALS = [
  {
    q: "They mapped our entire floor plate before quoting. The install was clean, on time, and the cables are invisible. Faisal picks up the phone.",
    n: "Ravi Kumar",
    r: "Store Manager · Retail Chain",
  },
  {
    q: "Best CCTV service in Santosh Nagar. Genuine Hikvision units and the mobile app works flawlessly. Been with them 4 years now.",
    n: "Dr. Anitha S.",
    r: "Clinic Owner · Malakpet",
  },
  {
    q: "We were quoted twice their price by two big vendors. Fastech delivered the same brands, better cabling and honest paperwork.",
    n: "Nikhil R.",
    r: "IT Head · School Group",
  },
];
