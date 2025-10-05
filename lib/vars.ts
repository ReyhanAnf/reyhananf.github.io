export const TECH = {
    javascript : {
        name: "Javascript",
        image: "/tech/javascript.svg",
        size: "16"
    },
    nodejs : {
        name: "Node.js",
        image: "/tech/nodejs.png",
        size: "20"
    },
    reactjs : {
        name: "ReactJs",
        image: "/tech/reactjs.svg",
        size: "16"
    },
    nextjs : {
        name: "NextJs",
        image: "/tech/next.svg",
        size: "26"
    },
    vuejs : {
        name: "VueJs",
        image: "/tech/vuejs.svg",
        size: "16"
    },
    php : {
        name: "PHP",
        image: "/tech/php.png",
        size: "18"
    },
    laravel : {
        name: "Laravel",
        image: "/tech/laravel.svg",
        size: "18"
    },
    python : {
        name: "Python",
        image: "/tech/python.svg",
        size: "20"
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
    gin : {
        name: "Gin",
        image: "/tech/go-mask.svg",
        size: "16"
    },
    go : {
        name: "Go",
        image: "/tech/go.svg",
        size: "16"
    },
    tensorflow : {
        name: "Tensorflow",
        image: "/tech/tensorflow.svg",
        size: "16"
    },
    mysql : {
        name: "MySQL",
        image: "/tech/mysql.svg",
        size: "16"
    },
    postgresql : {
        name: "PostgreSQL",
        image: "/tech/postgresql.svg",
        size: "16"
    },
    tailwind : {
        name: "Tailwind CSS",
        image: "/tech/tailwind.svg",
        size: "16"
    },
    shadcn : {
        name: "Shadcn/UI",
        image: "/tech/shadcn.svg",
        size: "16"
    },
    aceternity : {
        name: "Aceternity UI",
        image: "/tech/aceternity.png",
        size: "16"
    },
    bootstrap : {
        name: "Bootstrap",
        image: "/tech/bootstrap.svg",
        size: "16"
    },
    docker : {
        name: "Docker",
        image: "/tech/docker.svg",
        size: "16"
    },
    git : {
        name: "Git",
        image: "/tech/git.svg",
        size: "16"
    },
    ml : {
        name: "Machine Learning",
        image: "/tech/ml.svg",
        size: "16"
    },
    design : {
        name: "Desain Grafis",
        image: "/tech/design.svg",
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
        name: "Microsoft PowerPoint",
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
    aftereffects : {
        name: "Adobe After Effects",
        image: "/tech/aftereffects.svg",
        size: "16"
    },
    inkscape : {
        name: "Inkscape",
        image: "/tech/inkscape.svg",
        size: "16"
    },
    canva : {
        name: "Canva",
        image: "/tech/canva.svg",
        size: "16"
    },
    capcut : {
        name: "Capcut",
        image: "/tech/capcut.svg",
        size: "16"
    },
}

export const PROJECT = [
    {
        title: "Talents Mapping",
        description : "Developed multiple modules for talentsmapping.id including LMS, Training, custom rules, document verification, analytics dashboard, and multi-tenant features.",
        image: "/project/talentsmapping.png",
        tech: [TECH.laravel, TECH.nextjs, TECH.tailwind, TECH.mysql],
        category: "fullstack",
        source: "#",
        link: "https://talentsmapping.id"
    },
    {
        title: "Eko Berseka",
        description : "Building a waste inventory, stock, customer, and cash flow (accounting) management system, as well as reporting",
        image: "none",
        tech: [TECH.laravel, TECH.vuejs, TECH.tailwind, TECH.mysql],
        category: "fullstack",
        source: "#",
        link: "https://enjoydewata.com"
    },
    {
        title: "Desa Wisata Taraju",
        description : "Building a tour package reservation system, vouchers, bookings, package management, and ticket scanning.",
        image: "/project/dewata.png",
        tech: [TECH.laravel, TECH.vuejs, TECH.tailwind, TECH.mysql],
        category: "fullstack",
        source: "#",
        link: "https://enjoydewata.com"
    },
    {
        title: "Yasiin.id Registration System",
        description : "Developed a QR-based event registration system with WhatsApp blast notifications and time analytics for check-in events.",
        image: "/project/yasiin.png",
        tech: [TECH.laravel, TECH.javascript, TECH.tailwind],
        category: "fullstack",
        source: "#",
        link: "https://yasiin.id"
    },
    {
        title: "Rinfonet Blog",
        description : "Managed and developed SEO-optimized blog focusing on wireless technology articles and monetization via Google AdSense.",
        image: "none",
        tech: [TECH.nextjs, TECH.tailwind],
        category: "frontend",
        source: "https://reyhananf.me",
        link: "https://reyhananf.me"
    },
]

export const EXPERIMENT = [
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
        title: "Anion Kation Test",
        description : "A program to memorize the periodic table by guessing and knowing the answer from an element name. (Casual project for myself)",
        image: "/project/anionkationtest.png",
        tech: [TECH.javascript],
        category: "frontend",
        source: "https://github.com/ReyhanAnf/anionkationtest",
        link: "#"
    },
    {
        title: "CLI Image to PDF",
        description : "A command-line tool to convert images to PDF.",
        image: "/project/cli_img2pdf.png",
        tech: [TECH.python],
        category: "CLI Tool",
        source: "#",
        link: "#"
    },
    {
        title: "GUI Remove Background",
        description : "A desktop application to remove background from images.",
        image: "/project/gui_removebg.png",
        tech: [TECH.python],
        category: "Desktop App",
        source: "#",
        link: "#"
    },
]

export const PRODUCT = [
    {
        title: "Presentation - Teknologi Wireless",
        description : "Educational PowerPoint project explaining the fundamentals of wireless communication technology.",
        image: "/product/wireless.png",
        tech: [SOFTWARE.powerpoint],
        category: "presentation",
        source: "#",
        link: "#"
    },
    {
        title: "Presentation - Pusat Pertumbuhan Indonesia",
        description : "Geography presentation project about economic growth centers in Indonesia.",
        image: "/product/pusatpertumbuhan.png",
        tech: [SOFTWARE.powerpoint],
        category: "presentation",
        source: "#",
        link: "#"
    },
]

export const EXPERIENCE = [
    {
        title: "Fullstack Developer",
        company: "Inovasi Alfatih Maulana – Talents Mapping",
        date: "Jan 2025 – Sekarang",
        description: "Mengembangkan fitur LMS, training, dashboard analitik, generator result report assessment powerpoint, dan role-based system. Menerapkan cron job handler, reminder, serta verifikasi dokumen."
    },
    {
        title: "Eko Berseka",
        company: "Bank Sampah Berseka Tasikmalaya",
        date: "September 2025 – Oktober 2025",
        description: "Membangun sistem manajemen inventori limbah, stok, nasabah, dan alur kas (akuntansi) serta laporan"
    },
    {
        title: "Desa Wisata Taraju",
        company: "Desa Wisata Taraju",
        date: "Agustus 2025 – September 2025",
        description: "Membangun sistem pemesanan paket wisata, voucher, booking, kelola paket dan scan tiket."
    },
    {
        title: "Web Developer",
        company: "Yasiin.id",
        date: "Jun 2025 – Jul 2025",
        description: "Membangun sistem registrasi acara berbasis QR-Code dan notifikasi otomatis menggunakan cron job serta WhatsApp blast."
    },
    {
        title: "Freelancer Website Manager",
        company: "HM Infotech",
        date: "Sep 2024 – Okt 2024",
        description: "Mengatur konfigurasi Google AdSense dan pengelolaan website remote untuk klien dari India."
    },
]

export const CERTIFICATES = [
    {
        title: "Go (Basic)",
        issuer: "HackerRank",
        date: "May 2024",
        image: "/certificates/go-basic.png",
        link: "#"
    },
    {
        title: "React (Basic)",
        issuer: "HackerRank",
        date: "Jun 2024",
        image: "/certificates/react-basic.png",
        link: "#"
    }
]
