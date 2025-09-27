import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Brain, 
  Stethoscope, 
  MessageCircle, 
  Heart, 
  Shield, 
  Users,
  Clock,
  Phone,
  ArrowRight,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Comprehensive Psychiatric Evaluations",
      description: "Thorough mental health assessments to understand your unique needs and develop personalized treatment plans.",
      details: [
        "Initial diagnostic evaluation",
        "Mental health history assessment",
        "Treatment goal setting",
        "Risk assessment and safety planning",
        "Medication history review"
      ],
      color: "bg-gradient-hero"
    },
    {
      icon: Stethoscope,
      title: "Medication Management",
      description: "Expert psychiatric medication prescribing, monitoring, and optimization to achieve the best therapeutic outcomes.",
      details: [
        "Medication initiation and titration",
        "Side effect monitoring and management",
        "Drug interaction screening",
        "Genetic testing consultation",
        "Medication adherence support"
      ],
      color: "bg-gradient-section"
    },
    {
      icon: MessageCircle,
      title: "Psychotherapy & Counseling",
      description: "Individual therapy using evidence-based approaches tailored to your specific mental health needs.",
      details: [
        "Cognitive Behavioral Therapy (CBT)",
        "Mindfulness-based interventions",
        "Supportive psychotherapy",
        "Trauma-informed care",
        "Solution-focused brief therapy"
      ],
      color: "bg-forest-green"
    },
    {
      icon: Heart,
      title: "Specialized Care",
      description: "Expert treatment for specific mental health conditions with specialized therapeutic approaches.",
      details: [
        "Anxiety and panic disorders",
        "Depression and mood disorders",
        "ADHD evaluation and treatment",
        "Eating disorder support",
        "Bipolar disorder management"
      ],
      color: "bg-primary"
    },
    {
      icon: Shield,
      title: "Crisis Support & Safety Planning",
      description: "Immediate intervention and ongoing support for mental health crises with comprehensive safety planning.",
      details: [
        "Crisis intervention services",
        "Safety plan development",
        "Risk assessment and mitigation",
        "Emergency contact coordination",
        "Follow-up crisis support"
      ],
      color: "bg-accent"
    },
    {
      icon: Users,
      title: "Collaborative Care",
      description: "Coordinated treatment approach working with your existing healthcare team for holistic wellness.",
      details: [
        "Primary care coordination",
        "Specialist referrals",
        "Family involvement (when appropriate)",
        "Care team communication",
        "Integrated treatment planning"
      ],
      color: "bg-gradient-calm"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Mental Health{" "}
            <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Personalized, evidence-based psychiatric care designed to support
            your unique healing journey
          </p>
        </div>
      </section>

      {/* Crisis Alert */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <Alert className="border-destructive bg-destructive/10 max-w-4xl mx-auto">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <AlertDescription className="text-destructive font-medium">
              <strong>Crisis Support:</strong> If you are experiencing a mental
              health emergency, please call 988 (Suicide & Crisis Lifeline) or
              911 immediately. Do not wait for an appointment.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-soft transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-primary">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary text-sm">
                      What's Included:
                    </h4>
                    <ul className="space-y-1">
                      {service.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Treatment Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Evidence-based care that honors your unique journey and empowers
              lasting wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary">
                Person-Centered
              </h3>
              <p className="text-muted-foreground">
                Your values, preferences, and goals guide every aspect of your
                treatment plan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-forest-green rounded-full mx-auto mb-6 flex items-center justify-center">
                <Brain className="w-10 h-10 text-forest-green-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary">
                Evidence-Based
              </h3>
              <p className="text-muted-foreground">
                Treatment approaches backed by scientific research and proven
                clinical outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary">
                Holistic
              </h3>
              <p className="text-muted-foreground">
                Addressing mental, physical, and social factors that contribute
                to your wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Conditions We Treat
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized care for a wide range of mental health conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Anxiety Disorders",
              "Depression",
              "Bipolar Disorder",
              "ADHD",
              "PTSD & Trauma",
              "Eating Disorders",
              "Obsessive-Compulsive Disorder",
              "Panic Disorder",
              "Psychotic Disorders",
              "Mood Disorders",
              "Adjustment Disorders",
              "Sleep Disorders",
            ].map((condition, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-card transition-shadow"
              >
                <h3 className="font-semibold text-primary">{condition}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Process */}
      <section className="py-16 bg-gradient-calm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Getting Started is Simple
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your path to better mental health begins with a simple phone call
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3 text-primary">
                Contact Us
              </h3>
              <p className="text-muted-foreground text-sm">
                Call or fill out our contact form to schedule your initial
                consultation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-section rounded-full mx-auto mb-6 flex items-center justify-center text-primary font-bold text-xl">
                2
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3 text-primary">
                Initial Assessment
              </h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive evaluation to understand your needs and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-forest-green rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3 text-primary">
                Treatment Plan
              </h3>
              <p className="text-muted-foreground text-sm">
                Personalized plan developed collaboratively with you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-6 flex items-center justify-center text-accent-foreground font-bold text-xl">
                4
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3 text-primary">
                Begin Treatment
              </h3>
              <p className="text-muted-foreground text-sm">
                Start your healing journey with ongoing support and monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Professional, compassionate psychiatric care is just a phone call
            away.
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

export default Services;