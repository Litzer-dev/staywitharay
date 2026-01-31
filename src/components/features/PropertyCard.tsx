"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Users, Bed, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface PropertyProps {
    id: string;
    title: string;
    location: string;
    price: number;
    rating: number;
    reviews: number;
    image?: string;
    guests: number;
    bedrooms: number;
    bathrooms: number;
}

export function PropertyCard({ property }: { property: PropertyProps }) {
    return (
        <Card className="group overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 bg-white">
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                {/* Placeholder for Image since we don't have real ones yet. 
            In real app, use next/image with property.image 
        */}
                <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    {property.image ? (
                        <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-secondary/40 font-medium">No Image Available</span>
                    )}
                </div>

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-secondary flex items-center gap-1 shadow-sm">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    {property.rating} ({property.reviews})
                </div>
            </div>

            <CardHeader className="p-5 pb-2">
                <div className="flex justify-between items-start gap-2">
                    <h3 className="font-bold text-lg text-secondary line-clamp-1 group-hover:text-primary transition-colors">
                        {property.title}
                    </h3>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="h-3 w-3" />
                    {property.location}
                </div>
            </CardHeader>

            <CardContent className="p-5 pt-2 pb-4">
                <div className="flex items-center gap-4 text-sm text-gray-500 my-3">
                    <div className="flex items-center gap-1" title="Guests">
                        <Users className="h-4 w-4" /> {property.guests}
                    </div>
                    <div className="flex items-center gap-1" title="Bedrooms">
                        <Bed className="h-4 w-4" /> {property.bedrooms}
                    </div>
                    <div className="flex items-center gap-1" title="Bathrooms">
                        <Bath className="h-4 w-4" /> {property.bathrooms}
                    </div>
                </div>
            </CardContent>

            <CardFooter className="p-5 pt-0 flex items-center justify-between border-t border-gray-50 mt-auto">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-400">Price per night</span>
                    <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-primary">${property.price}</span>
                        {/* <span className="text-sm text-gray-400 line-through">${property.price * 1.2}</span> */}
                    </div>
                </div>

                <Link href={`/properties/${property.id}`}>
                    <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white shadow-md hover:shadow-lg">
                        View Details
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
