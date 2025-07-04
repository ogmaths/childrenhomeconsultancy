import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Phone,
  CheckCircle,
  FileText,
  Users,
  Shield,
  Building,
  HelpCircle,
  Star,
  Zap,
  Target,
  Award,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const PreRegistration = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Service packages data
  const packages = [
    {
      title: "Starter Pack",
      description: "Essential policies and Statement of Purpose",
      price: "£995",
      features: [
        "Statement of Purpose template",
        "20+ compliant policies",
        "Children's Guide template",
        "Basic registration guidance",
      ],
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      title: "Standard Package",
      description: "Complete documentation and application support",
      price: "£1,750",
      features: [
        "Everything in Starter Pack",
        "Customized Statement of Purpose",
        "Location Risk Assessment",
        "Application form review",
        "2 consultation calls",
      ],
      highlighted: true,
      gradient: "from-navy-600 to-navy-700",
    },
    {
      title: "Full Setup Package",
      description: "End-to-end registration support",
      price: "£3,500",
      features: [
        "Everything in Standard Package",
        "Full application completion",
        "RI & Manager interview prep",
        "Company structure setup",
        "HR templates and guidance",
        "Unlimited support calls",
      ],
      gradient: "from-mustard-500 to-mustard-600",
    },
  ];

  const services = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Registration Application Support",
      description: "Expert guidance through the Ofsted application process",
      features: [
        "Step-by-step application walkthrough",
        "Document preparation and review",
        "Application submission guidance",
      ],
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Policy & Procedure Pack",
      description: "20+ essential compliant policies",
      features: [
        "Safeguarding and child protection",
        "Behavior management",
        "Health and safety procedures",
      ],
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "RI & Manager Setup",
      description: "Support for key personnel requirements",
      features: [
        "Role clarification and responsibilities",
        "Interview preparation",
        "Fit person questionnaire guidance",
      ],
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-50 via-white to-mustard-50" />
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-mustard-200 to-mustard-300 rounded-full opacity-20 animate-bounce-gentle" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-navy-200 to-navy-300 rounded-full opacity-25" />

        <div className="relative z-10 container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-gradient-to-r from-navy-600 to-navy-700 text-white px-6 py-2 text-lg">
              Pre-Registration Support
            </Badge>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              Start Your <span className="gradient-text">Children's Home</span>{" "}
              Journey
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Everything you need to open your children's home with confidence,
              expert guidance, and proven success strategies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Main Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                  Expert Guidance Every Step of the Way
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Opening a children's home requires careful planning, extensive
                  documentation, and a thorough understanding of Ofsted
                  requirements. Our pre-registration services are designed for
                  individuals and organizations who want to open a children's
                  home but don't know where to start.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We'll guide you through every step of the process, from
                  initial concept to successful registration, ensuring you have
                  all the documentation, policies, and procedures in place to
                  meet regulatory requirements.
                </p>

                <Card className="bg-gradient-to-br from-navy-50 to-navy-100 border-navy-200 border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading text-navy-800 flex items-center">
                      <Award className="h-6 w-6 mr-3 text-navy-600" />
                      Why Choose Our Pre-Registration Support?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Expert guidance from professionals with years of experience",
                        "Comprehensive, Ofsted-compliant documentation",
                        "Personalized support tailored to your vision",
                        "Increased chances of first-time approval",
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-navy-600 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-navy-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="glass-effect border-2 border-white/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-gray-900">
                    Ready to Get Started?
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Book a free consultation call to discuss your children's
                    home plans and how we can help you achieve registration.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link to="/contact">
                    <Button className="btn-primary w-full text-lg py-6">
                      <Phone className="mr-3 h-5 w-5" />
                      Book a Free Consultation
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button className="btn-secondary w-full text-lg py-6">
                      <Download className="mr-3 h-5 w-5" />
                      Get Free Consultation
                    </Button>
                  </Link>
                </CardContent>
                <CardFooter className="pt-6 border-t border-gray-200">
                  <div className="w-full">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Have questions?
                    </h4>
                    <p className="text-gray-600 mb-4">
                      We're here to help you navigate the registration process.
                    </p>
                    <Link
                      to="/contact"
                      className="text-navy-600 hover:text-navy-800 font-medium flex items-center group"
                    >
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          </div>

          {/* Services Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                Our <span className="gradient-text">Pre-Registration</span>{" "}
                Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive support designed to get you registered
                successfully
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="h-full hover-lift border-0 shadow-lg hover:shadow-2xl bg-white">
                    <CardHeader>
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="text-white">{service.icon}</div>
                      </div>
                      <CardTitle className="text-xl font-heading">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                Choose Your <span className="gradient-text">Package</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible packages designed to meet your specific needs and
                budget
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative group ${pkg.highlighted ? "md:-mt-8" : ""}`}
                >
                  <Card
                    className={`h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                      pkg.highlighted
                        ? "bg-gradient-to-br from-navy-600 to-navy-700 text-white transform scale-105"
                        : "bg-white hover-lift"
                    }`}
                  >
                    {pkg.highlighted && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-mustard-400 to-mustard-500 text-navy-900 text-center py-3 font-semibold">
                        Most Popular
                      </div>
                    )}

                    <CardHeader className={pkg.highlighted ? "pt-16" : "pt-8"}>
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Zap className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle
                        className={`text-2xl font-heading text-center ${
                          pkg.highlighted ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {pkg.title}
                      </CardTitle>
                      <CardDescription
                        className={`text-center ${
                          pkg.highlighted ? "text-navy-100" : "text-gray-600"
                        }`}
                      >
                        {pkg.description}
                      </CardDescription>
                      <div className="text-center mt-6">
                        <span
                          className={`text-4xl font-bold ${
                            pkg.highlighted ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {pkg.price}
                        </span>
                        {pkg.title !== "Full Setup Package" && (
                          <span
                            className={
                              pkg.highlighted
                                ? "text-navy-200"
                                : "text-gray-500"
                            }
                          >
                            {" "}
                            onwards
                          </span>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle
                              className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${
                                pkg.highlighted
                                  ? "text-mustard-400"
                                  : "text-emerald-500"
                              }`}
                            />
                            <span
                              className={
                                pkg.highlighted
                                  ? "text-navy-100"
                                  : "text-gray-700"
                              }
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-6">
                      <Link to="/contact" className="w-full">
                        <Button
                          className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                            pkg.highlighted
                              ? "bg-white text-navy-700 hover:bg-gray-100"
                              : "btn-primary"
                          }`}
                        >
                          Choose This Package
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Need something more tailored to your specific requirements?
              </p>
              <Link to="/contact">
                <Button className="btn-secondary text-lg px-8 py-4">
                  Request Custom Package
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                Frequently Asked{" "}
                <span className="gradient-text">Questions</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question:
                    "How long does the registration process typically take?",
                  answer:
                    "The registration process for a children's home typically takes 16-26 weeks from submission to approval, depending on the completeness of your application and Ofsted's current processing times. Our support can help streamline this process and avoid common delays.",
                },
                {
                  question:
                    "What qualifications do I need to open a children's home?",
                  answer:
                    "The Registered Manager must have a Level 5 Diploma in Leadership and Management for Residential Childcare (or equivalent) and relevant experience. The Responsible Individual should have appropriate experience and understanding of children's social care. We can provide detailed guidance on these requirements.",
                },
                {
                  question: "Can you help with finding a suitable property?",
                  answer:
                    "While we don't directly source properties, we can advise on the requirements and considerations for selecting an appropriate location for your children's home, including conducting location risk assessments and advising on necessary adaptations to meet regulatory standards.",
                },
              ].map((faq, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-gray-50 hover:bg-gray-100 transition-colors duration-300 border-0">
                    <CardHeader>
                      <CardTitle className="text-xl font-heading text-gray-900 flex items-start">
                        <HelpCircle className="h-6 w-6 text-navy-500 mr-3 mt-1 flex-shrink-0" />
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed pl-9">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="text-center mt-12">
              <Link
                to="/contact"
                className="text-navy-600 hover:text-navy-800 font-medium flex items-center justify-center group text-lg"
              >
                Have more questions? Contact us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800 text-white relative overflow-hidden">
        {/* Background Elements */}
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
        </div>

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
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
            <p className="text-xl mb-12 leading-relaxed text-navy-100 max-w-3xl mx-auto">
              Take the first step towards opening your children's home with
              expert guidance and support that gets results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact">
                <Button className="bg-white text-navy-800 hover:bg-gray-100 font-semibold px-10 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Book a Compliance Discovery Call
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="border-2 border-white text-white hover:bg-white hover:text-navy-800 font-semibold px-10 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PreRegistration;
