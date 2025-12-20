export interface AboutSection {
  id: string;
  title: string;
  content: string;
  children?: Array<{
    label: string;
    description: string;
  }>;
}

export const aboutSections: AboutSection[] = [
  {
    id: "mission",
    title: "Our Mission",
    content:
      "Digital DNA Brand Consulting Services: Our goal is to work with companies to improve their online presence by utilizing their brands in conjunction with fully digitally driven strategies and innovative ideas. Our values include meeting deadlines, developing real relationships, and being ahead of the curve in the field.",
  },
  {
    id: "vision",
    title: "Our Vision",
    content:
      "Pioneering Digital Excellence: Our vision is to be the forefront of digital innovation, empowering businesses to thrive in the ever-evolving online landscape. We aspire to create impactful experiences, drive growth, and foster lasting connections between brands and their audiences.",
  },
  {
    id: "values",
    title: "Our Values",
    content: "",
    children: [
      {
        label: "Innovation",
        description:
          "We are creative people who stay on the cutting edge of digital trends and are always changing to match the needs of our clients.",
      },
      {
        label: "Transparency",
        description:
          "With our clients, partners, and team members, we value honest, open communication.",
      },
      {
        label: "Cooperation",
        description:
          "We promote a cooperative atmosphere where different viewpoints result in superior solutions.",
      },
      {
        label: "Results-driven",
        description:
          "Our main goal is to guarantee our clients success by providing them with quantifiable outcomes.",
      },
      {
        label: "Empathy",
        description:
          "We are aware of the difficulties faced by our clients and adjust our plans to suit their particular circumstances.",
      },
    ],
  },
];

export const aboutData = {
  title: "About Capital Nest",
  description:
    "Capital Nest is a premier real estate platform dedicated to connecting investors with lucrative property opportunities worldwide. Our mission is to simplify the investment process and provide unparalleled access to high-quality real estate assets.",
  team: [
    {
      name: "John Doe",
      position: "Founder & CEO",
      bio: "John has over 20 years of experience in real estate investment and is passionate about helping others achieve financial freedom through property ownership.",
    },
    {
      name: "Jane Smith",
      position: "Chief Operating Officer",
      bio: "Jane oversees daily operations and ensures that our platform runs smoothly, providing the best experience for our users.",
    },
    {
      name: "Emily Johnson",
      position: "Head of Marketing",
      bio: "Emily leads our marketing efforts, focusing on building strong relationships with investors and promoting our unique offerings.",
    },
  ],
};
