import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png"; 


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Medical Care</h3>
            <p className="text-sm opacity-90">
              At Medical Care, we provide integrated medical and psychiatric
              care that recognizes the close connection between mental and
              physical health. Our mission is to treat the whole person, mind
              and body, through compassionate, personalized, and evidence-based
              services.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Maryland & DC Area</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/services"
                className="block text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                Services
              </Link>
              <Link
                to="/about"
                className="block text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                About Roline
              </Link>
              <Link
                to="/insurance"
                className="block text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                Insurance
              </Link>
              <Link
                to="/contact"
                className="block text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <div className="space-y-2">
              <Link
                to="/resources"
                className="block text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                Mental Health Resources
              </Link>
              <Link
                to="/blog"
                className="block text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                Blog
              </Link>
              <div className="text-sm opacity-90">
                <div className="font-medium text-accent">Crisis Support:</div>
                <div>988 Suicide & Crisis Lifeline</div>
                <div>911 for emergencies</div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>+(233) 599 588 284</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@wendiblac.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri 9AM-5PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>
            © {year} Medical Care template. All rights reserved. Created by
            Wendiblac
          </p>
          <p className="mt-2">
            <strong>Emergency Notice:</strong> If you are experiencing a mental
            health emergency, please call 911 or go to your nearest emergency
            room immediately.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;