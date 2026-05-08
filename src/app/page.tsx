"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="mediumSizeLargeTitles"
        background="floatingGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Syed Mohsin Ali"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "sparkles-gradient",
      }}
      title="SYED MOHSIN ALI"
      description="I help businesses grow online with powerful digital marketing strategies, professional branding, and creative freelance solutions for international clients."
      tag="Freelancer • Digital Marketing Specialist • Creative Growth Strategist"
      tagAnimation="blur-reveal"
      buttons={[
        {
          text: "Hire Me",
          href: "#contact",
        },
        {
          text: "View Services",
          href: "#services",
        },
      ]}
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-photo/little-girl-with-books-notepads-sits-front-computer-top-view_169016-49260.jpg",
          imageAlt: "Professional Workspace",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-photo/rise-shine-growth-success-achievement-progress-concept_53876-133719.jpg",
          imageAlt: "Digital Growth",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/rendering-smart-home-device_23-2151039367.jpg",
          imageAlt: "Marketing Dashboards",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-photo/picture-happy-man-black-board-with-text-successful_176420-2906.jpg",
          imageAlt: "Creative Professional",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/phone-connected-headphones_1162-134.jpg",
          imageAlt: "Brand Promotion",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/party-composition-with-colorful-confetti_23-2147852252.jpg",
          imageAlt: "Global Connectivity",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="About Me"
      description="I’m Syed Mohsin Ali, a passionate freelancer and digital marketing specialist dedicated to helping brands build a strong online presence. I provide high-quality digital solutions focused on business growth, audience engagement, and professional branding. My mission is to deliver result-driven services that help businesses stand out."
      imageSrc="http://img.b2bpic.net/free-photo/portrait-middle-aged-hispanic-cheerful-female-with-curly-hair_181624-53321.jpg"
      imageAlt="Syed Mohsin Ali"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwelve
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "s1",
          label: "Marketing",
          title: "Digital Marketing Solutions",
          items: [
            "Strategy Development",
            "Brand Awareness",
            "Audience Growth",
          ],
        },
        {
          id: "s2",
          label: "Social Media",
          title: "Social Media Management",
          items: [
            "Facebook Ads",
            "Instagram Ads",
            "Content Strategy",
          ],
        },
        {
          id: "s3",
          label: "Branding",
          title: "Branding & Promotion",
          items: [
            "Visual Identity",
            "Professional Image",
            "Promotion Campaigns",
          ],
        },
        {
          id: "s4",
          label: "Support",
          title: "Freelance Business Support",
          items: [
            "Client Communication",
            "Remote Management",
            "Project Support",
          ],
        },
      ]}
      title="Services I Provide"
      description="I offer professional digital marketing, management, and business support services to help you reach your goals."
    />
  </div>

  <div id="skills" data-section="skills">
      <MetricCardSeven
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "100%",
          title: "Digital Marketing",
          items: [
            "Social Media Marketing",
            "Ads Strategy",
            "Audience Growth",
          ],
        },
        {
          id: "m2",
          value: "100%",
          title: "Freelancing",
          items: [
            "Client Communication",
            "Remote Management",
            "Creative Strategy",
          ],
        },
        {
          id: "m3",
          value: "100%",
          title: "Creative Expertise",
          items: [
            "Content Creation",
            "Visual Marketing",
            "YouTube Branding",
          ],
        },
      ]}
      title="My Expertise"
      description="A deep focus on digital marketing, creative strategy, and freelance technical support."
    />
  </div>

  <div id="why-choose-me" data-section="why-choose-me">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "Professional Communication",
          content: "I prioritize clear, fast, and transparent communication throughout every project.",
        },
        {
          id: "2",
          title: "Creative Marketing Ideas",
          content: "I deliver unique and modern marketing ideas tailored to your business needs.",
        },
        {
          id: "3",
          title: "International Experience",
          content: "I have extensive experience working with global clients across various time zones.",
        },
        {
          id: "4",
          title: "Goal-Oriented Strategies",
          content: "My focus is always on delivering measurable results that grow your business.",
        },
      ]}
      title="Why Choose Me?"
      description="Professional commitment to your business growth."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Excellent Service",
          quote: "Mohsin helped grow our brand presence significantly within just three months.",
          name: "Sarah Johnson",
          role: "CEO",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-home_23-2149412549.jpg",
        },
        {
          id: "2",
          title: "Expert Strategist",
          quote: "His creative marketing ideas have truly transformed our social media engagement.",
          name: "Michael Chen",
          role: "CTO",
          imageSrc: "http://img.b2bpic.net/free-photo/pov-businessman-attending-videocall-meeting-office-using-online-videoconference-talk-consultant-about-financial-strategy-company-employee-chatting-remote-teleconference-close-up_482257-40929.jpg",
        },
        {
          id: "3",
          title: "Reliable Professional",
          quote: "Working with Syed was seamless. His remote management skills are unmatched.",
          name: "Emily Rodriguez",
          role: "Marketing Director",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-businessman-wearing-glasses_329181-677.jpg",
        },
        {
          id: "4",
          title: "Outstanding Growth",
          quote: "I saw immediate results in our ad campaigns thanks to his targeted strategies.",
          name: "David Kim",
          role: "Product Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-lifestyle-clean-urban-space_23-2149015706.jpg",
        },
        {
          id: "5",
          title: "Top-notch Results",
          quote: "He delivered beyond expectations. Highly recommend for any serious branding project.",
          name: "Linda Thompson",
          role: "Founder",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-smiling-middle-aged-business-leader_1262-4845.jpg",
        },
      ]}
      title="Client Success"
      description="Hear what my clients say about our collaboration and results."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "How do we get started?",
          content: "Feel free to reach out via email or phone to discuss your project goals.",
        },
        {
          id: "q2",
          title: "Do you work with international clients?",
          content: "Yes, I have extensive experience collaborating with international businesses.",
        },
        {
          id: "q3",
          title: "What is your typical turnaround time?",
          content: "It depends on the scope of the project, but I prioritize timely delivery.",
        },
        {
          id: "q4",
          title: "Are you available for long-term projects?",
          content: "Absolutely, I love building long-term partnerships.",
        },
      ]}
      title="Common Questions"
      description="Everything you need to know about working with me."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Contact"
      title="Let’s Work Together"
      description="I am available for freelance projects, collaborations, and international client services. Reach out today!\n\nEmail: mohsintariqmohsintariq249@gmail.com\nPhone: 03122176288"
      imageSrc="http://img.b2bpic.net/free-photo/diverse-people-startup-business-meeting_53876-146138.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-vector/black-white-logo-with-black-background_698780-944.jpg"
      logoText="Syed Mohsin Ali"
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Home",
              href: "#home",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 Syed Mohsin Ali | All Rights Reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
