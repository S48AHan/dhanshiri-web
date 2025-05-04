import Link from "next/link"
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MessageCircle,
  MessageSquare,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-700 to-green-600 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          {/* Logo and description */}
          <div className="flex flex-col gap-4 md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-wider">FIRST RUBBER</h2>
            <p className="text-sm md:text-base opacity-90">
              High-quality printing and manufacturing solutions tailored for your business.
            </p>
            <Link
              href="#"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md transition-colors w-max"
            >
              Know More
            </Link>
          </div>

          {/* Contact and social links */}
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold">Get In Touch</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-center gap-3">
                <Facebook className="w-5 h-5" />
                <Link href="https://www.facebook.com/dhanshirienterprise/" target="_blank" className="underline">
                  facebook.com/dhanshirienterprise
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5" />
                <Link href="https://www.instagram.com/dhanshiri.enterprise" target="_blank" className="underline">
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
        </div>
      </div>
    </footer>
  )
}
