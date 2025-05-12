import { AiOutlineArrowLeft } from "react-icons/ai";
/* eslint-disable */
import { SiShadcnui } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { SiDjango } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { FaQuoteRight } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { CgLivePhoto } from "react-icons/cg";
import { SiJavascript } from "react-icons/si";
import { GrLocation } from "react-icons/gr";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'

const data = [
    "BRAINS-\nMATH2.0",
    "QUEEN-\nFISH",
    "STUDX",
    "BRAINS-\nMATH1.0",
    "EGYPT-\nPROJECTS",
    "CHEEZY",
    "OMARTYPE"
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
]


function App() {

    const [isProject, setIsProject] = useState(false)
    const [projectId, setProjectId] = useState(0)
    const headerRef = useRef<HTMLDivElement>(null);
    const [top, setTop] = useState("0px");
    const [scrollState, setScrollState] = useState(0) // 0 = up , 1 = middle , 2 = down

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [isProject]);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>, projectIndex: number) => {
        document.body.classList.add("pointer-events-none");
        e.currentTarget.classList.add("rotate-y-0");
        e.currentTarget.classList.remove("hover:-rotate-y-5");
        e.currentTarget.firstElementChild?.classList.remove("text-black")
        e.currentTarget.firstElementChild?.classList.add("text-transparent")


        setProjectId(projectIndex)
        setTimeout(() => {
            setIsProject(true)
            document.body.classList.remove("pointer-events-none");
        }, 1000)

    };

    useEffect(() => {
        AOS.init({
            duration: 800, // animation duration
            once: false,    // whether animation should happen only once - while scrolling down
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

    return (
        <div className='bg-[#4801ff] min-w-screen min-h-screen flex justify-end items-center overflow-hidden'>
            {/* arrow to go back (absolute) */}
            {
                isProject && (
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
                            }, 400); // matches transition duration
                        }}
                        className="size-10 border border-white absolute top-10 right-10 flex items-center justify-center text-2xl text-white cursor-pointer hover:scale-125 rounded-full"
                    >
                        <AiOutlineArrowLeft />
                    </div>
                )
            }
            {/* overlay(absolute) */}
            <div className={`fixed left-0 flex justify-start pb-10 pt-5 px-15 z-50 transition-all duration-1000 ease-in-out ${isProject ? "flex-row items-end" : "flex-col items-start"}`} ref={headerRef}
                style={{ top: isProject ? 0 : top, opacity: isProject && scrollState ? 0.4 : 1 }}>
                <div onClick={() => setIsProject(false)}
                    className='w-fit flex items-start justify-start flex-col scale-y-[85%] cursor-pointer ease-in-out group
                                text-white text-6xl font-black leading-[0.8] hover:text-transparent text-stroke-1 text-stroke-white'
                    style={{ color: isProject && scrollState ? "transparent" : "" }}>
                    <span className='relative overflow-hidden pb-1'>
                        IAM
                        <div className='absolute animate-slideUp top-0 left-0 w-full h-full bg-[#4801ff]'
                            style={{ MozAnimationFillMode: 'forwards', animationDelay: '1.8s' }}></div>
                    </span>
                    <span className='relative overflow-hidden pb-1'>
                        OMAR
                        <div className='absolute animate-slideUp top-0 left-0 w-full h-full bg-[#4801ff]'
                            style={{ MozAnimationFillMode: 'forwards', animationDelay: '2.1s' }}></div>
                    </span>
                    <span className='relative overflow-hidden flex items-end gap-1 justify-center pb-1'>
                        ME<div className='size-4 bg-white border border-white group-hover:bg-transparent'></div>

                        <div className='absolute animate-slideUp top-0 left-0 w-full h-full bg-[#4801ff]'
                            style={{ MozAnimationFillMode: 'forwards', animationDelay: '2.4s' }}></div>
                    </span>
                </div>
                <div>
                    <div className='mt-5 text-white flex items-center justify-start gap-10'>
                        {!isProject ?
                            <>
                                <div className='flex items-start justify-start flex-col  '>
                                    <h1>Omar Emad</h1>
                                    <h1>Software Engineer</h1>
                                </div>
                                <div className='flex items-start justify-start flex-col  '>
                                    <h1 className="flex items-center justify-center"><GrLocation />Egypt</h1>
                                    <h1 className="font-semibold hover:rotate-y-30 origin-left cursor-pointer">om3x4e@gmail.com</h1>
                                </div>
                            </>
                            : ""}
                        <div className='flex items-start justify-start flex-col  perspective-[1000px]'>
                            <h1 className="flex items-center justify-center gap-2 font-semibold hover:rotate-y-30 origin-left cursor-pointer"><span className="text-xs ">01</span>Skills</h1>
                            <a target="blank" className="flex items-center justify-center gap-2 font-semibold hover:rotate-y-30 origin-left cursor-pointer"><span className="text-xs ">02</span>Github</a>
                        </div>
                        <div className='flex items-start justify-start flex-col  perspective-[1000px]'>
                            <a target="blank" className="flex items-center justify-center gap-2 font-semibold hover:rotate-y-30 origin-left cursor-pointer "><span className="text-xs">03</span>X <span className="text-xs">(Twitter)</span></a>
                            <a target="blank" className="flex items-center justify-center gap-2 font-semibold hover:rotate-y-30 origin-left cursor-pointer"><span className="text-xs ">04</span>LinkedIn</a>
                        </div>
                    </div>

                </div>
            </div>
            {
                isProject ?
                    <div className="min-h-screen bg-[#4801ff] w-screen">
                        {/* img part */}
                        <div className="w-screen h-[70vh]  mt-[25vh]  relative" data-aos="fade-up" data-aos-offset="300">
                            <h1 className="whitespace-pre-wrap text-right text-9xl top-0 -translate-y-1/2 z-50 right-10 absolute text-transparent font-black text-stroke-2 scale-x-105 mx-10 text-stroke-white">{projects[projectId].name}</h1>
                            <div className="w-screen h-[70vh] flex overflow-hidden items-center justify-center brightness-75 relative">
                                <img src={projects[projectId].images[0]} alt="" className={`object-cover`} />
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-screen">
                            {/* main text */}
                            <div className="w-[80%] px-20 py-20 text-white flex flex-col">
                                {/* first text div */}
                                <div className="flex items-start justify-center gap-10 mb-40">
                                    <div className="flex-1" data-aos="fade-up" data-aos-offset="300" data-aos-delay="100">
                                        <h1 className="text-4xl font-bold mb-2">{projects[projectId].mainHeadline}</h1>
                                        <p className="text-2xl">{projects[projectId].secondParagraph}</p>
                                    </div>
                                    <div className="text-2xl flex-1" data-aos="fade-up" data-aos-offset="300" data-aos-delay="300">
                                        {projects[projectId].mainParagraph}
                                    </div>
                                </div>
                                {/* image */}
                                <div className="w-full">
                                    <img src={projects[projectId].images[1]} alt="" className="w-full h-full object-cover" />
                                </div>
                                {/* text after image */}
                                <div data-aos="fade-up" data-aos-offset="300">
                                    <h1 className="text-2xl mt-5">{projects[projectId].thirdParagraph}</h1>
                                </div>
                                {/* quote */}
                                <div data-aos="fade-right" data-aos-offset="300" data-aos-delay="300">
                                    <h1 className="text-6xl font-bold mt-20 w-2/3"><FaQuoteRight />{projects[projectId].quote}</h1>
                                </div>
                            </div>
                            {/* side bar */}
                            <div className="w-[20%] flex items-start justify-start flex-col text-white py-20 px-10 gap-5"
                                data-aos="fade-up" data-aos-offset="300">
                                <div>
                                    <a href={projects[projectId].websiteLink} target="blank"
                                        className="text-lg cursor-pointer flex items-center justify-center gap-2 hover:text-black"><CgLivePhoto />Live Demo</a>
                                    <p className="text-xs ">{projects[projectId].name}</p>
                                </div>

                                <a href={projects[projectId].codeLink} target="blank" className="text-lg  cursor-pointer flex items-center justify-center gap-2 hover:text-black"><AiFillGithub />Github</a>

                                <h1 className="text-sm ">Built By <span className="text-lg font-bold">{projects[projectId].engineer}</span></h1>

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
                    <div className='animate-slideDown-custom perspective-[1000px] pt-20 px-30 flex flex-col gap-0 max-w-[90vw]'>
                        {
                            data.map((item, index) => (
                                <div key={index}
                                    onClick={e => handleClick(e, index)}
                                    className={`flex flex-row-reverse opacity-0 cursor-pointer origin-right animate-all -rotate-y-15 hover:-rotate-y-5 duration-700 ease-in-out`}
                                    style={{ animationDelay: `${index * 0.1}s` }}>
                                    <h1 className='text-[11rem] font-black text-right tracking-tight text-black !font-sans hover:text-transparent leading-[0.8] text-stroke-medium whitespace-pre-wrap'>
                                        {item}
                                    </h1>
                                </div>
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default App