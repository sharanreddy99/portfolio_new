/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

// Base URLs
const backendBaseURL = "https://deployer.sharankonda.com";
const hostedURL = "http://project.sharankonda.com";
const githubStatsURL = `${backendBaseURL}/v1/github/getReposMetadata/`;

//SEO Related settings
const seo = {
  title: "Sharan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sharan Konda's Portfolio",
    type: "website",
    url: "https://www.sharankonda.com",
  },
};

//Home Page
const greeting = {
  title: "Sharan Konda",
  logo_name: "Sharan Konda",
  nickname: "",
  subTitle:
    "In the world of technology, versatility is the key. As a full-stack developer, I thrive on bridging the gap between front-end elegance and back-end functionality, ensuring seamless user experiences.",
  resumeLink: "https://www.sharankonda.com/SharanSaiReddy_Konda.pdf",
  portfolio_repository: "https://www.github.com/sharanreddy99/portfolio_new",
  githubProfile: "https://www.github.com/sharanreddy99",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/sharanreddy99",
    fontAwesomeIcon: "fa-brands fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sharan-konda-90b3a6193/",
    fontAwesomeIcon: "fa-brands fa-linkedin", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sharan_konda/",
    fontAwesomeIcon: "fa-brands fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Gmail",
    link: "mailto:sharansaikonda99@gmail.com",
    fontAwesomeIcon: "fa-solid fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "phone",
    link: "tel:sharansaikonda99@gmail.com",
    fontAwesomeIcon: "fa-solid fa-phone", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in a variety of programming languages including Golang, Python, Java",
        "⚡ Extensive experience with database management systems such as Oracle SQL, MySQL, and MongoDB, ensuring efficient data handling and storage solutions for applications.",
        "⚡ Skilled in utilizing various technologies and frameworks including React, Angular, Node, Beego, Material UI, Generative AI, and Langchain to develop dynamic and user-friendly web applications.",
        "⚡ Ability to design and develop full-stack applications from concept to deployment, with a keen understanding of both frontend and backend development principles.",
        "⚡ Experienced in collaborating with cross-functional teams to deliver high-quality software solutions that meet client requirements and industry standards.",
      ],
      softwareSkills: [
        {
          skillName: "GoLang",
          fontAwesomeClassname: "skill-icons:golang",
          style: {
            color: "#00b4e0",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#00b4e0",
          },
        },
        {
          skillName: "JAVA",
          fontAwesomeClassname: "devicon:java-wordmark",
          style: {
            color: "#00b4e0",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "devicon:typescript",
          style: {
            backgroundColor: "#ffffff",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "devicon:php",
          style: {
            color: "#CC6699",
          },
        },

        {
          skillName: "Oracle SQL",
          fontAwesomeClassname: "devicon:oracle",
          style: {
            color: "#CC6699",
          },
        },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "devicon:mysql-wordmark",
          style: {
            color: "#CC6699",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "devicon:mongodb-wordmark",
          style: {
            color: "#CC6699",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "devicon:react-wordmark",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "Angular",
          fontAwesomeClassname: "vscode-icons:file-type-angular",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "Material UI",
          fontAwesomeClassname: "devicon:materialui",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud and Devops",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proficient in containerization technologies such as Docker for packaging applications into containers for easy deployment and management.",
        "⚡ Skilled in managing infrastructure as code using Terraform to provision and manage cloud resources in a declarative manner.",
        "⚡ Proficient in Kubernetes for orchestrating and managing containerized applications.",
        "⚡ Experienced in managing and configuring web servers like Nginx for load balancing, reverse proxying, and serving static content, optimizing application delivery and performance.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "devicon:mongodb-wordmark",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "NGINX",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            color: "#009639",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            color: "#5c4ee5",
          },
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "devicon-plain:ansible-wordmark",
          style: {
            color: "black",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos:jenkins",
          style: {
            color: "#5c4ee5",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "mdi:git",
          style: {
            color: "#f34f29",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/sharanreddy99/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/Sharanreddy",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/sharan99",
    },
    {
      siteName: "Github",
      profileLink: "https://github.com/sharanreddy99",
      iconifyClassname: "simple-icons:github", // Reference https://fontawesome.com/icons/github?style=brands
      style: {
        color: "black", // Reference https://simpleicons.org/?q=github
      },
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Florida",
      subtitle: "M.S. in Computer and Informational Sciences",
      logo_path:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJzBN8M-Is3ScTthW9PatpkKz6iq5Nrqq_NCc8BKM9-A&s",
      alt_name: "UFL",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ Database Management System: Mastered Oracle SQL to perform intricate trend queries on complex datasets, particularly focusing on Airlines and Passenger data, enabling insightful analysis and visualization.",
        "⚡ Analysis of Algorithms: Investigated and implemented various algorithmic approaches, with a focus on dynamic programming and greedy methods, rigorously evaluating their correctness and efficiency through comparison.",
        "⚡ Advanced Data Structures: Delved into a comprehensive array of advanced data structures, applying theoretical knowledge to real-world scenarios, exemplified through the efficient implementation of the GatorTaxi project using Red-Black Trees and MinHeap.",
        "⚡ Computer Networks: Explored advanced concepts in networking, including peer-to-peer architectures, routing protocols, and network security, culminating in the development of a semester-long peer-to-peer data transfer system.",
        "⚡ Computer and Network Security: Engaged in an in-depth study of security measures, including cryptographic techniques and network intrusion detection systems, contributing to cutting-edge research on visual exploit chains for CVE databases, highlighting the intersection of security and data visualization.",
      ],
      website_link: "https://www.ufl.edu/",
    },
    {
      title: "Vardhaman College of Engineering",
      subtitle: "B.Tech. in Computer Science",
      logo_path:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToGXFeoDiOjTLpR8PF-U_-_CtxhTcNDBJXxx6LswsMdQ&s",
      alt_name: "VMEG",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ Foundation in Computer Science: Acquired a comprehensive understanding of programming, operating systems, web development, computer networks, databases, and design patterns, laying the groundwork for expertise in various domains.",
        "⚡ Application Development: Developed numerous applications addressing real-world challenges, refining them into production-ready solutions and continuously optimizing them, fostering a deep understanding of coding best practices and software optimization from the undergraduate level.",
        "⚡ University Web Application: Spearheaded the development of a web application for the Computer Engineers Technical Association, streamlining the organization of technical events, management of student scorecards, leaderboards, and attendance, showcasing proficiency in web development and project management.",
        "⚡ Programming Proficiency: Mastered multiple programming languages including Java, Python, and C, alongside proficiency in web application frameworks like React and Angular, culminating in the creation of major projects such as Housemate and Secure Chat.",
        "⚡ Achievements and Recognition: Demonstrated excellence in academic and extracurricular pursuits, securing victories in numerous quizzes and coding contests, including a first-place finish in a coding competition by Codersbit, and achieving top 1% standing in the Programming Data Structures and Algorithms using Python course organized by NPTEL.",
      ],
      website_link: "https://vardhaman.org//",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Solutions Architect",
      subtitle: "- Associate Level",
      logo_path: "AWSSAA3.png",
      certificate_link:
        "https://www.credly.com/badges/6bfbeb13-dace-4d93-b14a-287b56fe53aa/linked_in_profile",
      alt_name: "AWS_SAA3",
      color_code: "#00000099",
      body: [
        "Highly skilled in various AWS Services, including but not limited to services offered in the areas of compute, storage, database, networking and content delivery, security and identity management.",
        "Ability to design robust and scalable architectures that meet the specific needs of a given application while adopting the best practices.",
      ],
    },
    {
      title: "Microsoft Certified: Azure Data Engineer",
      subtitle: "- Associate Level",
      logo_path: "AzureDE.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/SharanSaiKonda-2095/F240BC29AFD71C97?sharingId=C707F11359781231",
      alt_name: "dp209",
      color_code: "#00000099",
      body: [
        "deep expertise in a range of Azure data services, including Azure Data Factory, Synapse Analytics, Data Lake Storage Gen2, Databricks.",
        "Proficient in designing and implementing robust, scalable data solutions that ensure efficient data management, processing, and security.",
        "Demonstrates a strong ability to leverage Azure's comprehensive suite of data services to build resilient architectures that cater to complex data workflows, optimize performance, and adhere to best practices in data governance and compliance.",
      ],
    },
    {
      title: "Docker and Kubernetes",
      subtitle: "- Associate Level",
      logo_path: "dockerkubernetes.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#00000099",
      body: [
        "Highly skilled in containerizing projects built using various technologies and stacks and can seamlessly containerize applications into production ready services while ensuring efficiency and speed.",
        "Ability to orchestrate multi-container applications and manage their dependencies using docker compose.",
        "Proficient in building applications using microservice architecture and containerizing them to seamlessly deploy them.",
      ],
    },
  ],
};

// Experience Page
const experience = {
  title: "Work Experience",
  subtitle: "",
  description:
    "Software Engineer with experience at Tesla, Croissant, and Sureify Labs, specializing in scalable applications, DevOps, and automation—passionate about building efficient solutions and always open to connecting.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Tesla",
          company_url: "https://www.tesla.com/",
          logo_path: "tesla.jpg",
          duration: "February 2025 - Present",
          location: "Fremont, CA",
          description: [
            "Transformed the test agent from a CLI tool with multiple workflows into a React- and Python-based web application and containerized different services using Docker.",
            "Enhanced functionality to generate test automation scripts directly from natural language-defined scenarios.",
            "Streamlined schema generation by developing an MCP server integrated with Co-pilot, later extending to an MCP client connected to the web application’s chatbot.",
            "Implemented test execution and report management capabilities served using NGINX.",
            "Re-architecting the solution into a distributable package, transitioning from a monolithic repository to application-specific repos while syncing individual project data into a centralized mono-repo for unified scenario tracking.",
          ],
          color: "#000000",
        },
        {
          title: "Software Engineer Intern",
          company: "Tesla",
          company_url: "https://www.tesla.com/",
          logo_path: "tesla.jpg",
          duration: "August 2024 - December 2024",
          location: "Fremont, CA",
          description: [
            "Designed and implemented a prototype automation framework utilizing Composite, Template Method, Strategy, and Command patterns to automatically generate comprehensive Page Object Models, establishing a standardized and reusable approach to UI automation.",
            "Extended the framework to include an AI-powered module capable of generating Page Object Models and API objects with a single click, significantly reducing QA automation efforts.",
            "Migrated automation infrastructure from legacy Windows-based VMs to GitHub Actions, fully decoupling projects from their execution environments and enabling scalable, containerized builds.",
            "Developed configuration-driven GitHub Actions workflows with integrated notifications via email, Microsoft Power Automate, and Mattermost, delivering real-time execution summaries and artifact links to team channels.",
            "Delivered a Proof of Concept for an AI agent that converts natural language scenarios into 100% executable test scripts, envisioning its evolution into a unified chatbot capable of integrating with 60+ internal Tesla applications.",
          ],
          color: "#000000",
        },
        {
          title: "Software Development Engineer Intern",
          company: "Croissant Inc.",
          company_url: "https://www.croissant.com/",
          logo_path: "croissant.jpeg",
          duration: "June 2024 - August 2024",
          location: "Nashville, TN",
          description: [
            "Developed an intelligent S3-based solution using git diff and file hashing for incremental push/pull of baseline images.",
            "Created a multi-job GitHub Actions workflow to generate and deploy baseline images to S3, automating artifact approval via GitHub Issues.",
          ],
          color: "#000000",
        },
        {
          title: "Software Engineer",
          company: "Sureify Labs",
          company_url: "https://www.sureify.com/",
          logo_path: "sureify.jpg",
          duration: "June 2021 - December 2022",
          location: "Hyderabad, India",
          description: [
            "Led delivery of a self-service insurance portal and a user engagement portal for a major U.S.-based insurance carrier.",
            "Contributed to the API wrapper microservice that generates new APIs from database-stored data mapping configurations.",
            "Engineered a Python script for handling data mapping sync across environments, reducing development time by 35%.",
            "Led React web-app development for an API service with drag-and-drop, connecting data mappings graphically, reducing configuration overhead significantly.",
            "Revamped API Wrapper Microservice to support async API Processing with Worker Pools, slashing down API response times.",
            "Optimized SQL queries for email transactions, reducing cron job run times and potential timeouts.",
            "Rearchitected the authentication and session validation mechanisms with JWT and Redis, improving API performance by 25%.",
          ],
          color: "#000000",
        },
        {
          title: "Software Engineer Intern",
          company: "Sureify Labs",
          company_url: "https://www.sureify.com/",
          logo_path: "sureify.jpg",
          duration: "December 2020 - June 2021",
          location: "Hyderabad, India",
          description: [
            "Refined data mappings and API integration for a database driven UI, ensuring efficient data use for customer interfaces.",
            "Configured debuggers for Dockerized microservices, reducing diagnostic time by 30% and increasing development efficiency.",
            "Enhanced Docker scripts for automated documentation, improving content accessibility and system responsiveness.",
          ],
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects and Dev Work",
  description:
    "Built an agent that transforms natural language scenarios into executable automation scripts with page/API/schema objects, integrated with a chatbot interface for interactive test generation, and currently expanding into a unified, plug-and-play framework for 60+ internal applications.",
  avatar_image_path: "projects_image.svg",
};

const repos = {
  show: true,
  repoURL: `${backendBaseURL}/v1/github/getReposList/`,
  languagesURL: `${backendBaseURL}/v1/github/getLanguagesList/`,
  deployURL: `${backendBaseURL}/v1/aws/publishSNS`,
  hostedURL: hostedURL,
  heading: "Projects",
  gitHubUsername: "sharanreddy99",
  reposLength: 10,
  specificRepos: [],
};

const projectCredentials = {
  ceta: `<div class="mb-3">
    Faculty Email: <b>prasad@gmail.com</b><br/>
    Faculty Password: <b>Prasad@99</b><br/>
    <hr/>
    Student Roll Number: <b>17881A05G6</b></br>
    Student Password: <b>Sharan@123</b></br>
  </div>`,
  housemate: `<div class="mb-3">
    Email: <b>sharan.personal.projects@gmail.com</b><br/>
    Faculty Password: <b>Sharan@99</b><br/>
    <hr/>
  </div>`,
  securechat:
    "<b> Please sign in using your gmail account inorder to access the application.</b>",
  elevator_multithreading:
    "<b> No credentials are required for this application. </b>",
  image_slideshow: "<b> No credentials are required for this application. </b>",
  polls_viewer: "<b> No credentials are required for this application. </b>",
  walmart_order_parser:
    "<b> No credentials are required for this application. </b>",
  airline_analysis:
    "<b> No credentials are required for this application. </b>",
  dbms_algos: "<b> Password: sharanreddy </b>",
};

// const publicationsHeader = {
//   title: "Publications",
//   description: "Some of my published Articles, Blogs and Research.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "neuro-symbolic-sudoku-solver",
//       name: "Neuro-Symbolic Sudoku Solver",
//       createdAt: "2023-07-02T00:00:00Z",
//       description: "Paper published in KDD KiML 2023",
//       url: "https://arxiv.org/abs/2307.00653",
//     },
//     {
//       id: "mdp-diffusion",
//       name: "MDP-Diffusion",
//       createdAt: "2023-09-19T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/mdp-diffusion/",
//     },
//     {
//       id: "consistency-models",
//       name: "Consistency Models",
//       createdAt: "2023-10-12T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/consistency-models/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.jpg",
    description:
      "I am passionate about building scalable, maintainable, and high-impact applications across Software Development, DevOps, with hands-on experience in cloud platforms (AWS, Azure), modern frameworks (React, Node.js, Python, Golang), and distributed system design. I’ve had the opportunity to contribute at Tesla, Croissant, and Sureify Labs, delivering solutions that improved scalability, streamlined workflows, and accelerated automation. I enjoy connecting with professionals, sharing knowledge, and exploring ideas—so please feel free to connect with me!",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  repos,
  projectCredentials,
  githubStatsURL,
};
