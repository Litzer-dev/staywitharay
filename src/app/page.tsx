import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PropertyCard } from "@/components/features/PropertyCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold font-heading text-secondary leading-tight mb-6">
                Find Your Perfect <br />
                <span className="text-primary">Vacation Getaway</span>
              </h1>
              <p className="text-lg text-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
                Experience luxury and comfort in our hand-picked properties.
                Whether you're looking for a city escape or a beachside retreat,
                we have the perfect place for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 h-12 shadow-xl shadow-primary/20">
                  Explore Properties
                </Button>
                <Button size="lg" variant="outline" className="border-secondary/20 text-secondary hover:bg-secondary/5 text-lg px-8 h-12">
                  Learn More
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-70">
                <div className="text-sm font-medium text-foreground">
                  <span className="block text-2xl font-bold text-secondary">50+</span>
                  Properties
                </div>
                <div className="text-sm font-medium text-foreground">
                  <span className="block text-2xl font-bold text-secondary">2k+</span>
                  Happy Guests
                </div>
                <div className="text-sm font-medium text-foreground">
                  <span className="block text-2xl font-bold text-secondary">4.9</span>
                  Average Rating
                </div>
              </div>
            </div>

            {/* Hero Image / Visuals */}
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl transform translate-x-10 translate-y-10"></div>
                {/* 
                  Ideally we use a real image here. Since we don't have one user-provided, 
                  I'll use a placeholder div with the brand aesthetic or a generic image URL if allowed (I'll avoid external URLs unless search is used).
                  I'll use a generated aesthetic composition for now using Tailwind. 
                */}
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden h-full border border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5"></div>

                  {/* Abstract shapes or placeholder */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <span className="text-primary opacity-50 text-9xl">🏠</span>
                    <p className="mt-4 text-secondary font-medium">Hero Image Placeholder</p>
                  </div>
                </div>

                {/* Floating Card Element */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-50 flex items-center gap-3 animate-bounce-slow">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    ✨
                  </div>
                  <div>
                    <p className="text-sm font-bold text-secondary">Verified Host</p>
                    <p className="text-xs text-gray-500">Superhost Status</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decor */}
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-gradient-to-l from-accent/10 to-transparent"></div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-2 font-heading">Featured Stays</h2>
              <p className="text-muted-foreground">Hand-picked properties for your next adventure</p>
            </div>
            <Button variant="outline" className="hidden sm:flex border-secondary/20 text-secondary hover:bg-secondary/5">
              View All Properties
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PROPERTIES.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-12 text-center sm:hidden">
            <Button variant="outline" className="w-full border-secondary/20 text-secondary hover:bg-secondary/5">
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opcode-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready for your dream vacation?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Book your stay today and experience the ultimate in comfort and luxury.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 h-12 shadow-xl shadow-primary/20">
            Book Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const FEATURED_PROPERTIES = [
  {
    id: "1",
    title: "Seaside Luxury Villa",
    location: "Malibu, California",
    price: 450,
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: "2",
    title: "Modern City Penthouse",
    location: "New York, NY",
    price: 350,
    rating: 4.8,
    reviews: 85,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: "3",
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    price: 275,
    rating: 4.95,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2187&auto=format&fit=crop",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
  },
];
