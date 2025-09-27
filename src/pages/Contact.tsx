import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  AlertTriangle,
  Calendar,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Take the First Step{" "}
            <span className="text-accent">Towards Healing</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Reach out today to begin your journey to better mental health. We're
            here to support you every step of the way.
          </p>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <Alert className="border-destructive bg-destructive/10 max-w-4xl mx-auto">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <AlertDescription className="text-destructive font-medium">
              <strong>Emergency Notice:</strong> If you are experiencing a
              mental health emergency or having thoughts of suicide, please call
              911 or 988 (Suicide & Crisis Lifeline) immediately. This contact
              form is not monitored 24/7 and should not be used for emergencies.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24
                  hours during business days.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Please tell us how we can help you. Include any questions about our services, insurance, or scheduling."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Send className="mr-2 w-4 h-4" />
                    Send Message
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you consent to be contacted via
                    email or phone regarding your inquiry.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Phone</h4>
                      <p className="text-muted-foreground">
                        +(233) 599 588 284
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Call for appointments and inquiries
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-forest-green rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-forest-green-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Email</h4>
                      <p className="text-muted-foreground">
                        info@wendiblac.com
                      </p>
                      <p className="text-sm text-muted-foreground">
                        For general inquiries and information
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Service Area
                      </h4>
                      <p className="text-muted-foreground">
                        Maryland & DC Metropolitan Area
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Telehealth services available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-3">
                    <Clock className="w-5 h-5" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Monday - Friday</span>
                      <span className="text-muted-foreground">
                        9:00 AM - 5:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Saturday</span>
                      <span className="text-muted-foreground">
                        9:00 AM - 2:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>After Hours:</strong> If you need immediate
                      assistance outside of business hours, please call 988 for
                      crisis support or 911 for emergencies.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-3">
                    <Calendar className="w-5 h-5" />
                    Appointment Scheduling
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Ready to schedule your appointment? We offer flexible
                    scheduling options to accommodate your needs.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Calendar className="mr-2 w-4 h-4" />
                      Book Online Appointment
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Phone className="mr-2 w-4 h-4" />
                      Call to Schedule
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    New patient appointments typically available within 1-2
                    weeks
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              What to Expect When You Contact Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make getting started as simple and comfortable as possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <CardTitle className="text-lg text-primary">
                  Initial Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  We'll respond to your inquiry within 24 hours to discuss your
                  needs and answer any questions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-section rounded-full mx-auto mb-4 flex items-center justify-center text-primary font-bold text-xl">
                  2
                </div>
                <CardTitle className="text-lg text-primary">
                  Insurance & Scheduling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  We'll verify your insurance benefits and schedule your initial
                  appointment at a convenient time.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-green rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <CardTitle className="text-lg text-primary">
                  First Appointment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Your comprehensive evaluation and the beginning of your
                  personalized treatment journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;