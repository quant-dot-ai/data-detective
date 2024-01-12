import type { JSX } from "solid-js";

export type Work = {
  title: string;
  description: string | JSX.Element;
  startDate: string; // YYYY-MM-DD
  endDate?: string; // YYYY-MM-DD
  onlyYear?: boolean;
};

export const works: Work[] = [
  // {
  //   title: "Disney+",
  //   description:
  //     "Led the analytics integration for Disney+ across 22 countries, focusing on data accuracy and performance.",
  //   startDate: "2021-11-17",
  //   endDate: "2023-06-01",
  // },
  {
    title: "Disney+",
    description: (
      <div>
        <h2>Job Title: Product Analyst</h2>
        <h4>Job Description:</h4>
        <p>
          Led the analytics integration for Disney+ across 22 countries, focusing on data accuracy and performance.
        </p>
        <br />
        <h4 class="font-bold">Responsibilities:</h4>
        <ul class="list-disc list-inside">
          <li>Defined the KPIs and the schema for all analytics events for the video player team. </li>
          <li>Innovated a CDN performance scoring system, enhancing streaming quality by 15%</li>
          <li>Pioneered A/B testing for the video player, significantly decreasing failure rates from 6% to less than 1%.</li>
          <li>Implemented real-time alert systems, reducing failure detection times by approximately 50%.</li>
          <li>Designed dashboard templates for monitoring live-stream content, halving the issue triaging time.</li>
          <li>Enhanced team data literacy and established data SOPs through regular technical workshops.</li>
        </ul>
      </div>
    ),
    startDate: "2021-11-17",
    endDate: "2023-06-18",
  },
  {
    title: "PhonePe (Walmart Labs)", 
    description: (
      <div>
        <h2>PhonePe is the biggest FinTech company in India. It is the world in P2P transactions</h2>
        <h2>Job Title: Product Analyst</h2>
        <h4>Job Description:</h4>
        <p>
          Led the analytics integration for Disney+ across 22 countries, focusing on data accuracy and performance.
        </p>
        <br />
        <h4 class="font-bold">Responsibilities:</h4>
        <ul class="list-disc list-inside">
          <li>Utilized quantitative research methods and data-driven strategies to analyze digital gold sales patterns leading to a 60% increase in digital gold sales. </li>
          <li>Engineered and optimized QlikView dashboards and Airflow (DAGs) to achieve a significant reduction in runtime by over 50%, enhancing system efficiency and user experience.</li>
          <li>Automated QlikView processes for Payment Gateway team, saving 3 man-hours weekly during my internship.</li>
        </ul>
      </div>
    ),
    startDate: "2020-03-01",
    endDate: "2021-10-28",
  },
];

export const socials = [
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/pritesh-singh-015/",
  },
  {
    title: "Github",
    url: "https://github.com/quant-dot-ai",
  },
  {
    title: "Medium",
    // url: "https://medium.com/@ladvace",
  },
];

export const blogInfo = {
  title: "Ladvace’s Blog",
  description: "Ladvace’s Blog description",
};

export const routes = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "CV",
    slug: "/work",
  },
  // {
  //   title: "Blog",
  //   slug: "/blog",
  // },
  // {
  //   title: "Projects",
  //   slug: "/",
  // },
  {
    title: "About",
    slug: "/about",
  },
  {
    title: "Contact",
    slug: "/contact",
  },
  {
    title: "Now",
    slug: "/now",
  },
];

export const email = "pritesh.singh@utexas.edu";
export const websiteUrl = "https://astro-personal-portfolio.netlify.app";

export const aboutmeDescription = `I am a Business Analyst and Data Scientist with a robust background in leveraging data to drive strategic decision-making and innovation. 
My experience at leading firms like Disney+ and PhonePe has honed my skills in financial analytics, 
project management, and developing user-centric technology solutions. 

With a Master's degree in Business Analytics from The University of Texas at Austin, I possess a deep understanding of advanced machine learning, financial modeling, and optimization techniques. 
I have a proven track record of managing critical projects, such as leading the successful migration of video assets at Disney+ and developing a Chrome extension to simplify legal documents for users. My approach blends technical expertise with a keen sense of business acumen, enabling me to translate complex data into actionable insights. I am passionate about using data to solve real-world problems and am always eager to take on new challenges that drive business growth and enhance user experience.
`;

export const rssUrl = `${websiteUrl}/rss.xml`