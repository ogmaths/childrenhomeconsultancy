import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  LifeBuoy,
  FileText,
  Users,
  Calendar,
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

const PostRegistration = () => {
  // Animation variants for staggered animations
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

  // Service offerings
  const services = [
    {
      title: "Rapid-Response Compliance Support",
      description:
        "Immediate expert assistance to address urgent compliance issues and Ofsted concerns.",
      icon: <AlertTriangle className="h-8 w-8 text-amber-500" />,
    },
    {
      title: "Corrective Action Plan Development",
      description:
        "Structured plans to address identified issues and demonstrate improvement to Ofsted.",
      icon: <FileText className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Reg 44 Emergency Cover",
      description:
        "Qualified independent visitors to fulfill your Regulation 44 requirements at short notice.",
      icon: <LifeBuoy className="h-8 w-8 text-red-500" />,
    },
    {
      title: "Policy Updating and Annual Reviews",
      description:
        "Keep your policies current with regulatory changes and best practice guidance.",
      icon: <FileText className="h-8 w-8 text-green-500" />,
    },
    {
      title: "Supervision Frameworks",
      description:
        "Implement effective supervision and reflective practice models for your team.",
      icon: <Users className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Ongoing QA Mentorship",
      description:
        "Regular support to maintain and improve quality standards across your service.",
      icon: <Calendar className="h-8 w-8 text-navy-500" />,
    },
  ];

  // Pricing packages
  const pricingPackages = [
    {
      title: "Emergency Response",
      price: "£1,200",
      description: "Rapid intervention for homes with urgent compliance needs",
      features: [
        "Initial compliance assessment",
        "Priority action plan",
        "2 days on-site support",
        "Follow-up report",
        "30-day email support",
      ],
      highlighted: true,
    },
    {
      title: "Improvement Package",
      price: "£2,000",
      description:
        "Comprehensive support for homes rated 'Requires Improvement'",
      features: [
        "Full service audit",
        "Detailed improvement plan",
        "3 days on-site support",
        "Staff training session",
        "60-day support period",
        "Monthly progress reviews",
      ],
      highlighted: false,
    },
    {
      title: "Ongoing Support",
      price: "£500/month",
      description: "Regular quality assurance to maintain standards",
      features: [
        "Monthly quality reviews",
        "Policy updates as needed",
        "Reg 44/45 support",
        "Quarterly on-site visits",
        "Unlimited email support",
        "Annual compliance refresh",
      ],
      highlighted: false,
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote:
        "After receiving an 'Inadequate' rating, we were devastated. The team provided immediate support and within 3 months we achieved 'Good' in our re-inspection.",
      author: "Sarah T.",
      role: "Registered Manager, London",
    },
    {
      quote:
        "The ongoing QA mentorship has been invaluable. We've maintained our 'Outstanding' rating for two consecutive inspections.",
      author: "Michael R.",
      role: "Responsible Individual, Manchester",
    },
    {
      quote:
        "Their emergency Reg 44 cover saved us when our visitor fell ill. Professional, thorough, and delivered exactly what Ofsted expects.",
      author: "Priya K.",
      role: "Home Manager, Birmingham",
    },
  ];

  // Downloadable resources
  const resources = [
    {
      title: "Ofsted Improvement Tracker",
      description: "Track your progress against Ofsted requirements",
      free: true,
    },
    {
      title: "Reg 45 Report Template",
      description: "Structured template for quality of care reviews",
      free: true,
    },
    {
      title: "Comprehensive Turnaround Toolkit",
      description:
        "Complete set of templates and guides for service improvement",
      free: false,
      price: "£149",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge
              variant="outline"
              className="mb-4 bg-navy-100 text-navy-800 border-navy-200"
            >
              Post-Registration Support
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Support for Established Children's Homes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Specialized support for homes that are already operating —
              especially those rated Requires Improvement or Inadequate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Request Urgent Help
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-600 text-navy-600 hover:bg-teal-50"
                >
                  Join Our Compliance Partner Plan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Post-Registration Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive support to maintain quality standards and address
              improvement needs.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-navy-500">
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
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Support Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the level of support that's right for your service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`h-full ${pkg.highlighted ? "border-2 border-navy-500 shadow-lg" : ""}`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {pkg.price}
                    </span>
                    {pkg.price.includes("/") && (
                      <span className="text-gray-600 ml-1 text-sm">
                        per month
                      </span>
                    )}
                  </div>
                  <CardDescription className="mt-2">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-navy-500 mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/contact">
                    <Button
                      className={`w-full ${pkg.highlighted ? "bg-navy-800 hover:bg-navy-900" : ""}`}
                    >
                      Select Package
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-4">
              Need something tailored to your specific situation?
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Us for Custom Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from children's homes that have benefited from our
              post-registration support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 border-none">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <svg
                      className="h-8 w-8 text-navy-500"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104-6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.855-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6 italic text-center">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Helpful Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tools and templates to support your service improvement journey.
            </p>
          </div>

          <Tabs defaultValue="free" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="free">Free Resources</TabsTrigger>
              <TabsTrigger value="premium">Premium Resources</TabsTrigger>
            </TabsList>
            <TabsContent value="free">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources
                  .filter((r) => r.free)
                  .map((resource, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-xl">
                          {resource.title}
                        </CardTitle>
                        <CardDescription>
                          {resource.description}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Link to="/resources">
                          <Button className="w-full">Download Free</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="premium">
              <div className="grid grid-cols-1 gap-6">
                {resources
                  .filter((r) => !r.free)
                  .map((resource, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-xl">
                            {resource.title}
                          </CardTitle>
                          <Badge variant="secondary" className="text-lg">
                            {resource.price}
                          </Badge>
                        </div>
                        <CardDescription>
                          {resource.description}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Link to="/contact">
                          <Button className="w-full">Purchase Now</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to improve your service?
          </h2>
          <p className="text-xl mb-8 text-navy-100">
            Whether you're facing challenges or simply want to maintain high
            standards, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-navy-800 hover:bg-navy-50"
              >
                Request Urgent Help
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-navy-700"
              >
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our post-registration support services.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  How quickly can you respond to an urgent situation?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  For urgent situations, we aim to provide initial remote
                  support within 24 hours and can typically arrange on-site
                  support within 2-3 days, depending on location.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  What happens after Ofsted rates us as 'Inadequate'?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  After an 'Inadequate' rating, we'll conduct a thorough
                  assessment of the inspection report, develop a comprehensive
                  improvement plan addressing each concern, and provide
                  intensive support to implement changes before re-inspection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you provide Regulation 44 visitors?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we have qualified and experienced independent visitors
                  who can fulfill your Regulation 44 requirements, either on a
                  regular basis or as emergency cover when needed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  How long does it typically take to improve an Ofsted rating?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  While every situation is unique, we typically see significant
                  improvements within 3-6 months of implementing our
                  recommendations. Many of our clients achieve a 'Good' rating
                  at their next inspection following our support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Explore Our Other Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link to="/pre-registration">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle>Pre-Registration Support</CardTitle>
                  <CardDescription>
                    For those just starting their children's home journey
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center text-navy-600">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
            <Link to="/inspection-readiness">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle>Inspection Readiness</CardTitle>
                  <CardDescription>
                    For homes preparing for Ofsted inspections
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center text-navy-600">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is ready to help you navigate the challenges of running a
            children's home.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-navy-800 hover:bg-navy-900">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PostRegistration;
