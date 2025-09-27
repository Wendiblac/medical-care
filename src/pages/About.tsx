import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  Award, 
  Heart, 
  Users, 
  Brain,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import roline from "@/assets/abtimage.png";


const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Wendiblac, <span className="text-accent"> MD | PMHNP-BC</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Board-certified Medical Doctor and Psychiatric mental health Nurse
            practitioner dedicated to transforming lives through compassionate,
            evidence-based care
          </p>
        </div>
      </section>

      {/* Professional Bio */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Provider Image */}
              <div className="relative">
                <img
                  src={roline}
                  alt="Eduke Roline Melle, PMHNP-BC"
                  className="w-68 sm:w-70 md:w-80 lg:w-96 h-auto object-contain mx-auto"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold text-primary">
                Compassionate Care Rooted in Excellence
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Wendiblac specializes in designing and building modern,
                  responsive websites and web applications that combine
                  creativity with functionality. With a strong background in
                  development and cloud deployment, every project is crafted to
                  be visually striking, user-friendly, and performance-driven.
                  From custom portfolio sites and corporate pages to interactive
                  apps and e-commerce solutions, each build is tailored to meet
                  unique business goals and deliver measurable impact.
                </p>
                <p>
                  Beyond design and development, Wendiblac manages the full
                  deployment process, ensuring every site and application is
                  secure, optimized, and production-ready on platforms like AWS,
                  GCP, Netlify, Vercel, Firebase, and DigitalOcean. With an
                  emphasis on clean code, scalability, and end-user experience,
                  projects are delivered with long-term reliability in mind.
                </p>
                <p>
                  Clients choose Wendiblac for versatility, attention to detail,
                  and the ability to transform ideas into seamless digital
                  experiences that inspire trust and drive results. Every
                  project is more than just a build, it’s a partnership aimed at
                  elevating brands and creating lasting digital impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Education */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Education & Credentials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic excellence and professional certifications ensuring the
              highest quality of care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-center">
                  Academic Background
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-primary">
                    Master of Science in Psychiatric Mental Health
                  </h4>
                  <p className="text-muted-foreground">
                    Nurse Practitioner Program
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Advanced clinical training in psychiatric care
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-primary">
                    Bachelor of Science in Nursing
                  </h4>
                  <p className="text-muted-foreground">
                    Foundation in healthcare excellence
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Clinical nursing experience
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-forest-green-foreground" />
                </div>
                <CardTitle className="text-center">
                  Professional Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-forest-green pl-4">
                  <h4 className="font-semibold text-primary">
                    PMHNP-BC Certification
                  </h4>
                  <p className="text-muted-foreground">
                    Board Certified Psychiatric Mental Health Nurse Practitioner
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-primary">
                    Licensed Practitioner
                  </h4>
                  <p className="text-muted-foreground">Maryland & DC Area</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-primary">
                    Continuing Education
                  </h4>
                  <p className="text-muted-foreground">
                    Ongoing professional development in mental health
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy of Care */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Philosophy of Care
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A whole-person approach that honors your unique journey and
              empowers lasting wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card hover:shadow-soft transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl">Holistic Healing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Treating the whole person - mind, body, and spirit -
                  recognizing the interconnected nature of mental and physical
                  health for comprehensive wellness.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-soft transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-section rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Personalized Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Every individual is unique, and so is their path to healing.
                  Treatment plans are carefully tailored to honor your specific
                  needs, goals, and life circumstances.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-soft transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-forest-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl">Evidence-Based</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Combining the latest research and proven therapeutic
                  approaches with clinical expertise to ensure you receive the
                  most effective treatments available.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gradient-calm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Mission & Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide accessible, compassionate, and evidence-based
                    psychiatric care that empowers individuals to achieve their
                    highest potential for mental wellness. We are committed to
                    creating a therapeutic environment where healing, growth,
                    and transformation can flourish.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Core Values
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-primary">
                          Compassion
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Every interaction is guided by empathy and
                          understanding
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-primary">Trust</h4>
                        <p className="text-sm text-muted-foreground">
                          Building safe, confidential therapeutic relationships
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-forest-green rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-primary">
                          Empowerment
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Supporting your active role in the healing process
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-primary">
                          Excellence
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Commitment to the highest standards of care
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the difference of personalized, compassionate psychiatric
            care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;