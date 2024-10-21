'use client'
import Image from "next/image";
import { useState, useRef } from "react";

export default function Home() {

  const scrollRef = useRef(null);
  const testimonialRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300; // Adjust scroll amount as needed
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
  const scrollTesimonials = (direction) => {
    if (testimonialRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300; // Adjust scroll amount as needed
      testimonialRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
  const items = [
    {
      href: '',
      imgSrc: '/fmge.jpg',
      title: 'FMGE >',
      subtitle: 'For Foreign Medical Graduates',
    },
    {
      href: '',
      imgSrc: '/ss-surgery.jpg',
      title: 'NEET SS Surgery >',
      subtitle: 'By MCh Faculty',
    },
    {
      href: '',
      imgSrc: '/ss-medicine.jpg',
      title: 'NEET SS Medicine >',
      subtitle: 'By DM Faculty',
    },
    {
      href: '',
      imgSrc: '/pedia.jpg',
      title: 'NEET SS Paediatrics >',
      subtitle: 'Marrow NEET SS Paediatrics',
    },
  ];
  const testimonials = [
    {
      text: `“Marrow videos are close to my heart. I enjoyed watching all the videos and I remember binge-watching the entire Anaesthesia in a week due to its fun elements. GTs are my favourite learning tool and regular practice of GTs is a crucial element in preparation.”`,
      name: `Dr. Vaibhav`,
      image: '/neet2024-rank-01.webp'
    },
    {
      text: `“I felt that I couldn't understand Medicine without Dr. Rakesh's videos. His conceptual stories have always stuck in my mind easily. I regularly took all the Marrow Test series - GTs, Subject Wise Tests, and Mini Tests.”`,
      name: `Dr. Anjali`,
      image: '/neet2024-rank-02.webp'
    },
    {
      text: `“I never missed a single Mini Test or Subject-Wise Test. They boosted my preparation and helped me stay consistent. I solved custom modules of PYQs and PYTs to identify my weak topics and study them in depth.”`,
      name: `Dr. Saikumar`,
      image: '/neet2024-rank-03.webp'
    },
    {
      text: `“Marrowthon was a blessing for me in developing the habit of consistency. I solved all the QBank modules twice and used the bookmark categories wisely. While solving each GT, I made sure to cover the weak subjects identified in my previous test.”`,
      name: `Dr. Naisargee`,
      image: '/neet2024-rank-04.webp'
    },
    {
      text: `“I completed all the video lectures from Marrow, which helped me clear all the concepts. I also completed all the GTs. There was a mix of simple and tough GTs. NEET-PG 2024 felt exactly like a tough Marrow GT to me.”`,
      name: `Dr. Ravi`,
      image: '/neet2024-rank-04.webp'
    },
    {
      text: `“Marrow helped me build a strong foundation in my basics. When I started my preparation during my internship, I used Marrow Revision Videos, solved the related MCQs, and focused on PYQs of INI-CET, NEET-PG, and FMGE. I also took GTs every 7 to 10 days.”`,
      name: `Dr. Sonali`,
      image: '/neet2024-rank-05.webp'
    },
    {
      text: `“Compared to sitting and reading through a voluminous textbook, it was easier to go back to Bailey after watching Dr. Rohan's Surgery videos, or to revisit some of the flowcharts after listening to Dr. Rakesh's Medicine videos. OBG was also very simplified after listening to Dr. Sakshi's videos.”`,
      name: `Dr. Hamsavardhini`,
      image: '/neet2024-rank-06.webp'
    },
    {
      text: `“Initially, I was not interested in Surgery, but once I watched Marrow videos by Dr. Rohan, I fell in love with the subject. The way he explains in the videos completely changed my approach to the subject. The QBank and GTs were game changers; they helped me a lot.”`,
      name: `Dr. Sharanu`,
      image: '/neet2024-rank-07.webp'
    },
    {
      text: `“I used to solve custom modules regularly. If I was studying a subject, I would solve at least 100 MCQs from that subject using custom modules on the same day. The GTs also helped me identify my weak subjects and tailor my preparation accordingly.”`,
      name: `Dr. Karthiram`,
      image: '/neet2024-rank-010.webp'
    }
  ];

  return (
    <div className="w-full">
      {/* SECTION 1 */}
      <div className="bg-gradient-to-b from-[#1d7386] to-white w-full">
        <div className="pt-24 px-10 pb-16 flex flex-col gap-10 items-center">
          <div className="w-[100px] h-[82px]">
            <Image className="w-auto h-auto" src={'/marrow-award-gradient.svg'} width={10} height={12} alt='' priority></Image>
          </div>

          <h1 className="m-auto text-3xl font-bold text-white">
            The Gold Standard for NEET PG - NExT
          </h1>
          <button className="bg-[#62c8df] text-white text-center text-base py-2 px-20 rounded-xl border-[1px] border-solid border-transparent shadow-lg shadow-[#0000003b]">Get Started</button>
          <a className='text-[#337ab7] font-bold text-base' href="/">View Plans &gt; </a>
        </div>
      </div>
      {/* SECTION 2 */}
      <div className="flex justify-center items-center mb-12">
        <a href="/edition-8" target="">
          <Image className="w-auto h-auto" src={'/ed-8-launch-hover-sm.png'} width={300} height={300} alt='' priority></Image>
        </a>
      </div>
      {/* SECTION 3 */}
      <div className="p-8  bg-gradient-to-b from-white to-[#EFFBFE]">
        <Image className="mb-6 w-auto h-auto" src={'./qbank2.svg'} width={30} height={30} alt=''></Image>
        <span className="font-bold text-black text-xl">A super-charged </span>
        <span className="font-bold text-[#62c8df] text-xl">QBank</span>
        <p className="max-w-[605px] text-base my-4 text-[#5c5c5c] font-semibold">Revamped QBank with a 60-30-10 approach - with 60% clinical questions, 30% application-based and 10% one-liners. Prepared in line with the changing exam pattern. Includes improved Custom Module, Schema (all important topics in one place) & all new Magic Module.</p>
        <a className='text-[#337ab7] font-bold text-base' href="/">View Plans &gt; </a>
        <Image className="my-4 w-auto h-auto" src={'/ed6.5_qbank.png'} width={300} height={300} alt=''></Image>
      </div>
      {/* SECTION 4 */}
      <div className="p-8  bg-white">
        <Image className="mb-6 w-auto h-auto" src={'./videos.svg'} width={30} height={30} alt=''></Image>
        <span className="font-bold text-black text-xl">Recorded </span>
        <span className="font-bold text-[#62c8df] text-xl">Video</span>
        <span className="font-bold text-black text-xl"> Classes by India’s top faculty</span>
        <p className="max-w-[605px] text-base my-4 text-[#5c5c5c] font-semibold">Integrated conceptual content across all 19 subjects by India’s top medical faculty. Includes animations & real clinical scenarios for better understanding. Gain an extra edge with the latest Interactive MCQ Discussion Videos and new Recent update videos & Revision videos.</p>
        <a className='text-[#337ab7] font-bold text-base' href="/">View Plans &gt; </a>
        <Image className="my-4 w-auto h-auto" src={'/ed6.5_video.png'} width={300} height={300} alt=''></Image>
      </div>
      {/* SECTION 5 */}
      <div className="p-8 bg-gradient-to-b to-white from-[#EFFBFE]">
        <Image className="mb-6 w-auto h-auto" src={'./test_series.svg'} width={30} height={30} alt=''></Image>
        <span className="font-bold text-black text-xl">The largest pan-India  </span>
        <span className="font-bold text-[#62c8df] text-xl">Test Series</span>
        <span className="font-bold text-black text-xl"> with over 1 lakh participants</span>
        <p className="max-w-[605px] text-base my-4 text-[#5c5c5c] font-semibold">Taken by over 1 lakh participants across India, the Test Series gives you a fair idea of where you stand in the actual competition. Includes GTs that are closest to the real exam & real ranks, as testified by toppers of 2018, 2019, 2020, 2021, 2022, 2023 & 2024.</p>
        <a className='text-[#337ab7] font-bold text-base' href="/">View Plans &gt; </a>
        <Image className="my-4 w-auto h-auto" src={'/ed6.5_test.png'} width={300} height={300} alt=''></Image>
      </div>
      {/* SECTION 6 */}
      <div className="mx-5 px-9 cursor-pointer items-center flex flex-row justify-between shadow-xl sha shadow-[#000000b4] max-w-[340px] min-h-[250px] text-[#4a4a4a] rounded-2xl relative">
        <div className="flex flex-col gap-3 relative z-10 ">
          <span className="font-semibold text-2xl text-[#4a4a4a]">Marrow Edition 8 Notes</span>
          <hr className="border-t-[#ddd] border-t-2 w-1/2" />
          <span className="text-[#4d4d4d] text-sm">Only for Plan C users</span>
          <a className='text-[#337ab7] font-bold text-base' href="/">Know More &gt; </a>
        </div>
        <div className="absolute right-0 bottom-0 overflow-hidden rounded-xl">
          <Image className="object-contain max-h-full w-auto h-auto" src={'/e-8-notes-banner.png'} width={160} height={100} alt=''></Image>
        </div>
      </div>
      {/* SECTION 7 */}
      <div className="py-20 px-8 flex flex-col items-center mx-auto gap-10">
        <div className="max-w-52 text-center">
          <h1 className="font-bold text-black text-xl text-center">What makes
            <span className="font-bold text-[#62c8df] text-xl"> Marrow complete?</span>
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-[#62c8df] text-xl">01</span>
          <h1 className="font-bold text-black text-xl">Concept-based learning</h1>
          <p className="max-w-[605px] text-lg text-[#7b8182] font-semibolds leading-7">Marrow MCQs and Videos are structured in such a way that you understand the important concepts in each topic before you learn facts. The focus is on high-yield topics and repeat MCQs.</p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-[#62c8df] text-xl">02</span>
          <h1 className="font-bold text-black text-xl">SOLVE MCQs as opposed to READing them</h1>
          <p className="max-w-[605px] text-lg text-[#7b8182] font-semibolds leading-7">Since the exams are computer-based, practising MCQs is critical. This helps improve your educated guessing, thereby helping you tackle unsure questions better, especially when negative marking is involved.</p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-[#62c8df] text-xl">03</span>
          <h1 className="font-bold text-black text-xl">
            Error Free, Evidence-Based
          </h1>
          <p className="max-w-[605px] text-lg text-[#7b8182] font-semibolds leading-7">
            Every content on Marrow is peer-reviewed and comes with the latest edition of standard textbooks as references. Also, our doctors take them through multiple levels of stringent review to make sure there's no room for error.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-[#62c8df] text-xl">04</span>
          <h1 className="font-bold text-black text-xl">
            Makes you exam ready
          </h1>
          <p className="max-w-[605px] text-lg text-[#7b8182] font-semibolds leading-7">
            Marrow Test Series simulates the real exam, making sure you do not encounter any surprises on the big day. All MCQs are of extremely high probability, which makes you familiar with the actual pattern of questions.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-[#62c8df] text-xl">05</span>
          <h1 className="font-bold text-black text-xl">
            Retain 30% more of what you read
          </h1>
          <p className="max-w-[605px] text-lg text-[#7b8182] font-semibolds leading-7">
            Our modules employ Spaced Repetition, a learning technique that is proven to improve retention. In a study conducted among 8600 students, the group that used Marrow to study a topic performed significantly better.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-[#62c8df] text-xl">06</span>
          <h1 className="font-bold text-black text-xl">
            Be part of the largest Pan-India test series
          </h1>
          <p className="max-w-[605px] text-lg text-[#7b8182] font-semibolds leading-7">
            Marrow test series have set a record with the largest number of participants nation-wide. Participate in Marrow mock tests on a Laptop/Desktop to simulate the real exam. Take the test when it’s Live to get an accurate all-India rank. Also, comes with in-depth subject-wise performance analytics.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-[#62c8df] text-xl">07</span>
          <h1 className="font-bold text-black text-xl">
            Prepared by India's most loved medical teachers & top rank holders
          </h1>
          <p className="max-w-[605px] text-lg text-[#7b8182] font-semibolds leading-7">
            MCQs & videos on Marrow are prepared and reviewed by only the best teachers across the country. After every major exam like NEET-PG, INICET etc, Marrow works with the top 20% of the first 100 rankers to update the QBank.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-[#62c8df] text-xl">08</span>
          <h1 className="font-bold text-black text-xl">
            Learn using the most popular and trusted QBank
          </h1>
          <p className="max-w-[605px] text-lg text-[#7b8182] font-semibolds leading-7">
            Marrow QBank is a topic-wise collection of MCQs, which includes high yield and repeat questions. It is reviewed frequently to ensure we stay relevant to the updated pattern of exams, latest questions and trends. The updated QBank has 60% clinical questions in all subjects.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-[#62c8df] text-xl">09</span>
          <h1 className="font-bold text-black text-xl">
            Create your own custom MCQ module
          </h1>
          <p className="max-w-[605px] text-lg text-[#7b8182] font-semibolds leading-7">
            Using Custom Modules, you can set your own parameters such as the difficulty level, subjects, tags like #RecentUpdates and more. You can even create a module from your bookmarked question or the questions you marked incorrect.
          </p>
        </div>
      </div>
      {/* SECTION 8 */}
      <div className="p-8 bg-[#f4fdff] flex flex-col items-center mx-auto">
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-black text-xl leading-7 mb-5 text-center">
            <span className="font-bold text-[#62c8df] text-xl">Top 10 rankers </span>
            in NEET PG 2024 were Marrow Pro Students
          </h1>
          <a className='text-[#337ab7] font-bold text-base mx-auto' href="/">
            Listen to their stories here &gt; </a>
          <div className="flex flex-wrap gap-5 mt-8 justify-center">
            {testimonials.map((person, index) => {
              return (
                <div key={person.name} className="border-2 border-[#dbdbdb] shadow-sm shadow-[#0000000d] relative flex flex-col justify-center items-center w-fit rounded-xl p-3 gap-4 bg-white max-w-32">
                  <Image className="rounded-full w-auto h-auto" src={person.image} width={100} height={100} alt=''></Image>
                  <span className="text-sm font-bold text-[#4a4d4e] text-center mb-4">{person.name}</span>
                  <span className="absolute -bottom-4 flex justify-center items-center mx-auto font-bold bg-[#62c8df] text-white text-sm w-7 h-7 text-center rounded-full">{index + 1}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* SECTION 9: State-Based Carousel */}
      <div className="relative p-8">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollTesimonials('left')} className="text-lg font-bold text-[#62c8df] absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2">
            &lt;
          </button>
          <button onClick={() => scrollTesimonials('right')} className="text-lg font-bold text-[#62c8df] absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2">
            &gt;
          </button>
        </div>
        <div className="flex overflow-x-scroll gap-6 max-w-[918px]" ref={testimonialRef}>
          {testimonials.map((person, index) => {
            return (
              <div key={person.name + index} className="min-w-72 py-9 px-5 flex bg-white border-2 border-[#dbdbdb] rounded-xl shadow-sm shadow-[#0000000d] flex-col justify-between min-h-[386px]">
                <p className="max-w-[605px] text-base text-[#333] font-bold leading-7">{person.text}</p>
                <div className="flex gap-4">
                  <Image className="rounded-full w-auto h-auto" src={person.image} width={50} height={50} alt=''></Image>
                  <div className="flex flex-col justify-center">
                    <span className="text-sm font-bold text-[#2d2d2d] text-center">{person.name}</span>
                    <span className="text-[#575757] font-bold text-sm">Rank {index + 1}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* section 10 */}
      <div className="pt-20 pb-12 mx-auto">
        <h1 className="text-xl mx-10 font-bold text-[#1e1e1e] text-center">Marrow’s other Courses & Certification Programs</h1>
        <h1 className="text-base mx-10 mt-4 font-semibold text-[#4A4D4E] text-center">For every stage of your journey as a medical student</h1>
        <div className="flex justify-center relative">
          <div className="flex items-center justify-between">
            <button onClick={() => scroll('left')} className="text-lg font-bold text-[#62c8df] absolute left-0 top-1/2 transform -translate-y-1/2 z-20 p-2">
              &lt;
            </button>
            <button onClick={() => scroll('right')} className="text-lg font-bold text-[#62c8df] absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2">
              &gt;
            </button>
          </div>
          <div className="flex overflow-x-scroll max-w-[918px] mt-12 gap-6 mx-8" ref={scrollRef}>
            {items.map((item, index) => (
              <a key={index} href={item.href} className="min-w-72 gap-6 cursor-pointer flex flex-col rounded-xl border border-[#dbdbdb] shadow-md shadow-[#0000000d] p-0">
                <Image className="rounded-t-xl w-auto h-auto" src={item.imgSrc} width={350} height={350} alt={item.title} />
                <span className="p-4 flex flex-col gap-2">
                  <span className="text-lg text-[#1e1e1e] font-bold">{item.title}</span>
                  <span className="text-[#1e1e1e99] text-base">{item.subtitle}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Section 11 */}
      <div className="py-24 px-10 mx-auto">
        <div className="flex flex-col gap-12 justify-center">
          <h1 className="text-xl text-center font-bold">Marrow is available for use on all of your devices</h1>
          <Image className="w-auto h-auto" src={'/devices@2x.webp'} width={500} height={400} alt="" />
        </div>
      </div>
      {/* LOGIN WINDOW */}
      <div className="p-4">
        <div className="border-2 border-[#dbdbdb] rounded-xl shadow-sm shadow-[#0000000d] ">
          <div className="pt-14 p-4 text-center">
            <h1 className="text-2xl font-bold text-center text-[#4a4a4a] mb-8">Log in to your Marrow account</h1>
            <div className="flex flex-col gap-4 justify-center items-center mb-8">
              <button className="bg-[#62c8df] text-white shadow-md shadow-[#88888880] rounded-xl text-center w-[214px] py-2 px-3 font-bold text-base">Log in</button>
              <button className="bg-[#3b5998] text-white shadow-md shadow-[#88888880] rounded-xl text-center w-[214px] py-2 px-3 font-bold text-base">Log in with Facebook</button>
            </div>
            <a href="" className="text-[#4a90e2]">New user? Sign up</a>
          </div>
          <div className="border-t-2 border-[#dbdbdb] p-10 pb-15 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-center text-[#4a4a4a] mb-8">Get the app</h1>
            <Image className="pb-4 w-auto h-auto" src={'./apple_store_round.svg'} width={150} height={150} alt="" />
            <Image className="pb-4 w-auto h-auto" src={'./google_play_round.svg'} width={150} height={150} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
