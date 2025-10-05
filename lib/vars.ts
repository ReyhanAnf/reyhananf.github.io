export const TECH = {
    go : {
        name: "Go",
        image: "/tech/go.svg",
        size: "16"
    },
    python : {
        name: "Python",
        image: "/tech/python.svg",
        size: "28"
    },
    javascript : {
        name: "Javascript",
        image: "/tech/javascript.svg",
        size: "12"
    },
    tailwind : {
        name: "Tailwind",
        image: "/tech/tailwind.svg",
        size: "16"
    },
    mysql :{
        name: "MySQL",
        image: "/tech/mysql.svg",
        size: "16"
    }, 
    postgresql :{
        name: "PostgreSQL",
        image: "/tech/postgresql.svg",
        size: "16"
    }, 
    gin : {
        name: "Gin",
        image: "/tech/go-mask.svg",
        size: "12"
    },
    django : {
        name: "Django",
        image: "/tech/django.svg",
        size: "16"
    },
    flask : {
        name: "Flask",
        image: "/tech/flask.svg",
        size: "16"
    },
    tensorflow : {
        name: "Tensorflow",
        image: "/tech/tensorflow.svg",
        size: "16"
    },
    nextjs : {
        name: "NextJs",
        image: "/tech/next.svg",
        size: "26"
    },
    reactjs : {
        name: "ReactJs",
        image: "/tech/reactjs.svg",
        size: "16"
    },
    shadcn : {
        name: "Shadcn/UI",
        image: "/tech/shadcn.svg",
        size: "16"
    },
    aceternity : {
        name: "Aceternity",
        image: "/tech/aceternity.png",
        size: "16"
    },
    docker : {
        name: "Docker",
        image: "/tech/docker.svg",
        size: "16"
    },

}

export const SOFTWARE = {
    word : {
        name: "Microsoft Word",
        image: "/tech/word.svg",
        size: "16"
    },
    powerpoint : {
        name: "Microsoft Powerpoint",
        image: "/tech/powerpoint.svg",
        size: "16"
    },
    excel : {
        name: "Microsoft Excel",
        image: "/tech/excel.svg",
        size: "16"
    },
    photoshop : {
        name: "Adobe Photoshop",
        image: "/tech/photoshop.svg",
        size: "16"
    },
    illustrator : {
        name: "Adobe Illustrator",
        image: "/tech/illustrator.svg",
        size: "16"
    },
    canva : {
        name: "Canva",
        image: "/tech/canva.svg",
        size: "16"
    },
    inkscape : {
        name: "Inkscape",
        image: "/tech/inkscape.svg",
        size: "16"
    },
    capcut : {
        name: "Capcut",
        image: "/tech/capcut.svg",
        size: "16"
    },
    aftereffects : {
        name: "Adobe After Effects",
        image: "/tech/aftereffects.svg",
        size: "16"
    },
}

export const PROJECT = [
    {
        title: "Muslim Goodness",
        description : "Web Application to collect goodness in every Muslim through digital platform",
        image: "/project/muslim_ayah.png",
        tech: [TECH.nextjs],
        category: "fullstack",
        source: "https://github.com/ReyhanAnf/goodness",
        link: "https://muslim-goodness.vercel.app/"
    },
    {
        title: "Predict News",
        description : "App For Predict Fake News Using News URL",
        image: "/project/predictnews.png",
        tech: [TECH.django, TECH.tensorflow, TECH.python],
        category: "fullstack",
        source: "https://github.com/ReyhanAnf/sixtas-sortcut",
        link: "#"
    },
    {
        title: "Undertable",
        description : "App For Social Student and Lesson Sharing",
        image: "/project/undertable.png",
        tech: [TECH.django, TECH.nextjs],
        category: "fullstack",
        source: "https://github.com/ReyhanAnf/undertable",
        link: "#"
    },
    {
        title: "Remove Background",
        description : "Program to remove image background quickly without internet",
        image: "/project/gui_removebg.png",
        tech: [TECH.python],
        category: "gui",
        source: "https://github.com/ReyhanAnf/removebg",
        link: "#"
    },
    {
        title: "Anion Kation Test",
        description : "A program to memorize the periodic table by guessing and knowing the answer from an element name. (Casual project for myself)",
        image: "/project/anionkationtest.png",
        tech: [TECH.javascript],
        category: "frontend",
        source: "https://github.com/ReyhanAnf/anionkationtest",
        link: "#"
    },
    {
        title: "Convert Images to PDF",
        description : "Simple program to convert images to pdf files",
        image: "/project/cli_img2pdf.png",
        tech: [TECH.python],
        category: "cli",
        source: "https://github.com/ReyhanAnf/img2pdf-cli",
        link: "#"
    },
]

export const PRODUCT = [
    {
        title: "RNB Genre Music",
        description : "Art subject presentation about international music",
        image: "/product/otot.png",
        tech: [SOFTWARE.powerpoint],
        category: "powerpoint",
        source: "#",
        link: "#"
    },
    {
        title: "Biology Five Senses",
        description : "Biology subject presentation about the anatomy of the five senses",
        image: "/product/pancaindra.png",
        tech: [SOFTWARE.powerpoint],
        category: "powerpoint",
        source: "#",
        link: "#"
    },
    {
        title: "History of Indonesia",
        description : "Presentation of history subjects about the struggle of the Indonesian nation",
        image: "/product/pergerakannasional.png",
        tech: [SOFTWARE.powerpoint],
        category: "powerpoint",
        source: "#",
        link: "#"
    },
    {
        title: "History of Indonesia",
        description : "Geography subject presentation about growth centers in Indonesia",
        image: "/product/pusatpertumbuhan.png",
        tech: [SOFTWARE.powerpoint],
        category: "powerpoint",
        source: "#",
        link: "#"
    },

]

export const EXPERIENCE = [
    {
        title: "Full Stack Developer",
        company: "PT. Telekomunikasi Indonesia",
        date: "Aug 2023 - Dec 2023",
        description: "Developed and maintained web applications using React, Node.js, and Go. Collaborated with cross-functional teams to define, design, and ship new features."
    },
    {
        title: "IT Support",
        company: "PT. Angkasa Pura II",
        date: "Jan 2020 - Mar 2020",
        description: "Provided technical assistance and support for incoming queries and issues related to computer systems, software, and hardware. Maintained daily performance of computer systems."
    }
]

export const CERTIFICATES = [
    {
        title: "Go (Basic)",
        issuer: "HackerRank",
        date: "May 2024",
        image: "/path/to/certificate-image1.png", // Placeholder
        link: "#"
    },
    {
        title: "React (Basic)",
        issuer: "HackerRank",
        date: "June 2024",
        image: "/path/to/certificate-image2.png", // Placeholder
        link: "#"
    }
]
