import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MessageCircle,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import { sourceSerif4 } from "./Nav";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-700 to-green-600 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Logo & Office */}
          <div className="flex flex-col items-start md:w-1/3 space-y-6">
            <Link href="/" className="flex items-center gap-1 lg:gap-3">
              <Image
                src="/Navbar/logo.png"
                height={60}
                width={110}
                alt="logo"
                className="h-full w-16 md:w-20"
              />
              <p className={`${sourceSerif4.className} text-2xl md:text-xl lg:text-3xl font-bold`}>
                DHANSHIRI
              </p>
            </Link>
            <div className="text-sm">
              <strong>Office:</strong>
              <address className="not-italic mt-2">
                85, Ayesha Complex,<br />
                Room No. 236/237, 1st Floor,<br />
                Malibagh, Dhaka-1217,<br />
                Bangladesh
              </address>
            </div>
          </div>

          {/* Get In Touch Section */}
          <div className="md:w-1/3 space-y-6">
            <h3 className="text-2xl font-semibold">Get In Touch</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-center gap-3">
                <Facebook className="w-5 h-5" />
                <Link
                  href="https://www.facebook.com/dhanshirienterprise/"
                  target="_blank"
                  className="underline"
                >
                  facebook.com/dhanshirienterprise
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5" />
                <Link
                  href="https://www.instagram.com/dhanshiri.enterprise"
                  target="_blank"
                  className="underline"
                >
                  @dhanshiri.enterprise
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>dhanshiri_ent@yahoo.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>dhanshiri.printing@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp: +8801878923786</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                <Link href="#" className="underline">
                  WeChat: View Link
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+8801712-197173</span>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="md:w-1/3 space-y-6">
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                <Link href="/career" className="hover:underline">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:underline">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Dhanshiri
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Information
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-xs opacity-75">
          &copy; 2025 Dhanshiri Enterprise. All rights reserved.
        </div>
      </div>
    </footer>
  );
}