import { dayton, davidson, lucid, uncc, qlearning, astar, object } from "../assets/images";
import {
    contact,
    css,
    DavidsonCollege,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    tailwindcss,
    typescript,
    unity,
    cplus,
    photoshop,
    python,
    flutter,
    firebase,
    puzzle,
    painting,
    rollercoaster,
    sawblade,
    arm,
    brain,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: cplus,
        name: "C++",
        type: "Language",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: photoshop,
        name: "Photoshop",
        type: "Animation",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Animation",
    }
];

export const experiences = [
    {
        title: "University of Dayton",
        company_name: "Master of Computer Science & Graduate Certificate in Autonomous Systems",
        icon: dayton,
        iconBg: "#a2d2ff",
        date: "Aug 2022 - May 2024",
        points: [
            "Skyline Chili - Employee",
            "Participated in the Flyer Pitch competition (Once-A-Daily, full-stack social media app) and the Kaggle Big Data Bowl (Quantifying Effort in the NFL).",
            "Learned newer and more complex skills, such as 3D animation and neural networks.",
        ],
    },
    {
        title: "University of North Carolina-Charlotte",
        company_name: "Full-Stack Coding Certificate",
        icon: uncc,
        iconBg: "lightgreen",
        date: "Jan 2022 - June 2022",
        points: [
            "Learned skills such as HTML, CSS, JavaScript, React for frontend development; Node.js, Express, and databases like MongoDB and MySQL for backend development; and how to create and consume REST APIs.",
        ],
    },
    {
        title: "Lucid Drone Technologies",
        company_name: "Drone Service Operator",
        icon: lucid,
        iconBg: "aqua",
        date: "Oct 2020 - June 2022",
        points: [
            "Oversaw the Services department of Lucid Drones Technologies, and led a few world-first drone cleaning operations, including the first drone cleaning of an industrial tank in Baton Rouge, LA, two drones cleaning a prestigious golf clubhouse in Atlanta, GA at the same time, and a night cleaning of a bank in Columbia, SC.",
            "Built and programmed industrial cleaning drones, and developed the first drone window cleaning chemical, Lucid Clear.",
            "Coordinated and completed nationwide drone cleaning projects, managed customer service for over 20 clients, and logged over 200 hours of drone flying.",
        ],
    },
    {
        title: "Davidson College",
        company_name: "Bachelor of Science, Biology",
        icon: davidson,
        iconBg: "black",
        date: "August 2016 - May 2020",
        points: [
            "Wadgymar Lab at Davidson College - Lab Technician - Gained comprehensive experience in plant species research through greenhouse and lab techniques, including growing, measuring, dissecting, and staining seeds, as well as setting up outdoor experiments and managing data.",
            "Davidson College Lake Campus - Head Lifeguard - Supervised seven lifeguards and ensured the safety of over 100 children weekly as head lifeguard at Davidson College Lake Campus and swimming pool.",
            "Davidson Football Team - Player - Developed strong time management skills balancing 10-15 hours of weekly football with academics and work, served as position group captain for leadership and motivation, and achieved 3x PFL Academic Honor Roll.",
            "Phi Delta Theta - Sustainability Chair/Member",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/vidurham',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vincent-durham/',
    }
];

export const projects = [
    {
        iconUrl: rollercoaster,
        theme: 'btn-back-red',
        name: 'Virtual Reaity Roller Coaster',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        video: {
            type: 'youtube',
            url: 'https://www.youtube.com/watch?v=ngchv6CqZI8'
        }
    },
    {
        iconUrl: brain,
        theme: 'btn-back-yellow',
        name: 'Neural Network Image Detection',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        video: {
            type: 'github',
            url: 'https://raw.githubusercontent.com/vidurham/project-videos/main/Final_Detection.mp4'
        },
        pdfUrl: object
    },
    {
        iconUrl: painting,
        theme: 'btn-back-green',
        name: 'Augmented Reality Painting',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        video: {
            type: 'github',
            url: 'https://raw.githubusercontent.com/vidurham/project-videos/main/Allyouneed.mp4'
        }
    },
    {
        iconUrl: arm,
        theme: 'btn-back-black',
        name: 'AI Arm Walk',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        video: {
            type: 'github',
            url: 'https://raw.githubusercontent.com/vidurham/project-videos/main/arm.mp4'
        },
        pdfUrl: qlearning
    },
    {
        iconUrl: sawblade,
        theme: 'btn-back-blue',
        name: 'Multiplayer Blade Spinners',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        video: {
            type: 'github',
            url: 'https://raw.githubusercontent.com/vidurham/project-videos/main/AR_Game.mp4'
        }
    },
    {
        iconUrl: puzzle,
        theme: 'btn-back-pink',
        name: 'AI Learning Puzzle',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        video: {
            type: 'github',
            url: 'https://raw.githubusercontent.com/vidurham/project-videos/main/puzzle.mp4'
        },
        pdfUrl: astar
    },
];