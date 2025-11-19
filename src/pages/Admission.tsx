import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Download, FileText } from "lucide-react";
import { toast } from "sonner";

const Admission = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    studentName: "",
    grade: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Enquiry submitted successfully! We will contact you soon.");
    setFormData({
      parentName: "",
      email: "",
      phone: "",
      studentName: "",
      grade: "",
      message: "",
    });
  };

  const admissionSteps = [
    {
      title: "Submit Enquiry Form",
      description: "Fill out the online enquiry form with student details",
    },
    {
      title: "Schedule Campus Visit",
      description: "Visit our campus and meet with admissions counselor",
    },
    {
      title: "Submit Documents",
      description: "Provide required documents and application materials",
    },
    {
      title: "Entrance Assessment",
      description: "Student takes age-appropriate assessment test",
    },
    {
      title: "Admission Decision",
      description: "Receive admission decision within 5-7 business days",
    },
    {
      title: "Complete Enrollment",
      description: "Pay fees and complete enrollment formalities",
    },
  ];

  const requiredDocuments = [
    "Birth Certificate (original + photocopy)",
    "Previous School Transfer Certificate",
    "Mark sheets of last 2 years",
    "Medical Fitness Certificate",
    "Recent Passport Size Photographs (4 copies)",
    "Proof of Residence (utility bill/rent agreement)",
    "Parent/Guardian ID Proof (Aadhar/Passport)",
  ];

  const feeStructure = [
    { grade: "Pre-Primary (Nursery - KG)", fee: "₹2,500 per year" },
    { grade: "Primary (Grades 1-5)", fee: "₹3,000 per year" },
    { grade: "Middle School (Grades 6-8)", fee: "₹3,500 per year" },
    { grade: "High School (Grades 9-10)", fee: "₹4,000 per year" },
    { grade: "Senior Secondary (Grades 11-12)", fee: "₹4,500 per year" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Admissions 2025-26
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Join our community of learners and embark on a journey of
              excellence
            </p>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Admission Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {admissionSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 shadow-md hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-accent-foreground font-bold">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary text-center mb-12">
                Required Documents
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {requiredDocuments.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-card p-4 rounded-lg"
                  >
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button className="bg-accent hover:bg-accent-light">
                  <Download className="h-4 w-4 mr-2" />
                  Download Document Checklist
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary text-center mb-12">
                Fee Structure
              </h2>
              <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-6 py-4 text-left">Grade Level</th>
                      <th className="px-6 py-4 text-left">Annual Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((item, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="px-6 py-4">{item.grade}</td>
                        <td className="px-6 py-4 font-semibold text-accent">
                          {item.fee}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                * Additional fees apply for transportation, meals, and
                extracurricular activities
              </p>
              <div className="text-center mt-6">
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  View Complete Fee Structure
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enquiry Form */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-primary text-center mb-12">
                Admission Enquiry
              </h2>
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-lg shadow-lg p-8 space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="parentName">Parent/Guardian Name</Label>
                    <Input
                      id="parentName"
                      value={formData.parentName}
                      onChange={(e) =>
                        setFormData({ ...formData, parentName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="studentName">Student Name</Label>
                    <Input
                      id="studentName"
                      value={formData.studentName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          studentName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="grade">Grade Applying For</Label>
                  <Input
                    id="grade"
                    placeholder="e.g., Grade 5"
                    value={formData.grade}
                    onChange={(e) =>
                      setFormData({ ...formData, grade: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Any questions or additional information..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-light"
                  size="lg"
                >
                  Submit Enquiry
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Admission;
