"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Heart } from "lucide-react";
import { profileData } from "@/lib/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gradient">Pradeepkumar R</h3>
            <p className="text-sm text-muted-foreground">
              {profileData.personal.tagline}
            </p>
            <div className="flex space-x-4">
              <Link
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href={`mailto:${profileData.personal.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Projects", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {["Web Development", "Full Stack", "UI/UX Design", "Consulting"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <a
                  href={`mailto:${profileData.personal.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  {profileData.personal.email}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {profileData.personal.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Pradeepkumar R. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center">
              Designed and engineered by Pradeepkumar R <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" /> Innovating with Code, Designing with Purpose
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
