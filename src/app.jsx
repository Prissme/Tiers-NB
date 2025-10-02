import React, { useState } from "react";

const players = [
  { tier: 'S', rank: 1, name: 'Bastien', score: 2400 },
  { tier: 'A', rank: 2, name: 'Lorex', score: 2300 },
  { tier: 'A', rank: 3, name: 'Shido', score: 2250 },
  { tier: 'A', rank: 4, name: 'Raxy', score: 2200 },
  { tier: 'B', rank: 5, name: 'Skusku', score: 2150 },
  { tier: 'B', rank: 6, name: 'Prissme', score: 2100 },
  { tier: 'B', rank: 7, name: 'Mxgic', score: 2050 },
  { tier: 'B', rank: 8, name: 'Saladeee', score: 2000 },
  { tier: 'B', rank: 9, name: 'Fernmtzzz', score: 1950 },
  { tier: 'B', rank: 10, name: 'Levy', score: 1900 },
  { tier: 'C', rank: 11, name: 'Kazuhaa', score: 1850 },
  { tier: 'C', rank: 12, name: 'Killer', score: 1825 },
  { tier: 'C', rank: 13, name: 'Achraff', score: 1800 },
  { tier: 'C', rank: 14, name: 'Giuk', score: 1775 },
  { tier: 'C', rank: 15, name: 'Naboo', score: 1750 },
  { tier: 'C', rank: 16, name: 'Dodo', score: 1725 },
  { tier: 'C', rank: 17, name: 'Eren', score: 1700 },
  { tier: 'C', rank: 18, name: 'Hutao', score: 1675 },
  { tier: 'C', rank: 19, name: 'Fortissaxx', score: 1650 },
  { tier: 'C', rank: 20, name: 'Rujo', score: 1625 },
  { tier: 'D', rank: 21, name: 'Mamba', score: 1600 },
  { tier: 'D', rank: 22, name: 'Wished', score: 1560 },
  { tier: 'D', rank: 23, name: 'Kawa', score: 1550 },
  { tier: 'D', rank: 24, name: 'Smooth', score: 1525 },
  { tier: 'D', rank: 25, name: 'Marlon', score: 1500 },
  { tier: 'D', rank: 26, name: 'MomiJn', score: 1475 },
  { tier: 'D', rank: 27, name: 'Sapeur', score: 1450 },
  { tier: 'D', rank: 28, name: 'Loyy', score: 1425 },
  { tier: 'D', rank: 29, name: 'Goshii', score: 1400 },
  { tier: 'D', rank: 30, name: 'Maxi', score: 1375 },
  { tier: 'D', rank: 31, name: 'Andre', score: 1350 },
  { tier: 'D', rank: 32, name: 'Astraaa', score: 1325 },
  { tier: 'D', rank: 33, name: 'Nyxia', score: 1300 },
  { tier: 'D', rank: 34, name: 'Rash', score: 1275 },
  { tier: 'D', rank: 35, name: 'Heyko', score: 1250 },
  { tier: 'E', rank: 36, name: 'Itachi', score: 1240 },
  { tier: 'E', rank: 37, name: 'Tht', score: 1200 },
  { tier: 'E', rank: 38, name: 'Drxp', score: 1175 },
  { tier: 'E', rank: 39, name: 'Fire', score: 1150 },
  { tier: 'E', rank: 40, name: 'Scylla', score: 1125 },
  { tier: 'E', rank: 41, name: 'Ryokk', score: 1100 },
  { tier: 'E', rank: 42, name: 'Melon', score: 1075 },
  { tier: 'E', rank: 43, name: 'Zedraxx', score: 1050 },
  { tier: 'E', rank: 44, name: 'Aben', score: 1025 },
  { tier: 'E', rank: 45, name: 'Skor', score: 1000 },
  { tier: 'E', rank: 46, name: 'Walid', score: 1000 },
  { tier: 'E', rank: 47, name: 'Techwood', score: 1000 },
  { tier: 'E', rank: 48, name: 'Fares', score: 1000 },
  { tier: 'E', rank: 49, name: 'Kyzonn', score: 1000 },
  { tier: 'E', rank: 50, name: 'LoniXx', score: 1000 },
];

const tierStyles = {
  S: 'bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200',
  A: 'bg-gradient-to-r from-blue-400 via-purple-300 to-indigo-200',
  B: 'bg-gradient-to-r from-orange-600 via-orange-400 to-orange-200',
  C: 'bg-gradient-to-r from-pink-600 via-red-500 to-red-400',
  D: 'bg-gradient-to-r from-blue-400 via-purple-400 to-purple-300',
  E: 'bg-gradient-to-r from-green-700 via-green-500 to-green-300',
};

export default function DemonList() {
  const [query, setQuery] = useState('');
  const [selectedTier, setSelectedTier] = useState('ALL');
  const [sortBy, setSortBy] = useState('rank');

  const tiers = ['ALL', 'S', 'A', 'B', 'C', 'D', 'E'];

  function filtered() {
    let list = players.slice();
    if (selectedTier !== 'ALL') list = list.filter((p) => p.tier === selectedTier);
    if (query.trim() !== '') {
      const q = query.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }
    if (sortBy === 'rank') list.sort((a, b) => a.rank - b.rank);
    if (sortBy === 'score') list.sort((a, b) => b.score - a.score);
    if (sortBy === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <header className="max-w-5xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Nulls Brawl — Top 50</h1>
            <p className="text-sm text-gray-400">Demonlist-inspired — classement des meilleurs joueurs Nulls Brawl</p>
          </div>

          <div className="flex gap-3 items-center">
            <a href="https://discord.gg/prissme" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded bg-indigo-600 hover:bg-indigo-500 transition">Rejoindre Discord</a>
            <a href="https://ko-fi.com/prissme" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded bg-yellow-500 hover:bg-yellow-400 transition">Coaching 5€</a>
            <input
              aria-label="search players"
              className="px-3 py-2 rounded bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Recherche par pseudo..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 px-3 py-2 rounded text-sm outline-none"
            >
              <option value="rank">Trier par rang</option>
              <option value="score">Trier par score</option>
              <option value="name">Trier par pseudo</option>
            </select>
          </div>
        </div>

        <nav className="mt-4 flex gap-2 flex-wrap">
          {tiers.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTier(t)}
              className={`px-3 py-1 text-sm rounded-full font-semibold ${selectedTier === t ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-300'}`}
            >
              {t}
            </button>
          ))}
        </nav>
      </header>

      <main className="max-w-5xl mx-auto">
        {['S','A','B','C','D','E'].map(tier => (
          (selectedTier === 'ALL' || selectedTier === tier) && (
            <div key={tier} className="mb-6 bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-3">Tier {tier}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {filtered().filter(p => p.tier === tier).map(p => (
                  <div key={p.rank} className={`flex items-center justify-between rounded p-3 cursor-pointer transform transition duration-200 hover:scale-105 ${tierStyles[tier] || ''} text-gray-900`}>
                    <div>
                      <div className="text-xs">#{p.rank} · Tier {p.tier}</div>
                      <div className="font-semibold">{p.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm">Score</div>
                      <div className="font-bold">{p.score}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </main>

      <footer className="mt-8 text-center text-sm text-gray-500">
        <div>Design inspiré de Demonlist • Données fournies par toi</div>
      </footer>
    </div>
  );
}
