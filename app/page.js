// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";
// import { CheckCircle, ArrowRight } from "lucide-react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";  // Router import kiya
// import Footer from "@/components/ui/Footer";

// export default function LandingPage() {
//   const router = useRouter(); // Router instance create kiya

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-[#EDE8DC] text-[#2C1810] p-6 bg-cover bg-center"
//     style={{
//       backgroundImage: "url('https://img.freepik.com/free-vector/watercolor-background_87374-57.jpg?t=st=1741549948~exp=1741553548~hmac=69b281a9c1366e521958d0caf2bab5bced8249845cbd41b53ced55d79aa3ae22&w=2000')",
//     }}
//     >
//       {/* Logo */}
//       <Image
//         src='/logo.svg'
//         width={50}
//         height={50}
//         alt='Logo'
//         className="absolute top-2 left-2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[50px] lg:h-[50px]"
//       />

//       {/* Hero Section */}
//       <div className="text-center max-w-3xl">
//         <h1 className="text-3xl md:text-5xl font-bold leading-tight">Crack Your Dream Job with AI-Powered Mock Interviews</h1>
//         <p className="mt-4 text-md md:text-lg text-[#2C1810]">
//           Experience real-time AI-driven interviews tailored to your skill level and job aspirations.
//         </p>
//         <div className="mt-6 flex justify-center gap-4">
//           <Button
//             className="px-6 py-3 text-lg font-bold bg-pink-600 hover:bg-pink-700"
//             onClick={() => router.push("/dashboard")} // Click par redirect
//           >
//             Get Started
//           </Button>
//           {/* <Button>hellooo</Button> */}
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl w-full">
//         {["Realistic AI Interviews", "Instant Feedback", "Personalized Questions"].map((feature, index) => (
//           <Card key={index} className="bg-transparent border-pink-50">
//             <CardContent className="p-6 text-center ">
//               <CheckCircle className="text-pink-600 mx-auto mb-4" size={40} />
//               <h3 className="text-xl text-pink-500 font-semibold">{feature}</h3>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       <Footer/>
//     </div>
//   );
// }

// ----------------------------------------------------------------

// "use client";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { CheckCircle, ArrowRight, Sparkles, Brain, Zap } from "lucide-react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import Footer from "@/components/ui/Footer";
// import { motion } from "framer-motion";

// export default function LandingPage() {
//   const router = useRouter();

//   const features = [
//     {
//       title: "Realistic AI Interviews",
//       icon: Brain,
//       description: "Advanced neural networks simulate real-world interview scenarios",
//       color: "from-[#8B6F47] to-[#A0845C]"
//     },
//     {
//       title: "Instant Feedback",
//       icon: Zap,
//       description: "Millisecond-precise analysis of your performance and potential",
//       color: "from-[#8B6F47] to-[#A0845C]"
//     },
//     {
//       title: "Personalized Learning",
//       icon: Sparkles,
//       description: "Adaptive AI tailors questions to your unique skill profile",
//       color: "from-green-400 to-emerald-600"
//     }
//   ];

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[#EDE8DC] text-[#2C1810]">
//       {/* Colorful Background Particles */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-background-shine
//           bg-[radial-gradient(circle_farthest-side_at_0_0,rgba(255,0,182,0.2),transparent),
//           radial-gradient(circle_farthest-side_at_100%_100%,rgba(0,255,199,0.2),transparent)]
//           opacity-30 blur-3xl"></div>
//       </div>

//       {/* Content Container */}
//       <div className="relative z-10 container mx-auto px-5 py-2 flex flex-col items-center justify-center min-h-screen">
//         {/* Logo with Soft Glow */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="absolute top-3 left-1"
//         >
//           <Image
//             src='/logo.svg'
//             width={20}
//             height={20}
//             alt='Logo'
//             className="w-6 h-6 md:w-10 md:h-10 filter brightness-150 saturate-150 animate-soft-pulse"
//           />
//         </motion.div>

//         {/* Hero Section with Refined Text */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-center max-w-4xl"
//         >
//           <h1 className="text-3xl md:text-5xl font-extrabold leading-tight
//             bg-clip-text text-transparent
//             bg-gradient-to-r from-white via-white/80 to-white/60
//             animate-gradient-text
//             drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
//             Revolutionize Your Interview Preparation with AI
//           </h1>
//           <p className="mt-6 text-md md:text-lg text-[#2C1810] max-w-3xl mx-auto
//             drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
//             Cutting-edge AI technology transforms interview preparation, providing hyper-personalized, intelligent coaching tailored to your unique professional journey.
//           </p>

//           <div className="mt-8 flex justify-center space-x-4">
//             <Button
//               className="px-8 py-8 text-2xl font-bold
//               relative
//               border-2 border-transparent
//               bg-[#EDE8DC] backdrop-blur-xl
//               group
//               overflow-hidden"
//               onClick={() => router.push("/dashboard")}
//             >
//               {/* Animated Border Effect */}
//               <span className="absolute inset-0 border-2 border-transparent
//                 group-hover:border-gradient-animated
//                 transition-all duration-500 ease-in-out"></span>

//               <span className="relative z-10 flex items-center
//                 bg-gradient-to-r from-[#8B6F47] to-[#A0845C]
//                 bg-clip-text text-transparent
//                 group-hover:text-[#2C1810]
//                 transition-all duration-300">
//                 Start Your AI Journey
//                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//               </span>
//             </Button>
//           </div>
//         </motion.div>

//         {/* Features Section with Enhanced Cards */}
//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl w-full"
//         >
//           {features.map((feature, index) => (
//             <Card
//               key={index}
//               className="bg-[#EDE8DC]
//               backdrop-blur-xl
//               border-2 border-transparent
//               relative
//               group
//               overflow-hidden
//               hover:border-gradient-animated
//               transition-all duration-500"
//             >
//               {/* Subtle Gradient Background */}
//               <div className={`absolute inset-0 bg-gradient-to-r ${feature.color}
//                 opacity-10 group-hover:opacity-20
//                 transition-opacity duration-300`}></div>

//               <CardContent className="p-8 text-center relative z-10">
//                 <feature.icon
//                   className="text-[#2C1810] mx-auto mb-6
//                   group-hover:text-[#2C1810]
//                   transition-colors duration-300
//                   animate-soft-pulse"
//                   size={50}
//                 />
//                 <h3 className="text-xl text-[#2C1810] font-bold mb-4
//                   group-hover:text-transparent
//                   group-hover:bg-clip-text
//                   group-hover:bg-gradient-to-r
//                   group-hover:from-white group-hover:to-white/60
//                   transition-all duration-300">
//                   {feature.title}
//                 </h3>
//                 <p className="text-[#2C1810] text-xs
//                   group-hover:text-[#2C1810]
//                   transition-colors duration-300">
//                   {feature.description}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </motion.div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Sparkles, Brain, Zap, X, Mail, Github, Linkedin, Code2, ChefHat } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/ui/Footer";

export default function LandingPage() {
  const features = [
    {
      title: "Realistic AI Interviews",
      icon: Brain,
      description: "Advanced neural networks simulate real-world interview scenarios",
      color: "from-[#8B6F47] to-[#A0845C]",
    },
    {
      title: "Instant Feedback",
      icon: Zap,
      description: "Millisecond-precise analysis of your performance and potential",
      color: "from-[#8B6F47] to-[#A0845C]",
    },
    {
      title: "Personalized Learning",
      icon: Sparkles,
      description: "Adaptive AI tailors questions to your unique skill profile",
      color: "from-[#8B6F47] to-[#A0845C]",
    },
  ];

  const [showAbout, setShowAbout] = useState(false);
  const links = [
    { name: "Email",      url: "mailto:atharv.d.718@gmail.com", icon: Mail },
    { name: "GitHub",     url: "https://github.com/atharvd718", icon: Github },
    { name: "LinkedIn",   url: "https://linkedin.com/in/atharvdeshmukhcs", icon: Linkedin },
    { name: "LeetCode",   url: "https://leetcode.com/u/Code_Atharv07/", icon: Code2 },
    { name: "CodeChef",   url: "https://www.codechef.com/users/atharv0718", icon: ChefHat },
    { name: "Codeforces", url: "https://codeforces.com/profile/atharvcodeforce", icon: Zap },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F5F0E8] text-[#2C1810] no-scrollbar">
      {/* Content Container */}
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center min-h-screen">
        {/* Logo with Soft Glow */}
        <div className="absolute top-3 left-1">
          <Image
            src="/logo.svg"
            width={20}
            height={20}
            alt="Logo"
            className="w-6 h-6 md:w-10 md:h-10 filter brightness-150 saturate-150 animate-soft-pulse"
          />
        </div>

        <button
          onClick={() => setShowAbout(true)}
          className="absolute top-4 right-4 z-50 flex items-center
           gap-2 rounded-full border border-[#C4B49A] bg-[#EDE8DC]
           px-4 py-2 text-xs font-semibold text-[#8B6F47] shadow-sm
           hover:bg-[#8B6F47] hover:text-[#FDFAF5] transition-all duration-200"
        >
          <div className="relative h-6 w-6 overflow-hidden rounded-full
           border border-[#8B6F47]">
            <Image
              src="/developer.jpg"
              alt="Atharv"
              fill
              className="object-cover object-top"
            />
          </div>
          About Developer
        </button>

        {/* Hero Section with Refined Text */}
        <div className="text-center max-w-4xl pt-2 md:-mt-20">
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#2C1810]"
          >
            Revolutionize Your Interview Preparation with AI
          </h1>
          <p
            className="mt-5 text-base md:text-lg text-[#6B5744] max-w-2xl mx-auto leading-relaxed"
          >
            Cutting-edge AI technology transforms interview preparation, providing hyper-personalized,
            intelligent coaching tailored to your unique professional journey.
          </p>

          <div className="mt-8 flex justify-center space-x-4">
            <Button asChild className="px-8 py-4 text-base font-semibold bg-[#8B6F47] text-[#FDFAF5] hover:bg-[#7A5F3A] rounded-full transition-all duration-300 shadow-md">
              <Link href="/dashboard" className="flex items-center gap-2">
                Start Your AI Interview
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>

        {/* Features Section with Enhanced Cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-8 max-w-5xl w-full">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-[#EDE8DC] border border-[#C4B49A] rounded-2xl relative group overflow-hidden hover:shadow-lg transition-all duration-500"
            >
              {/* Subtle Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.color}
                opacity-10 group-hover:opacity-20
                transition-opacity duration-300`}
              ></div>

              <CardContent className="p-8 text-center relative z-10">
                <feature.icon
                  className="text-[#2C1810] mx-auto mb-6
                  group-hover:text-[#2C1810]
                  transition-colors duration-300
                  animate-soft-pulse"
                  size={50}
                />
                <h3
                  className="text-lg text-[#2C1810] font-bold mb-3"
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[#6B5744] text-sm leading-relaxed"
                >
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {showAbout && (
        <div className="fixed inset-0 z-[100] flex items-center
         justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg rounded-2xl
           border border-[#C4B49A] bg-[#EDE8DC] p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowAbout(false)}
              className="absolute right-4 top-4 rounded-lg border
               border-[#C4B49A] bg-[#F5F0E8] p-1.5 text-[#6B5744]
               hover:bg-[#8B6F47] hover:text-[#FDFAF5] transition-all"
            >
              <X size={16} />
            </button>
            {/* TWO COLUMN LAYOUT — Photo right, Info left */}
            <div className="flex flex-col-reverse gap-6
             sm:flex-row sm:items-start sm:gap-8">
              {/* LEFT — Name, Title, Bio */}
              <div className="flex-1">
                <h2 className="text-2xl font-extrabold text-[#2C1810]">
                  Atharv Deshmukh
                </h2>
                <p className="mt-1 text-sm font-semibold text-[#8B6F47]">
                  Full Stack Developer & AI Enthusiast
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#6B5744]">
                  Passionate about building AI-powered products.
                  Built MockMate AI to help developers ace interviews
                  with personalized AI coaching.
                  Currently pursuing B.Tech in Computer Science.
                </p>
                {/* Tech Stack Pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Next.js","React","Node.js",
                    "PostgreSQL","Gemini AI","Clerk"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#C4B49A]
                       bg-[#F5F0E8] px-3 py-1 text-xs
                       font-medium text-[#6B5744]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* RIGHT — Photo */}
              <div className="flex justify-center sm:justify-end">
                <div className="relative h-32 w-28 overflow-hidden
                 rounded-xl border-2 border-[#8B6F47] shadow-md
                 sm:h-36 sm:w-32">
                  <Image
                    src="/developer.jpg"
                    alt="Atharv Deshmukh"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
            {/* Divider */}
            <div className="my-5 border-t border-[#C4B49A]" />
            {/* Connect Section */}
            <p className="mb-3 text-center text-xs font-semibold
             uppercase tracking-widest text-[#8B6F47]">
              Connect with me
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    title={link.name}
                    className="flex flex-col items-center gap-1.5
                     rounded-xl border border-[#C4B49A] bg-[#F5F0E8]
                     px-4 py-3 text-xs font-medium text-[#6B5744]
                     shadow-sm hover:scale-110 hover:border-[#8B6F47]
                     hover:bg-[#8B6F47] hover:text-[#FDFAF5]
                     transition-all duration-200"
                  >
                    <Icon size={20} strokeWidth={1.5} />
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
