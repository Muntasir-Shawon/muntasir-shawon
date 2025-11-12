import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
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
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

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
    <section id="contact" className="py-20 px-4 bg-muted relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Where Can You Find Me?
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                It's take your photograph to the next level. See real wonderful and beautiful moment of your life<br />
                It's take your photograph.
              </p>
            </div>

            {/* Location Card */}
            <div className="bg-yellow-light border-4 border-primary p-8 rounded-2xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-2">Studio Survey Area Road</h3>
                  <p className="text-sm text-foreground">
                    DADA Burdabad<br />
                    Dhaka Bangladesh<br />
                    1100
                  </p>
                </div>
              </div>
              <button className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-accent hover:text-accent-foreground transition-all inline-flex items-center gap-2">
                OPEN IN MAP
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* View Portfolio Badge */}
            <button className="group relative inline-block">
              <div className="relative flex items-center justify-center w-32 h-32 rounded-full border-4 border-primary hover:border-accent transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
                    <path
                      id="circlePathContact"
                      d="M 64, 64 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                      fill="none"
                    />
                    <text className="text-[10px] fill-primary font-semibold tracking-wider">
                      <textPath href="#circlePathContact" startOffset="0%">
                        GET IN TOUCH • GET IN TOUCH •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <ArrowRight className="h-6 w-6 text-primary group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
            </button>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-background rounded-2xl p-8 shadow-xl border-2 border-border">
            <h3 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="h-12 border-2 border-border focus:border-accent rounded-xl"
                  required
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="h-12 border-2 border-border focus:border-accent rounded-xl"
                  required
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message..."
                  rows={5}
                  className="border-2 border-border focus:border-accent rounded-xl resize-none"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl text-lg"
                size="lg"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border space-y-3">
              <a
                href="mailto:muntasir.shawon78@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm">muntasir.shawon78@gmail.com</span>
              </a>
              <a
                href="tel:01640856355"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="text-sm">01640856355</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
