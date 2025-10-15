import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const conditions = [
  { name: "Acne", description: "Treatment for acne vulgaris, including topical and oral therapies" },
  { name: "Rosacea", description: "Management of facial redness, flushing, and associated symptoms" },
  { name: "Eczema", description: "Treatment of atopic dermatitis and contact dermatitis" },
  { name: "Contact Dermatitis", description: "Diagnosis and management of allergic and irritant reactions" },
  { name: "Psoriasis", description: "Treatment plans for plaque psoriasis and other variants" },
  { name: "Seborrhoeic Dermatitis", description: "Management of scalp and facial seborrhoeic dermatitis" },
  { name: "Fungal Infections", description: "Treatment of tinea, ringworm, and other fungal conditions" },
  { name: "Urticaria (Hives)", description: "Assessment and management of acute and chronic urticaria" },
  { name: "Warts", description: "Treatment options for common, plantar, and other wart types" },
  { name: "Actinic Keratoses", description: "Treatment of sun-damaged skin lesions" },
  { name: "Seborrhoeic Keratoses", description: "Assessment of benign skin growths" },
  { name: "Benign Moles", description: "Evaluation and monitoring of benign pigmented lesions" },
  { name: "Skin Infections", description: "Diagnosis and treatment of bacterial skin infections" },
  { name: "Perioral Dermatitis", description: "Management of facial rash around the mouth" },
];

const Dermatology = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-sage-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-charcoal mb-6">
              Dermatology Services
            </h1>
            <p className="text-xl text-foreground">
              Comprehensive management of common skin conditions with 
              evidence-based treatments and personalized care
            </p>
          </div>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal text-center mb-12">
              Conditions We Treat
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {conditions.map((condition, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-sage-dark">
                      {condition.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {condition.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-sage-light p-8 rounded-lg text-center">
              <p className="text-lg text-foreground mb-4">
                This list continues to grow as NovaSkin expands its dermatology services.
              </p>
              <p className="text-foreground">
                If you have a skin condition not listed here, please contact us to discuss 
                whether we can help or provide appropriate referrals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal text-center mb-12">
              Our Approach to Dermatology Care
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-charcoal">1</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Thorough Assessment
                </h3>
                <p className="text-muted-foreground">
                  Comprehensive evaluation to accurately diagnose your skin condition
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-charcoal">2</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Personalized Treatment
                </h3>
                <p className="text-muted-foreground">
                  Evidence-based treatment plans tailored to your specific needs
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-charcoal">3</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Ongoing Support
                </h3>
                <p className="text-muted-foreground">
                  Follow-up care to ensure treatment effectiveness and adjust as needed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sage">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Need Help with a Skin Condition?
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Book an appointment to discuss your dermatology concerns with Dr Premila Hewage
          </p>
          <Button variant="default" size="lg" className="bg-charcoal text-white hover:bg-charcoal/90" asChild>
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dermatology;
