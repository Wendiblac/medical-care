import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Brain, 
  Heart, 
  Shield, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Stethoscope,
  MessageCircle,
  Phone
} from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";
import roline from "@/assets/roline.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Compassionate Psychiatric Care
            <br />
            <span className="text-accent">for Mind and Body</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-up">
            Personalized, evidence-based treatment designed to support your
            healing journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              Book an Appointment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-primary"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Provider Intro Section */}
      <section className="py-16 bg-gradient-calm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                Meet Wendiblac, MD | PMHNP-BC
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                This is a web design and development project only. I’m not a doctor or nurse
                😅. The site is crafted to showcase how a medical professional’s
                brand could look online: clean, trustworthy, and
                patient-centered. It’s a template for healthcare providers such
                as psychiatrists, therapists, or nurse practitioners who want a
                modern digital presence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Licensed MD | PMHNP-BC </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Evidence-Based Care</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Holistic Approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Personalized Treatment</span>
                </div>
              </div>
              <Link to="/about">
                <Button variant="outline" className="mt-4">
                  Learn More About Dr. Wendiblac
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Provider Image */}
            <div className="relative">
              <img
                src={roline}
                alt="Wendiblac, MD | PMHNP-BC "
                className="w-68 sm:w-70 md:w-80 lg:w-96 h-auto object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Comprehensive Mental Health Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Personalized care tailored to your unique needs and healing
              journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">
                  Psychiatric Evaluations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Comprehensive assessments to understand your mental health
                  needs and create personalized treatment plans.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-section rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Stethoscope className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Medication Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Expert medication prescribing and monitoring to optimize your
                  treatment with minimal side effects.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Psychotherapy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Individual therapy using evidence-based approaches including
                  CBT, mindfulness, and supportive therapy.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-section rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Crisis Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Immediate support and intervention for health crises
                  with safety planning and resources.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Medical Care?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of truly personalized, compassionate healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary">
                Holistic Care
              </h3>
              <p className="text-muted-foreground">
                Treating the whole person - mind, body, and spirit - for
                comprehensive healing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-forest-green rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-10 h-10 text-forest-green-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary">
                Personalized Plans
              </h3>
              <p className="text-muted-foreground">
                Every treatment plan is tailored to your unique needs, goals,
                and circumstances.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary">
                Licensed Expertise
              </h3>
              <p className="text-muted-foreground">
                Board-certified medical doctor and psychiatric nurse practitioner with extensive
                clinical experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary">
                Safe Environment
              </h3>
              <p className="text-muted-foreground">
                A warm, non-judgmental space where you can feel comfortable and
                supported.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Your Healing Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A clear path from your first appointment to ongoing wellness
              support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary">
                Assessment
              </h3>
              <p className="text-muted-foreground">
                Comprehensive evaluation of your health, medical history,
                and personal goals.
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-16 h-16 bg-gradient-section rounded-full mx-auto mb-6 flex items-center justify-center text-primary font-bold text-xl">
                2
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary">
                Treatment Plan
              </h3>
              <p className="text-muted-foreground">
                Personalized treatment strategy combining therapy, medication,
                and lifestyle approaches.
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-16 h-16 bg-forest-green rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary">
                Ongoing Support
              </h3>
              <p className="text-muted-foreground">
                Regular check-ins, medication monitoring, and therapy sessions
                to track progress.
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-6 flex items-center justify-center text-accent-foreground font-bold text-xl">
                4
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary">
                Thriving
              </h3>
              <p className="text-muted-foreground">
                Achieving your wellness goals with continued support for
                long-term mental health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step toward better health with compassionate,
            expert care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </Button>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;