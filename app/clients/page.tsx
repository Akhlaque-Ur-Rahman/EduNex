"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import Navbar from "../components/navbar/navBar";
import Footer from "../components/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Client Logos (Updated)
const clients = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png", // Tesla (Replaced Meta with working URL)
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
];

// Industries Served
const industries = [
  { name: "Education", icon: "https://cdn-icons-png.flaticon.com/512/681/681611.png" }, // Graduation Cap
  { name: "Healthcare", icon: "https://cdn-icons-png.flaticon.com/512/3105/3105921.png" },
  { name: "Finance", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png" },
  { name: "Retail", icon: "https://cdn-icons-png.flaticon.com/512/1170/1170678.png" },
];

// Slider Settings (Infinite Continuous Scroll)
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 5000, // Faster speed for continuous motion
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0, // No pauses
  cssEase: "linear", // Ensures smooth continuous motion
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
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-900 text-white py-30 text-center">
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

        {/* Industries Served (Restored) */}
        <section className="py-16 bg-gray-100 px-4 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-10">Industries We Serve</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg cursor-pointer flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  width={60}
                  height={60}
                  className="object-cover"
                />
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
              {clients.map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="flex justify-center"
                >
                  <div className="flex items-center justify-center h-28 w-full">
  <Image
    src={logo}
    alt="Client Logo"
    width={150} // Allow width to adjust dynamically
    height={80} // Keep height fixed
    className="object-contain max-h-full" // Ensures full image is visible
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
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)" }}
      whileTap={{ scale: 0.95 }}
      className="mt-6 bg-white text-blue-700 font-bold py-3 px-6 rounded-lg cursor-pointer"
    >
      Contact Us
    </motion.button>
  </Link>
</section>
      </main>

      <Footer />
    </>
  );
}
