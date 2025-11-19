import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import principalPhoto from "@/assets/principal.jpg";

const About = () => {
  const timeline = [
    { year: "1966", event: "School founded with vision for excellence" },
    { year: "2005", event: "Expanded to secondary education programs" },
    {
      year: "2015",
      event: "Achieved national recognition for School excellence",
    },
    { year: "2020", event: "Launched digital learning initiatives" },
    { year: "2018", event: "Celebrating 50 years of educational excellence" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Mission & Vision */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                About Our School
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Committed to shaping future leaders through excellence in
                education
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-card rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide comprehensive, world-class education that nurtures
                  intellectual curiosity, develops character, and prepares
                  students to become responsible global citizens who contribute
                  positively to society.
                </p>
              </div>
              <div className="bg-card rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as a leading educational institution that
                  empowers students with knowledge, skills, and values needed to
                  excel in an ever-changing world while maintaining strong
                  ethical foundations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Principal's Message */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <img
                    src={"/divya.jpeg"}
                    alt="Principal"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    Message from the Principal
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Welcome to our School, where we believe every child has
                    unique potential waiting to be discovered and nurtured. Our
                    dedicated faculty and state-of-the-art facilities create an
                    environment where students thrive academically, socially,
                    and personally.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We are committed to preparing our students not just for
                    exams, but for life. Through a balanced curriculum,
                    co-curricular activities, and strong values education, we
                    shape well-rounded individuals ready to face the challenges
                    of tomorrow.
                  </p>
                  <p className="mt-4 font-semibold text-primary">
                    Dr. Divya Jain
                  </p>
                  <p className="text-sm text-muted-foreground">Principal</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Our Journey
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 items-start hover-lift bg-card p-6 rounded-lg"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-accent-foreground font-bold">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <p className="text-foreground font-medium">
                        {item.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {["Excellence", "Integrity", "Innovation", "Compassion"].map(
                (value) => (
                  <div key={value} className="text-center">
                    <div className="w-20 h-20 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-accent-foreground">
                        {value[0]}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">{value}</h3>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
