import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  FileText,
  CheckCircle,
  Star,
  Clock,
  Users,
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
import { Badge } from "@/components/ui/badge";

const Resources = () => {
  // Free resources
  const freeResources = [
    {
      title: "Children's Home Registration Checklist",
      description:
        "Complete step-by-step checklist for the Ofsted registration process",
      downloads: "2,847",
      rating: 4.9,
      type: "PDF Guide",
    },
    {
      title: "Statement of Purpose Template",
      description:
        "Basic template with guidance notes for creating your Statement of Purpose",
      downloads: "1,923",
      rating: 4.8,
      type: "Word Template",
    },
    {
      title: "Ofsted Inspection Preparation Guide",
      description:
        "Essential tips and strategies for preparing for your first Ofsted inspection",
      downloads: "3,156",
      rating: 4.9,
      type: "PDF Guide",
    },
    {
      title: "Safeguarding Policy Template",
      description:
        "Comprehensive safeguarding policy template compliant with current regulations",
      downloads: "2,234",
      rating: 4.7,
      type: "Word Template",
    },
    {
      title: "Children's Rights and Complaints Procedure",
      description:
        "Child-friendly template for rights and complaints procedures",
      downloads: "1,567",
      rating: 4.6,
      type: "PDF Template",
    },
    {
      title: "Risk Assessment Framework",
      description:
        "Comprehensive framework for conducting risk assessments in children's homes",
      downloads: "1,890",
      rating: 4.8,
      type: "Excel Template",
    },
  ];

  // Premium resources
  const premiumResources = [
    {
      title: "Complete Policy Pack (20+ Policies)",
      description:
        "Comprehensive set of Ofsted-compliant policies ready for customization",
      price: "£149",
      originalPrice: "£299",
      type: "Policy Bundle",
      features: [
        "20+ essential policies",
        "Customizable templates",
        "Regular updates included",
        "Implementation guidance",
      ],
    },
    {
      title: "Location Risk Assessment Toolkit",
      description:
        "Professional toolkit for conducting thorough location risk assessments",
      price: "£79",
      originalPrice: "£129",
      type: "Assessment Kit",
      features: [
        "Detailed assessment templates",
        "Risk matrix tools",
        "Mitigation strategies",
        "Example assessments",
      ],
    },
    {
      title: "Staff Training & Development Package",
      description:
        "Complete training materials and development frameworks for your team",
      price: "£199",
      originalPrice: "£349",
      type: "Training Package",
      features: [
        "Training modules",
        "Assessment tools",
        "Competency frameworks",
        "Record keeping templates",
      ],
    },
    {
      title: "Quality Assurance Toolkit",
      description:
        "Professional QA tools and templates for maintaining high standards",
      price: "£99",
      originalPrice: "£179",
      type: "QA Toolkit",
      features: [
        "Audit checklists",
        "Monitoring templates",
        "Improvement planning tools",
        "Reporting frameworks",
      ],
    },
  ];

  const handleDownload = (resourceTitle: string) => {
    alert(`Downloading: ${resourceTitle}`);
  };

  const handlePurchase = (resourceTitle: string) => {
    alert(`Redirecting to purchase: ${resourceTitle}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-700 to-navy-900 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Resources & Downloads
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Essential tools, templates, and guides to support your children's
              home journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="free" className="w-full">
            <div className="text-center mb-8">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="free" className="text-lg">
                  Free Resources
                </TabsTrigger>
                <TabsTrigger value="premium" className="text-lg">
                  Premium Resources
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Free Resources */}
            <TabsContent value="free">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Free Resources
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Get started with our collection of free templates, guides, and
                  checklists
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {freeResources.map((resource, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{resource.type}</Badge>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-600">
                            {resource.rating}
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">
                        {resource.title}
                      </CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-gray-500">
                        <Download className="h-4 w-4 mr-1" />
                        <span>{resource.downloads} downloads</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full"
                        onClick={() => handleDownload(resource.title)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Free
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Premium Resources */}
            <TabsContent value="premium">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Premium Resources
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Professional-grade tools and comprehensive packages for
                  serious providers
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {premiumResources.map((resource, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow duration-300 border-2 border-navy-100"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-navy-100 text-navy-800">
                          {resource.type}
                        </Badge>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">
                            {resource.price}
                          </div>
                          <div className="text-sm text-gray-500 line-through">
                            {resource.originalPrice}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-xl">
                        {resource.title}
                      </CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {resource.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-navy-500 mr-2 mt-0.5 shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full bg-navy-800 hover:bg-navy-900"
                        onClick={() => handlePurchase(resource.title)}
                      >
                        Purchase Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Resources?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All our resources are created by experienced professionals and
              regularly updated to reflect current regulations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-navy-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-navy-600" />
                </div>
                <CardTitle>Ofsted Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All templates and guides are designed to meet current Ofsted
                  requirements and regulations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Save Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ready-to-use templates and frameworks that can save you
                  hundreds of hours of development time
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Expert Created</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Developed by experienced professionals with years of
                  experience in children's social care
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Something Custom?</h2>
          <p className="text-xl mb-8">
            Can't find what you're looking for? We can create bespoke resources
            tailored to your specific needs.
          </p>
          <Button
            size="lg"
            className="bg-white text-navy-800 hover:bg-gray-100"
          >
            Contact Us for Custom Resources
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Resources;
