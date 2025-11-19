import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={"/ILIKE.png"} alt="School Logo" className="h-12 w-12" />
              <span className="font-bold text-xl">Asha Modern School</span>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Shaping Future Leaders through excellence in education, character
              development, and holistic growth.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Adarshs97102593"
                className="hover:text-accent transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/shivanshdevloper/"
                className="hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shivansh-singh-bb1b0b328/"
                className="hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/admission"
                  className="text-sm hover:text-accent transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/facilities"
                  className="text-sm hover:text-accent transition-colors"
                >
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm hover:text-accent transition-colors"
                >
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="font-bold text-lg mb-4">Academics</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/academics"
                  className="text-sm hover:text-accent transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="text-sm hover:text-accent transition-colors"
                >
                  Curriculum
                </Link>
              </li>
              <li>
                <Link
                  to="/ebooks"
                  className="text-sm hover:text-accent transition-colors"
                >
                  E-Learning
                </Link>
              </li>
              <li>
                <Link
                  to="/athletic"
                  className="text-sm hover:text-accent transition-colors"
                >
                  Athletics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Saharanpur, Newish Kamp, 247001</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 7618550475</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>shivanshsingh4539@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            &copy; {new Date().getFullYear()} School. All rights reserved. |
            <Link
              to="/privacy"
              className="hover:text-accent transition-colors ml-1"
            >
              Privacy Policy
            </Link>
            |
            <Link
              to="/terms"
              className="hover:text-accent transition-colors ml-1"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
