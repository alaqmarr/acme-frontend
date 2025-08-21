
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export default function AboutSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="relative h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/about-image.jpg"
              alt="About ACME"
              fill
              className="object-cover"
            />
          </div>
          
          <div
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About ACME Industrial Equipments Company</h2>
            <p className="text-gray-600 mb-4">
              Acme Industrial Equipments Company, headquartered in Rani Gunj, Secunderabad (Telangana), is a trusted supplier and manufacturer of a wide range of industrial valves and equipment. Operating with a customer-first approach, the company has built a reputation for reliability and swift service.
            </p>
            <p className="text-gray-600 mb-6">
              With a team of dedicated professionals and a carefully curated selection of products, 
              we strive to be your one-stop shop for all your needs. Our commitment to excellence 
              has earned us recognition as one of the best equipments company. 
            </p>
            <Button asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}