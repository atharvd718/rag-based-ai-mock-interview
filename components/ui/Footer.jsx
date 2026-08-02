// const Footer = () => {
//     return (
//       <footer className="text-[#2C1810] mt-16 md:mt-32">
//         <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

//           {/* Brand Name */}
//           {/* <div className="text-center md:text-left mb-6 md:mb-0">
//             <h2 className="text-2xl font-bold text-[#2C1810]">AI Mock Interview</h2>
//             <p className="text-sm mt-2">Crack your dream job with AI-driven mock interviews.</p>
//           </div>
//    */}
//           {/* Navigation Links */}
//           <div className="flex flex-wrap gap-3 md:gap-6 text-sm">
//             <a href="/about" className="hover:text-pink-800 transition">About</a>
//             <a href="https://github.com/Adi1816/AI-Mock-Interview" target="blank" className="hover:text-pink-800 transition">Features</a>
//             <a href="https://www.linkedin.com/in/aditya-srivastava-12476524a/" target="blank" className="hover:text-pink-800 transition">Contact</a>
//             <a href="/privacy" className="hover:text-pink-800 transition">Privacy</a>
//           </div>

//           {/* Social Icons
//           <div className="flex gap-4 mt-6 md:mt-0">
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2C1810] transition">
//               <i className="fab fa-twitter text-xl"></i>
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2C1810] transition">
//               <i className="fab fa-linkedin text-xl"></i>
//             </a>
//             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2C1810] transition">
//               <i className="fab fa-github text-xl"></i>
//             </a>
//           </div> */}

//         </div>

//         {/* Copyright Section */}
//         <div className="flex flex-col justify-center items-center">
//         <div className="text-center text-xs border-t border-[#C4B49A] mt-6 p-4">
//           © {new Date().getFullYear()} AI Mock Interview. All rights reserved.
//         </div>
//         <div className="text-center text-xs border-[#C4B49A]">Made with ❤️ by <strong><a href="https://linktr.ee/Adi1816" target="blank">Aditya Srivastava</a></strong></div>

//         </div>

//       </footer>
//     );
//   };

//   export default Footer;

// ----------------------------------------------------------------

const Footer = () => {
  return (
    <footer className="relative text-[#2C1810] bg-[#EDE8DC] backdrop-blur-xl border-t border-[#C4B49A]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#8B6F47]/20 to-purple-900/20 opacity-30 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8 flex flex-col items-center justify-center space-y-4">
        <a
          href="/privacy"
          className="text-sm font-medium text-[#2C1810] transition-colors duration-300 relative group"
        >
          Privacy
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B6F47] to-[#A0845C] group-hover:w-full transition-all duration-300"></span>
        </a>

        <div className="flex flex-col items-center space-y-1 text-center">
          <p className="text-xs text-[#2C1810]">
            © {new Date().getFullYear()} AI Mock Interview. All rights reserved.
          </p>
          <p className="text-xs text-[#2C1810]">
            Made with ❤️ by{" "}
            <a
              href="https://github.com/atharvd718"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B6F47] to-[#A0845C] hover:from-[#8B6F47] hover:to-[#A0845C] font-semibold transition-all duration-300"
            >
              Atharv Deshmukh
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
