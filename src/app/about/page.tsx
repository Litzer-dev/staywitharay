import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 bg-secondary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Story</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Redefining hospitality with a personal touch.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            {/* Image Placeholder */}
                            <div className="bg-gray-200 rounded-2xl aspect-video w-full flex items-center justify-center text-gray-400">
                                [About Usage Image]
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-secondary font-heading mb-6">Why We Started</h2>
                            <p className="text-foreground/80 mb-6 leading-relaxed">
                                It all began with a simple idea: to provide a home away from home that offers both the luxury of a hotel and the comfort of living like a local.
                                Our journey started in [Year], and since then, we've hosted thousands of guests from around the world.
                            </p>
                            <p className="text-foreground/80 mb-6 leading-relaxed">
                                We believe in quality over quantity. Each property in our portfolio is hand-selected and meticulously maintained to ensure the highest standards of cleanliness and comfort.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-secondary font-heading mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Excellence", desc: "We strive for perfection in every detail of your stay." },
                            { title: "Comfort", desc: "Your relaxation is our top priority." },
                            { title: "Trust", desc: "Transparent booking and verified properties." }
                        ].map((value) => (
                            <div key={value.title} className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                                <p className="text-gray-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
