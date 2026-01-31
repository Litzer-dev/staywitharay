import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary text-primary-foreground pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Brand Info */}
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-bold font-heading text-white">
                                StayWith<span className="text-primary">Aray</span>
                            </span>
                        </Link>
                        <p className="text-gray-300 mb-6 max-w-sm">
                            Premium vacation rentals for the discerning traveler.
                            Experience comfort, luxury, and unforgettable memories.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'Properties', 'About Us', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-6 text-white">Support</h3>
                        <ul className="space-y-4">
                            {['FAQ', 'Booking Terms', 'Privacy Policy', 'Cancellation Policy'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300">
                                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span>123 Vacation Lane,<br />Paradise City, PC 56789</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <span>bookings@staywitharay.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} StayWithAray. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
