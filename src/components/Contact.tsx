import { useState } from "react";
import { Mail, Phone, Facebook, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:muntasir.shawon78@gmail.com"
                  className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
                >
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <span>muntasir.shawon78@gmail.com</span>
                </a>

                <a
                  href="tel:01640856355"
                  className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
                >
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <span>01640856355</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/muntasir.shawon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-accent/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group"
                >
                  <Facebook className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                </a>
                <a
                  href="https://www.instagram.com/muntasir_shawon?igsh=MTEwODQyNWNuc216Nw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-coral/10 rounded-lg hover:bg-coral hover:text-coral-foreground transition-colors group"
                >
                  <Instagram className="h-6 w-6 text-coral group-hover:text-coral-foreground" />
                </a>
              </div>
            </div>

            <div className="p-6 bg-secondary/50 rounded-xl">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">Location:</span> Dhaka, Bangladesh
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Open to remote work and freelance opportunities
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
