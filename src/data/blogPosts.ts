import event1 from "/IT-Wizards-scaled.jpg";
import event2 from "/main.jpg";
import event3 from "/Marshal-Neil-scaled.jpg";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    role: string;
    photo: string;
  };
  publishedAt: string;
  categories: string[];
  published: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "smart-classroom",
    title: "Revolutionizing Education with Smart Classrooms",
    excerpt:
      "Discover how our innovative smart classroom technology is transforming the learning experience for students and educators alike.",
    content: `
      <h2>Introduction to Smart Classrooms</h2>
      <p>In today's digital age, education is evolving rapidly. Our School has embraced this change by implementing state-of-the-art smart classroom technology that enhances learning outcomes and prepares students for the future.</p>
      
      <h2>Key Features</h2>
      <p>Our smart classrooms are equipped with:</p>
      <ul>
        <li>Interactive digital whiteboards</li>
        <li>High-speed internet connectivity</li>
        <li>Multimedia projectors and audio systems</li>
        <li>Collaborative learning software</li>
        <li>Digital content libraries</li>
      </ul>
      
      <h2>Benefits for Students</h2>
      <p>Students benefit from engaging, interactive lessons that cater to different learning styles. Visual learners can see concepts come to life, while kinesthetic learners can interact with digital content.</p>
      
      <h2>Teacher Empowerment</h2>
      <p>Our educators receive comprehensive training to maximize the potential of these technologies, enabling them to create dynamic, engaging lessons that captivate students' attention and foster deeper understanding.</p>
      
      <blockquote>Education is the most powerful weapon which you can use to change the world. - Nelson Mandela</blockquote>
    `,
    image: event1,
    author: {
      name: "Dr. Divya Jain",
      role: "Principle",
      photo: "",
    },
    publishedAt: "August 24, 2025",
    categories: ["Technology", "Education"],
    published: true,
  },
  {
    id: "2",
    slug: "sports-championship",
    title: "Annual Sports Championship: Celebrating Excellence",
    excerpt:
      "A recap of our thrilling annual sports championship where students showcased their athletic prowess and team spirit.",
    content: `
      <h2>A Day of Athletic Excellence</h2>
      <p>Our annual sports championship brought together students from all grades to compete in various athletic events, demonstrating skill, determination, and sportsmanship.</p>
      
      <h2>Event Highlights</h2>
      <p>The championship featured:</p>
      <ul>
        <li>Track and field events</li>
        <li>Team sports competitions</li>
        <li>Individual athletic challenges</li>
        <li>Special performances and demonstrations</li>
      </ul>
      
      <h2>Winners and Achievements</h2>
      <p>Congratulations to all participants who gave their best effort. Special recognition goes to our gold medal winners who set new school records in multiple events.</p>
      
      <h2>Building Character Through Sports</h2>
      <p>Beyond competition, our sports program builds character, teaches teamwork, and instills values of discipline and perseverance that serve students throughout their lives.</p>
    `,
    image: event2,
    author: {
      name: "Coach Pradeep Sharma",
      role: "P.T teacher",
      photo: "",
    },
    publishedAt: "September 15, 2025",
    categories: ["Sports", "Events"],
    published: true,
  },
  {
    id: "3",
    slug: "science-lab",
    title: "Hands-On Science: Our New Laboratory",
    excerpt:
      "Explore our cutting-edge science laboratory where students conduct experiments and develop critical thinking skills.",
    content: `
      <h2>World-Class Laboratory Facilities</h2>
      <p>Our new science laboratory provides students with hands-on experience in physics, chemistry, and biology, fostering curiosity and scientific inquiry.</p>
      
      <h2>Equipment and Resources</h2>
      <p>The lab is equipped with:</p>
      <ul>
        <li>Advanced microscopes and imaging equipment</li>
        <li>Chemical analysis instruments</li>
        <li>Safety equipment and protocols</li>
        <li>Digital data collection tools</li>
        <li>Comprehensive resource materials</li>
      </ul>
      
      <h2>Learning Through Experimentation</h2>
      <p>Students don't just read about scientific concepts—they experience them firsthand through carefully designed experiments that bring textbook theories to life.</p>
      
      <h2>Safety First</h2>
      <p>All laboratory activities are conducted under strict safety protocols with proper supervision, ensuring a secure learning environment for all students.</p>
    `,
    image: event3,
    author: {
      name: "Mr. Deepak Raja",
      role: "Vice Principle",
      photo: "",
    },
    publishedAt: "October 10, 2025",
    categories: ["Science", "Facilities"],
    published: true,
  },
];
