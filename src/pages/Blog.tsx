import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Search,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPost = {
    title: "Understanding Anxiety: A Comprehensive Guide to Recognition and Management",
    excerpt: "Anxiety affects millions of people worldwide. Learn about the different types of anxiety disorders, symptoms to watch for, and evidence-based treatment approaches that can help you or your loved ones find relief.",
    author: "Dr. Eduke Roline Melle",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Anxiety",
    image: "Featured post image placeholder"
  };

  const blogPosts = [
    {
      title: "The Connection Between Sleep and Mental Health",
      excerpt: "Discover how sleep quality affects your mental wellbeing and learn practical strategies for better sleep hygiene.",
      author: "Dr. Eduke Roline Melle",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Wellness Tips"
    },
    {
      title: "Managing Depression: Treatment Options That Work",
      excerpt: "A comprehensive overview of effective depression treatments, from therapy to medication management.",
      author: "Dr. Eduke Roline Melle",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Depression"
    },
    {
      title: "ADHD in Adults: Recognition and Treatment Strategies",
      excerpt: "Adult ADHD often goes undiagnosed. Learn about symptoms and modern treatment approaches.",
      author: "Dr. Eduke Roline Melle",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "ADHD"
    },
    {
      title: "Medication Management: What You Need to Know",
      excerpt: "Understanding psychiatric medications, side effects, and the importance of proper monitoring.",
      author: "Dr. Eduke Roline Melle",
      date: "February 20, 2024",
      readTime: "9 min read",
      category: "Medication Management"
    },
    {
      title: "Building Resilience: Coping Strategies for Life's Challenges",
      excerpt: "Develop healthy coping mechanisms and build emotional resilience with these evidence-based techniques.",
      author: "Dr. Eduke Roline Melle",
      date: "February 15, 2024",
      readTime: "5 min read",
      category: "Wellness Tips"
    },
    {
      title: "The Role of Nutrition in Mental Health",
      excerpt: "How what you eat can impact your mood, anxiety levels, and overall mental wellbeing.",
      author: "Dr. Eduke Roline Melle",
      date: "February 10, 2024",
      readTime: "6 min read",
      category: "Wellness Tips"
    }
  ];

  const categories = ["All", "Anxiety", "Depression", "ADHD", "Wellness Tips", "Medication Management"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Mental Health <span className="text-accent">Blog</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Expert insights, practical tips, and evidence-based information to support your mental wellness journey
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant={category === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl font-bold text-primary mb-2">Featured Article</h2>
          </div>
          
          <Card className="max-w-4xl mx-auto shadow-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gradient-calm h-64 lg:h-auto flex items-center justify-center">
                <div className="text-center text-primary">
                  <Calendar className="w-16 h-16 mx-auto mb-4 opacity-60" />
                  <p className="text-sm">Featured Article Image</p>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-primary">{featuredPost.category}</Badge>
                  <Badge variant="outline">{featuredPost.readTime}</Badge>
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                  <Button>
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with our latest insights on mental health and wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-calm rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center text-primary">
                      <Calendar className="w-12 h-12 mx-auto mb-2 opacity-60" />
                      <p className="text-xs">Article Image</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight text-primary hover:text-primary/80 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Mail className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Stay Connected
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get mental health tips and wellness insights delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="bg-primary-foreground text-primary flex-1"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;