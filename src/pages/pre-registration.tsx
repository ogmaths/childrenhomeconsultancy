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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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
    },
  ];

  // Downloadable resources
  const resources = [
    {
      title: "Registration Checklist",
      description: "Step-by-step guide to the registration process",
      free: true,
    },
    {
      title: "Statement of Purpose Template",
      description: "Basic template with guidance notes",
      free: true,
    },
    {
      title: "Location Risk Assessment Template",
      description: "Comprehensive template with examples",
      free: false,
      price: "£49",
    },
    {
      title: "Children's Guide Template",
      description: "Child-friendly format with customization options",
      free: false,
      price: "£39",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-700 to-navy-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pre-Registration Support
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Everything you need to start your children's home journey with
              confidence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <motion.div variants={itemVariants} className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Start Your Children's Home Journey
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Opening a children's home requires careful planning, extensive
                documentation, and a thorough understanding of Ofsted
                requirements. Our pre-registration services are designed for
                individuals and organizations who want to open a children's home
                but don't know where to start.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We'll guide you through every step of the process, from initial
                concept to successful registration, ensuring you have all the
                documentation, policies, and procedures in place to meet
                regulatory requirements.
              </p>

              <div className="bg-navy-50 border-l-4 border-teal-500 p-4 rounded-r mb-8">
                <h3 className="text-xl font-semibold text-navy-700 mb-2">
                  Why Choose Our Pre-Registration Support?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-navy-500 mr-2 mt-1" />
                    <span>
                      Expert guidance from professionals with years of
                      experience in children's home registration
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-navy-500 mr-2 mt-1" />
                    <span>
                      Comprehensive, Ofsted-compliant documentation and policies
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-navy-500 mr-2 mt-1" />
                    <span>
                      Personalized support tailored to your specific children's
                      home vision
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-navy-500 mr-2 mt-1" />
                    <span>
                      Increased chances of successful registration on your first
                      application
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Book a free consultation call to discuss your children's home
                plans and how we can help you achieve registration.
              </p>

              <Link to="/contact">
                <Button className="w-full mb-4 bg-navy-800 hover:bg-gray-100">
                  <Phone className="mr-2 h-4 w-4" /> Book a Free Consultation
                </Button>
              </Link>

              <Link to="/resources">
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Download Free Starter
                  Guide
                </Button>
              </Link>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-700 mb-2">
                  Have questions?
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  We're here to help you navigate the registration process.
                </p>
                <Link
                  to="/contact"
                  className="text-navy-600 hover:text-navy-800 font-medium flex items-center"
                >
                  Contact Us <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Policy Packs Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-gray-800 mb-8 text-center"
            >
              Tailored Policy Packs
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="bg-navy-50 border border-navy-200 rounded-lg p-8 mb-8"
            >
              <p className="text-lg text-gray-700 mb-6">
                At [Consultancy Name], we offer fully editable, up-to-date
                policy packs tailored to your specific registration model:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-5 w-5 text-navy-500 mr-2" />
                    <h3 className="font-semibold text-gray-800">
                      Single Children's Homes
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Everything you need for a solo-site setup
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-5 w-5 text-navy-500 mr-2" />
                    <h3 className="font-semibold text-gray-800">
                      Multi-Building Children's Homes
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Including solo placement models, shared management
                    structures, and fire strategy references
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-5 w-5 text-navy-500 mr-2" />
                    <h3 className="font-semibold text-gray-800">
                      Supported Accommodation (16–17)
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Compliant with the new Ofsted framework, focused on support
                    (not care), with all required policy and practice guidance
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Each pack includes:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-navy-500 mr-2" />
                    <span>Safeguarding</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-navy-500 mr-2" />
                    <span>Behaviour management</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-navy-500 mr-2" />
                    <span>Missing from care</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-navy-500 mr-2" />
                    <span>Staff recruitment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-navy-500 mr-2" />
                    <span>Data protection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-navy-500 mr-2" />
                    <span>Fire safety</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-navy-500 mr-2" />
                    <span>Complaints & whistleblowing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-navy-500 mr-2" />
                    <span>Children's guide + SOP (Schedule 1 format)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-navy-500 mr-2" />
                    <span>…and more</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-gray-800 mb-8 text-center"
            >
              Our Pre-Registration Services
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <FileText className="h-10 w-10 text-navy-600 mb-2" />
                  <CardTitle>Registration Application Support</CardTitle>
                  <CardDescription>
                    Expert guidance through the Ofsted application process
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-navy-500 mr-2 mt-1" />
                      <span>Step-by-step application walkthrough</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-navy-500 mr-2 mt-1" />
                      <span>Document preparation and review</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-navy-500 mr-2 mt-1" />
                      <span>Application submission guidance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <FileText className="h-10 w-10 text-navy-600 mb-2" />
                  <CardTitle>Statement of Purpose Creation</CardTitle>
                  <CardDescription>
                    Comprehensive Schedule 1 documentation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-navy-500 mr-2 mt-1" />
                      <span>Tailored to your specific service model</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-navy-500 mr-2 mt-1" />
                      <span>Ofsted-compliant formatting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-navy-500 mr-2 mt-1" />
                      <span>Regular updates and revisions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-10 w-10 text-navy-600 mb-2" />
                  <CardTitle>Policy & Procedure Pack</CardTitle>
                  <CardDescription>
                    20+ essential compliant policies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-navy-500 mr-2 mt-1" />
                      <span>Safeguarding and child protection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-navy-500 mr-2 mt-1" />
                      <span>Behavior management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-navy-500 mr-2 mt-1" />
                      <span>Health and safety procedures</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-10 w-10 text-navy-600 mb-2" />
                  <CardTitle>Children's Guide & Templates</CardTitle>
                  <CardDescription>
                    Child-friendly documentation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-navy-500 mr-2 mt-1" />
                      <span>Age-appropriate formats</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-navy-500 mr-2 mt-1" />
                      <span>Customizable templates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-navy-500 mr-2 mt-1" />
                      <span>Location risk assessment templates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-10 w-10 text-navy-600 mb-2" />
                  <CardTitle>RI & Manager Setup</CardTitle>
                  <CardDescription>
                    Support for key personnel requirements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-navy-500 mr-2 mt-1" />
                      <span>Role clarification and responsibilities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-navy-500 mr-2 mt-1" />
                      <span>Interview preparation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-navy-500 mr-2 mt-1" />
                      <span>Fit person questionnaire guidance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Building className="h-10 w-10 text-navy-600 mb-2" />
                  <CardTitle>Company Structure & HR</CardTitle>
                  <CardDescription>
                    Organizational and staffing support
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-navy-500 mr-2 mt-1" />
                      <span>Company structure guidance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-navy-500 mr-2 mt-1" />
                      <span>HR templates and policies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-navy-500 mr-2 mt-1" />
                      <span>Recruitment and staffing advice</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Pricing Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-gray-800 mb-8 text-center"
            >
              Pre-Registration Packages
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`bg-white shadow-md ${pkg.highlighted ? "border-2 border-navy-500 relative" : ""}`}
                >
                  {pkg.highlighted && (
                    <div className="absolute top-0 right-0 bg-navy-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{pkg.title}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-gray-800">
                        {pkg.price}
                      </span>
                      {pkg.title !== "Full Setup Package" && (
                        <span className="text-gray-500"> onwards</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-navy-500 mr-2 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link to="/contact">
                      <Button
                        className={`w-full ${pkg.highlighted ? "bg-navy-800 hover:bg-gray-100" : ""}`}
                      >
                        Choose This Package
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Need something more tailored to your specific requirements?
              </p>
              <Link to="/contact">
                <Button variant="outline">Request Custom Package</Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Resources Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-gray-800 mb-8 text-center"
            >
              Downloadable Resources
            </motion.h2>

            <motion.div variants={itemVariants}>
              <Tabs defaultValue="free" className="w-full">
                <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
                  <TabsTrigger value="free">Free Resources</TabsTrigger>
                  <TabsTrigger value="premium">Premium Resources</TabsTrigger>
                </TabsList>

                <TabsContent value="free" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {resources
                      .filter((r) => r.free)
                      .map((resource, index) => (
                        <Card
                          key={index}
                          className="bg-white shadow-sm hover:shadow-md transition-shadow"
                        >
                          <CardHeader>
                            <CardTitle className="text-lg">
                              {resource.title}
                            </CardTitle>
                            <CardDescription>
                              {resource.description}
                            </CardDescription>
                          </CardHeader>
                          <CardFooter>
                            <Link to="/resources">
                              <Button variant="outline" className="w-full">
                                <Download className="mr-2 h-4 w-4" /> Download
                                Free
                              </Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="premium" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {resources
                      .filter((r) => !r.free)
                      .map((resource, index) => (
                        <Card
                          key={index}
                          className="bg-white shadow-sm hover:shadow-md transition-shadow"
                        >
                          <CardHeader>
                            <CardTitle className="text-lg">
                              {resource.title}
                            </CardTitle>
                            <CardDescription>
                              {resource.description}
                            </CardDescription>
                            <div className="mt-2 font-semibold text-gray-800">
                              {resource.price}
                            </div>
                          </CardHeader>
                          <CardFooter>
                            <Link to="/contact">
                              <Button className="w-full bg-navy-800 hover:bg-gray-100">
                                Purchase Now
                              </Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ready to Start Your Children's Home Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Take the first step towards opening your children's home with
              expert guidance and support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-navy-800 hover:bg-gray-100 text-lg py-6 px-8">
                  Book a Compliance Discovery Call
                </Button>
              </Link>
              <Link to="/resources">
                <Button variant="outline" className="text-lg py-6 px-8">
                  Download Free Registration Guide
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-navy-500 mr-2" />
                How long does the registration process typically take?
              </h3>
              <p className="text-gray-600">
                The registration process for a children's home typically takes
                16-26 weeks from submission to approval, depending on the
                completeness of your application and Ofsted's current processing
                times. Our support can help streamline this process and avoid
                common delays.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-navy-500 mr-2" />
                What qualifications do I need to open a children's home?
              </h3>
              <p className="text-gray-600">
                The Registered Manager must have a Level 5 Diploma in Leadership
                and Management for Residential Childcare (or equivalent) and
                relevant experience. The Responsible Individual should have
                appropriate experience and understanding of children's social
                care. We can provide detailed guidance on these requirements.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-navy-500 mr-2" />
                Can you help with finding a suitable property?
              </h3>
              <p className="text-gray-600">
                While we don't directly source properties, we can advise on the
                requirements and considerations for selecting an appropriate
                location for your children's home, including conducting location
                risk assessments and advising on necessary adaptations to meet
                regulatory standards.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="text-navy-600 hover:text-navy-800 font-medium flex items-center justify-center"
            >
              Have more questions? Contact us{" "}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-navy-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-md">
              <CardContent className="pt-6">
                <p className="italic text-gray-600 mb-6">
                  "The pre-registration support was invaluable. The team guided
                  us through every step of the process, and our application was
                  approved on the first submission. The policy pack saved us
                  months of work!"
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl mr-4">
                    JD
                  </div>
                  <div>
                    <h4 className="font-semibold">Jane Doe</h4>
                    <p className="text-sm text-gray-500">
                      Registered Manager, Sunshine Children's Home
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="pt-6">
                <p className="italic text-gray-600 mb-6">
                  "As someone new to the sector, I was overwhelmed by the
                  registration requirements. This service broke everything down
                  into manageable steps and provided all the documentation I
                  needed. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl mr-4">
                    MS
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Smith</h4>
                    <p className="text-sm text-gray-500">
                      Director, New Horizons Care
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Start Your Children's Home Registration Today
          </h2>
          <Link to="/contact">
            <Button className="bg-white text-navy-700 hover:bg-gray-100 text-lg py-6 px-8">
              Book Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PreRegistration;
