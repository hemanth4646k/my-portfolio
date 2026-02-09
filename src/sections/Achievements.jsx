const Achievements = () => {
  const profiles = [
    {
      platform: "CodeChef",
      rating: "1918",
      badge: "4 Star",
      details: "Global Rank: 3,583 • Country Rank: 2,908",
      link: "https://www.codechef.com/users/hemanth4646k",
      logo: "https://cdn.codechef.com/images/cc-logo.svg",
      color: "from-[#5B4638] to-[#8B6914]",
      badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
    },
    {
      platform: "Codeforces",
      rating: "1527",
      badge: "Specialist",
      details: "Cyan-rated competitive programmer",
      link: "https://codeforces.com/profile/hemanth4646k",
      logo: "https://codeforces.org/s/0/favicon-96x96.png",
      color: "from-[#1A3A5C] to-[#2196F3]",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    },
    {
      platform: "LeetCode",
      rating: "1965",
      badge: "Knight",
      details: "Top-tier problem solver",
      link: "https://leetcode.com/u/hemanth4646k/",
      logo: "/images/leetcode.png",
      color: "from-[#1A1A2E] to-[#FFA116]",
      badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/40",
    },
  ];

  return (
    <section id="achievements" className="w-full py-20 bg-transparent text-white pointer-events-auto">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-teal-400 to-blue-500">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((p) => (
            <a
              key={p.platform}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 border border-white/10 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.03] hover:border-white/20 overflow-hidden"
            >
              {/* gradient glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
              />

              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                {/* logo */}
                <img
                  src={p.logo}
                  alt={`${p.platform} logo`}
                  className={`${p.platform === 'CodeChef' ? 'w-28' : 'w-14'} h-14 object-contain`}
                />

                {/* platform name */}
                <h3 className="text-xl font-bold">{p.platform}</h3>

                {/* rating */}
                <p className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {p.rating}
                </p>

                {/* badge */}
                <span
                  className={`px-4 py-1 text-sm font-semibold rounded-full border ${p.badgeColor}`}
                >
                  {p.badge}
                </span>

                {/* details */}
                <p className="text-gray-400 text-sm">{p.details}</p>

                {/* visit hint */}
                <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors mt-2">
                  View Profile ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
