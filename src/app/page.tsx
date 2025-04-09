'use client';

import { useState } from 'react';
import Link from 'next/link';

import { supabase } from '../../lib/supabaseClient';


const questions = [
  "Pulled an all-nighter finishing an assignment?",
  "Secretly hated your frat/sororiety?",
  "Complained about the lack of places to study?",
  "Considered dropping out of school?",
  "Took a gap quarter or year?",
  "Changed your major?",
  "Cried over a midterm or final?",
  "Used ChatGPT to do an assignment or exam?",
  "Is an engineering major?",
  "Missed a final on accident?",
  "Decided to pursue a startup instead of a traditional job?",
  "Already have an internship or full-time offer lined up for summer?",
  "Took a photo in front of the Cal Poly sign in front of 1901?",
  "Hiked the 'P'?",
  "Waited in line for SLODoco past midnight?",
  "Been to a party on Hathway, Highland, or Slack?",
  "Gone to Saint Frattys?",
  "Threw up because you drank too much?",
  "Gone to Farmers’ Market on Thursday night?",
  "Taken a lab at 8 AM?",
  "Wanted to drop a class because of the professor?",
  "Given a professor a 1-star review on PolyRatings?",
  "Gotten free food at UU during club tabling?",
  "Hiked one of the 3 hills at night?",
  "Gone to Avila Beach with your friends?",
  "Joined a professional frat or club?",
  "Gotten stuck with an 8 AM just because of class demand?",
  "Rented from a sketchy SLO landlord?",
  "Lived in PCV or Cerro Vista?",
  "Had drama with your housemates?",
  "Lived in a house with 5+ people in it?",
  "Complained about SLO rent prices?",
  "Jaywalked California or Grand?",
  "Took a bus to campus?",
  "Missed the bus because of a class being delayed?",
  "Payed for a parking spot on campus?",
  "Stayed at the library past midnight?",
  "Lied about your grades to your friends or parents?",
  "Cried in public on campus (UU, library, etc)?",
  "Pulled an all-nighter for a group project and no one else really did anything?",
  "Had a roommate you avoided at all costs?",
  "Went to the rec during peak hours?",
  "Gotten lit at Pirate’s Cove?",
  "Gone to Morro Bay?",
  "Complained about slow WiFi in your apartment or dorm?",
  "Had your scooter or bike stolen?",
  "Been caught by an RA breaking dorm rules?",
  "Contemplated life after a rought exam?",
  "Called campus food 'mid' at least once?",
  "Left mid-class because it was useless?",
  "Used up all your dining dollars in the first 5 weeks?",
  "Thought SLO was a different place in the first week?",
  "Slept through a midterm?",
  "Taken a professor just because they had a good PolyRatings score?",
  "Ghosted a group project mid-quarter?",
  "Taken a sport class (1 unit)?",
  "Taken a 'fun' elective that tanked your GPA?",
  "Cried in a professor's office hours?",
  "Gotten locked out of your dorm or apartment?",
  "Had a class in the creepy part of Engineering East?",
  "Slept through registration and got the worst schedule possible?",
  "Got rained on biking to class?",
  "Been late because you couldn’t find your lecture hall?",
  "Got sick from eating 1901 or Vista Grande?",
  "Gotten free stuff at the WOW Club Showcase?",
  "Gotten a parking ticket on campus?",
  "Biked on campus and almost got hit or hit someone?",
  "Been to a party that got shut down by cops?",
  "Had someone crash on your couch after a party?",
  "Gotten food from Taqueria Santa Cruz or Dominos at midnight?",
  "Had someone steal the machine you were using in the rec?",
  "Talked bad about your major?",
  "Gone to a frat/sororiety formal?",
  "Lost your PolyCard and had to replace it?",
  "Stayed on campus over break and regretted it?",
  "Worked on a senior project last minute?",
  "Used the UU as a nap spot?",
  "Been to Scout?",
  "Been to In n Out at Arroyo Grande?",
  "Made friends in the Kennedy Library?",
  "Hated on Cal Poly for delaying the library?",
  "Failed a class?",
  "Had a class with someone who is an influencer?",
  "Used a roommate’s stuff without asking?",
  "Been kicked out of your own dorm?",
  "Wanted to go to a different school after WOW week?",
  "Had a 6-9 class or lab?",
  "Smoked or drank on campus?",
  "Gone to classes while hungover?",
  "Gotten an internship through the Career Fair?",
  "Gone to Career Fair just for free stuff?",
  "Said 'I’m dropping this class' mid-quarter but didn’t?",
  "Ordered something from quickie (when it existed)?",
  "Lied about a club involvement on your resume?",
  "Been ghosted after a WOW group friendship?",
  "Had a mental breakdown in front of your roomates?",
  "Had an intrusive thought of yelling in pain during class because of how much it sucked?",
  "Been to a bar downtown?",
  "Felt hungover Friday morning from the bars?",
  "Went so someones bar-crawl, but you truly don't like that person?",
  "Shared this test with someone?",
];


export default function Home() {
  const [checked, setChecked] = useState<boolean[]>(new Array(questions.length).fill(false));

  const handleCheck = (index: number) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
  };

  const score = 100 - checked.filter(Boolean).length;

  const handleSaveScore = async () => {
    localStorage.setItem('calpolyScore', score.toString());

    const { data, error } = await supabase
      .from('scores')
      .insert([{ score }]);
    
    console.log('Sending to Supabase:', { score });

    if (error) {
      console.error('Failed to save score to Supabase:', error);
    } else {
      console.log('Score saved:', data);
    }
  };

  return (
    <main className="relative bg-yellow-100 min-h-screen px-4 py-10 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/mustang.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '100px',
          backgroundPosition: 'center',
          opacity: 0.025,
        }}
      />
  
      <div className="relative z-10 flex justify-center items-start">
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
              <li key={i}>
                <label
                  htmlFor={`q-${i}`}
                  className="flex items-start cursor-pointer hover:bg-yellow-200 px-2 py-1 rounded transition"
                >
                  <input
                    id={`q-${i}`}
                    type="checkbox"
                    checked={checked[i]}
                    onChange={() => handleCheck(i)}
                    className="mt-1 mr-3"
                  />
                  <span>{i + 1}. {q}</span>
                </label>
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
      </div>
    </main>
  );  
}
