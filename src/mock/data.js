import { nanoid } from 'nanoid';

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
  img: 'projects/project.jpg',
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
    info: 'First Paragraph',
    info2: 'Second Parapgraph',
    url: 'https://drjack0.medium.com/sekkyone-smart-garbage-bucket-2d1e88ba5505',
    repo: 'https://github.com/drjack0/iot2020-2021', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/kloaka.png',
    title: 'Kloaka - Sewer Monitoring System',
    info: 'First Paragraph',
    info2: 'Second Parapgraph',
    url: 'https://1701568-iot.blogspot.com/2021/07/group-project-final-delivery-blog-post.html',
    repo: 'https://github.com/drjack0/kloaka', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/pathmaker.png',
    title: 'PathMaker - Scout Group Management',
    info: 'First Paragraph',
    info2: 'Second Parapgraph',
    url: 'https://pathmaker.it',
    repo: 'https://github.com/drjack0/pathmaker-client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/fitme.png',
    title: 'FitME - Calorie Intake Monitoring',
    info: 'First Paragraph',
    info2: 'Second Parapgraph',
    url: 'PDF Download link',
    repo: 'https://github.com/hamna-moieez/FitMe', // if no repo, the button will not show up
  },
];

// EDUCATION DATA
export const educationData = [
  {
    id: nanoid(),
    img: 'education/school.png',
    title: 'High School Diploma',
    info: 'Liceo Scientifico Statale \"G.B. Morgagni\"',
    info2: 'Graduation Score: 84/100',
    url: 'https://www.liceomorgagni.edu.it',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'education/graduate.png',
    title: 'Bachelor\'s Degree - Sapienza University of Rome',
    info: 'Ingegneria Informatica & Automatica',
    info2: 'Graduation Score: 99/110',
    url: 'https://www.uniroma1.it/it',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'education/exams.png',
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
    img: 'education/school.png',
    title: 'IT - Technical Support',
    info: 'Technical and IT support in the organization of congresses in the medical field',
    info2: 'work for: InventaWide',
    url: 'https://www.inventawide.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'education/school.png',
    title: 'IT - Web Developer',
    info: 'Complete development of the website',
    info2: 'work for: EuroSTA srl',
    url: 'https://eurosta.it/',
    repo: '', // if no repo, the button will not show up
  }
]

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
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
