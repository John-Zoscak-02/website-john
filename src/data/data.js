
import project13 from "../images/projects/project13.png";
import project14 from "../images/projects/project14.png";
import project15 from "../images/projects/project15.png";
import project16 from "../images/projects/project16.png";
import project17 from "../images/projects/project17.png";
import project18 from "../images/projects/project18.png";
import project19 from "../images/projects/project19.png";
import project20 from "../images/projects/project20.png";
import project1 from "../images/projects/project1.png";
import project2 from "../images/projects/project2.png";
import project3 from "../images/projects/project3.png";
import project4 from "../images/projects/project4.png";
import project5 from "../images/projects/project5.png";
import project6 from "../images/projects/project6.png";
import project7 from "../images/projects/project7.png";
import project8 from "../images/projects/project8.png";
import project9 from "../images/projects/project9.png";
import project10 from "../images/projects/project10.png";
import project11 from "../images/projects/project11.png";
import project12 from "../images/projects/project12.png";

export const projectData = [
    {
        name: "Cavalier Autonomous Racing",
        image: project13,
        description: "Using C++ to write common robotics, data processing and synthesizing libraries. Used physics and dynamic models to better calculate future states of a racing vehicle. And developed at Indianapolis Speedway and Las Vegas Speedway.",
        link: "/",
    },
    {
        name: "Advanced Embedded Project",
        image: project14,
        description: "Our project leverages a real-time operating system (RTOS) to manage multiple threads responsible for joystick input, crosshair display, Cube (Tie fighter) generation, scoring, sound effects, and deadlock prevention. Tie fighters move across the screen and must be eliminated by positioning the crosshair, controlled by the joystick. It uses semaphores for resource control, PWM for sound synthesis, and ADC for generating random seeds.",
        link: "/",
    },
    {
        name: "Guided-Cost Learning",
        image: project15,
        description: "With a team of two others, I designed an AI model to learn the behavior of boundedly rational stochastic agents interacting in a dynamic game for my Multi-Robot Navigation Final Project. The model learns a control, cost, and dynamics function for multi-robot systems operating in a simulated game.",
        link: "/",
    },
    {
        name: "Dotfiles and WM Software",
        image: project16,
        description: "My personal stack for the AwesomeWM window manager. It is a simple and lightweight rice of the AwesomeWM window manager. Utilizing LUA, community-designed widgets and tools - It includes the full functionality of the awesome window manager, has a simple yet fully functional topbar for important computer statistics, and works with multiple displays and changing desktop / laptop configurations.", 
        link: "/",
    },
    {
        name: "Learning in Robotics",
        image: project17,
        description: "I solved a markov decision problem, programmed an UKF (Unscented Kalman Filter) using quaternion math with IMU data and Vicon (image) data. I implemented a simple linear quadratic regulator, implemented SLAM (Simultaneous Localization and Mapping) using real LiDAR data, trained an Actor-Critic Neural Network and trained a Q-learning model.",
        link: "/",
    },
    {
        name: "Benchmarking and Surveying CRYSTALS-kyber",
        image: project18,
        description: "Testing, benchmarking, and assessing kyber as a post-quantum cryptography algorithm for the future of network security",
        link: "/",
    },
    {
        name: "Natural Langauge Processing Poisoning Llama2",
        image: project19,
        description: "Using the pre-trained and finetuned Llama2 model, I implemented a simple text poisoning model to produce noisy subsets of the ultra-chat testing set. Using this, I trained new LLMs with post-finetuning to understand the effects of random character noise or semantic and lexical performance of Llama2 models.",

    },
    {
        name: "Computer Vision - Real Time Surface Reconstruction",
        image: project20,
        description: "Helped create a modular pipeline for real-time surface reconstruction from monocular video. It integrates keypoint detection, vertex selection, and mesh generation into a unified system to produce 3D models from video input. I surveyed orbslam3, CoTracker, and Photo-SLAM algorithms in this research.",
        link: "/",
    },
    {
        name: "Portfolio Website",
        image: project1,
        description: "This porfolio website was implemented using React JS, HTML, SCSS and Material UI. The structures and layouts that contain the components of the website were designed and implemented by myself. The website is hosted on GitHub pages, and the source code is available on my GithHub. Additionally, this website is responsive and works on desktop, tablet, and mobile devices.",
        link: "https://github.com/John-Zoscak-02/website-john",
    },
    {
        name: "F1Tenth Robot",
        image: project10,
        description: "This project was my group's submission for the F1Tenth style autonomous vehicles class that I am a part of. Work was done in Python using ROS1 melodic. Some of the modules that we worked on include: moving body particle filters, PID controllers, Pure Pursuit, Disparity Extension, Google Cartographer, Wall Following, and Follow the Gap. My team placed first in the class competition for race time trials, and 3rd for head-to-head with obstacle avoidance.",
        link: "https://github.com/John-Zoscak-02/f1tenth-robot",
    }, 
    {
        name: "ILITE 2020 Robot",
        image: project3,
        description: "Working with a team of 11 programmers on the ILITE robotics robot code in a git repository. I implemented an autonomous color wheel program to match the competition requirements, integrating streamed logging into the inter-process communication system, and an evasive movement function.",
        link: "https://github.com/iliterobotics/FRC-Robot-2020/",
    },
    {
        name: "Terrain Generation",
        image: project2,
        description: "In Golang, I decided to make a progressive Perlin Noise terrain generator that displays terrains using a Golang bindings library for OpenGL. This project features terrain generation from json data, and can produce more unique terrains using \"Bipartite\" generation - which applies two perlin processes in parallel.",
        link: "https://github.com/John-Zoscak-02/terrain-generation",
    }, 
    {
        name: "Geometry Image 3D Model Parameterization",
        image: project11,
        description: "For my graduate level \"Geometry of Data\" class, me and a partner decided to implement 3D model cutting and parameterization into geometry images. Our work was intended to test the efficiency and practicality of 3D model compression as well as alternative 3D geometry dimensionality reductions methods. This project demonstrates the use of geometry images to represent 3D models in 2D space.",
        link: "https://github.com/John-Zoscak-02/geometry-images",
    }, 
    {
        name: "CS 3240 Class Project",
        image: project4,
        description: "Designing and implementing a class scheduling application using Django's web framework. Working with a team of 5 people, we were able to create a course catalog viewer, friends interaction features, and a dynamically rendered 7-day timetable.",
        link: "https://github.com/John-Zoscak-02/project-a-28-copy",
    },
    {
        name: "Guideroom: Hoohacks 2023",
        image: project5,
        description: "Guideroom is a 3d model processing software that uses LIDAR captures to analyze indoor spaces made by me and two others. Our goal was to help make assessments as to how safely navigable spaces are. Some features include surface identification using point-cloud segmentation, stair identification, floor-space measurements and a web-app.",
        link: "https://devpost.com/software/guideroom?ref_content=user-portfolio&ref_feature=in_progress",
    },
    {
        name: "Glimmr Website",
        image: project6,
        description: "Working with a team of 6 programmers to implement several frontend features of Glimmr's website using React JS. Worked briefly on writing tests in typescript for Glimmr's app, wrote a custom messaging UI from scratch ReactJS, and improved the features and the design of the website. Glimmr was my first exposure to frontend development, and I did self-guided learning to contribute to the project.",
        link: "https://github.com/glimmr-app/",
    },
    {
        name: "Robotics with ROS Simulation",
        image: project7,
        description: "As part of my CS4501 class, we were using ROS with python2 to write code for a quadcopter. We practiced and implemented many solutions to various roboitics problems. These included: path planning, image recoginition with convolution neural networks, control systems, sensor noise cleaning, and node coupling / dependency via ROS topics and messages. ",
        link: "https://github.com/John-Zoscak-02",
    },
    {
        name: "Embedded Computing Robot",
        image: project8,
        description: "Designing and programming robust finite state machines to solve a maze and follow lines. The finite state machine was produced in a manner to self-correct wobble as it traverses the line. C and low-level driver libraries were used to interact with the hardware of the robot. Technologies used include power control modules, SPI, interrupts, and timers.",
        link: "https://github.com/John-Zoscak-02/Embedded",
    },
    // {
    //     name: "Janko Collaborative Whiteboard",
    //     image: project9,
    //     description: "This project was my group's 2-day HooHacks 2022 Project! Originally inteded to be a collaborative PDF editor for students -- my contributions to the project included using Google's Tesseract OCR library for python. This was to be used to take the overlayed edited canvas on the project and make changes made by the collaborators text-searchable after the PDF has been processed and exported.",
    //     link: "https://github.com/nicholasmiller1/hoohacks2022-pdfeditor",
    // }, 
    // {
    //     name: "Fourier Series",
    //     image: project12,
    //     description: "Working with two friends in a git repository to create a program in Python for visualizing a calculated Fourier series transform from an svg file. This involved significant studying of the relevant mathematics, as well as investigation towards sound mathematical implements using tools like scipy and imaginary numbers",
    //     link: "https://github.com/John-Zoscak-02/Python-Fourier",
    // },
];