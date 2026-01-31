"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star, MapPin, Users, Bed, Bath, Wifi, Car, Coffee, Wind } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation";

// Mock Data Function - In real app, fetch from DB
const getProperty = (id: string) => {
    // Just returning sample data regardless of ID for demo
    return {
        id,
        title: "Seaside Luxury Villa",
        location: "Malibu, California",
        description: "Experience the ultimate in seaside luxury. This stunning villa features breathtaking ocean views, a private infinity pool, and modern amenities. Perfect for families or groups looking for a relaxing getaway. Within walking distance to private beach access and local restaurants.",
        price: 450,
        rating: 4.9,
        reviews: 128,
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
        ],
        guests: 8,
        bedrooms: 4,
        bathrooms: 3,
        amenities: [
            { name: "Free Wifi", icon: Wifi },
            { name: "Free Parking", icon: Car },
            { name: "Coffee Machine", icon: Coffee },
            { name: "Air Conditioning", icon: Wind }
        ]
    };
};

export default function PropertyPage() {
    const params = useParams();
    const id = params.id as string;
    const property = getProperty(id);

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState("2");

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            <main className="pt-24 pb-20">
                <div className="container mx-auto px-4">

                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-3xl lg:text-4xl font-bold text-secondary font-heading mb-2">{property.title}</h1>
                        <div className="flex items-center gap-4 text-sm text-foreground/80">
                            <span className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-primary text-primary" />
                                <span className="font-semibold text-secondary">{property.rating}</span>
                                ({property.reviews} reviews)
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4 text-primary" />
                                {property.location}
                            </span>
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[400px] md:h-[500px] mb-12 rounded-xl overflow-hidden">
                        <div className="md:col-span-2 h-full relative group">
                            <img src={property.gallery[0]} alt="Main view" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div className="md:col-span-1 flex flex-col gap-4 h-full">
                            <div className="relative h-1/2 overflow-hidden group">
                                <img src={property.gallery[1]} alt="View 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div className="relative h-1/2 overflow-hidden group">
                                <img src={property.gallery[2]} alt="View 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                        </div>
                        {/* Just repeating for demo grid filler if needed or make grid smarter */}
                        <div className="md:col-span-1 h-full relative overflow-hidden group">
                            <img src={property.gallery[1]} alt="View 4" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            <Button variant="secondary" className="absolute bottom-4 right-4 bg-white/90 text-secondary hover:bg-white text-xs">
                                View All Photos
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Left Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Description */}
                            <div>
                                <h2 className="text-2xl font-bold text-secondary font-heading mb-4">About this home</h2>
                                <div className="flex gap-6 mb-6 pb-6 border-b border-gray-100 text-sm text-foreground/80">
                                    <span className="flex items-center gap-2"><Users className="h-5 w-5 text-secondary" /> {property.guests} guests</span>
                                    <span className="flex items-center gap-2"><Bed className="h-5 w-5 text-secondary" /> {property.bedrooms} bedrooms</span>
                                    <span className="flex items-center gap-2"><Bath className="h-5 w-5 text-secondary" /> {property.bathrooms} baths</span>
                                </div>
                                <p className="text-foreground/80 leading-relaxed">
                                    {property.description}
                                </p>
                            </div>

                            {/* Amenities */}
                            <div>
                                <h2 className="text-2xl font-bold text-secondary font-heading mb-6">What this place offers</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    {property.amenities.map((amenity) => (
                                        <div key={amenity.name} className="flex items-center gap-3 text-foreground/80">
                                            <amenity.icon className="h-5 w-5 text-secondary/70" />
                                            <span>{amenity.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Booking Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 bg-white border border-gray-100 rounded-xl p-6 shadow-xl shadow-secondary/5">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <span className="text-2xl font-bold text-secondary">${property.price}</span>
                                        <span className="text-gray-500 text-sm"> / night</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm font-medium">
                                        <Star className="h-3 w-3 fill-primary text-primary" /> {property.rating}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="col-span-1 space-y-2">
                                        <Label htmlFor="checkIn">Check-In</Label>
                                        <Input
                                            type="date"
                                            id="checkIn"
                                            value={checkIn}
                                            onChange={(e) => setCheckIn(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-span-1 space-y-2">
                                        <Label htmlFor="checkOut">Check-Out</Label>
                                        <Input
                                            type="date"
                                            id="checkOut"
                                            value={checkOut}
                                            onChange={(e) => setCheckOut(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-span-2 space-y-2">
                                        <Label htmlFor="guests">Guests</Label>
                                        <Input
                                            type="number"
                                            id="guests"
                                            min="1"
                                            max={property.guests}
                                            value={guests}
                                            onChange={(e) => setGuests(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg text-lg h-12 mb-4">
                                    Reserve
                                </Button>

                                <p className="text-center text-xs text-gray-400">You won't be charged yet</p>

                                <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                                    <div className="flex justify-between text-sm text-foreground/80">
                                        <span className="underline">${property.price} x 5 nights</span>
                                        <span>${property.price * 5}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-foreground/80">
                                        <span className="underline">Cleaning fee</span>
                                        <span>$100</span>
                                    </div>
                                    <div className="flex justify-between text-base font-bold text-secondary pt-3 border-t border-gray-100">
                                        <span>Total before taxes</span>
                                        <span>${property.price * 5 + 100}</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
