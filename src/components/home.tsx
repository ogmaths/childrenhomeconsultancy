import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  CalendarIcon,
  CheckCircle2Icon,
  HeartHandshakeIcon,
  HomeIcon,
  MailIcon,
  PhoneIcon,
  Lightbulb,
  ClipboardCheck,
  Building,
  ArrowRight,
  Star,
  Users,
  Award,
  ChevronUp,
} from "lucide-react";

// Define UserPathCard component with modern design
const UserPathCard = ({
  title = "",
  description = "",
  icon = "Lightbulb",
  path = "/",
  color = "teal",
  index = 0,
}) => {
  const getIcon = () => {
    switch (icon) {
      case "Lightbulb":
        return <Lightbulb className="h-10 w-10" />;
      case "ClipboardCheck":
        return <ClipboardCheck className="h-10 w-10" />;
      case "Building":
        return <Building className="h-10 w-10" />;
      default:
        return <Lightbulb className="h-10 w-10" />;
    }
  };

  const getGradient = () => {
    switch (color) {
      case "teal":
        return "from-navy-500 to-navy-600";
      case "blue":
        return "from-mustard-400 to-mustard-500";
      case "navy":
        return "from-emerald-500 to-emerald-600";
      default:
        return "from-navy-500 to-navy-600";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="relative overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 h-full">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${getGradient()} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />
        <CardHeader className="text-center pb-4">
          <motion.div
            className={`mx-auto bg-gradient-to-br ${getGradient()} p-6 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
            whileHover={{ rotate: 5 }}
          >
            <div className="text-white">{getIcon()}</div>
          </motion.div>
          <CardTitle className="mt-6 text-2xl font-heading text-gray-900 group-hover:text-navy-700 transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-6">
          <p className="text-gray-600 text-center leading-relaxed text-lg">
            {description}
          </p>
        </CardContent>
        <CardFooter className="flex justify-center pb-8 pt-4">
          <Link to={path}>
            <Button className="btn-primary group-hover:scale-105 transition-transform duration-300">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl font-bold text-navy-600 mb-2">
        {count}
        {suffix}
      </div>
    </motion.div>
  );
};

// Back to Top Button
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-navy-600 to-navy-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover:scale-110"
    >
      <ChevronUp className="h-6 w-6" />
    </motion.button>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Sample testimonials data
  const testimonials = [
    {
      name: "GROMODEL CARE",
      role: "Children's Home Provider",
      content:
        "The consultancy support we received was instrumental in helping us secure Ofsted registration for our multi-building children's home. From tailored policies to inspection prep, every resource was clear, compliant, and practical. We were especially impressed by the knowledge of the regulations and how personalised the support felt — all without the pressure of branding or promotion. Highly recommended for any provider looking to get it right from day one.",
      rating: 5,
    },
  ];

  const stats = [
    { number: 150, suffix: "+", label: "Homes Supported" },
    { number: 98, suffix: "%", label: "Success Rate" },
    { number: 5, suffix: "", label: "Years Experience" },
    { number: 24, suffix: "/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-navy-50 via-white to-mustard-50"
        />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-mustard-200 to-mustard-300 rounded-full opacity-20"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-navy-200 to-navy-300 rounded-full opacity-15"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-full opacity-25"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-900 tracking-tight mb-6">
                <span className="block">Start, Strengthen, or</span>
                <span className="block gradient-text">
                  Save Your Children's Home
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-600 leading-relaxed"
            >
              From pre-registration to post-inspection support — we're with you
              every step of the way with expert guidance and proven results.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-6 pt-8"
            >
              <Link to="/contact">
                <Button className="btn-primary text-lg px-10 py-6">
                  <CalendarIcon className="mr-3 h-6 w-6" />
                  Book a Free Consultation
                </Button>
              </Link>
              <Link to="/resources">
                <Button className="btn-secondary text-lg px-10 py-6">
                  <HomeIcon className="mr-3 h-6 w-6" />
                  Download Starter Pack
                </Button>
              </Link>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-navy-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-navy-400 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* User Paths Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Choose Your <span className="gradient-text">Path</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Select the option that best describes where you are in your
              journey and get tailored support for your specific needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <UserPathCard
              title="I'm just starting"
              description="Get expert guidance on the registration process, policy creation, and everything you need to open a children's home."
              icon="Lightbulb"
              path="/pre-registration"
              color="teal"
              index={0}
            />

            <UserPathCard
              title="I'm nearly registered"
              description="Prepare for your Ofsted inspection with mock inspections, quality assurance, and compliance support."
              icon="ClipboardCheck"
              path="/inspection-readiness"
              color="blue"
              index={1}
            />

            <UserPathCard
              title="I'm already running a home"
              description="Ongoing support, improvement plans, and emergency assistance for existing children's homes."
              icon="Building"
              path="/post-registration"
              color="navy"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Why Choose <span className="text-mustard-400">Us</span>
            </h2>
            <p className="text-xl text-navy-100 max-w-3xl mx-auto leading-relaxed">
              With years of experience in children's social care and Ofsted
              compliance, we deliver results that matter
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <Award className="h-12 w-12" />,
                title: "Ofsted Experience",
                description:
                  "Extensive experience working with Ofsted-registered homes and understanding their requirements.",
                gradient: "from-mustard-400 to-mustard-500",
              },
              {
                icon: <HeartHandshakeIcon className="h-12 w-12" />,
                title: "Reg 44 Support",
                description:
                  "Comprehensive Regulation 44 support to ensure your home meets all statutory requirements.",
                gradient: "from-emerald-400 to-emerald-500",
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Safeguarding Expertise",
                description:
                  "Qualified professionals with extensive safeguarding experience in residential childcare settings.",
                gradient: "from-blue-400 to-blue-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 h-full">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      className={`mx-auto bg-gradient-to-br ${item.gradient} p-4 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <div className="text-white">{item.icon}</div>
                    </motion.div>
                    <CardTitle className="mt-6 text-2xl font-heading text-white">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-navy-100 text-center leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Success stories from children's homes we've supported
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-navy-500 via-mustard-400 to-emerald-500" />

                  <CardHeader className="text-center pb-6 pt-12">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-6 w-6 text-mustard-400 fill-current"
                        />
                      ))}
                    </div>
                    <CardTitle className="text-2xl font-heading text-navy-800">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600">
                      {testimonial.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-12 pb-12">
                    <blockquote className="text-gray-700 text-lg leading-relaxed text-center italic">
                      "{testimonial.content}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-mustard-400 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute -bottom-32 -left-32 w-64 h-64 bg-emerald-400 rounded-full"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              Ready to Start Your{" "}
              <span className="text-mustard-400">Journey?</span>
            </h2>
            <p className="text-xl max-w-4xl mx-auto mb-12 leading-relaxed text-navy-100">
              Whether you're just beginning or looking to improve, we're here to
              support your children's home every step of the way with expert
              guidance and proven results.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact">
                <Button className="bg-white text-navy-800 hover:bg-gray-100 font-semibold px-10 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <PhoneIcon className="mr-3 h-6 w-6" />
                  Schedule a Call
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="border-2 border-white text-white hover:bg-white hover:text-navy-800 font-semibold px-10 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
                  <MailIcon className="mr-3 h-6 w-6" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default Home;
