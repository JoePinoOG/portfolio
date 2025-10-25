'use client';
export default function Contact() {
    return (
        <div className="flex gap-4 items-center justify-center p-8 ">
            <a href="https://www.linkedin.com/in/camilo-estay-70b493293/" target="_blank" rel="noopener noreferrer"
               className="group relative p-4 rounded-lg border border-gray-300 bg-transparent hover:bg-gray-100 transition-all duration-300"
               aria-label="LinkedIn">
                <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8 group-hover:invert-0 transition-all duration-300"/>
            </a>
            <a
                href="https://github.com/JoePinoOG"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-lg border border-gray-300 bg-transparent hover:bg-gray-100 transition-all duration-300"
                aria-label="GitHub">
                <img src="/github.svg" alt="GitHub" className="w-8 h-8 filter invert group-hover:invert-0 transition-all duration-300"/>
                </a>
        </div>
    );
};