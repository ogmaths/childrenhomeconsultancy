import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Check,
  Calendar,
  FileText,
  Users,
  ClipboardCheck,
  BookOpen,
  Download,
  ArrowRight,
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
import { Badge } from "@/components/ui/badge";

const InspectionReadiness = () => {
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

  // Mock data for services
  const services = [
    {
      title: "Mock Inspections",
      description:
        "Comprehensive mock inspections based on the Social Care Common Inspection Framework (SCCIF) to prepare your team for the real thing.",
      icon: <ClipboardCheck className="h-10 w-10 text-teal-600" />,
    },
    {
      title: "Reg 44 and 45 Support",
      description:
        "Expert writing, reviewing, and auditing of Regulation 44 and 45 reports to ensure compliance with Ofsted requirements.",
      icon: <FileText className="h-10 w-10 text-teal-600" />,
    },
    {
      title: "Staff File Audits",
      description:
        "Thorough audits of staff files and safer recruitment coaching to ensure all documentation meets regulatory standards.",
      icon: <Users className="h-10 w-10 text-teal-600" />,
    },
    {
      title: "Staff Training Plans",
      description:
        "Customized training plans and compliance tracker tools to keep your team up-to-date with required qualifications.",
      icon: <BookOpen className="h-10 w-10 text-teal-600" />,
    },
    {
      title: "Quality Standards Planning",
      description:
        "Strategic planning for gathering and presenting evidence that meets Ofsted's Quality Standards.",
      icon: <Check className="h-10 w-10 text-teal-600" />,
    },
  ];

  // Mock data for pricing packages
  const pricingPackages = [
    {
      title: "Mock Inspection Visit",
      price: "£750",
      description:
        "Full-day on-site inspection simulation with detailed feedback report.",
      features: [
        "SCCIF-based assessment",
        "Document review",
        "Staff interviews",
        "Detailed report with recommendations",
        "Follow-up action plan",
      ],
      popular: false,
    },
    {
      title: "Inspection Readiness Package",
      price: "£1,500",
      description:
        "Comprehensive preparation for your upcoming Ofsted inspection.",
      features: [
        "Mock inspection",
        "Policy review and updates",
        "Staff preparation coaching",
        "Evidence file organization",
        "3 months of support",
      ],
      popular: true,
    },
    {
      title: "Reg 44/45 Monthly Support",
      price: "£300-£700/month",
      description:
        "Ongoing support with regulatory requirements and quality assurance.",
      features: [
        "Monthly Reg 44 visits",
        "Reg 45 report writing assistance",
        "Compliance tracking",
        "Monthly action plan updates",
        "Direct Ofsted liaison support",
      ],
      popular: false,
    },
  ];

  // Mock data for downloadable resources
  const resources = [
    {
      title: "Reg 44 Checklist",
      description: "A comprehensive checklist for Regulation 44 visits.",
      free: true,
    },
    {
      title: "Ofsted Grading Tracker",
      description: "Track your progress against Ofsted grading criteria.",
      free: true,
    },
    {
      title: "Inspection Preparation Guide",
      description: "Step-by-step guide to prepare for an Ofsted inspection.",
      free: false,
    },
    {
      title: "Quality Standards Evidence Template",
      description:
        "Template for organizing evidence against Quality Standards.",
      free: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-teal-700 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Inspection Readiness & QA
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive support for providers preparing for their first or
              next Ofsted visit.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-teal-700 hover:bg-gray-100"
                >
                  Book a Mock Inspection
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-teal-600"
                >
                  Schedule a QA Health Check
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prepare With Confidence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our inspection readiness services are designed to help you navigate
            the Ofsted inspection process with confidence, ensuring your
            children's home meets all regulatory requirements.
          </p>
        </motion.div>

        {/* Services Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Our Inspection Readiness Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pricing Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Pricing Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`h-full ${pkg.popular ? "border-teal-500 shadow-lg" : ""}`}
              >
                <CardHeader>
                  {pkg.popular && (
                    <Badge className="mb-2 self-start bg-teal-500">
                      Most Popular
                    </Badge>
                  )}
                  <CardTitle>{pkg.title}</CardTitle>
                  <div className="text-3xl font-bold text-teal-700">
                    {pkg.price}
                  </div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/contact">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">
                      Get Started
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Need something tailored to your specific needs?
            </p>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50"
              >
                Contact Us for Custom Solutions
              </Button>
            </Link>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Downloadable Resources
          </h2>
          <Tabs defaultValue="free" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="free">Free Resources</TabsTrigger>
              <TabsTrigger value="premium">Premium Resources</TabsTrigger>
            </TabsList>
            <TabsContent value="free">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources
                  .filter((r) => r.free)
                  .map((resource, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-md transition-shadow duration-300"
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <FileText className="h-5 w-5 mr-2 text-teal-600" />
                          {resource.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{resource.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Link to="/resources">
                          <Button
                            variant="outline"
                            className="w-full flex items-center justify-center"
                          >
                            <Download className="h-4 w-4 mr-2" /> Download Free
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="premium">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources
                  .filter((r) => !r.free)
                  .map((resource, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-md transition-shadow duration-300"
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <FileText className="h-5 w-5 mr-2 text-teal-600" />
                          {resource.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{resource.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Link to="/contact">
                          <Button className="w-full bg-teal-600 hover:bg-teal-700 flex items-center justify-center">
                            <Download className="h-4 w-4 mr-2" /> Purchase (£25)
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
          <div className="mt-8 text-center">
            <Button variant="link" className="text-teal-600">
              View All Resources <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <p className="italic text-gray-600 mb-4">
                  "The mock inspection was incredibly thorough and gave us
                  exactly the preparation we needed. We passed our Ofsted
                  inspection with flying colors thanks to the detailed feedback
                  and action plan."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-teal-200 flex items-center justify-center text-teal-700 font-bold mr-3">
                    JD
                  </div>
                  <div>
                    <p className="font-medium">Jane Doe</p>
                    <p className="text-sm text-gray-500">
                      Registered Manager, Happy Home Care
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <p className="italic text-gray-600 mb-4">
                  "The Reg 44 support has been invaluable. Having an expert eye
                  review our processes monthly has improved our quality
                  standards and given us confidence in our compliance."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-teal-200 flex items-center justify-center text-teal-700 font-bold mr-3">
                    MS
                  </div>
                  <div>
                    <p className="font-medium">Michael Smith</p>
                    <p className="text-sm text-gray-500">
                      Director, Bright Futures Children's Services
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-teal-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Prepare for Your Inspection?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Don't leave your Ofsted inspection to chance. Our expert team can
            help you prepare thoroughly and approach your inspection with
            confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Calendar className="h-4 w-4 mr-2" /> Book a Mock Inspection
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50"
              >
                Contact Us for More Information
              </Button>
            </Link>
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>
                  How long before an inspection should we book a mock
                  inspection?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We recommend booking a mock inspection at least 4-6 weeks
                  before your expected Ofsted visit. This gives you enough time
                  to implement any recommended changes while the feedback is
                  still fresh.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What does the Reg 44/45 support include?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our Reg 44/45 support includes monthly visits from an
                  independent person, comprehensive reports following Ofsted
                  guidelines, action planning, and support with implementing
                  recommendations. We can either conduct the visits ourselves or
                  review and enhance reports from your existing visitor.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  Can you help with urgent inspection preparation?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we offer expedited services for homes that have received
                  notice of an upcoming inspection. Contact us immediately, and
                  we'll arrange priority support to help you prepare as
                  effectively as possible in the time available.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you navigate the inspection process and
            ensure your children's home meets all regulatory requirements.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InspectionReadiness;
