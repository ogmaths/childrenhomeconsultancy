import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  CheckCircle,
  Calendar,
  Clock,
  Users,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-50 via-white to-mustard-50" />
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-mustard-200 to-mustard-300 rounded-full opacity-20 animate-bounce-gentle" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-navy-200 to-navy-300 rounded-full opacity-25" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-gradient-to-r from-navy-600 to-navy-700 text-white px-6 py-2 text-lg">
              Free Consultation Available
            </Badge>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              Book Your <span className="gradient-text">FREE</span> Consultation
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Schedule a complimentary 30-minute consultation to discuss your
              children's home needs and discover how we can help you succeed
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Booking Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Benefits Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                  What You'll Get in Your{" "}
                  <span className="gradient-text">FREE</span> Consultation
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Users className="h-6 w-6" />,
                      title: "Personalized Assessment",
                      description:
                        "Tailored evaluation of your specific needs and current situation",
                      gradient: "from-emerald-500 to-emerald-600",
                    },
                    {
                      icon: <Shield className="h-6 w-6" />,
                      title: "Expert Guidance",
                      description:
                        "Professional advice from experienced children's home consultants",
                      gradient: "from-navy-500 to-navy-600",
                    },
                    {
                      icon: <Calendar className="h-6 w-6" />,
                      title: "Clear Action Plan",
                      description:
                        "Step-by-step roadmap for your children's home journey",
                      gradient: "from-mustard-500 to-mustard-600",
                    },
                    {
                      icon: <CheckCircle className="h-6 w-6" />,
                      title: "No Obligation",
                      description:
                        "Completely free with no pressure or commitment required",
                      gradient: "from-blue-500 to-blue-600",
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-4 group"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial */}
                <Card className="bg-gradient-to-br from-navy-50 to-navy-100 border-navy-200 border-2 mt-8">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-mustard-400 fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-navy-700 italic mb-4">
                      &quot;The free consultation was incredibly valuable. They
                      understood our needs immediately and provided clear
                      guidance on our next steps.&quot;
                    </blockquote>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-navy-500 to-navy-600 flex items-center justify-center text-white font-bold text-sm mr-3">
                        SM
                      </div>
                      <div>
                        <p className="font-semibold text-navy-800">
                          Sarah Mitchell
                        </p>
                        <p className="text-sm text-navy-600">
                          Registered Manager
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Calendly Embed */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
              >
                <div className="bg-gradient-to-r from-navy-600 to-navy-700 p-6 text-white">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-center mb-2">
                    Schedule Your FREE Consultation
                  </h3>
                  <p className="text-navy-100 text-center">
                    Choose a time that works best for you
                  </p>
                </div>

                <div className="p-2">
                  <iframe
                    src="https://calendly.com/thrivecareconsultants-info/30min"
                    width="100%"
                    height="700"
                    frameBorder="0"
                    title="Schedule a Free Consultation"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
              Common <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our free consultation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What happens during the consultation?",
                answer:
                  "We'll discuss your specific situation, assess your needs, and provide expert guidance on your next steps. It's a no-pressure conversation focused on helping you succeed.",
              },
              {
                question: "How long is the consultation?",
                answer:
                  "The consultation lasts 30 minutes, giving us enough time to understand your needs and provide valuable insights without taking up too much of your day.",
              },
              {
                question: "Is there really no cost or obligation?",
                answer:
                  "Absolutely! The consultation is completely free with no strings attached. We believe in providing value upfront and letting our expertise speak for itself.",
              },
              {
                question: "What if I'm not ready to start yet?",
                answer:
                  "That's perfectly fine! We can provide guidance for any stage of your journey, whether you're just exploring the idea or ready to begin the registration process.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-gray-900 flex items-start">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-navy-500 to-navy-600 flex items-center justify-center text-white font-bold text-sm mr-3 mt-1 flex-shrink-0">
                        {index + 1}
                      </div>
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed pl-11">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800 text-white relative overflow-hidden">
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

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              Ready to Take the{" "}
              <span className="text-mustard-400">Next Step?</span>
            </h2>
            <p className="text-xl mb-12 leading-relaxed text-navy-100 max-w-3xl mx-auto">
              Don't wait - book your FREE 30-minute consultation today and
              discover how we can help you achieve your children's home goals.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <a
                href="https://calendly.com/thrivecareconsultants-info/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-navy-800 hover:bg-gray-100 font-semibold px-10 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <Calendar className="mr-3 h-6 w-6" />
                  Book Your FREE Consultation
                </Button>
              </a>
              <a href="tel:+447850254518">
                <Button className="border-2 border-white text-white hover:bg-white hover:text-navy-800 font-semibold px-10 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
                  <Phone className="mr-3 h-6 w-6" />
                  Or Call: 07850 254 518
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center space-x-8 text-navy-200">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>30 Minutes</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Completely Free</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>No Obligation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
