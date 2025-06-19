import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
} from "lucide-react";

// Define UserPathCard component inline since there seems to be an issue with the import
const UserPathCard = ({
  title = "",
  description = "",
  icon = "Lightbulb",
  path = "/",
  color = "teal",
}) => {
  const getIcon = () => {
    switch (icon) {
      case "Lightbulb":
        return <Lightbulb className="h-8 w-8" />;
      case "ClipboardCheck":
        return <ClipboardCheck className="h-8 w-8" />;
      case "Building":
        return <Building className="h-8 w-8" />;
      default:
        return <Lightbulb className="h-8 w-8" />;
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case "teal":
        return {
          bg: "bg-teal-100",
          text: "text-teal-600",
          hover: "hover:bg-teal-600",
          border: "border-teal-200",
        };
      case "blue":
        return {
          bg: "bg-blue-100",
          text: "text-blue-600",
          hover: "hover:bg-blue-600",
          border: "border-blue-200",
        };
      case "navy":
        return {
          bg: "bg-indigo-100",
          text: "text-indigo-600",
          hover: "hover:bg-indigo-600",
          border: "border-indigo-200",
        };
      default:
        return {
          bg: "bg-teal-100",
          text: "text-teal-600",
          hover: "hover:bg-teal-600",
          border: "border-teal-200",
        };
    }
  };

  const colorClasses = getColorClasses();

  return (
    <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border">
      <CardHeader>
        <div
          className={`mx-auto ${colorClasses.bg} p-3 rounded-full w-16 h-16 flex items-center justify-center`}
        >
          <div className={colorClasses.text}>{getIcon()}</div>
        </div>
        <CardTitle className="mt-4 text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-center">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Link to={path}>
          <Button
            className={`${colorClasses.text} bg-white border ${colorClasses.border} ${colorClasses.hover} hover:text-white`}
          >
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Sample testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Children's Home Manager",
      content:
        "The guidance and support provided was invaluable during our registration process. We achieved 'Good' on our first inspection!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      name: "Michael Thompson",
      role: "Responsible Individual",
      content:
        "After receiving an 'Inadequate' rating, their turnaround support helped us achieve 'Good' within 6 months. Highly recommended.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      name: "Priya Patel",
      role: "New Home Owner",
      content:
        "The pre-registration package made the complex process manageable. All our policies were Ofsted-ready and saved us countless hours.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight"
            >
              Start, Strengthen, or Save Your Children's Home
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-3xl mx-auto text-xl text-gray-600"
            >
              From pre-registration to post-inspection support — we're with you
              every step of the way.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-4 pt-6"
            >
              <Link to="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  <CalendarIcon className="mr-2 h-5 w-5" /> Book a Free
                  Consultation
                </Button>
              </Link>
              <Link to="/resources">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50"
                >
                  <HomeIcon className="mr-2 h-5 w-5" /> Download Starter Pack
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* User Paths Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Choose Your Path
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Select the option that best describes where you are in your
              journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <UserPathCard
              title="I'm just starting"
              description="Get expert guidance on the registration process, policy creation, and everything you need to open a children's home."
              icon="Lightbulb"
              path="/pre-registration"
              color="teal"
            />

            <UserPathCard
              title="I'm nearly registered"
              description="Prepare for your Ofsted inspection with mock inspections, quality assurance, and compliance support."
              icon="ClipboardCheck"
              path="/inspection-readiness"
              color="blue"
            />

            <UserPathCard
              title="I'm already running a home"
              description="Ongoing support, improvement plans, and emergency assistance for existing children's homes."
              icon="Building"
              path="/post-registration"
              color="navy"
            />
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              With years of experience in children's social care and Ofsted
              compliance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-teal-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                  <CheckCircle2Icon className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="mt-4">Ofsted Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Extensive experience working with Ofsted-registered homes and
                  understanding their requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                  <HeartHandshakeIcon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="mt-4">Reg 44 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Comprehensive Regulation 44 support to ensure your home meets
                  all statutory requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                  <HomeIcon className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="mt-4">Safeguarding Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Qualified professionals with extensive safeguarding experience
                  in residential childcare settings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Success stories from children's homes we've supported
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Ready to Start Your Journey?</h2>
          <p className="mt-4 text-xl max-w-3xl mx-auto">
            Whether you're just beginning or looking to improve, we're here to
            support your children's home every step of the way.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-teal-700 hover:bg-gray-100"
              >
                <PhoneIcon className="mr-2 h-5 w-5" /> Schedule a Call
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-teal-600"
              >
                <MailIcon className="mr-2 h-5 w-5" /> Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
