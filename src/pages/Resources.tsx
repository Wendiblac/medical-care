import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Phone, 
  Heart, 
  Shield, 
  Users, 
  Globe,
  MessageCircle,
  AlertTriangle,
  ExternalLink,
  Clock
} from "lucide-react";

const Resources = () => {
  const crisisResources = [
    {
      name: "988 Suicide & Crisis Lifeline",
      number: "988",
      description: "24/7 crisis support for suicidal thoughts and mental health emergencies",
      icon: Phone
    },
    {
      name: "Emergency Services",
      number: "911",
      description: "For immediate life-threatening emergencies",
      icon: AlertTriangle
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Free, 24/7 crisis support via text message",
      icon: MessageCircle
    },
    {
      name: "Veterans Crisis Line",
      number: "1-800-273-8255",
      description: "Specialized crisis support for veterans and their families",
      icon: Shield
    }
  ];

  const nationalHotlines = [
    {
      name: "National Domestic Violence Hotline",
      number: "1-800-799-7233",
      description: "Support for domestic violence survivors",
      available: "24/7"
    },
    {
      name: "RAINN Sexual Assault Hotline",
      number: "1-800-656-4673",
      description: "Support for sexual assault survivors",
      available: "24/7"
    },
    {
      name: "National Child Abuse Hotline",
      number: "1-800-4-A-CHILD (1-800-422-4453)",
      description: "Report child abuse and get support",
      available: "24/7"
    },
    {
      name: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Treatment referrals and information services",
      available: "24/7"
    },
    {
      name: "National Eating Disorders Association",
      number: "1-800-931-2237",
      description: "Support for eating disorder recovery",
      available: "M-Th 11am-9pm ET, F 11am-5pm ET"
    }
  ];

  const mentalHealthOrgs = [
    {
      name: "National Alliance on Mental Illness (NAMI)",
      website: "nami.org",
      description: "Mental health education, support, and advocacy"
    },
    {
      name: "Mental Health America",
      website: "mhanational.org",
      description: "Mental health screening tools and resources"
    },
    {
      name: "Depression and Bipolar Support Alliance",
      website: "dbsalliance.org",
      description: "Support groups and educational resources"
    },
    {
      name: "Anxiety and Depression Association of America",
      website: "adaa.org",
      description: "Information and resources for anxiety and depression"
    },
    {
      name: "Psychology Today",
      website: "psychologytoday.com",
      description: "Find mental health professionals and support groups"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Mental Health <span className="text-accent">Resources</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Help is always available. You are not alone in your journey to mental wellness.
          </p>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <Alert className="border-destructive bg-destructive/10 max-w-4xl mx-auto">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <AlertDescription className="text-destructive font-medium">
              <strong>If you are in immediate danger or having thoughts of suicide:</strong> 
              Call 988 (Suicide & Crisis Lifeline) or 911 immediately. These resources are available 24/7.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Crisis Resources */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Crisis Support Hotlines
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Immediate help is available 24/7. Don't hesitate to reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {crisisResources.map((resource, index) => (
              <Card key={index} className="shadow-card hover:shadow-soft transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center">
                      <resource.icon className="w-6 h-6 text-destructive-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-primary">{resource.name}</CardTitle>
                      <div className="text-2xl font-bold text-destructive">{resource.number}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {resource.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* National Hotlines */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              National Support Hotlines
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized support for various situations and populations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {nationalHotlines.map((hotline, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{hotline.name}</CardTitle>
                  <div className="text-xl font-bold text-forest-green">{hotline.number}</div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <CardDescription className="text-base">
                    {hotline.description}
                  </CardDescription>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{hotline.available}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mental Health Organizations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Mental Health Organizations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted organizations providing education, support, and resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentalHealthOrgs.map((org, index) => (
              <Card key={index} className="shadow-card hover:shadow-soft transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg text-center text-primary">{org.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <CardDescription className="text-base">
                    {org.description}
                  </CardDescription>
                  <div className="flex items-center justify-center gap-2 text-forest-green font-medium">
                    <ExternalLink className="w-4 h-4" />
                    <span>{org.website}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Care Resources */}
      <section className="py-16 bg-gradient-calm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Self-Care & Wellness Tips
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple strategies to support your daily mental wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg text-center text-primary">Emotional Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Practice daily mindfulness or meditation</li>
                  <li>• Keep a gratitude journal</li>
                  <li>• Connect with supportive friends and family</li>
                  <li>• Limit social media exposure</li>
                  <li>• Engage in hobbies you enjoy</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-section rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-center text-primary">Physical Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Get regular exercise (even just walking)</li>
                  <li>• Maintain a consistent sleep schedule</li>
                  <li>• Eat nutritious, balanced meals</li>
                  <li>• Stay hydrated throughout the day</li>
                  <li>• Limit caffeine and alcohol</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <div className="w-12 h-12 bg-forest-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg text-center text-primary">Stress Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Practice deep breathing exercises</li>
                  <li>• Set realistic goals and boundaries</li>
                  <li>• Take regular breaks from work</li>
                  <li>• Spend time in nature</li>
                  <li>• Seek professional help when needed</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                When to Seek Professional Help
              </h2>
              <p className="text-lg text-muted-foreground">
                It's important to recognize when professional support is needed
              </p>
            </div>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-4">Seek Help If You Experience:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Persistent sadness or hopelessness</li>
                      <li>• Severe anxiety or panic attacks</li>
                      <li>• Thoughts of self-harm or suicide</li>
                      <li>• Substance abuse problems</li>
                      <li>• Difficulty functioning in daily life</li>
                      <li>• Significant changes in sleep or appetite</li>
                      <li>• Social withdrawal or isolation</li>
                      <li>• Extreme mood swings</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-4">Remember:</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Seeking help is a sign of strength, not weakness. Mental health conditions 
                        are medical conditions that can and should be treated.
                      </p>
                      <p>
                        Early intervention can make a significant difference in treatment outcomes 
                        and quality of life.
                      </p>
                      <p>
                        If you're unsure whether you need help, it's better to reach out and have 
                        a professional assessment.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;