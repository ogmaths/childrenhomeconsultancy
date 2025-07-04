import React from "react";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              Thrive Care Consultants
            </h3>
            <p className="text-navy-200 leading-relaxed">
              Expert guidance for children's homes at every stage of their
              journey.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-mustard-400" />
                <a
                  href="tel:+447850254518"
                  className="text-navy-200 hover:text-white transition-colors"
                >
                  07850 254 518
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-mustard-400" />
                <a
                  href="mailto:info@thrivecareconsultants.com"
                  className="text-navy-200 hover:text-white transition-colors"
                >
                  info@thrivecareconsultants.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/pre-registration"
                  className="text-navy-200 hover:text-white transition-colors"
                >
                  Pre-Registration Support
                </a>
              </li>
              <li>
                <a
                  href="/inspection-readiness"
                  className="text-navy-200 hover:text-white transition-colors"
                >
                  Inspection Readiness
                </a>
              </li>
              <li>
                <a
                  href="/post-registration"
                  className="text-navy-200 hover:text-white transition-colors"
                >
                  Post-Registration Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-8 pt-8 text-center">
          <p className="text-navy-300">
            © {new Date().getFullYear()} Thrive Care Consultants. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
