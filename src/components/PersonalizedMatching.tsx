import React from 'react';
import { UserCheck, PenSquare, MessageCircle } from 'lucide-react';

function MatchCard({ 
  icon: Icon, 
  title, 
  description, 
  learnMoreLink 
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  learnMoreLink: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-pink-500 flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-pink-500">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
        {description}
      </p>
      <a 
        href={learnMoreLink} 
        className="text-pink-500 font-semibold flex items-center hover:text-pink-600 transition-colors"
      >
        Learn More <span className="ml-1">›</span>
      </a>
    </div>
  );
}

function App() {
  const matchingFeatures = [
    {
      icon: UserCheck,
      title: "Registration & Verification",
      description: "Click the 'Register' button and enter basic details to get yourself verified by the system. Upon verification, you will be directed to fill a form and provide information about yourself and your preferred partner...",
      learnMoreLink: "#registration"
    },
    {
      icon: PenSquare,
      title: "Creating your profile",
      description: "Complete your profile by uploading your best photos, along with any specific details you wish to add in order to make your profile impressive, and attract better responses...",
      learnMoreLink: "#profile"
    },
    {
      icon: MessageCircle,
      title: "Communicating with your personalized match maker",
      description: "Once you're on the network, feel free to contact our representatives and let them identify your needs and preferences...",
      learnMoreLink: "#communication"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-pink-500">Personalized</span>{' '}
            <span className="text-gray-700">Matching</span>
          </h2>
          <div className="flex justify-center items-center gap-4">
            <div className="h-px bg-pink-500 w-12"></div>
            <div className="text-pink-500">❤</div>
            <div className="h-px bg-pink-500 w-12"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {matchingFeatures.map((feature, index) => (
            <MatchCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              learnMoreLink={feature.learnMoreLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;