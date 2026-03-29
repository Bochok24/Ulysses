import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  Users,
  TrendingUp,
  AlertTriangle,
  Map,
  BookMarked,
  Quote,
  Flame,
  Image as ImageIcon,
  MapPin,
  Target,
  Menu,
  X,
} from 'lucide-react';

import JamesJoycePortrait from '../img/JamesJoycePortrait.jpg';
import DublinMap from '../img/DublinMap.webp';
import UlyssesBook from '../img/Ulysses_Book.png';
import FreytagPyramid from '../img/FreytagPyramid.png';
import Duality from '../img/duality.png';
import DublinStreet from '../img/DublinStreet.jpg';

const DEB_LINKEDIN_URL =
  'https://www.linkedin.com/in/john-dave-maca-068116358?utm_source=share_via&utm_content=profile&utm_medium=member_android';

const BRITANNICA_ULYSSES_URL =
  'https://www.britannica.com/topic/Ulysses-novel-by-Joyce';

const UlyssesApp = () => {
  const [activeTab, setActiveTab] = useState('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'intro', label: 'Timeline & Author', icon: <Clock size={20} /> },
    { id: 'characters', label: 'Characters', icon: <Users size={20} /> },
    { id: 'plot', label: "Freytag's Plot", icon: <TrendingUp size={20} /> },
    { id: 'themes', label: 'Themes & Conflict', icon: <Target size={20} /> },
    { id: 'map', label: 'Virtual Map 1904', icon: <Map size={20} /> },
    { id: 'pillars', label: 'The 5 Pillars', icon: <BookMarked size={20} /> },
    { id: 'ban', label: 'Censorship & Ban', icon: <AlertTriangle size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-amber-500 selection:text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm">
        <div className="px-4 md:px-8 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-amber-500 font-serif tracking-wider leading-none">
                ULYSSES
              </h1>
              <p className="text-xs md:text-sm text-slate-400 mt-1">
                by James Joyce
              </p>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:bg-slate-800/60 hover:text-slate-100"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Desktop navigation */}
            <nav className="hidden md:flex flex-wrap justify-end gap-1">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={
                      isActive
                        ? 'flex items-center space-x-2 px-4 py-2 rounded-full text-sm bg-amber-500 text-slate-900'
                        : 'flex items-center space-x-2 px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800/60 hover:text-slate-100'
                    }
                  >
                    {tab.icon}
                    <span className="whitespace-nowrap">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Mobile dropdown menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-3 border-t border-slate-800 pt-3">
              <div className="flex flex-col gap-1">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        setActiveTab(tab.id);
                        setMobileMenuOpen(false);
                      }}
                      className={
                        isActive
                          ? 'flex items-center space-x-3 px-3 py-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30'
                          : 'flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800/60 hover:text-slate-100'
                      }
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="p-8 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] relative scroll-smooth">

        <div className="max-w-5xl mx-auto pb-20">
          {activeTab === 'intro' && <IntroSection />}
          {activeTab === 'characters' && <CharactersSection />}
          {activeTab === 'plot' && <PlotSection />}
          {activeTab === 'themes' && <ThemesConflictSection />}
          {activeTab === 'map' && <MapSection />}
          {activeTab === 'pillars' && <PillarsSection />}
          {activeTab === 'ban' && <BanSection />}
        </div>
      </main>

      {/* FOOTER (Normal document flow; visible when scrolled down) */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-5xl mx-auto px-8 py-10 text-xs text-slate-600">
          <div className="text-center">
            <h2 className="text-sm font-semibold text-slate-300">References</h2>
            <p className="mt-2">
              <a
                href={BRITANNICA_ULYSSES_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="underline underline-offset-2 hover:text-slate-300"
              >
                Encyclopedia Britannica — Ulysses (novel by Joyce)
              </a>
            </p>
          </div>

          <div className="mt-8 text-center">
            Interactive Literature Report <br /> Bloomsday 1904 <br /> <br /> Dedicated to Joyce Sarong's Report <br /> Site by [
            <a
              href={DEB_LINKEDIN_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-2 hover:text-slate-300"
            >
              deb
            </a>
            ]
          </div>
        </div>
      </footer>
    </div>
  );
};

/* --- REUSABLE IMAGE PLACEHOLDER --- */
const ImagePlaceholder = ({ text, className = 'aspect-video' }) => (
  <div
    className={`w-full bg-slate-800/80 border-2 border-dashed border-slate-600 rounded-lg flex flex-col items-center justify-center text-slate-500 hover:bg-slate-800 hover:border-amber-500/50 transition-colors ${className}`}
  >
    <ImageIcon size={32} className="mb-2 opacity-50" />
    <span className="text-sm font-medium">{text}</span>
  </div>
);

/* --- SECTION COMPONENTS --- */

const IntroSection = () => (
  <div className="animate-fade-in-up">
    <h2 className="text-4xl font-serif font-bold text-amber-400 mb-6 border-b border-slate-700 pb-4">
      Timeline & Author
    </h2>

    <div className="mb-8">
      <div className="mx-auto w-full max-w-xs aspect-[3/4] bg-slate-950 rounded-lg border border-slate-700 overflow-hidden">
        <img
          src={JamesJoycePortrait}
          alt="Portrait of James Joyce"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-colors">
        <h3 className="text-2xl font-bold mb-4 flex items-center text-slate-100">
          <Clock className="mr-3 text-amber-500" /> The Timeline
        </h3>
        <ul className="space-y-4 text-slate-300 leading-relaxed">
          <li>
            <strong className="text-amber-400">Written:</strong> Between 1914 and
            1921 in Trieste, Zurich, and Paris.
          </li>
          <li>
            <strong className="text-amber-400">Published:</strong> 1922 in Paris
            by Sylvia Beach (due to censorship elsewhere).
          </li>
          <li>
            <strong className="text-amber-400">The Setting:</strong> The entire
            massive novel takes place on exactly{' '}
            <span className="bg-amber-500/20 text-amber-300 px-2 py-1 rounded">
              June 16, 1904
            </span>{' '}
            in Dublin. This is now celebrated globally as "Bloomsday".
          </li>
        </ul>
      </div>

      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-colors">
        <h3 className="text-2xl font-bold mb-4 flex items-center text-slate-100">
          <BookOpen className="mr-3 text-amber-500" /> James Joyce & Style
        </h3>
        <ul className="space-y-4 text-slate-300 leading-relaxed">
          <li>
            <strong className="text-amber-400">The Author:</strong> An Irish
            writer famous for his innovative, experimental literature focusing
            on everyday Dublin life.
          </li>
          <li>
            <strong className="text-amber-400">Literary Movement:</strong>{' '}
            Modernism. Breaking traditional storytelling rules to focus on inner
            human experiences.
          </li>
          <li>
            <strong className="text-amber-400">Writing Style:</strong> "Stream of
            Consciousness" — presenting the continuous, unfiltered flow of a
            character’s thoughts, feelings, and memories.
          </li>
        </ul>
      </div>
    </div>

    <div className="mt-8 bg-amber-900/20 border border-amber-700/50 p-6 rounded-xl">
      <Quote className="text-amber-500 mb-2 opacity-50" size={32} />
      <p className="text-xl italic text-slate-300 font-serif">
        "The pity is the public will demand and find a moral in my book, or
        worse they may take it in some serious way, and on the honor of a
        gentleman, there is not one single serious line in it." <br />
        <span className="text-sm text-amber-500 block mt-2">— James Joyce</span>
      </p>
    </div>
  </div>
);

const CharactersSection = () => {
  const characters = [
    {
      name: 'Leopold Bloom',
      role: 'The Protagonist',
      epic: 'Odysseus',
      desc: 'A middle-aged Jewish advertising agent. Thoughtful, compassionate, and observant. He spends the day wandering Dublin to avoid his home.',
    },
    {
      name: 'Stephen Dedalus',
      role: 'The Intellectual',
      epic: 'Telemachus',
      desc: "A young teacher and aspiring writer struggling with guilt over his mother's death. He is searching for meaning and a father figure.",
    },
    {
      name: 'Molly Bloom',
      role: 'The Wife',
      epic: 'Penelope',
      desc: "Leopold's wife, a talented singer. Passionate and confident. She is having an affair, representing the tension in Bloom's day.",
    },
    {
      name: 'Blazes Boylan',
      role: 'The Lover',
      epic: 'The Suitors',
      desc: "Molly's concert tour manager and lover. He represents temptation and the looming crisis Bloom is trying to avoid.",
    },
    {
      name: 'Buck Mulligan',
      role: 'The Roommate',
      epic: 'Antinous',
      desc: "Stephen's sarcastic and mocking medical student roommate who lives with him in the Martello tower.",
    },
    {
      name: 'Mr. Deasy',
      role: 'The Headmaster',
      epic: 'Nestor',
      desc: "The ignorant and anti-Semitic headmaster at the boys' school where Stephen teaches.",
    },
    {
      name: 'Gerty MacDowell',
      role: 'The Fantasy',
      epic: 'Nausicaa',
      desc: 'A young woman Bloom encounters on Sandymount Strand. She represents desire, fantasy, and the male gaze.',
    },
    {
      name: 'The Citizen',
      role: 'The Nationalist',
      epic: 'The Cyclops',
      desc: "A fiercely nationalist, anti-Semitic character Bloom encounters at Barney Kiernan's pub, leading to a confrontation.",
    },
    {
      name: 'Paddy Dignam',
      role: 'The Deceased',
      epic: 'Elpenor',
      desc: "The man whose funeral Bloom attends in the morning, prompting Bloom's deep reflections on mortality.",
    },
    {
      name: 'Mina Purefoy',
      role: 'The Mother',
      epic: 'Oxen of the Sun',
      desc: 'A woman enduring a difficult three-day labor at the maternity hospital where Bloom and Stephen finally meet.',
    },
    {
      name: 'Bella Cohen',
      role: 'Brothel Owner',
      epic: 'Circe',
      desc: "The domineering, masculine owner of the brothel in Nighttown where the climax and Stephen's breakdown occurs.",
    },
    {
      name: 'Haines',
      role: 'The Englishman',
      epic: 'Telemachiad',
      desc: 'An Oxford student staying with Stephen and Buck, representing the oppressive British colonial presence in Ireland.',
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-4xl font-serif font-bold text-amber-400 mb-2">
        The Comprehensive Cast
      </h2>
      <p className="text-slate-400 mb-8 pb-4 border-b border-slate-700">
        Every major and minor citizen mirroring Greek mythology.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {characters.map((char, idx) => (
          <div
            key={idx}
            className="bg-slate-800 p-6 rounded-xl border border-slate-700 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-lg flex flex-col"
          >
            <div className="absolute top-0 right-0 bg-slate-700 text-xs px-3 py-1 rounded-bl-lg font-bold text-amber-400 z-10">
              {char.epic}
            </div>

            <h3 className="text-xl font-bold text-slate-100">{char.name}</h3>
            <p className="text-sm text-amber-500 font-medium mb-3">{char.role}</p>
            <p className="text-slate-400 text-sm leading-relaxed flex-grow">{char.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PlotSection = () => {
  const plotPoints = [
    {
      stage: 'Exposition',
      time: '8:00 AM',
      text: "Stephen is at the Martello tower with Buck Mulligan and Haines. Bloom brings breakfast to Molly. The parallel lives of the isolated intellectual and the ordinary man are established.",
    },
    {
      stage: 'Inciting Incident',
      time: 'Morning',
      text: "Bloom receives the mail. He sees a letter for Molly from Blazes Boylan confirming their 4:00 PM assignation. Bloom begins his 'odyssey' to avoid his home.",
    },
    {
      stage: 'Rising Action',
      time: 'Afternoon',
      text: "Bloom attends Paddy Dignam's funeral (thinking of death), visits a newspaper office, and faces anti-Semitism from 'the citizen' at a pub. Stephen argues Shakespeare at the library. Bloom visits the maternity hospital to check on Mina Purefoy, where he finally meets a drunken Stephen.",
    },
    {
      stage: 'Climax',
      time: 'Midnight',
      text: "In the hallucinatory 'Nighttown' (brothel district run by Bella Cohen), Stephen breaks a chandelier and gets into a street brawl with a British soldier. Bloom steps in to protect him, acting as the surrogate father.",
    },
    {
      stage: 'Falling Action',
      time: 'Late Night',
      text: "Bloom takes Stephen to a cabman's shelter, and then to his home at 7 Eccles Street. They share hot cocoa and a deep, philosophical conversation. Stephen declines to stay and leaves.",
    },
    {
      stage: 'Resolution',
      time: 'Pre-Dawn',
      text: "Bloom goes to bed and tells Molly about his day. The book concludes with Molly's massive internal monologue, ending with a profound affirmation of life: 'Yes'.",
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-4xl font-serif font-bold text-amber-400 mb-2">Freytag's Model</h2>
      <p className="text-slate-400 mb-8 pb-4 border-b border-slate-700">Tracing the plot of a single day.</p>

      <div className="mb-10">
        <div className="w-full h-48 bg-slate-950 rounded-lg border border-slate-700 overflow-hidden">
          <img
            src={FreytagPyramid}
            alt="Freytag's Pyramid diagram"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-600 before:to-transparent">
        {plotPoints.map((point, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-amber-500 text-slate-900 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              {idx + 1}
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-5 rounded-xl border border-slate-700 shadow-xl transition-all duration-300 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-amber-400 text-lg">{point.stage}</h4>
                <span className="text-xs font-mono bg-slate-900 px-2 py-1 rounded text-slate-400">{point.time}</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{point.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MapSection = () => {
  const [activePointId, setActivePointId] = useState(null);

  const isDev = import.meta?.env?.DEV;
  const loggerAvailable =
    !!isDev ||
    (typeof window !== 'undefined' &&
      new URLSearchParams(window.location.search).get('logger') === '1');

  const [mapPoints, setMapPoints] = useState([
    { id: 1, top: '7.01%', left: '94.55%', title: 'Martello Tower', desc: "8:00 AM - Stephen's morning begins here by the sea." },
    { id: 2, top: '5.90%', left: '30.62%', title: '7 Eccles Street', desc: "8:00 AM - Bloom's home. He leaves and avoids returning all day." },
    { id: 3, top: '4.58%', left: '91.33%', title: 'Glasnevin Cemetery', desc: "11:00 AM - Paddy Dignam's funeral takes place." },
    { id: 4, top: '80.03%', left: '44.09%', title: 'National Library', desc: '2:00 PM - Stephen discusses his Shakespeare theories.' },
    { id: 5, top: '41.32%', left: '21.92%', title: "Barney Kiernan's Pub", desc: "5:00 PM - Bloom confronts 'The Citizen'." },
    { id: 6, top: '8.06%', left: '92.01%', title: 'Sandymount Strand', desc: '8:00 PM - Bloom encounters Gerty MacDowell on the beach.' },
    { id: 7, top: '89.41%', left: '64.79%', title: 'Maternity Hospital', desc: '10:00 PM - Bloom meets Stephen while visiting Mina Purefoy.' },
    { id: 8, top: '29.06%', left: '44.55%', title: 'Nighttown', desc: 'Midnight - The brothel district where the climax occurs.' },
  ]);

  // Dev-only helpers for manually positioning markers.
  const [loggerEnabled, setLoggerEnabled] = useState(false);
  const [selectedPointId, setSelectedPointId] = useState(1);
  const [lastLogged, setLastLogged] = useState(null);

  const parsePct = (value) => {
    const num = Number(String(value).replace('%', ''));
    return Number.isFinite(num) ? num : 50;
  };

  const pctString = (num) => `${Math.min(100, Math.max(0, num)).toFixed(2)}%`;

  const logClickToPct = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const leftPct = rect.width > 0 ? (x / rect.width) * 100 : 50;
    const topPct = rect.height > 0 ? (y / rect.height) * 100 : 50;

    const result = {
      top: pctString(topPct),
      left: pctString(leftPct),
      pointId: selectedPointId,
      pointTitle: mapPoints.find((p) => p.id === selectedPointId)?.title ?? 'Unknown',
    };

    // eslint-disable-next-line no-console
    console.log(
      `[Ulysses Map Logger] ${result.pointTitle} (id=${result.pointId}) => top: '${result.top}', left: '${result.left}'`
    );
    setLastLogged(result);

    // Alt-click previews moving the selected marker (does not persist beyond refresh).
    if (e.altKey) {
      setMapPoints((prev) => prev.map((p) => (p.id === selectedPointId ? { ...p, top: result.top, left: result.left } : p)));
    }
  };

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-4xl font-serif font-bold text-amber-400 mb-2">Virtual Map: Dublin 1904</h2>
      <p className="text-slate-400 mb-8 pb-4 border-b border-slate-700">Hover over the map markers to trace the characters' paths.</p>

      {loggerAvailable && (
        <div className="mb-6 rounded-xl border border-slate-700 bg-slate-800/40 p-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-amber-400">DEV: Map Marker Logger</p>
              <p className="text-xs text-slate-400">
                Enable this to click the map and get precise <span className="font-mono">top/left</span> %. Use <span className="font-mono">Alt+Click</span> to preview-move the selected marker.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className="inline-flex items-center gap-2 text-xs text-slate-300 select-none">
                <input
                  type="checkbox"
                  checked={loggerEnabled}
                  onChange={(ev) => setLoggerEnabled(ev.target.checked)}
                />
                Enable logger
              </label>

              <label className="text-xs text-slate-300 flex items-center gap-2">
                Marker
                <select
                  className="bg-slate-900 border border-slate-700 rounded-md px-2 py-1 text-xs text-slate-200"
                  value={selectedPointId}
                  onChange={(ev) => setSelectedPointId(Number(ev.target.value))}
                >
                  {mapPoints.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.id}. {p.title}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-lg border border-slate-700 bg-slate-950/40 p-3">
              <p className="text-xs text-slate-400">Selected marker current position</p>
              <p className="text-xs text-slate-200 font-mono mt-1">
                {(() => {
                  const point = mapPoints.find((p) => p.id === selectedPointId);
                  return point ? `{ id: ${point.id}, top: '${point.top}', left: '${point.left}' }` : '—';
                })()}
              </p>
            </div>

            <div className="rounded-lg border border-slate-700 bg-slate-950/40 p-3">
              <p className="text-xs text-slate-400">Last logged click</p>
              <p className="text-xs text-slate-200 font-mono mt-1">
                {lastLogged
                  ? `{ id: ${lastLogged.pointId}, top: '${lastLogged.top}', left: '${lastLogged.left}' }`
                  : '—'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VIRTUAL MAP CONTAINER */}
      <div
        className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-slate-800 rounded-xl border-2 border-slate-700 overflow-visible shadow-2xl"
        onClick={(e) => {
          if (loggerAvailable && loggerEnabled) {
            logClickToPct(e);
          }
          setActivePointId(null);
        }}
      >
        {/* Clipped map layer (keeps rounded corners) */}
        <div className="absolute inset-0 rounded-xl overflow-hidden z-0">
          <img
            src={DublinMap}
            alt="Dublin map"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          {/* Map Background Placeholder */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]" />
        </div>

        {/* Render Map Points */}
        {mapPoints.map((point) => {
          const leftPct = parsePct(point.left);
          const topPct = parsePct(point.top);
          const isActive = activePointId === point.id;

          const placement = topPct < 18 ? 'below' : 'above';
          const align = leftPct < 18 ? 'left' : leftPct > 82 ? 'right' : 'center';

          const placementClass = placement === 'below' ? 'top-full mt-3' : 'bottom-full mb-3';
          const alignClass =
            align === 'left'
              ? 'left-0'
              : align === 'right'
                ? 'right-0'
                : 'left-1/2 -translate-x-1/2';

          const visibilityClass = isActive
            ? 'opacity-100 visible'
            : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible';

          const arrowPlacementClass = placement === 'below' ? 'bottom-full border-b-slate-900' : 'top-full border-t-slate-900';
          const arrowAlignClass =
            align === 'left'
              ? 'left-6'
              : align === 'right'
                ? 'right-6'
                : 'left-1/2 -translate-x-1/2';

          return (
            <div
              key={point.id}
              className="absolute group z-20"
              style={{ top: point.top, left: point.left, transform: 'translate(-50%, -50%)' }}
            >
              {/* The Pin */}
              <button
                type="button"
                aria-label={point.title}
                className="relative"
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePointId((curr) => (curr === point.id ? null : point.id));
                }}
              >
                <MapPin
                  className="text-red-500 drop-shadow-md cursor-pointer animate-bounce group-hover:animate-none group-hover:text-red-300 transition-colors"
                  size={32}
                />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-1 bg-black/50 rounded-full blur-[2px]" />
              </button>

              {/* Tooltip */}
              <div
                className={`absolute ${placementClass} ${alignClass} w-48 bg-slate-900 border border-amber-500/50 rounded-lg p-3 shadow-xl ${visibilityClass} transition-all duration-300 z-30 pointer-events-none`}
              >
                <h4 className="font-bold text-amber-400 text-sm mb-1 leading-tight">{point.title}</h4>
                <p className="text-slate-300 text-xs leading-snug">{point.desc}</p>
                {/* Tooltip Arrow */}
                <div
                  className={`absolute ${arrowPlacementClass} ${arrowAlignClass} border-4 border-transparent`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PillarsSection = () => {
  const pillars = [
    {
      title: '1. The Odyssey Connection',
      desc: "Every chapter corresponds to an episode in Homer's Greek myth. Epic battles are reduced to mundane events, showing the heroism in ordinary life.",
    },
    {
      title: '2. Stream of Consciousness',
      desc: 'A technique replicating the messy, layered way the human mind works. Sentences break off or shift to random associations based on memories.',
    },
    {
      title: '3. Bloomsday (June 16, 1904)',
      desc: "The exact date of Joyce's first outing with his wife, Nora Barnacle. Fans globally celebrate by retracing Bloom's steps and eating his meals.",
    },
    {
      title: "4. The 'Penelope' Chapter",
      desc: "The final chapter is Molly Bloom's internal monologue. Eight massive sentences with almost no punctuation, ending on a note of total affirmation.",
    },
    {
      title: '5. Dublin as a Character',
      desc: 'Joyce used a 1904 directory to ensure 100% accuracy of shops and streets. The city is a living organism that traps and shapes the characters.',
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-4xl font-serif font-bold text-amber-400 mb-2">Must-to-Know Themes</h2>
      <p className="text-slate-400 mb-8 pb-4 border-b border-slate-700">The 5 pillars for understanding Ulysses.</p>

      <div className="mb-8">
        <img
          src={DublinStreet}
          alt="Dublin street"
          className="w-full h-40 object-cover rounded-lg border border-slate-700"
          loading="lazy"
        />
      </div>

      <div className="space-y-4">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="bg-slate-800 p-5 rounded-lg border-l-4 border-amber-500 shadow-md hover:bg-slate-750 transition-colors flex items-start"
          >
            <Map className="text-amber-500 mr-4 mt-1 shrink-0" size={24} />
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">{pillar.title}</h3>
              <p className="text-slate-300">{pillar.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BanSection = () => (
  <div className="animate-fade-in-up">
    <h2 className="text-4xl font-serif font-bold text-red-500 mb-2 flex items-center">
      <Flame className="mr-3" size={36} /> The Censorship & Ban
    </h2>
    <p className="text-slate-400 mb-8 pb-4 border-b border-slate-700">Why the masterpiece was deemed illegal.</p>

    <div className="mb-8">
      <div className="mx-auto w-full max-w-xs aspect-[3/4] bg-slate-950/60 rounded-lg border border-red-900/50 overflow-hidden">
        <img
          src={UlyssesBook}
          alt="Ulysses book cover"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>

    <div className="bg-red-950/30 border-2 border-red-900/50 rounded-xl p-8 relative overflow-hidden">
      {/* Background stamp effect */}
      <div className="absolute -right-10 -top-10 text-red-900/20 font-black text-9xl -rotate-12 select-none pointer-events-none">
        BANNED
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-slate-100 mb-4">The Obscenity Trials</h3>
        <p className="text-slate-300 mb-6 text-lg">
          In the early 20th century, literature was expected to be "polite." Joyce broke every rule to capture
          "the significance of the trivial" and the truth of human nature. Before it was even finished, the U.S.
          Post Office seized and burned magazine copies containing the story.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-900/80 p-5 rounded border border-red-900/50">
            <h4 className="font-bold text-red-400 mb-2 text-lg">Bodily Functions & Taboos</h4>
            <p className="text-slate-400 text-sm">
              Graphic descriptions of characters using the bathroom, menstruation, masturbation (the 'Nausicaa'
              episode), and Leopold Bloom's fetishes.
            </p>
          </div>
          <div className="bg-slate-900/80 p-5 rounded border border-red-900/50">
            <h4 className="font-bold text-red-400 mb-2 text-lg">Profanity & Blasphemy</h4>
            <p className="text-slate-400 text-sm">
              Use of forbidden "four-letter words" and mockery of the Catholic Church and the Mass, particularly during
              the hallucinatory Nighttown sequence.
            </p>
          </div>
        </div>

        <div className="bg-amber-900/20 border-l-4 border-amber-500 p-5 rounded-r">
          <h4 className="font-bold text-amber-400 text-lg mb-2">The Un-Banning (1933)</h4>
          <p className="text-slate-300">
            The ban ended with the landmark court case <em>United States v. One Book Called Ulysses</em>. Judge John M.
            Woolsey ruled that the book must be judged as a whole piece of art. He stated that while it was "emetic"
            (might make you feel disgusted), it was not "aphrodisiac" (did not promote lust), declaring it a sincere and
            honest book. This changed literary censorship forever.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ThemesConflictSection = () => (
  <div className="animate-fade-in-up">
    <h2 className="text-4xl font-serif font-bold text-amber-400 mb-2">Themes & Conflicts</h2>
    <p className="text-slate-400 mb-8 pb-4 border-b border-slate-700">The internal struggles and overarching messages of the novel.</p>

    <div className="mb-8">
      <img
        src={Duality}
        alt="Dual character portraits"
        className="w-full h-48 object-cover rounded-lg border border-slate-700"
        loading="lazy"
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Conflicts */}
      <div>
        <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center border-b border-slate-700 pb-2">
          <Target className="mr-3 text-red-400" /> Core Conflicts
        </h3>
        <div className="space-y-4">
          <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-red-500 shadow-md">
            <h4 className="font-bold text-red-400 text-lg mb-1">Man vs. Self (Internal)</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong className="text-slate-200">Stephen's Guilt:</strong> He is paralyzed by the memory of his dying mother and his refusal to pray for her, trapping him in his own mind.
              <br />
              <strong className="text-slate-200 mt-2 block">Bloom's Anxiety:</strong> Bloom spends the entire day actively avoiding his own home because he knows his wife, Molly, is having an affair at 4:00 PM. He struggles with feelings of inadequacy.
            </p>
          </div>
          <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-red-500 shadow-md">
            <h4 className="font-bold text-red-400 text-lg mb-1">Man vs. Society (External)</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong className="text-slate-200">Bloom's Alienation:</strong> As a Jewish man in Catholic Ireland, Bloom faces constant anti-Semitism, most notably in his confrontation with "The Citizen."
              <br />
              <strong className="text-slate-200 mt-2 block">Stephen's Oppression:</strong> Stephen feels crushed by two massive forces: the British Empire (colonialism) and the Catholic Church (religious dogma).
            </p>
          </div>
        </div>
      </div>

      {/* Themes */}
      <div>
        <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center border-b border-slate-700 pb-2">
          <BookOpen className="mr-3 text-amber-500" /> Major Themes
        </h3>
        <div className="space-y-4">
          <div className="bg-slate-800 p-5 rounded-lg border border-slate-700 hover:border-amber-500/50 transition-colors">
            <h4 className="font-bold text-amber-400 text-lg mb-1">The Epic in the Ordinary</h4>
            <p className="text-slate-300 text-sm">
              Joyce argues that eating breakfast, going to a funeral, or walking down a street can be just as heroic and significant as the mythological battles of Greek heroes.
            </p>
          </div>
          <div className="bg-slate-800 p-5 rounded-lg border border-slate-700 hover:border-amber-500/50 transition-colors">
            <h4 className="font-bold text-amber-400 text-lg mb-1">Paternity & Connection</h4>
            <p className="text-slate-300 text-sm">
              The novel is driven by a search for belonging. Stephen is searching for a spiritual father to guide him, while Bloom, mourning his dead infant son Rudy, is searching for a son. Their meeting is the story's emotional core.
            </p>
          </div>
          <div className="bg-slate-800 p-5 rounded-lg border border-slate-700 hover:border-amber-500/50 transition-colors">
            <h4 className="font-bold text-amber-400 text-lg mb-1">Paralysis & Isolation</h4>
            <p className="text-slate-300 text-sm">
              Characters are stuck. Dublin is portrayed as a city of spiritual and emotional paralysis. Characters are trapped by their routines, their history, and their failure to communicate directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UlyssesApp;
