'use client';

import { useState } from 'react';
import Link from 'next/link';



const questions = [
  "Pulled an all-nighter at Kennedy Library?",
  "Secretly hated your frat/srat?",
  "Complained about the lack of 24/7 library hours?",
  "Considered dropping out to become a full-time SLO farmer?",
  "Actually dropped out or took a gap year?",
  "Changed your major?",
  "Cried over a midterm or final?",
  "Used ChatGPT to do an assignment or exam?",
  "Is a CS, SE, or CE major?",
  "Walked on the Cal Poly seal?",
  "Hiked the 'P' or Cerro San Luis?",
  "Waited in line for SLO Donut Company past midnight?",
  "Been to a party on Hathway, Highland, or Slack?",
  "Done a Saint Fratty's crawl?",
  "Gone to Farmers’ Market on Thursday night?",
  "Taken a lab at 7 AM?",
  "Gone to Poly Royal and actually remembered it?",
  "Given a professor a 1-star review on PolyRatings?",
  "Gotten free food at UU during club tabling?",
  "Seen the Mustang on top of the hill at night?",
  "Gone to Avila Beach with your whole house?",
  "Joined a professional frat or club?",
  "Gotten stuck with an 8 AM just because of class demand?",
  "Rented from a sketchy SLO landlord?",
  "Lived in PCV or Poly Canyon Village?",
  "Had drama with your housemates?",
  "Lived in a house with 5+ people in it?",
  "Complained about SLO rent prices?",
  "Got caught jaywalking across Grand or California?",
  "Took a bus to campus because parking was impossible?",
  "Prayed for a parking spot at yakʔitʸutʸu?",
  "Stayed at the library past midnight?",
  "Lied about your grades to your friends or parents?",
  "Cried in public on campus (UU, library, etc)?",
  "Pulled an all-nighter for a group project and only 2 people did the work?",
  "Had a roommate you avoided at all costs?",
  "Done the Poly Escapes trips or climbed the rock wall?",
  "Gotten lit at Pirate’s Cove?",
  "Took graduation photos at every cliché SLO spot?",
  "Complained about slow WiFi in your apartment or dorm?",
  "Rode a Lime scooter across campus?",
  "Been caught by an RA breaking dorm rules?",
  "Drank at Saint Fratty's before noon?",
  "Called campus food 'mid' at least once?",
  "Left mid-quarter to go to the snow or the beach instead of class?",
  "Used up all your dining dollars in the first 5 weeks?",
  "Said 'Wow, SLO is just different' unironically?",
  "Slept through a midterm?",
  "Sent a message on the YikYak that got 50+ upvotes?",
  "Taken a professor just because they had a good PolyRatings score?",
  "Ghosted a group project mid-quarter?",
  "Taken a surf class or yoga as your GE?",
  "Taken a 'fun' elective that tanked your GPA?",
  "Cried in a professor's office hours?",
  "Gotten locked out of your dorm or apartment?",
  "Had a class in the creepy part of Engineering East?",
  "Slept through registration and got the worst schedule possible?",
  "Got rained on biking to class?",
  "Been late because you couldn’t find your lecture hall in Baker?",
  "Got sick from eating Howards or Vista Grande?",
  "Gotten free stuff at the WOW Club Showcase?",
  "Gotten a parking ticket on campus?",
  "Biked on campus and almost got hit or hit someone?",
  "Been to a party that got shut down by cops?",
  "Had someone crash on your couch after a party?",
  "Gotten a burrito from Tacos de Acapulco or Guisados after midnight?",
  "Gotten in a heated Reddit debate on r/CalPoly?",
  "Changed your major more than once?",
  "Had to walk all the way from R-1 lot just to get to class?",
  "Gone to a frat/srat date dash?",
  "Lost your PolyCard and had to replace it?",
  "Stayed on campus over break and regretted it?",
  "Worked on a senior project last minute?",
  "Used the UU as a nap spot?",
  "Been to Boo Boo Records or Kreuzberg?",
  "Been to a secret beach or hiking spot you swore to never reveal?",
  "Hooked up with someone you met through a WOW group?",
  "Hooked up with someone at Saint Fratty's?",
  "Woken up not knowing whose house you were in?",
  "Made friends in the Kennedy Library bathroom?",
  "Made a meme about Cal Poly and it went semi-viral?",
  "Failed a class?",
  "Had a class with someone who went viral or is an influencer?",
  "Used a roommate’s stuff without asking?",
  "Been locked out during WOW week chaos?",
  "Seen the famous cowboy guy around campus?",
  "Blamed your group project’s failure on the 'Learn by Doing' motto?",
  "Smoked or drank on campus?",
  "Gone to classes while hungover?",
  "Used YikYak to find a party?",
  "Gotten an internship through the Career Fair?",
  "Gone to Career Fair just for free stuff?",
  "Had a one-night stand with someone from PolyConfessions?",
  "Said 'I’m transferring' mid-quarter but didn’t?",
  "Actually started your own business or side hustle while at Cal Poly?",
  "Lied about a club involvement on your resume?",
  "Been ghosted after a WOW group friendship?",
  "Had a mental breakdown in the library or UU?",
  "Considered dropping out just for the vibes?",
  "Shared this test with someone?"
];


export default function Home() {
  const [checked, setChecked] = useState<boolean[]>(new Array(questions.length).fill(false));

  const handleCheck = (index: number) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
  };

  const score = 100 - checked.filter(Boolean).length;

  const handleSaveScore = () => {
    localStorage.setItem('calpolyScore', score.toString());
  };

  return (
    <main className="bg-yellow-100 min-h-screen flex justify-center items-start px-4 py-10">
      <div className="bg-[#fff9ec] p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-4xl font-bold font-serif text-black text-center mb-2">
          The <span className="text-red-700 italic">Official</span>
        </h1>
        <h2 className="text-5xl font-extrabold font-serif text-green-800 text-center mb-4">
          Cal Poly SLO Purity Test
        </h2>
        <p className="italic font-serif text-center text-gray-800 mb-6">Have you ever…</p>

        <p className="text-center text-black font-serif text-[15px] leading-relaxed mb-6">
          The Purity Test is a voluntary opportunity for Mustangs to reflect on their Cal Poly journey and the unique experiences that make up SLO life.
          <br /><br />
          <span className="font-bold text-red-600">
            Caution: This is not a bucket list. Completing all the items on this list means you're cooked.
          </span>
          <br />
          Check every item you have done, your purity score will be calculated at the end.
        </p>

        <ul className="space-y-4 text-black font-serif text-[14px] leading-snug">
          {questions.map((q, i) => (
            <li key={i} className="flex items-start">
              <input
                type="checkbox"
                checked={checked[i]}
                onChange={() => handleCheck(i)}
                className="mt-1 mr-3"
              />
              <span>{i + 1}. {q}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 text-center">
          <Link href="/results">
            <button
              onClick={handleSaveScore}
              className="bg-green-900 hover:bg-green-800 text-white font-bold py-2 px-6 rounded-lg transition duration-200 font-serif"
            >
              Calculate My Cal Poly Purity Score
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
