import React, { useState, useEffect } from 'react';
import { Search, ChevronRight, Star, MapPin } from 'lucide-react';

const StateSelector = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState(null);
  const [userState, setUserState] = useState(null);
  
  useEffect(() => {
    setTimeout(() => {
      setUserState('Texas');
    }, 500);
  }, []);

  const popularStates = [
    'California',
    'Texas',
    'Florida',
    'New York',
    'Illinois'
  ];

  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
    'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
    'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
    'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
    'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
    'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  const filteredStates = states.filter(state =>
    state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNext = () => {
    if (selectedState) {
      console.log('Proceeding with state:', selectedState);
      // Add navigation or state management logic here
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-xl border-4 border-blue-200">
      <div className="relative bg-white/80 p-4 rounded-lg overflow-hidden">
        {/* Aero-style glass effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-blue-50/30 to-white/60 pointer-events-none" />
        
        {/* Content container */}
        <div className="relative z-10">
          {/* Location-based suggestion */}
          {userState && !selectedState && !searchQuery && (
            <div className="mb-6 bg-gradient-to-r from-blue-50 to-white rounded-lg border-2 border-blue-200 p-3">
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <MapPin size={16} />
                <span className="text-sm font-semibold">Your Location</span>
              </div>
              <button
                onClick={() => setSelectedState(userState)}
                className="w-full p-3 text-left bg-white rounded-lg border-2 border-blue-300 hover:bg-blue-50 hover:border-blue-400 transition-colors flex items-center gap-2"
              >
                <span>{userState}</span>
                <span className="text-sm text-blue-400">(detected)</span>
              </button>
            </div>
          )}

          {/* Popular States Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2 text-orange-600">
              <Star size={16} className="text-orange-500" />
              <span className="text-sm font-semibold">Popular States</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {popularStates.map((state) => (
                <button
                  key={state}
                  onClick={() => setSelectedState(state)}
                  className={`
                    px-4 py-2 text-sm rounded-lg transition-all duration-200
                    ${selectedState === state 
                      ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white shadow-lg' 
                      : 'bg-gradient-to-b from-orange-50 to-orange-100 text-orange-700 hover:from-orange-100 hover:to-orange-200'}
                    border border-orange-200 hover:border-orange-300
                  `}
                >
                  {state}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <div className="relative flex items-center bg-blue-50 rounded-lg border-2 border-blue-200 shadow-sm">
              <Search className="absolute left-2 text-blue-400" size={20} />
              <input
                type="text"
                placeholder="Search states..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-transparent text-blue-900 placeholder-blue-300 focus:outline-none"
              />
            </div>
          </div>

          {/* States List */}
          <div className="flex flex-col gap-2 max-h-48 overflow-y-auto p-2 mb-24">
            {filteredStates.map((state) => (
              <button
                key={state}
                onClick={() => setSelectedState(state)}
                className={`
                  p-3 text-sm rounded-lg text-left transition-all duration-200
                  ${selectedState === state 
                    ? 'bg-gradient-to-b from-blue-400 to-blue-500 text-white shadow-lg' 
                    : 'bg-gradient-to-b from-blue-50 to-white text-blue-900 hover:from-blue-100 hover:to-blue-50'}
                  border-2
                  ${selectedState === state 
                    ? 'border-blue-600' 
                    : 'border-blue-200 hover:border-blue-300'}
                `}
              >
                {state}
              </button>
            ))}
          </div>

          {/* Bottom Container for Tips and Next Button */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center gap-4">
            {/* State-specific Tips */}
            {selectedState && (
              <div className="flex-1">
                <div className="bg-blue-50 rounded-lg px-4 py-2 border-2 border-blue-200 flex items-center gap-2">
                  <span className="text-amber-500 font-bold text-lg">!</span>
                  <p className="text-sm text-blue-800">
                    {selectedState === 'Texas' && (
                      "Age: 18+ intrastate, 21+ interstate. Must pass written and skills tests. Special endorsements needed for Hazmat."
                    )}
                    {selectedState === 'California' && (
                      "Additional air brake certification required. Must complete ELDT course before testing."
                    )}
                    {selectedState === 'Florida' && (
                      "DOT medical card required. Must pass drug screening. Extra steps for hazmat endorsement."
                    )}
                    {selectedState !== 'Texas' && selectedState !== 'California' && selectedState !== 'Florida' && (
                      `Check ${selectedState} DMV for special endorsements and requirements`
                    )}
                  </p>
                </div>
              </div>
            )}

            {/* Next Button */}
            <div className="flex-shrink-0">
              <button
                onClick={handleNext}
                disabled={!selectedState}
                className={`
                  relative px-6 py-2 rounded-full flex items-center gap-2
                  transition-all duration-300
                  ${selectedState 
                    ? 'bg-gradient-to-b from-green-400 to-green-500 text-white hover:from-green-500 hover:to-green-600 animate-bounce-once shadow-lg scale-110' 
                    : 'bg-gradient-to-b from-green-100 to-green-200 text-green-400 cursor-not-allowed'}
                  border-2 
                  ${selectedState 
                    ? 'border-green-300' 
                    : 'border-green-200'}
                  ${selectedState 
                    ? 'shadow-[0_0_15px_rgba(34,197,94,0.5)]' 
                    : ''}
                  ${selectedState 
                    ? 'animate-pulse-subtle' 
                    : ''}
                `}
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Subtle scanline effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none animate-scan" />
      </div>
    </div>
  );
};

export default StateSelector;