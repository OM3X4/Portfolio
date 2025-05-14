import { BsFillPhoneFill } from "react-icons/bs";
import { TbBrandFramerMotion } from "react-icons/tb";
import { MdOutlineMilitaryTech } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { SiRust } from "react-icons/si";
import { BsFillGearFill } from "react-icons/bs";
/* eslint-disable */
// ===== React Icons =====

// Ai (Ant Design Icons)
import { AiFillGithub, AiOutlineArrowLeft, AiOutlineLineChart } from "react-icons/ai";
// Bs (Bootstrap Icons)
import { BsGit, BsKeyboardFill } from "react-icons/bs";
// Cg (CSS.gg Icons)
import { CgLivePhoto } from "react-icons/cg";
// Di (Devicons)
import { DiPostgresql, DiPython, DiReact } from "react-icons/di";
// Fa (Font Awesome)
import { FaNodeJs, FaQuoteRight } from "react-icons/fa";
// Gr (Grommet Icons)
import { GrLocation } from "react-icons/gr";
// Io (Ionicons)
import { IoLogoNpm } from "react-icons/io";
// Md (Material Design Icons)
import { MdHttp } from "react-icons/md";
// Si (Simple Icons)
import {
    SiDjango,
    SiJavascript,
    SiJsonwebtokens,
    SiLeetcode,
    SiMicropython,
    SiNetlify,
    SiNextdotjs,
    SiOpenai,
    SiReactquery,
    SiReactrouter,
    SiRailway,
    SiShadcnui,
    SiSupabase,
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";
// Tb (Tabler Icons)
import {
    TbApi,
    TbBrandCpp,
    TbBrandVite,
    TbJson,
    TbMathFunction,
    TbSql
} from "react-icons/tb";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'

const data = [
    "BRAINS-\nMATH2.0",
    "QUEEN-\nFISH",
    "EGYPT-\nPROJECTS",
    "CHEEZY",
    "STUDX",
    "OMARTYPE",
    "BRAINS-\nMATH1.0",
]

const projects = [
    {
        name: "BRAINS-\nMATH2.0",
        images: [
            "/brainsmath2.01.png",
            "/brainsmath2.02.png",
        ],
        mainHeadline: "Brainsmath is a Fidget-Like Mental Math with Competitive Edge",
        secondParagraph: "BrainsMath 2.0 brings speed, competition, and game-like UX to mental math practice.",
        mainParagraph: "BrainsMath 2.0 is a complete rebuild with a sharper, more competitive feel. Inspired by Monkeytype, it offers a database-backed leaderboard, smoother UX, and game-like testing to make math addictive.",
        thirdParagraph: "BrainsMath 2.0 replaces traditional drills with a dynamic, fidget-like interface built for typists.",
        quote: '"With BrainsMath 2.0, I wanted to rebuild everything — not just the code, but the vibe. It’s fast, competitive, and fun. More than practice, it’s a fidget for your brain — built to attract the same crowd that loves typing tests and leaderboard challenges." — Omar Emad',
        websiteLink: "https://brainsmath.org/",
        codeLink: "https://github.com/OM3X4/Brainsmath-2.0",
        engineer: "Omar Emad(Me)",
        stack: [
            {
                name: "Next JS",
                icon: <SiNextdotjs />
            },
            {
                name: "Django",
                icon: <SiDjango />
            },
            {
                name: "Postgres",
                icon: <DiPostgresql />
            },
            {
                name: "TypeScript",
                icon: <SiTypescript />
            },
            {
                name: "React Query",
                icon: <SiReactquery />
            },
            {
                name: "Supabase",
                icon: <SiSupabase />
            },
            {
                name: "ShadCN UI",
                icon: <SiShadcnui />
            },

        ]
    },
    {
        name: "QUEEN-\nFISH",
        images: [
            "/chezzy1.png",
            "/chezzy2.png",
        ],
        mainHeadline: "QueenFish is A Pure JavaScript Chess Engine Built from Scratch",
        secondParagraph: "QueenFish is a handcrafted chess engine in JavaScript, built without tutorials or shortcuts.",
        mainParagraph: "QueenFish is a JavaScript-based chess engine that I built entirely from scratch. It uses minimax for decision-making and can run standalone or be integrated into my chess platform, Chezzy.",
        thirdParagraph: "QueenFish stands out because I built it without relying on tutorials or pre-existing engines. Its toughest challenge was endgame optimization, which pushed my problem-solving and algorithmic thinking to the limit.",
        quote: "I built QueenFish from scratch in JavaScript, not because it was easy, but because I wanted to prove what I could do without relying on external engines. Every line of code reflects my determination to understand the game deeply, both in logic and strategy.",
        websiteLink: "https://om3x4.github.io/Chezzy/",
        codeLink: "https://github.com/OM3X4/Engine.js",
        engineer: "Omar Emad(Me)",
        stack: [
            {
                name: "Javascript",
                icon: <SiJavascript />
            }
        ]
    },
    {
        name: "EGYPT-\nPROJECTS",
        images: [
            "/egyptprojects1.png",
            "/egyptprojects2.png",
        ],
        mainHeadline: "Egyptian Nation Projects: Visualizing Egypt’s Achievements Under President El-Sisi",
        secondParagraph: "This website showcases Egypt’s national projects in a clean, organized, and visual format.",
        mainParagraph: "Built with React, this site highlights government achievements under President El-Sisi. It organizes major projects into categories, presenting the data in a way that’s accessible and visually engaging for everyone.",
        thirdParagraph: " The hardest part was collecting accurate data — especially when the official site’s UI felt underwhelming.",
        quote: '"I built this to help people — especially Egyptians — actually see the scale of development happening. It’s not political; it’s about clear, visual access to national progress, which I felt the official platforms lacked. I wanted to do it right, even if it was just a school project." — Omar Emad',
        websiteLink: "https://egyptomar.netlify.app/",
        codeLink: "https://github.com/OM3X4/EgyptProjectsHost",
        engineer: "Omar Emad(Me)",
        stack: [
            {
                name: "React",
                icon: <DiReact />
            },
        ]
    },
    {
        name: "CHEZZY",
        images: [
            "/chezzy1.png",
            "/chezzy2.png",
        ],
        mainHeadline: "Chezzy: A Simple Chess Platform Powered by QueenFish Engine",
        secondParagraph: "Chezzy is a web-based chess platform that lets users play against QueenFish or pass-and-play.",
        mainParagraph: "Built with React, Chezzy is a chess platform designed for learning and casual play. It lets users play against the QueenFish engine or engage in pass-and-play games with friends.",
        thirdParagraph: "Chezzy was a learning project for me, focused on mastering game theory and game state representation.",
        quote: '"Building Chezzy gave me deep insights into game theory and web development. It wasn’t just about making a chess game; it was about understanding how game states interact and ensuring the logic was clean and precise. It was a great challenge and an amazing learning experience for me." — Omar Emad',
        websiteLink: "https://om3x4.github.io/Chezzy/",
        codeLink: "https://github.com/OM3X4/Chezzy",
        engineer: "Omar Emad(Me)",
        stack: [
            {
                name: "React",
                icon: <DiReact />
            },
        ]
    },
    {
        name: "STUDX",
        images: [
            "/studx1.png",
            "/studx2.png",
        ],
        mainHeadline: "Studx: A Full-Stack Studying Management Platform for Smarter Learning",
        secondParagraph: "Studx is a platform that helps users manage their study routines and progress efficiently.",
        mainParagraph: "Built with Next.js, React, Django, and PostgreSQL, Studx is a complete studying management system. It streamlines how students organize, track, and optimize their study habits in one unified platform.",
        thirdParagraph: "Studx was created as a training project to connect full-stack technologies in one product. The biggest challenge was connecting the backend to the frontend smoothly using DRF and React Query.",
        quote: 'Studx wasn’t about inventing something new — it was about putting everything I’ve learned into action. It tested my ability to build a full-stack product from frontend to backend and helped sharpen my understanding of real-world connections between technologies." — Omar Emad',
        websiteLink: "https://github.com/OM3X4/StudXClient",
        codeLink: "https://github.com/OM3X4/StudXClient",
        engineer: "Omar Emad(Me)",
        stack: [
            {
                name: "React",
                icon: <DiReact />
            },
            {
                name: "Django",
                icon: <SiDjango />
            },
            {
                name: "Postgres",
                icon: <DiPostgresql />
            },
            {
                name: "TypeScript",
                icon: <SiTypescript />
            },
            {
                name: "React Query",
                icon: <SiReactquery />
            },
            {
                name: "Supabase",
                icon: <SiSupabase />
            }

        ]
    },
    {
        name: "OMARTYPE",
        images: [
            "/omartype1.png",
            "/omartype2.png",
        ],
        mainHeadline: "OmarType: A Monkeytype Clone for Typing Practice and Learning",
        secondParagraph: "OmarType is a typing practice tool built to closely mimic the functionality of Monkeytype.",
        mainParagraph: "OmarType is a personal project aimed at learning how to build a typing practice app. It closely resembles Monkeytype in functionality, offering a simple, smooth typing experience for users to improve their speed and accuracy.",
        thirdParagraph: "OmarType is essentially a clone of Monkeytype, designed to provide a familiar typing practice experience.",
        quote: '"OmarType was mainly a learning project for me — an opportunity to replicate Monkeytype and improve my React skills. The animation and smooth user experience were my key focus. While it’s a clone, the journey taught me a lot about building interactive web applications and smooth UX design." — Omar Emad',
        websiteLink: "https://om3x4.github.io/Omartype/",
        codeLink: "https://github.com/OM3X4/Omartype",
        engineer: "Omar Emad(Me)",
        stack: [
            {
                name: "React",
                icon: <DiReact />
            },
        ]
    },
    {
        name: "BRAINS-\nMATH1.0",
        images: [
            "/brainsmath1.01.png",
            "/brainsmath1.02.png",
        ],
        mainHeadline: "Brainsmath is a Mental Math Practice Engine Inspired by TypingClub and Monkeytype",
        secondParagraph: "BrainsMath helps users master mental math tricks through structured lessons and focused practice sessions.",
        mainParagraph: "BrainsMath 1.0 is a platform I built to teach and drill mental math. It uses structured repetition, like TypingClub, and aims to make learning tricks fun, fast, and trackable.",
        thirdParagraph: "BrainsMath teaches tricks that make mental math faster, smarter, and more intuitive to learn.",
        quote: '"BrainsMath 1.0 is my take on making math training as addictive as typing practice. I wanted to build something that teaches, tracks, and motivates — all in one experience. It’s not about speed alone, but how smartly and confidently you can calculate in your head." — Omar Emad',
        websiteLink: "https://github.com/OM3X4/BrainsMath_Next",
        codeLink: "https://github.com/OM3X4/BrainsMath_Next",
        engineer: "Omar Emad(Me)",
        stack: [
            {
                name: "Next.js",
                icon: <SiNextdotjs />
            },
        ]
    },
]

const skills: any = [
    { name: 'React.js', icon: <DiReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'ShadCN', icon: <SiShadcnui /> },
    { name: 'Vite', icon: <TbBrandVite /> },
    { name: 'Framer Motion (Beginner)', icon: <TbBrandFramerMotion /> },
    { name: 'React Router', icon: <SiReactrouter /> },
    { name: 'Responsive Design', icon: <BsFillPhoneFill /> },
    { name: 'Django', icon: <SiDjango /> },
    { name: 'Django REST Framework (DRF)', icon: <TbApi /> },
    { name: 'Node.js (learning)', icon: <FaNodeJs /> },
    { name: 'API Integration', icon: <TbApi /> },
    { name: 'PostgreSQL', icon: <DiPostgresql /> },
    { name: 'Supabase', icon: <SiSupabase /> },
    { name: 'React Query', icon: <SiReactquery /> },
    { name: 'JSON', icon: <TbJson /> },
    { name: 'JWT', icon: <SiJsonwebtokens /> },
    { name: 'Data Structures and Algorithms (DSA)', icon: <SiLeetcode /> },
    { name: 'OpenAI API', icon: <SiOpenai /> },
    { name: 'Git', icon: <BsGit /> },
    { name: 'GitHub', icon: <AiFillGithub /> },
    { name: 'Railway', icon: <SiRailway /> },
    { name: 'Netlify', icon: <SiNetlify /> },
    { name: 'Recharts', icon: <AiOutlineLineChart /> },
    { name: 'NPM', icon: <IoLogoNpm /> },
    { name: 'Pip', icon: <SiMicropython /> },
    { name: 'C++', icon: <TbBrandCpp /> },
    { name: 'SQL', icon: <TbSql /> },
    { name: 'Functional Programming', icon: <TbMathFunction /> },
    { name: 'HTTP', icon: <MdHttp /> },
    { name: 'Typiest (Colemak - 200 WPM)', icon: <BsKeyboardFill /> },
];

const about = {
    whoami1: "I'm a performance-obsessed 17-y/o front-end developer based in Egypt, building highly interactive, responsive, and optimized digital experiences. I work mainly with React.js, Next.js, TypeScript, and Tailwind CSS, combining solid development with clean design and smooth animations.",
    whoami2: "I'm also incredibly efficient with my tools — I type at 200 WPM using the Colemak layout, allowing me to prototype and code at blazing speed.",
    enjoylist: [
        { text: "Solid foundation in C++ and Python", icon: <DiPython /> },
        { text: "Strong grasp of Data Structures & Algorithms", icon: <SiLeetcode /> },
        { text: "Learning Rust to dive into systems-level programming", icon: <SiRust /> },
        { text: "Exploring Node.js and Native Development", icon: <FaNodeJs /> },
        { text: "Passionate about writing efficient, scalable code", icon: <BsFillGearFill /> },
        { text: "Curious about low-level concepts, performance tuning, and functional programming", icon: <TbMathFunction /> }
    ],
    availablityList: [
        "Open to freelance opportunities and summer internships",
        "Open to work with indiehackers",
        "Currently building projects & sharpening skills daily",
        "Always learning, always optimizing"
    ]


}

function App() {

    const [isProject, setIsProject] = useState(false)
    const [projectId, setProjectId] = useState(0)
    const headerRef = useRef<HTMLDivElement>(null);
    const [top, setTop] = useState("0px");
    const [scrollState, setScrollState] = useState(0) // 0 = up , 1 = middle , 2 = down
    const [isSkills, setIsSkills] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [isProject, isSkills]);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>, projectIndex: number) => {
        document.body.classList.add("pointer-events-none");
        e.currentTarget.classList.add("rotate-y-0");
        e.currentTarget.classList.remove("hover:-rotate-y-5");
        e.currentTarget.firstElementChild?.classList.remove("text-black")
        e.currentTarget.firstElementChild?.classList.add("sm:text-transparent")


        setProjectId(projectIndex)
        setTimeout(() => {
            setIsProject(true)
            document.body.classList.remove("pointer-events-none");
        }, 1000)

    };

    useEffect(() => {
        AOS.init({
            duration: 800, // animation duration
            once: true,    // whether animation should happen only once - while scrolling down
        });
    })

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY; // Current scroll position
            const documentHeight = document.documentElement.scrollHeight; // Total document height
            const windowHeight = window.innerHeight; // Visible window height

            if (scrollPosition === 0) {
                // Top of the page
                setScrollState(0);
            } else if (scrollPosition + windowHeight >= documentHeight) {
                // Bottom of the page
                setScrollState(2);
            } else {
                // Middle of the page
                setScrollState(1);
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Call once to set initial state in case user is not at top
        handleScroll();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (headerRef.current) {
            const height = headerRef.current.offsetHeight;
            setTop(`calc(100vh - ${height}px)`);
        }
    }, []);

    // to do : stop the infinite in the aos

    return (
        <div className='bg-primary min-w-screen min-h-screen flex  items-end flex-col overflow-hidden'>
            {/* absolute claim to eric van holtz design */}
            <div className="absolute left-2 top-2 w-fit h-fit opacity-50 text-xs text-white">Design by Eric Van Holtz</div>
            {/* arrow to go back (absolute) */}
            {
                isProject || isSkills && (
                    <div
                        onClick={(e) => {
                            const el = e.currentTarget;
                            // Apply the transition
                            el.style.transition = "transform 0.4s ease";

                            // Small delay to ensure the transition applies before transform
                            requestAnimationFrame(() => {
                                el.style.transform = "translateX(calc(100% + 2.5rem))";
                            });

                            setTimeout(() => {
                                setIsProject(false);
                                setIsSkills(false)
                            }, 400); // matches transition duration
                        }}
                        className="size-10 border border-white absolute top-10 right-10 flex items-center justify-center text-2xl text-white cursor-pointer hover:scale-125 rounded-full"
                    >
                        <AiOutlineArrowLeft />
                    </div>
                )
            }
            {/* overlay for mobile */}
            <div className={`flex sm:hidden  flex-col self-start justify-start pt-7 px-3 z-50 transition-all duration-1000 ease-in-out`} ref={headerRef}
            >
                <div className="flex items-end justify-start text-white gap-3 text-xs">
                    <div onClick={() => { setIsProject(false); setIsSkills(false) }}
                        className='w-fit flex items-start justify-start flex-col scale-y-[85%] cursor-pointer ease-in-out group
                                    text-white text-3xl font-black leading-[0.8] hover:text-transparent text-stroke-1 text-stroke-white'
                        style={{ color: (isProject || isSkills) && scrollState ? "transparent" : "" }}>
                        <span className='relative overflow-hidden pb-1'>
                            IAM
                            <div className='absolute animate-slideUp top-0 left-0 w-full h-full bg-primary'
                                style={{ animationFillMode: "forwards", WebkitAnimationFillMode: "fowrards", MozAnimationFillMode: 'forwards', animationDelay: '1.8s' }}></div>
                        </span>
                        <span className='relative overflow-hidden pb-1'>
                            OMAR
                            <div className='absolute animate-slideUp top-0 left-0 w-full h-full bg-primary'
                                style={{ animationFillMode: "forwards", WebkitAnimationFillMode: "fowrards", MozAnimationFillMode: 'forwards', animationDelay: '2.1s' }}></div>
                        </span>
                        <span className='relative overflow-hidden flex items-end gap-1 justify-center pb-1'>
                            ME<div className='size-2 bg-white border border-white group-hover:bg-transparent'></div>

                            <div className='absolute animate-slideUp top-0 left-0 w-full h-full bg-primary'
                                style={{ animationFillMode: "forwards", WebkitAnimationFillMode: "fowrards", MozAnimationFillMode: 'forwards', animationDelay: '2.4s' }}></div>
                        </span>
                    </div>
                    <div className='flex items-start justify-start flex-col' data-aos="fade-up" data-aos-delay="500">
                        <h1>Omar Emad</h1>
                        <h1>Software Engineer</h1>
                    </div>
                    <div className='flex items-start justify-start flex-col' data-aos="fade-up" data-aos-delay="700">
                        <h1 className="flex items-center justify-center"><GrLocation />Egypt</h1>
                        <h1 className="font-semibold hover:rotate-y-30 origin-left cursor-pointer">om3x4e@gmail.com</h1>
                    </div>
                </div>
                <div className='mt-3 text-white flex items-center justify-start gap-10'>
                    <div data-aos="fade-up" data-aos-delay="900"
                        className='flex items-start justify-start flex-col  perspective-[1000px]'>
                        <h1
                            onClick={() => { setIsSkills(!isSkills); setIsProject(false) }}
                            className="flex items-center justify-center gap-2 font-semibold hover:rotate-y-30 origin-left cursor-pointer">
                            <span className="text-xs ">01</span>
                            Skills
                            <span className={`bg-white h-[1px] ${isSkills ? "w-10" : "w-0"} delay-800 ease-in-out`}></span>
                        </h1>
                        <a href="https://github.com/OM3X4"
                            target="blank"
                            className="flex items-center justify-center gap-2 font-semibold hover:rotate-y-30 origin-left cursor-pointer">
                            <span className="text-xs ">02</span>
                            Github
                        </a>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="1100"
                        className='flex items-start justify-start flex-col  perspective-[1000px]'>
                        <a href="https://x.com/OmarInProgress"
                            target="blank" className="flex items-center justify-center gap-2 font-semibold hover:rotate-y-30 origin-left cursor-pointer ">
                            <span className="text-xs">03</span>X <span className="text-xs">(Twitter)</span>
                        </a>
                        <a href="https://www.linkedin.com/in/om3x4/"
                            target="blank"
                            className="flex items-center justify-center gap-2 font-semibold hover:rotate-y-30 origin-left cursor-pointer">
                            <span className="text-xs ">04</span>LinkedIn
                        </a>
                    </div>
                </div>
            </div>
            {/* overlay(absolute) */}
            <div className={`hidden fixed left-0 sm:flex justify-start pb-5 pt-5 px-15 z-50 transition-all duration-1000 ease-in-out ${isProject || isSkills ? "flex-row items-end" : "flex-row items-end"}`} ref={headerRef}
                style={{ top: isProject || isSkills ? 0 : top, opacity: (isProject || isSkills) && scrollState ? 0.4 : 1 }}>
                <div onClick={() => { setIsProject(false); setIsSkills(false) }}
                    className='w-fit flex items-start justify-start flex-col scale-y-[85%] cursor-pointer ease-in-out group
                                text-white text-6xl font-black leading-[0.8] hover:text-transparent text-stroke-1 text-stroke-white'
                    style={{ color: (isProject || isSkills) && scrollState ? "transparent" : "" }}>
                    <span className='relative overflow-hidden pb-1'>
                        IAM
                        <div className='absolute animate-slideUp top-0 left-0 w-full h-full bg-primary'
                            style={{ MozAnimationFillMode: 'forwards', animationDelay: '1.8s' }}></div>
                    </span>
                    <span className='relative overflow-hidden pb-1'>
                        OMAR
                        <div className='absolute animate-slideUp top-0 left-0 w-full h-full bg-primary'
                            style={{ MozAnimationFillMode: 'forwards', animationDelay: '2.1s' }}></div>
                    </span>
                    <span className='relative overflow-hidden flex items-end gap-1 justify-center pb-1'>
                        ME<div className='size-4 bg-white border border-white group-hover:bg-transparent'></div>

                        <div className='absolute animate-slideUp top-0 left-0 w-full h-full bg-primary'
                            style={{ MozAnimationFillMode: 'forwards', animationDelay: '2.4s' }}></div>
                    </span>
                </div>
                <div>
                    <div className='mt-5 text-white flex items-center justify-start gap-10'>
                        <div className='flex items-start justify-start flex-col' data-aos="fade-up" data-aos-delay="500">
                            <h1>Omar Emad</h1>
                            <h1>Software Engineer</h1>
                        </div>
                        <div className='flex items-start justify-start flex-col' data-aos="fade-up" data-aos-delay="700">
                            <h1 className="flex items-center justify-center"><GrLocation />Egypt</h1>
                            <h1 className="font-semibold hover:rotate-y-30 origin-left cursor-pointer">om3x4e@gmail.com</h1>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="900"
                            className='flex items-start justify-start flex-col  perspective-[1000px]'>
                            <h1
                                onClick={() => { setIsSkills(!isSkills); setIsProject(false) }}
                                className="flex items-center justify-center gap-2 font-semibold hover:rotate-y-30 origin-left cursor-pointer">
                                <span className="text-xs ">01</span>
                                Skills
                                <span className={`bg-white h-[1px] ${isSkills ? "w-10" : "w-0"} delay-800 ease-in-out`}></span>
                            </h1>
                            <a href="https://github.com/OM3X4"
                                target="blank"
                                className="flex items-center justify-center gap-2 font-semibold hover:rotate-y-30 origin-left cursor-pointer">
                                <span className="text-xs ">02</span>
                                Github
                            </a>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="1100"
                            className='flex items-start justify-start flex-col  perspective-[1000px]'>
                            <a href="https://x.com/OmarInProgress"
                                target="blank" className="flex items-center justify-center gap-2 font-semibold hover:rotate-y-30 origin-left cursor-pointer ">
                                <span className="text-xs">03</span>X <span className="text-xs">(Twitter)</span>
                            </a>
                            <a href="https://www.linkedin.com/in/om3x4/"
                                target="blank"
                                className="flex items-center justify-center gap-2 font-semibold hover:rotate-y-30 origin-left cursor-pointer">
                                <span className="text-xs ">04</span>LinkedIn
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            {
                isProject ?
                    // project page
                    <div className="min-h-screen bg-primary w-screen">
                        {/* img part */}
                        <div className="w-screen h-[70vh] mt-20 sm:mt-[28vh]  relative" data-aos="fade-up" data-aos-offset="300">
                            <h1 className=" whitespace-pre-wrap text-right text-4xl sm:text-6xl md:text-7xl lg:text-8xl  xl:text-9xl top-0 -translate-y-1/2 z-50 right-10 absolute md:text-transparent font-black md:text-stroke-2 scale-x-105 mx-10 text-white md:text-stroke-white">
                                {projects[projectId].name}
                                <div className="absolute top-0 left-0 w-full h-full bg-primary animate-slideUp"
                                    style={{ animationFillMode: 'forwards', MozAnimationFillMode: 'forwards', animationDelay: '0.8s' }}></div>
                            </h1>
                            <div className="w-screen h-[70vh] flex overflow-hidden items-center justify-center relative">
                                <img src={projects[projectId].images[0]} alt="" className={`object-cover h-full w-full`} />
                                <div className="absolute top-0 left-0 w-full h-full bg-primary animate-slideUp"
                                    style={{ animationFillMode: 'forwards', MozAnimationFillMode: 'forwards', animationDelay: '1.2s' }}></div>
                            </div>
                        </div>
                        <div className="flex items-start justify-center w-screen flex-col-reverse md:flex-row">
                            {/* main text */}
                            <div className="w-[80%] px-5 md:px-20 py-20 text-white flex flex-col">
                                {/* first text div */}
                                <div className="flex items-start justify-center gap-10 mb-40 flex-col md:flex-row">
                                    <div className="flex-1" data-aos="fade-up" data-aos-offset="300" data-aos-delay="100">
                                        <h1 className="text-4xl font-bold mb-2">{projects[projectId].mainHeadline}</h1>
                                        <p className="text-2xl">{projects[projectId].secondParagraph}</p>
                                    </div>
                                    <div className="text-2xl flex-1" data-aos="fade-up" data-aos-offset="300" data-aos-delay="300">
                                        {projects[projectId].mainParagraph}
                                    </div>
                                </div>
                                {/* image */}
                                <div className="md:w-full md:h-full w-[90vw]">
                                    <img src={projects[projectId].images[1]} alt="" className="w-full h-full object-cover" />
                                </div>
                                {/* text after image */}
                                <div data-aos="fade-up" data-aos-offset="300">
                                    <h1 className="text-2xl mt-5">{projects[projectId].thirdParagraph}</h1>
                                </div>
                                {/* quote */}
                                <div data-aos="fade-right" data-aos-offset="300" data-aos-delay="300">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl:text-6xl font-bold mt-20 md:w-2/3"><FaQuoteRight />{projects[projectId].quote}</h1>
                                </div>
                            </div>
                            {/* side bar */}
                            <div className="md:w-[20%] flex items-start justify-start flex-col text-white py-5N md:py-20 px-10 gap-5"
                                data-aos="fade-up" data-aos-offset="300">
                                <div>
                                    <a href={projects[projectId].websiteLink} target="blank"
                                        className="text-lg cursor-pointer flex items-center justify-center gap-2 hover:text-black"><CgLivePhoto />Live Demo</a>
                                    <p className="text-xs ">{projects[projectId].name}</p>
                                </div>

                                <a href={projects[projectId].codeLink} target="blank" className="text-lg  cursor-pointer flex items-center justify-center gap-2 hover:text-black"><AiFillGithub />Github</a>

                                <h1 className="text-sm ">Built By<div className="text-lg font-bold">{projects[projectId].engineer}</div></h1>

                                <div>
                                    <h1 className="text-lg font-semibold">Stack</h1>
                                    {
                                        projects[projectId].stack.map((item, index) => (
                                            <div key={index} className="flex items-center justify-start gap-2 text-sm">
                                                {item.icon}
                                                <h1 className="font-semibold">{item.name}</h1>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    // skills page
                    isSkills ?
                        <div className="mt-10 md:mt-[30vh] w-screen min-h-[70vh] flex items-start justify-center md:py-10 flex-col md:flex-row">
                            {/* main text */}
                            <div className="flex-[2.5] min-h-[70vh] px-5 md:pl-10 pt-10">
                                <h1 className="text-2xl text-white font-semibold" data-aos="fade-up" data-aos-delay="500">{about.whoami1}</h1>
                                <h1 className="text-2xl text-white mt-4" data-aos="fade-up" data-aos-delay="700">{about.whoami2}</h1>
                                <h1 className="text-4xl text-white font-bold mt-15 flex items-center gap-2" data-aos="fade-up" data-aos-delay="900"><BsFillGearFill />Beyond the Frontend</h1>
                                <ul className="ml-5 mt-4 flex flex-col gap-3" data-aos="fade-up" data-aos-delay="1000">
                                    {
                                        about.enjoylist.map((item: any) => {
                                            return <div className="text-white text-xl flex items-center gap-2">
                                                {item.icon}{item.text}
                                            </div>
                                        })
                                    }
                                </ul>
                            </div>
                            {/* availability */}
                            <div className="flex-1 flex items-start justify-start flex-col md:min-h-[70vh] px-5 md:pl-10 pt-5">
                                <h1 className="text-2xl text-white  mt-5 flex items-center gap-2" data-aos="fade-up" data-aos-delay="1000"><MdEventAvailable />Availability</h1>
                                <ul className="ml-5 mt-4 flex flex-col gap-3" data-aos="fade-up" data-aos-delay="1000">
                                    {
                                        about.availablityList.map((item) => {
                                            return <div className="text-white text-lg flex items-center gap-2">
                                                {item}
                                            </div>
                                        })
                                    }
                                </ul>
                            </div>
                            {/* stack */}
                            <div className="flex-1 min-h-[70vh] pt-5 pl-5">
                                <h1 className="text-2xl text-white mt-5 flex items-center gap-2" data-aos="fade-up" data-aos-delay="1200"><MdOutlineMilitaryTech />Stack</h1>
                                <ul className="text-white text my-2 ml-5" data-aos="fade-up" data-aos-delay="1400">
                                    {
                                        skills.map((item: any) => {
                                            return <div>
                                                <li className="flex items-center gap-2 text-white">
                                                    {item.icon}{item.name}
                                                </li>
                                            </div>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        :
                        <div className='animate-slideDown-custom perspective-[1000px] pt-10 sm:pt-20 px-5 sm:px-10 md:px-20 lg:px-25 xl:px-30 flex flex-col gap-0 max-w-[90vw]'>
                            {
                                data.map((item, index) => (
                                    <div key={index}
                                        onClick={e => handleClick(e, index)}
                                        className={`flex flex-row-reverse opacity-0 cursor-pointer origin-right animate-all -rotate-y-15 hover:-rotate-y-5 duration-700 ease-in-out`}
                                        style={{ animationDelay: `${index * 0.1}s` }}>
                                        <h1 className='text-[5rem] sm:text-[8rem] md:text-[9rem] lg:text-[10rem] xl:text-[11rem] font-black text-right tracking-normal sm:tracking-tight text-black !font-sans  leading-none md:leading-[0.8] hover:text-white md:hover:text-transparent md:text-stroke-medium whitespace-pre-wrap'>
                                            {item}
                                        </h1>
                                    </div>
                                ))
                            }
                        </div>
            }
        </div >
    )
}

export default App