import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Simulacra</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Premium furniture for modern living. Transform your space with
                our curated collection of contemporary and classic pieces.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>123 Furniture Street, Design District, NY 10001</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>hello@simulacra.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Shop Categories */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/living-room"
                  className="text-sm text-muted-foreground hover:text-gray-900 transition-colors"
                >
                  Living Room
                </Link>
              </li>
              <li>
                <Link
                  href="/bedroom"
                  className="text-sm text-muted-foreground hover:text-gray-900 transition-colors"
                >
                  Bedroom
                </Link>
              </li>
              <li>
                <Link
                  href="/dining-room"
                  className="text-sm text-muted-foreground hover:text-gray-900 transition-colors"
                >
                  Dining Room
                </Link>
              </li>
              <li>
                <Link
                  href="/office"
                  className="text-sm text-muted-foreground hover:text-gray-900 transition-colors"
                >
                  Office
                </Link>
              </li>
              <li>
                <Link
                  href="/outdoor"
                  className="text-sm text-muted-foreground hover:text-gray-900 transition-colors"
                >
                  Outdoor
                </Link>
              </li>
              <li>
                <Link
                  href="/lighting"
                  className="text-sm text-muted-foreground hover:text-gray-900 transition-colors"
                >
                  Lighting
                </Link>
              </li>
              <li>
                <Link
                  href="/decor"
                  className="text-sm text-muted-foreground hover:text-gray-900 transition-colors"
                >
                  Decor
                </Link>
              </li>
              <li>
                <Link
                  href="/sale"
                  className="text-sm text-red-600 hover:text-red-700 transition-colors font-medium"
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Customer Service
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-gray-900 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-sm text-muted-foreground hover:text-gray-900 transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-sm text-muted-foreground hover:text-gray-900 transition-colors"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  href="/size-guide"
                  className="text-sm text-muted-foreground hover:text-gray-900 transition-colors"
                >
                  Size Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/care-instructions"
                  className="text-sm text-muted-foreground hover:text-gray-900 transition-colors"
                >
                  Care Instructions
                </Link>
              </li>
              <li>
                <Link
                  href="/warranty"
                  className="text-sm text-muted-foreground hover:text-gray-900 transition-colors"
                >
                  Warranty
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-muted-foreground hover:text-gray-900 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/track-order"
                  className="text-sm text-muted-foreground hover:text-gray-900 transition-colors"
                >
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Stay Connected</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for exclusive offers, design tips, and
              new arrivals.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>

            {/* Payment Methods */}
            <div className="mt-6">
              <h5 className="font-medium text-gray-900 mb-3 text-sm">
                We Accept
              </h5>
              <div className="flex gap-2 flex-wrap">
                <div className="bg-white border rounded px-2 py-1 text-xs font-medium">
                  VISA
                </div>
                <div className="bg-white border rounded px-2 py-1 text-xs font-medium">
                  MC
                </div>
                <div className="bg-white border rounded px-2 py-1 text-xs font-medium">
                  AMEX
                </div>
                <div className="bg-white border rounded px-2 py-1 text-xs font-medium">
                  PayPal
                </div>
                <div className="bg-white border rounded px-2 py-1 text-xs font-medium">
                  Apple Pay
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Simulacra. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-muted-foreground hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-muted-foreground hover:text-gray-900 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-muted-foreground hover:text-gray-900 transition-colors"
            >
              Cookie Policy
            </Link>
            <Link
              href="/accessibility"
              className="text-muted-foreground hover:text-gray-900 transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
