import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Compass,
  CreditCard,
  Globe,
  MapPin,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cardData = [
  {
    icon: MapPin,
    title: "Destination Guides",
    description:
      "Explore comprehensive guides for destinations worldwide, curated by our community of experienced travelers. From hidden local spots to must-see attractions, our guides have you covered.",
    src: "https://plus.unsplash.com/premium_photo-1718146019289-783bb69d3133?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fERlc3RpbmF0aW9uJTIwR3VpZGVzfGVufDB8fDB8fHww",
    alt: "Destination guide example",
  },
  {
    icon: Users,
    title: "Community Interaction",
    description:
      "Connect with fellow travelers, share your experiences, and get inspired for your next adventure. Join discussions, ask questions, and make new friends from around the world.",
    src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29tbXVuaXR5JTIwSW50ZXJhY3Rpb258ZW58MHx8MHx8fDA%3D",
    alt: "Community interaction example",
  },
  {
    icon: BookOpen,
    title: "Personal Stories",
    description:
      "Read and share personal travel narratives that bring destinations to life and offer unique perspectives. Discover the world through the eyes of fellow travelers and get inspired for your own adventures.",
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGVyc29uYWwlMjBTdG9yaWVzfGVufDB8fDB8fHww",
    alt: "Personal story example",
  },
  {
    icon: CreditCard,
    title: "Premium Content",
    description:
      "Access exclusive features and in-depth content with our premium membership options. Enjoy ad-free browsing, early access to new features, and exclusive travel deals.",
    src: "https://images.unsplash.com/photo-1567861911437-538298e4232c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fFByZW1pdW0lMjBDb250ZW50fGVufDB8fDB8fHww",
    alt: "Premium content example",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Our platform covers destinations across all continents. Whether you're planning a trip to bustling cities or remote villages, you'll find valuable insights from our diverse community of travelers.",
    src: "https://images.unsplash.com/photo-1517178104078-b26ea86da614?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fEdsb2JhbCUyMFJlYWNofGVufDB8fDB8fHww",
    alt: "World map with highlighted destinations",
  },
  {
    icon: Compass,
    title: "Travel Planning Tools",
    description:
      "Utilize our suite of travel planning tools, including itinerary builders, packing lists, and budget calculators. Make your travel preparations smoother and more efficient with our user-friendly resources.",
    src: "https://images.unsplash.com/photo-1496950866446-3253e1470e8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHJhdmVsJTIwUGxhbm5pbmclMjBUb29sc3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Travel planning tools interface",
  },
];

const AboutUsView = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          About Travel Tips & Destination Guides
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Empowering travelers to share stories, discover new destinations, and
          create unforgettable experiences.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            At Travel Tips & Destination Guides, we&apos;re passionate about
            building a vibrant community of travel enthusiasts. Our platform is
            designed to connect travelers from around the world, enabling them
            to share their personal journeys, exchange invaluable tips, and
            interact with like-minded adventurers.
          </p>
          <p className="text-lg text-muted-foreground">
            We believe that travel has the power to broaden perspectives, foster
            cultural understanding, and create lasting memories. Our goal is to
            make every journey more enriching by providing a platform where
            travelers can learn from each other&apos;s experiences and discover
            hidden gems across the globe.
          </p>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1516207925197-a1eebfc9684b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Travelers exploring a new destination"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">What We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map(
            ({ description, icon: Icon, alt, src, title }, index) => (
              <Card key={index + "why choose us"}>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-lg flex items-center">
                    <Icon className="w-5 h-5 mr-2" />
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {description}
                  </p>
                  <Image
                    src={src}
                    alt={alt}
                    width={300}
                    height={150}
                    className="rounded-md mx-auto w-full aspect-[300/150] object-cover"
                  />
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="bg-primary text-primary-foreground rounded-full p-1 mr-2 mt-1">
                <Users className="w-4 h-4" />
              </span>
              <span>
                Authentic travel experiences shared by real travelers from
                diverse backgrounds
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-primary-foreground rounded-full p-1 mr-2 mt-1">
                <MapPin className="w-4 h-4" />
              </span>
              <span>
                Comprehensive destination guides for informed and efficient
                travel planning
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-primary-foreground rounded-full p-1 mr-2 mt-1">
                <Globe className="w-4 h-4" />
              </span>
              <span>
                Interactive community features to connect with fellow
                adventurers worldwide
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-primary-foreground rounded-full p-1 mr-2 mt-1">
                <BookOpen className="w-4 h-4" />
              </span>
              <span>
                Personalized user profiles to showcase your travel journey and
                inspire others
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-primary-foreground rounded-full p-1 mr-2 mt-1">
                <CreditCard className="w-4 h-4" />
              </span>
              <span>
                Premium content access for deeper insights, exclusive tips, and
                special offers
              </span>
            </li>
          </ul>
          <Image
            src="/images/why_choose.jpg"
            alt="Collage of travel experiences"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="bg-muted rounded-lg p-8 text-center space-y-6">
        <h2 className="text-3xl font-semibold">Ready to Start Your Journey?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join our community today and start sharing your travel stories,
          discovering new destinations, and connecting with travelers from
          around the globe. Whether you&apos;re a seasoned globetrotter or
          planning your first big adventure, Travel Tips & Destination Guides is
          your gateway to richer, more meaningful travel experiences.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/signup">Sign Up Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/explore">Explore Content</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsView;
