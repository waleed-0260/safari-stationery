import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail, Star, Users, Package, Award } from "lucide-react"
import Image from "next/image"

export default function AboutComponent() {
  return (
    <div className="container">
      <section className="py-16 px-4 md:px-6">
        <div className=" mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Paper N Play
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We’re a brand built for dreamers, doodlers, and gift-givers — especially students and teens who love cute, colorful things that spark joy.
            </p>
          </div>

          {/* Shop Photos Grid */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <div className="relative group">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Creative Corner shop interior showing colorful stationery displays"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Our Welcoming Interior</p>
              </div>
            </div>

            <div className="relative group">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Toy section featuring educational games, puzzles and learning materials"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Educational Toys Section</p>
              </div>
            </div>

            <div className="relative group">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Stationery wall display with organized pens, pencils, notebooks and art supplies"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Premium Stationery Wall</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 md:px-6 secondBg w-full">
        <div className=" mx-auto ">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl heading font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 w-[80%]">
                <p>
                  Creative Corner began as a small dream in 2015 when Sarah and Mike, both educators and parents,
                  noticed a gap in their local community for quality educational materials and creative supplies.
                </p>
                <p>
                  What started as a 500 sq ft space has grown into a 2,000 sq ft wonderland where children's eyes light
                  up and parents find exactly what they need to support their child's learning journey.
                </p>
                <p>
                  Located in the heart of downtown, our shop has become a gathering place for families, teachers, and
                  anyone who believes in the power of creativity and hands-on learning.
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-2 grid-cols-1 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold">8+</div>
                  <div className="text-sm text-gray-600">Years Serving</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold">5000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Shop owners Sarah and Mike in their Creative Corner store"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products We Offer */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className=" mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl heading font-bold text-center text-gray-900 mb-12">
            What You'll Find in Our Shop
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Stationery Section */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Package className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Premium Stationery</h3>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Writing Essentials</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Premium pens & pencils</li>
                        <li>• Fountain pens & ink</li>
                        <li>• Mechanical pencils</li>
                        <li>• Erasers & sharpeners</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Paper Products</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Notebooks & journals</li>
                        <li>• Sketchbooks & pads</li>
                        <li>• Sticky notes & planners</li>
                        <li>• Specialty papers</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Art Supplies</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Colored pencils & markers</li>
                        <li>• Watercolors & brushes</li>
                        <li>• Craft materials</li>
                        <li>• Drawing tools</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Organization</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Binders & folders</li>
                        <li>• Storage solutions</li>
                        <li>• Desk accessories</li>
                        <li>• Labels & organizers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Toys Section */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-pink-100 rounded-full">
                    <Star className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Educational Toys</h3>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">STEM Learning</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Science experiment kits</li>
                        <li>• Building & construction</li>
                        <li>• Robotics & coding</li>
                        <li>• Math manipulatives</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Creative Play</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Art & craft kits</li>
                        <li>• Musical instruments</li>
                        <li>• Dress-up & role play</li>
                        <li>• Modeling clay & dough</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Brain Games</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Puzzles & brain teasers</li>
                        <li>• Memory & logic games</li>
                        <li>• Strategy board games</li>
                        <li>• Educational card games</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Age Groups</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Toddlers (2-4 years)</li>
                        <li>• Preschool (4-6 years)</li>
                        <li>• School age (6-12 years)</li>
                        <li>• Teens & adults</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Shop */}
      <section className="py-16 px-4 md:px-6 bg-gray-100">
        <div className=" mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl heading font-bold text-center text-gray-900 mb-12">
            Why Families Choose Creative Corner
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Curated Selection</h3>
              <p className="text-gray-600 text-sm">
                Every product is hand-picked by our education experts for quality and learning value.
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Personal Service</h3>
              <p className="text-gray-600 text-sm">
                Our knowledgeable staff provides personalized recommendations for every age and interest.
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-orange-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Local Community</h3>
              <p className="text-gray-600 text-sm">
                Supporting local schools and families with special discounts and educational events.
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-pink-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Try Before Buy</h3>
              <p className="text-gray-600 text-sm">
                Test many of our educational toys and games right in the store before purchasing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className=" mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl heading font-bold text-center text-gray-900 mb-12">Visit Our Shop</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Store Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600">123 Main Street, Downtown District</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5" />
                    <div>
                      <p className="font-semibold">Hours</p>
                      <p className="text-gray-600">Mon-Sat: 9AM-7PM, Sun: 11AM-5PM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">hello@creativecorner.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Special Services</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">School Supply Lists</p>
                      <p className="text-gray-600 text-sm">We stock supplies for all local schools</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Birthday Party Packages</p>
                      <p className="text-gray-600 text-sm">Craft kits and activities for parties</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Teacher Discounts</p>
                      <p className="text-gray-600 text-sm">15% off for educators with ID</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Gift Wrapping</p>
                      <p className="text-gray-600 text-sm">Free gift wrapping on all purchases</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="button text-white mr-4">
              Get Directions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
            >
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
