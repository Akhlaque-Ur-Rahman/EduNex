"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import Navbar from "../components/navbar/navBar";
import Footer from "../components/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Client Logos
const clients = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft Logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", alt: "Google Logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon Logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png", alt: "Tesla Logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", alt: "Apple Logo" },
];

// Industries Served
const industries = [
  { name: "Education", icon: "https://cdn-icons-png.flaticon.com/512/681/681611.png" },
  { name: "Healthcare", icon: "https://cdn-icons-png.flaticon.com/512/3105/3105921.png" },
  { name: "Finance", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png" },
  { name: "Retail", icon: "https://cdn-icons-png.flaticon.com/512/1170/1170678.png" },
];

// Stats Section Data
const stats = [
  { label: "Students Benefited", value: "10,000+", icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png" }, // Student icon
  { label: "Customers Served", value: "500+", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }, // Handshake icon
  { label: "Courses Available", value: "250+", icon: "https://cdn-icons-png.flaticon.com/512/2232/2232688.png" }, // Open book
  { label: "Certified Tutors", value: "1,200+", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png" }, // Teacher icon
];

// Slider Settings
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 5000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ],
};

export default function ClientsPage() {
  return (
    <>
      <Navbar />

      <main className="w-full overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-900 text-white py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Our Clients, Our Success
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-lg"
          >
            Trusted by industry leaders across various sectors.
          </motion.p>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white px-4 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-10">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-blue-100 shadow-md rounded-lg flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <Image src={stat.icon} alt={stat.label} width={60} height={60} className="object-contain" />
                <h3 className="mt-4 text-3xl font-bold text-blue-800">{stat.value}</h3>
                <p className="mt-2 text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-16 bg-gray-100 px-4 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-10">Industries We Serve</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="p-6 bg-blue-100 shadow-lg rounded-lg cursor-pointer flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <Image src={industry.icon} alt={industry.name} width={60} height={60} className="object-contain" />
                <p className="mt-2 text-gray-700">{industry.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        

        {/* Our Clients - Full Width Auto Carousel */}
        <section className="py-16 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-10">Our Clients</h2>
          <div className="container mx-auto overflow-hidden">
          <Slider {...sliderSettings} className="w-full">
  {clients.map((client, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="flex justify-center items-center"
    >
      <div className="relative w-[120px] h-[80px] flex items-center justify-center">
        <Image
          src={client.src}
          alt={client.alt}
          width={120} // Fixed width
          height={80} // Fixed height
          className="object-contain"
          style={{ width: "100%", height: "100%" }} // Ensure full container fit
        />
      </div>
    </motion.div>
  ))}
</Slider>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="py-16 bg-blue-700 text-white text-center">
          <h2 className="text-3xl font-bold">Ready to Work with Us?</h2>
          <p className="mt-4">Let's build the future of education together.</p>
          <Link href="/contact" passHref>
            <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)" }} whileTap={{ scale: 0.95 }} className="mt-6 bg-white text-blue-700 font-bold py-3 px-6 rounded-lg cursor-pointer">
              Contact Us
            </motion.button>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
