import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,

  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import stream1Honey from '../images/portfolio/stream1Honey.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
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
  Testimonials: 'testimonials',
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
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
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
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
