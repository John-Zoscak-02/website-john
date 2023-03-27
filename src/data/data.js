import project1 from "../images/projects/project1.png";
import project2 from "../images/projects/project2.png";
import project3 from "../images/projects/project3.png";
import project4 from "../images/projects/project4.png";
import project5 from "../images/projects/project5.png";
import project6 from "../images/projects/project6.png";
import project7 from "../images/projects/project7.png";
import project8 from "../images/projects/project8.png";
import project9 from "../images/projects/project9.png";

export const projectData = [
    {
        name: "Portfolio Website",
        image: project1,
        description: "This porfolio website was implemented using React JS, HTML, SCSS and Material UI. The structures and layouts that contain the components of the website were designed and implemented by myself using SCSS and HTML. ",
        link: "https://github.com/John-Zoscak-02/website-john",
    },
    {
        name: "Terrain Generation",
        image: project2,
        description: "For my first project in Golang, I decided to make a progressive Perlin Noise terrain generator that displays terrains using a Golang bindings library for OpenGL. This project features terrain generation from json data, and can produce more unique terrains using \"Bipartite\" generation.",
        link: "https://github.com/John-Zoscak-02/terrain-generation",
    }, 
    {
        name: "ILITE 2020 robot",
        image: project3,
        description: "Working with a team of 11 programmers on the ILITE robotics robot code in a git repository. I implemented an autonomous color wheel program to match the competition requirements, integrating streamed logging into the telemetry system, and an evasive movement function.",
        link: "https://github.com/iliterobotics/FRC-Robot-2020/",
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
        name: "Glimmr website",
        image: project6,
        description: "Working with a team of 6 programmers to implement several frontend features of Glimmr's website using React JS. Worked briefly on writing tests in typescript for Glimmr's app, and wrote a custom messaging UI from scratch. This work was my first exposure to frontend development.",
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
        description: "Designing and Programming robust finite state machines to solve a maze and follow lines. The finite state machine was produced in a manner to self-correct wobble as it traverses the line. C and low-level driver libraries were used to interact with the hardware of the robot. Technologies used include power control modules, SPI, interrupts, and timers.",
        link: "https://github.com/John-Zoscak-02/Embedded",
    },
    {
        name: "Janko Collaborative Whiteboard",
        image: project9,
        description: "This project was my group's 2-day HooHacks 2022 Project! Originally inteded to be a collaborative PDF editor for students -- my contributions to the project included using Google's Tesseract OCR library for python. This was to be used to take the overlayed edited canvas on the project and make changes made by the collaborators text-searchable after the PDF has been processed and exported.",
        link: "https://github.com/nicholasmiller1/hoohacks2022-pdfeditor",
    }, 
];