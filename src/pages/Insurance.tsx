import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  CreditCard, 
  Phone, 
  DollarSign, 
  FileText, 
  CheckCircle,
  ArrowRight,
  Info,
  Users,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";

const Insurance = () => {
  const insuranceProviders = [
    "Aetna",
    "Blue Cross Blue Shield",
    "Cigna", 
    "United Healthcare",
    "Anthem",
    "Kaiser Permanente",
    "Humana",
    "Medicaid",
    "Medicare"
  ];

  const paymentOptions = [
    {
      title: "Insurance Coverage",
      description: "We accept most major insurance plans and will verify your benefits before your first appointment.",
      icon: FileText,
      features: [
        "Direct billing to insurance",
        "Prior authorization assistance",
        "Benefits verification",
        "Claims processing support"
      ]
    },
    {
      title: "Self-Pay Options",
      description: "Competitive self-pay rates for those without insurance coverage or who prefer private pay.",
      icon: CreditCard,
      features: [
        "Transparent pricing",
        "Payment plans available",
        "HSA/FSA accepted",
        "Good faith estimates provided"
      ]
    },
    {
      title: "Sliding Scale",
      description: "Financial assistance available for qualifying patients to ensure accessible mental healthcare.",
      icon: Heart,
      features: [
        "Income-based pricing",
        "Financial hardship consideration",
        "Flexible payment arrangements",
        "No one turned away for inability to pay"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Accessible Care <span className="text-accent">Made Simple</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Quality mental healthcare shouldn't be limited by financial
            barriers. We work with most insurance plans and offer flexible
            payment options.
          </p>
        </div>
      </section>

      {/* Insurance Notice */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <Alert className="border-primary bg-primary/10 max-w-4xl mx-auto">
            <Info className="h-4 w-4 text-primary" />
            <AlertDescription className="text-primary font-medium">
              <strong>Insurance Verification:</strong> We strongly recommend
              calling your insurance provider to verify mental health benefits
              and any required referrals before your first appointment.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Accepted Insurance */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Accepted Insurance Plans
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with most major insurance providers to make mental
              healthcare accessible
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {insuranceProviders.map((provider, index) => (
              <Card
                key={index}
                className="text-center p-6 shadow-card hover:shadow-soft transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-primary">{provider}</h3>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Alert className="border-accent bg-accent/10 max-w-2xl mx-auto">
              <Info className="h-4 w-4 text-accent-foreground" />
              <AlertDescription className="text-accent-foreground">
                Don't see your insurance listed? Contact us to verify coverage.
                Insurance networks change frequently, and we may still be able
                to work with your plan.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Payment Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple payment solutions to fit your financial situation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {paymentOptions.map((option, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-soft transition-shadow"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <option.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    {option.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {option.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                What to Expect
              </h2>
              <p className="text-lg text-muted-foreground">
                Transparent information about costs and billing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-3">
                    <DollarSign className="w-6 h-6" />
                    Typical Session Costs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-primary">
                      Initial Psychiatric Evaluation
                    </h4>
                    <p className="text-muted-foreground">
                      90-minute comprehensive assessment
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Cost varies by insurance coverage
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-primary">
                      Follow-up Medication Management
                    </h4>
                    <p className="text-muted-foreground">
                      30-minute medication review sessions
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Typically monthly or quarterly
                    </p>
                  </div>
                  <div className="border-l-4 border-forest-green pl-4">
                    <h4 className="font-semibold text-primary">
                      Psychotherapy Sessions
                    </h4>
                    <p className="text-muted-foreground">
                      50-minute individual therapy
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Weekly or bi-weekly sessions
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-3">
                    <Users className="w-6 h-6" />
                    Insurance Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-primary">
                        Understanding Your Coverage
                      </h4>
                      <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                        <li>• Copay: Fixed amount per session</li>
                        <li>
                          • Deductible: Amount you pay before insurance kicks in
                        </li>
                        <li>
                          • Coinsurance: Percentage you pay after deductible
                        </li>
                        <li>
                          • Out-of-pocket maximum: Annual limit on your costs
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        We Help With:
                      </h4>
                      <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                        <li>• Benefits verification before your first visit</li>
                        <li>• Prior authorization if required</li>
                        <li>• Claims submission and follow-up</li>
                        <li>• Appeals process if claims are denied</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Assistance */}
      <section className="py-16 bg-gradient-calm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              Financial Assistance Available
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We believe everyone deserves access to quality mental healthcare,
              regardless of financial circumstances.
            </p>

            <Card className="shadow-card text-left">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-3">
                      Sliding Scale Fee Structure
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      We offer reduced rates based on income and financial
                      hardship. Our goal is to make mental healthcare accessible
                      to all community members.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Income-based fee reduction</li>
                      <li>• Payment plan options</li>
                      <li>• Emergency hardship considerations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-3">
                      How to Apply
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Financial assistance applications are reviewed
                      confidentially and with respect for your privacy and
                      dignity.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Simple application process</li>
                      <li>• Confidential review</li>
                      <li>• Quick approval decisions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Questions About Coverage?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our billing team is here to help you understand your insurance
            benefits and payment options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call for Benefits Verification
            </Button>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary"
              >
                Contact Our Billing Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-6">
            We're committed to transparency in all billing matters and will
            provide good faith estimates for all services.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insurance;