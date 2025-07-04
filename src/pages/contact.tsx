import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Calendar,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
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
              Book Your FREE Consultation
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Schedule a complimentary 30-minute consultation to discuss your
              children's home needs and how we can help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendly Booking Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calendly Embed */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Schedule Your FREE 30-Minute Consultation
              </h2>
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-navy-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    What to Expect:
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Personalized assessment of your needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Expert guidance on your next steps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Clear roadmap for your children's home journey</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>No obligation - completely free</span>
                  </li>
                </ul>
              </div>

              {/* Calendly Embed */}
              <div className="bg-gray-50 rounded-xl p-4">
                <iframe
                  src="https://calendly.com/thrivecareconsultants-info/30min"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title="Schedule a Free Consultation"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* Alternative Contact Methods */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Other Ways to Reach Us
              </h2>

              <div className="bg-gradient-to-br from-navy-50 to-navy-100 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">
                  Prefer to book by phone or email?
                </h3>
                <p className="text-navy-700 mb-4">
                  No problem! Contact us directly and we'll schedule your free
                  consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+441234567890"
                    className="flex items-center text-navy-700 hover:text-navy-900 font-medium"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    +44 (0) 123 456 7890
                  </a>
                  <a
                    href="mailto:info@thrivecareconsultants.co.uk"
                    className="flex items-center text-navy-700 hover:text-navy-900 font-medium"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    info@thrivecareconsultants.co.uk
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-navy-600" />
                      Phone Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">+44 (0) 123 456 7890</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Available Monday - Friday, 9:00 AM - 6:00 PM
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-navy-600" />
                      Email Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      info@thrivecareconsultants.co.uk
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      We typically respond within 24 hours
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-navy-600" />
                      Service Area
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Serving children's homes across England
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Remote consultations and on-site visits available
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-navy-600" />
                      Emergency Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      24/7 emergency support available for urgent compliance
                      issues
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Call our emergency line: +44 (0) 123 456 7891
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  How quickly can you respond to urgent situations?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  For urgent compliance issues, we aim to provide initial
                  support within 24 hours and can arrange on-site visits within
                  2-3 days depending on location.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you offer free consultations?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we offer a free 30-minute initial consultation to discuss
                  your needs and how we can help. This allows us to understand
                  your situation and recommend the most appropriate support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What areas do you cover?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We provide services to children's homes across England. We
                  offer both remote consultations and on-site visits, with
                  travel costs included in our service packages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Book your FREE 30-minute consultation today and take the first step
            towards your children's home success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/thrivecareconsultants-info/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-navy-800 hover:bg-gray-100"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book FREE Consultation
              </Button>
            </a>
            <a href="tel:+441234567890">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-navy-700"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now: +44 (0) 123 456 7890
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
