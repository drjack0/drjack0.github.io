import { nanoid } from 'nanoid';

import fitMePDF from "../static/FitME_HCI_Project.pdf";

// HEAD DATA
export const headData = {
  title: 'Matteo Giaccone | Developer', // e.g: 'Name | Developer'
  lang: 'it', // e.g: en, es, fr, jp
  description: 'Welcome to my personal Portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Matteo',
  subtitle: 'I\'m a Full Stack Developer',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'logos/site_logo_full.png',
  paragraphOne: 'First Paragraph',
  paragraphTwo: 'Second Paragraph',
  paragraphThree: 'Third Paragraph',
  resume: 'https://www.resumemaker.online/it.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'projects/sekkyone.png',
    title: 'Sekkyone - Smart Garbage Bucket',
    info: 'Sekkyone is my individual project for the Internet of Things (IoT) course at Sapienza University of Rome, a smart garbage bucket that gives you information about filling level, internal temperature/humidity and flames presence.',
    info2: 'At the heart of the circuit we have an STM32 Nucleo-64 F401RE, a low-cost development board that utilizes a 32-bit ARM Cortex-M4 processor whose frequency can go as high as 84 MHz while power consumption can go as low as 2.4 uA at standby without RTC. For development purpose only, all sensors (listed below) retrieve data every minute, but we will see how the situation will change with the IoT-Lab testbed and the constraints of LoRa and IPv6 mesh networks.',
    url: 'https://drjack0.medium.com/sekkyone-smart-garbage-bucket-2d1e88ba5505',
    repo: 'https://github.com/drjack0/iot2020-2021', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/kloaka.png',
    title: 'Kloaka - Sewer Monitoring System',
    info: 'Kloaka is my group project for the IoT 2021 course @ Sapienza University of Rome, made with Giacomo Priamo and Federico Paglioni.',
    info2: 'We believe there is a tight relationship between the quality of marine waters and the quality and status of those waters that directly flow into the seas. We decided to focus on sewage waters, and in particular we developed Kloaka, a sewer pipes monitoring system that detects changes in the flow of sewage waters, which may be potentially caused by obstructions or leakages and will surely cause negative effects to sea waters (i.e. where this kind of waters flow).',
    url: 'https://1701568-iot.blogspot.com/2021/07/group-project-final-delivery-blog-post.html',
    repo: 'https://github.com/drjack0/kloaka', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/pathmaker.png',
    title: 'PathMaker - Scout Group Management',
    info: 'Pathmaker is a web application, therefore accessible, in an agile way, also from mobile, aimed at the management and support of the Scout activity, going to affect for most on the functions of a management software, implementing it to be easy in reading and use for Educators who use it.',
    info2: 'For the realization of the project I relied on Amazon Web Services (hereinafter, AWS), a platform that offers Cloud Computing services. As for the UX, User Experience, the choice was to lean on always to AWS for hosting, implementing everything with the React framework.',
    url: 'https://pathmaker.it',
    repo: 'https://github.com/drjack0/pathmaker-client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/fitme.png',
    title: 'FitME - Calorie Intake Monitoring',
    info: 'FitME is a mobile application that was created, with the collaboration of Hamna Moieez and Francesco Gelsomino, with the aim of simplifying the control of one\'s diet and aims to educate on healthy and fair eating.',
    info2: 'FitME focuses on the average calorie consumption of certain foods and, thanks to artificial intelligence algorithms and mass use, it will be able to be more and more precise and accurate in the future.',
    url: fitMePDF,
    repo: 'https://github.com/hamna-moieez/FitMe', // if no repo, the button will not show up
  },
];

// EDUCATION DATA
export const educationData = [
  {
    id: nanoid(),
    title: 'High School Diploma',
    info: 'Liceo Scientifico Statale "G.B. Morgagni"',
    info2: 'Graduation Score: 84/100',
    url: 'https://www.liceomorgagni.edu.it',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: 'Bachelor\'s Degree - Sapienza University of Rome',
    info: 'Ingegneria Informatica & Automatica',
    info2: 'Graduation Score: 99/110',
    url: 'https://www.uniroma1.it/it',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: 'Masters\'s Degree - Sapienza University of Rome',
    info: 'Engineering in Computer Science',
    info2: 'Work in progress...',
    url: 'https://www.uniroma1.it/it',
    repo: '', // if no repo, the button will not show up
  },
];

// EXPERIENCE DATA
export const experienceData = [
  {
    id: nanoid(),
    title: 'IT - Technical Support',
    info: 'Technical and IT support in the organization of congresses in the medical field',
    info2: 'work for: InventaWide',
    url: 'https://www.inventawide.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: 'IT - Web Developer',
    info: 'Complete development of the website',
    info2: 'work for: EuroSTA srl',
    url: 'https://eurosta.it',
    repo: '', // if no repo, the button will not show up
  }
]

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Fill the form!',
  btn: 'Let\'s talk!',
  email: 'drjackdevelopment@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://drjack0.medium.com/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/giaccone/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/drjack0',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
