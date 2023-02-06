import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,

  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

// import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import stream1Honey from '../images/portfolio/stream1Honey.png';
import watertunnel2 from '../images/portfolio/watertunnel2.JPG';
import profilepic from '../images/profilepic.jpg';
// import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
//   TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Oriol Personal Webpage',
  description: "Oriol's personal webpage",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
//   Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Oriol Brascó`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am an engineer with working
        experience, eager to expand
        my knowledge and professional
        skills. I adapt to new challenges
        and work requirements through
        continuous self-learning. I
        consider myself a committed,
        responsible and curious
        person.

      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/ingeniero aeroespacial.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I studied Aerospace Engineering at EETAC, UPC (Universitat Politècnica de Catalunya) - Castelldefels, and obtained my M.S. in Computational and Mathematical Engineering from UOC (Universitat Oberta de Catalunya) & URV (Universitat Rovira i Virgili) specializing in artificial intelligence and machine learning.

Proactive, a fast learner, and a hard worker both autonomously and in teams. My interests include fluid dynamics, computer vision, artificial intelligence, cryptocurrency and big data analysis.

In my free time, I enjoy going for a ride in my motorcycle. I also like to ski, scuba dive and try out new experiences.`,
  aboutItems: [
    {label: 'Location', text: 'Barcelona', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},

    {label: 'Interests', text: 'Motorcycles, Cars, Computers, Sports, Scuba Diving', Icon: SparklesIcon},
    {label: 'Study', text: 'Universitat Politècnica de Catalunya', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Agap2, General Electric consultor', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Catalan',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 7,
      },
      {
        name: 'German',
        level: 4,
      },
    ],
  },
  {
    name: 'Software development',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'C++, C#, C',
        level: 7,
      },
      {
        name: 'Django, ReactJS',
        level: 7,
      },
      {
        name: 'MongoDB, SQL',
        level: 7,
      },
    ],
  },
  {
    name: 'Engineering Tools',
    skills: [
      {
        name: 'Matlab, Octave',
        level: 8,
      },
      {
        name: 'OpenFoam',
        level: 8,
      },
      {
        name: 'Solid Works, Ansys, Qblade',
        level: 7,
      },
      {
        name: 'LaTex, Office',
        level: 10,
      },
    ],
  },

];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Water tunnel design, construction and comissioning',
    description: 'This document covers the study, design and construction of a low cost Water Tunnel to perform practical studies and lab work at EETAC (UPC Castelldefels). This project has been divided in three principal phases: Study, Design and Construction. In the first phase of the project, a theoretical study regarding the fluid dynamics of water tunnels has been done. This study is essential in order to get an optimal design of the Water Tunnel and also fulfil the initial design requirements. The main design requirements are to achieve a homogeneous velocity at the test region and the capacity to work with Reynolds numbers comprised between 500 and 1000. Once these requirements were established, the design phase started. SolidWorks was used to create the design. Once the design was created, it needs to be validated. For this purpose, three different simulations were performed in order to validate the design with a Computational Fluid Dynamics (CFD) software. The chosen software was ANSYS. The objective of the first simulation was to validate the property of symmetry inside the Water Tunnel. The symmetry inside the Water Tunnel was proved and a second simulation with half the control volume and a finer mesh was realized. Finally, in order to prove the mesh convergence, one last simulation was done. All these simulations proved that the Water Tunnel design fulfilled all the initial design requirements. The construction procedure begun once the design was validated. This last phase is still ongoing; the tunnel is being built by Metalvent S.A company. This Water Tunnel has been designed with the objective of reducing costs when compared it with other water tunnels build globally. Also, the size of the Water Tunnel is also minimized so it can be a part of the laboratory equipment in EETAC. This Water Tunnel will be an interesting contribution to the University equipment, and thanks to it, other projects will be done, from implementing new systems that improve the Water tunnel to experiments that uses the Water Tunnel as the main tool.',
    url: 'https://upcommons.upc.edu/handle/2117/167037',
    image: stream1Honey,
  },
  {
    title: 'Final phase of the Water Tunnel',
    description: 'Testing the water tunnel.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:6584783844724084736/',
    image: watertunnel2,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2019',
    location: 'Universitat Oberta de Catalunya & Universitat Rovira i Virgili, (UOC & URV)',
    title: 'MSc in Computational and Mathematical Engineering (ICyM)',
    content: <p>Interdisciplinary training in the areas of engineering and applied sciences. The ICyM programme includes current issues such
as: computer modeling and simulation, numerical methods, parallel and distributed computing applied to high-end
performance machines, knowledge representation, networks and graphs, heuristic optimization, artificial intelligence,
dynamics systems, differential equations, computational fluid dynamics and Big Data.
</p>,
  },
  {
    date: 'June 2019',
    location: 'Universitat Politècnica de Catalunya, Escola d Enginyeria de Telecomunicació i Aeroespacial de Castelldefels, (EETAC)',
    title: 'Aerospace Systems Engineering',
    content: <p>Specialized in Avionics, communication, Navigation and Surveillance Systems (CNS) and Air Traffic Management (ATM).
Advanced knowledge of navigability, communication, geolocation and observation satellites, space engineering, electronics,
aerodynamics, flight mechanics and flight control systems. Experience in route planning, airspace management and the
implementation, development and maintenance of ATM and CNS systems, aerodynamics and computational fluid dynamics.
High level of programing and critical thinking.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2022 - Present',
    location: 'GE Renewable, AGAP2',
    title: 'Data Analyst & Analytics Engineer',
    content: (
      <p>
        - Lead the development of analytics capable of predicting possible failures, maintenance dates, misalignments and other turbine
        points of failure, introducing innovative techniques where possible.
        - Lead a continuous improvement monitoring for detection of possible defects or development of new features for the existing
        analytics, implementing an analytics lifecycle capable to adapt to a changing world.
        - Skills used: Interdisciplinary group management, Python, SQL, Azure

      </p>
    ),
  },
  {
    date: 'March 2020 - July 2022',
    location: 'DENN, Industries Puigjaner',
    title: 'Project Manager & Data Analyst',
    content: (
      <p>
        - Lead the innovation and development of applications capable of predicting trajectories, maintenance and status of machinery
        elements, given real-time and historical data obtained with a cloud of sensors including pressure, force, velocity and
        temperature. This was the starting point for the creation of machine learning algorithms to predict the quality of the final product.
        - The framework developed for the real-time and historical data processing led to the design and development of bespoke
        applications to improve the customer's interaction with products, such as automatically generated bi-annual detailed reports
        containing information that span from energetical consumption to machine wear and expected maintenance.
        - Skills used: Project management, Interdisciplinary group management, Python, MongoDB, ReactJS, HDF5

      </p>
    ),
  },
  {
    date: 'April 2019 - March 2020',
    location: 'APPlus IDIADA',
    title: 'Full Stack Developer & I+D',
    content: (
      <p>
        - In order to improve the interaction and the post-processing of the data obtained during different tests, a software application
        was designed for internal use to plot, extract and modify the data. This application is capable of processing large chunks of data
        (up to 60 GBytes per file) and to speed-up the post-processing, allowing the engineers in charge to more easily and accurately
        draw conclusions.
        - The detection of phenomena is important in real-time tests so the test engineer can adapt to the conditions. An algorithm was
        designed and implemented to detect these phenomena and send instructions to the lead test engineer. This led to more accurate
        tests and time reduction.
        - Skills used: Project management, Interdisciplinary group management, Python, Matlab
      </p>
    ),
  },
  {
    date: 'June 2018 - November 2018 (Internship)',
    location: 'Quiside Industries S.L',
    title: 'BACK-END DEVELOPER & I+D',
    content: (
      <p>
        - The main goal was to refactorize and integrate a code interacting with a FPGA (Field Programmable Gate Array) dispositive. The
        code performance and the interaction with the user was improved. Later on, this code was used in the investigation and
        developing tasks. This improved code was later used in the investigation and development of other tasks.
        - Investigation and implementation of Monte Carlo simulations in finance and fluid dynamics, using the improved code mentioned
        above. Monte Carlo simulations use random numbers to numerically solve problems that are too difficult to solve with conventional
        analytical methods, problems such as fluid dynamics, where there is not an analytical solution.
        - Skills used: C++, Python, Microsoft Project, LaTex, OpenFoam

      </p>
    ),
  },
];

/**
 * Testimonial section
 */
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: 'John Doe',
//       text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
//     {
//       name: 'Jane Doe',
//       text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//     },
//     {
//       name: 'Someone else',
//       text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//     },
//   ],
// };

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'brascooriol@gmail.com',
      href: 'mailto:brascooriol@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Barcelona, Spain',
      href: 'https://www.google.com/maps/place/Barcelona/@41.3927755,2.0701494,12z/data=!3m1!4b1!4m5!3m4!1s0x12a49816718e30e5:0x44b0fb3d4f47660a!8m2!3d41.3873974!4d2.168568',
    },
//     {
//       type: ContactType.Instagram,
//       text: '@tbakerx',
//       href: 'https://www.instagram.com/tbakerx/',
//     },
    {
      type: ContactType.LinkedIn,
      text: 'Oriol Brascó',
      href: 'https://www.linkedin.com/in/brascooriol/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
//   {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
//   {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/brascooriol/'},
//   {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
//   {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
