'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ResultsPage() {
  const [shared, setShared] = useState(false);
  const router = useRouter();

  const handleNativeShare = async () => {
    const shareData = {
      title: 'Cal Poly SLO Purity Test',
      text: 'I just took the Cal Poly SLO Purity Test. Try it yourself:',
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

  const handleViewResults = () => {
    if (shared) {
      router.push('/score');
    }
  };

  return (
    <main className="relative bg-yellow-100 min-h-screen px-4 py-10 overflow-hidden">
      {/* Mustang background layer */}
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

      {/* Content wrapper */}
      <div className="relative z-10 flex justify-center items-start">
        <div className="bg-[#fff9ec] p-8 rounded-lg shadow-lg max-w-4xl w-full">
          <h1 className="text-4xl font-bold font-serif text-black mb-2 text-center">
            The <span className="text-red-700 italic">Official</span>
          </h1>
          <h2 className="text-5xl font-extrabold font-serif text-green-800 mb-6 text-center">
            Cal Poly SLO Purity Test
          </h2>

          <h3 className="text-2xl font-bold font-serif text-black mb-2 text-center">
            Share the Cal Poly Purity Test
          </h3>
          <p className="mb-6 font-serif text-gray-800 text-center">
            Before we reveal your score, we ask you to share this test with someone!
          </p>

          <div className="text-center">
            <button
              onClick={handleNativeShare}
              className="bg-green-900 hover:bg-green-800 text-white font-bold py-2 px-6 rounded-lg mb-4 font-serif transition duration-200 flex items-center gap-2 justify-center mx-auto"
            >
              📤 Share Test
            </button>
          </div>

          <div className="flex justify-center gap-4 my-4">
            <a
              href="https://twitter.com/intent/tweet?text=Just+did+the+Cal+Poly+Purity+Test!+https://calpolypuritytest.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSocialShare}
              className="bg-black w-10 h-10 rounded-md flex items-center justify-center"
            >
              <img src="/xlogo.png" alt="X" className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://calpolypuritytest.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSocialShare}
              className="bg-blue-700 w-10 h-10 rounded-md flex items-center justify-center"
            >
              <img src="/facebooklogo.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a
              href="https://api.whatsapp.com/send?text=Try+the+Cal+Poly+Purity+Test!+https://calpolypuritytest.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSocialShare}
              className="bg-green-500 w-10 h-10 rounded-md flex items-center justify-center"
            >
              <img src="/whatsapplogo.png" alt="WhatsApp" className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center">
            <button
              disabled={!shared}
              onClick={handleViewResults}
              className={`w-full py-2 px-6 rounded-lg font-serif font-bold mt-4 transition ${
                shared
                  ? 'bg-green-700 text-white hover:bg-green-600'
                  : 'bg-gray-300 text-gray-600 cursor-not-allowed'
              }`}
            >
              View My Results →
            </button>

            {!shared && (
              <p className="text-sm text-red-600 font-serif mt-2">
                Please share with someone to see your score!
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
