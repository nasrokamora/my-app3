// components/seo/JsonLdSchema.js

const JsonLdSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nasreddine Abdellouche",
    "alternateName": ["Nas@Dev", "Nasreddine AB", "Nasdev","nasrokamora","nasreddine_ab"],
    "givenName": "Nasreddine",
    "familyName": "Abdellouche",
    "image": "https://nasreddine-abdellouche.vercel.app/nasreddine_ab.jpeg",
    "url": "https://nasreddine-abdellouche.vercel.app/",
    "jobTitle": "Full Stack Web Developer, Cybersecurity Researcher",
    "description": "Nasreddine Abdellouche, also known as Nas@Dev, is a full stack developer with expertise in modern web development including React, Next.js, TypeScript, and Tailwind CSS. He also has strong interests in ethical hacking and cybersecurity, creating scalable and secure web apps.",
    "sameAs": [
      "https://github.com/nasrokamora",
      "https://linkedin.com/in/nasdev",
      "https://linktr.ee/nasreddine_ab",
      "https://magix-movies.vercel.app/"
    ],
    "hasPart": {
      "@type": "WebApplication",
      "name": "Magix Movies",
      "url": "https://magix-movies.vercel.app/",
      "applicationCategory": "Entertainment",
      "creator": {
        "@type": "Person",
        "name": "Nasreddine Abdellouche"
      }
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Nas@Dev",
      "url": "https://nasreddine-abdellouche.vercel.app/"
    },
    "knowsAbout": [
      "React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "Node.js", "MongoDB", "Prisma",
      "GraphQL", "Firebase", "Supabase", "CI/CD", "Serverless", "Vercel", "DigitalOcean",
      "Cybersecurity", "Ethical Hacking", "Web Development", "Framer Motion", "Redux", "Figma",
      "Responsive Design", "SEO", "Styled Components", "Material UI", "Socket.io"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nasreddine-abdellouche.vercel.app/"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLdSchema;
