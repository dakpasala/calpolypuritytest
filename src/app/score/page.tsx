'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ScorePage() {
  const [score, setScore] = useState<number | null>(null);
  const [shared, setShared] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedScore = localStorage.getItem('calpolyScore');
    if (storedScore) {
      setScore(parseInt(storedScore, 10));
    }
  }, []);

  const handleNativeShare = async () => {
    const shareData = {
      title: 'Cal Poly SLO Purity Test',
      text: `I scored ${score}% on the Cal Poly SLO Purity Test! Try it yourself:`,
      url: window.location.origin,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setShared(true);
      } catch (err) {
        console.log('Share canceled or failed:', err);
        setShared(true);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.origin);
        alert("Sharing isn't supported on this device, but the link was copied to your clipboard.");
        setShared(true);
      } catch (err) {
        alert("Couldn't copy the link. Try manually sharing the URL.");
        console.error(err);
      }
    }
  };

  const handleSocialShare = () => {
    setShared(true);
  };

  const handleRetake = () => {
    localStorage.removeItem('calpolyScore');
    router.push('/');
  };

  const getReactionText = (score: number) => {
    if (score >= 90) return "You genuinely do not go to SLO bruh 😭";
    if (score >= 75) return "You’ve had a real Cal Poly experience! 💚💛";
    if (score >= 50) return "Definitely been around SLO a bit 👀";
    if (score >= 25) return "Yeah… you’re cooked 😵‍💫";
    return "Huh.. no words can explain your behavior 🫠";
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
          <h1 className="text-4xl font-bold font-serif text-black mb-2 text-center">
            The <span className="text-red-700 italic">Official</span>
          </h1>
          <h2 className="text-5xl font-extrabold font-serif text-green-800 mb-6 text-center">
            Cal Poly SLO Purity Test
          </h2>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-black mb-4 font-serif">
              Here's Your Cal Poly Purity Score:
            </h3>
            <p className="text-6xl font-extrabold text-green-800 mb-2 font-serif">
              {score !== null ? `${score}%` : 'Loading...'}
            </p>
            {score !== null && (
              <p className="italic text-black font-serif text-lg mb-6">{getReactionText(score)}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 text-center mb-4">
            <button
              onClick={handleRetake}
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg font-serif transition duration-200"
            >
              🔁 Take the Test Again
            </button>
            <button
              onClick={handleNativeShare}
              className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg font-serif transition duration-200 flex items-center gap-2 justify-center"
            >
              📤 Share My Score
            </button>
          </div>

          <p className="font-serif mb-3 text-black text-center">Share your score with friends!</p>
          <div className="flex justify-center gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=I+scored+${score}%25+on+the+Cal+Poly+SLO+Purity+Test!+https://calpolypuritytest.vercel.app`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSocialShare}
              className="bg-black w-10 h-10 rounded-md flex items-center justify-center"
            >
              <img src="/xlogo.png" alt="X" className="w-6 h-6" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://calpolypuritytest.vercel.app`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSocialShare}
              className="bg-blue-700 w-10 h-10 rounded-md flex items-center justify-center"
            >
              <img src="/facebooklogo.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=I+scored+${score}%25+on+the+Cal+Poly+SLO+Purity+Test!+https://calpolypuritytest.vercel.app`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSocialShare}
              className="bg-green-500 w-10 h-10 rounded-md flex items-center justify-center"
            >
              <img src="/whatsapplogo.png" alt="WhatsApp" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
