import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        <div className="min-h-screen bg-white text-slate-900 font-sans p-6 md:p-12 lg:p-20 selection:bg-rose-100 selection:text-rose-600">
          {/* HEADER */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-sm font-semibold text-slate-500 mb-3 tracking-wide uppercase">
                  Features
                </h2>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
                  Engineered for <span className="text-[#ff2d55]">Impact</span>
                </h1>
              </div>
              <div className="flex flex-col items-start lg:items-end gap-6 max-w-md">
                <p className="text-slate-600 leading-relaxed text-lg">
                  Built for developers, validators, and creators who want
                  sovereignty, speed, and zero compromise.
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-all duration-200"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* BENTO GRID */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CARD 1: Own Your Data (Shield) */}
            <div className="group relative bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(255,45,85,0.15)] transition-all duration-300 overflow-hidden min-h-[400px] flex flex-col justify-end">
              {/* Illustration Area */}
              <div className="absolute inset-x-0 top-0 h-2/3 flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-50/80 via-white to-white">
                {/* Icon floating top left */}
                <div className="absolute top-8 left-8 w-10 h-10 rounded-full bg-white shadow-sm border border-rose-100 flex items-center justify-center text-rose-500">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3z" />
                  </svg>
                </div>
                {/* Abstract Graphic: Shield Layers */}
                <div className="relative w-48 h-56 perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl opacity-10 transform translate-x-4 translate-y-4 scale-90" />
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl opacity-20 transform translate-x-2 translate-y-2 scale-95" />
                  <div className="relative w-full h-full bg-gradient-to-b from-white to-rose-50 border border-rose-100 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-grid-slate-500/[0.05] [mask-image:linear-gradient(0deg,white,transparent)]" />
                    <svg
                      className="w-20 h-20 text-rose-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    {/* Red Dot */}
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-rose-500" />
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="relative z-10 mt-48">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Own Your Data, End-to-End
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  CipherMesh gives you total control with native encryption,
                  permission layers, and zero-knowledge privacy baked into every
                  interaction.
                </p>
              </div>
            </div>
            {/* CARD 2: Modular by Default (Blocks) */}
            <div className="group relative bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(255,45,85,0.15)] transition-all duration-300 overflow-hidden min-h-[400px] flex flex-col justify-end">
              {/* Illustration Area */}
              <div className="absolute inset-x-0 top-0 h-2/3 flex items-center justify-center overflow-hidden">
                {/* Icon floating top left */}
                <div className="absolute top-8 left-8 w-10 h-10 rounded-full bg-white shadow-sm border border-rose-100 flex items-center justify-center text-rose-500 z-20">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </div>
                {/* Abstract Graphic: Isometric Layers */}
                <div className="relative w-full h-full">
                  {/* Background mesh/grid effect */}
                  <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-[radial-gradient(#ff2d55_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]" />
                  {/* Isometric Block Representation */}
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-10">
                    {/* Layer 3 (Bottom) */}
                    <div className="w-64 h-40 bg-gradient-to-l from-rose-100 to-transparent transform -skew-y-12 translate-y-12 translate-x-12 rounded-lg opacity-50 blur-sm" />
                    {/* Layer 2 (Middle) */}
                    <div className="w-64 h-40 bg-gradient-to-l from-rose-300 to-rose-100 transform -skew-y-12 translate-y-6 translate-x-6 rounded-lg opacity-80 shadow-lg" />
                    {/* Layer 1 (Top) */}
                    <div className="w-64 h-40 bg-gradient-to-br from-[#ff2d55] to-rose-600 transform -skew-y-12 rounded-lg shadow-2xl flex items-center justify-center relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
                      {/* Grid/Modules on top layer */}
                      <div className="grid grid-cols-2 gap-2 p-6 w-full h-full opacity-30">
                        <div className="bg-white rounded" />
                        <div className="bg-white rounded" />
                        <div className="bg-white rounded" />
                        <div className="bg-white rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="relative z-10 mt-48 max-w-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Modular by Default
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  Plug into just the parts you need — run a node, store data, or
                  launch apps.
                </p>
              </div>
            </div>
            {/* CARD 3: Cross-Chain Ready (Speedometer/Gauge) */}
            <div className="group relative bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(255,45,85,0.15)] transition-all duration-300 overflow-hidden min-h-[360px] flex flex-col justify-end">
              {/* Illustration Area */}
              <div className="absolute inset-x-0 top-0 h-3/4 flex items-center justify-center">
                {/* Icon floating top left */}
                <div className="absolute top-8 left-8 w-10 h-10 rounded-full bg-white shadow-sm border border-rose-100 flex items-center justify-center text-rose-500 z-20">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                {/* Gauge Graphic */}
                <div className="relative w-full max-w-[300px] h-[150px] overflow-hidden mt-10">
                  {/* Semi circle bg */}
                  <div className="absolute bottom-0 left-0 w-full h-[300px] rounded-full border-[20px] border-rose-50 border-t-rose-100" />
                  {/* Active arc */}
                  <div className="absolute bottom-0 left-0 w-full h-[300px] rounded-full border-[20px] border-transparent border-t-[#ff2d55] opacity-20" />
                  {/* Gradient Fill */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[90%] bg-gradient-to-t from-white via-rose-50 to-[#ff2d55] rounded-t-full opacity-10" />
                  {/* Ticks */}
                  <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-end pb-4">
                    <div className="w-full h-full absolute flex justify-center items-end">
                      <div className="w-[280px] h-[140px] border-t border-dashed border-rose-300 rounded-t-full opacity-50" />
                    </div>
                    {/* The Link Icon centered */}
                    <div className="bg-white rounded-full p-3 shadow-lg border border-rose-100 mb-2 relative z-10">
                      <svg
                        className="w-8 h-8 text-[#ff2d55]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Red glow/aura */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-[#ff2d55] blur-[60px] opacity-20 rounded-full" />
                </div>
              </div>
              {/* Content */}
              <div className="relative z-10 mt-12">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Cross-Chain Ready
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  Bridge assets, logic, and identity across Ethereum, Cosmos,
                  and beyond — fast, gas-optimized.
                </p>
              </div>
            </div>
            {/* CARD 4: Uptime Infrastructure (Chart) */}
            <div className="group relative bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(255,45,85,0.15)] transition-all duration-300 overflow-hidden min-h-[360px] flex flex-col justify-end">
              {/* Illustration Area */}
              <div className="absolute inset-x-0 top-0 h-3/4">
                {/* Icon floating top left */}
                <div className="absolute top-8 left-8 w-10 h-10 rounded-full bg-white shadow-sm border border-rose-100 flex items-center justify-center text-rose-500 z-20">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                {/* Graph Graphic */}
                <div className="absolute inset-0 flex items-center justify-center pt-8">
                  <div className="w-full h-full relative">
                    {/* The Sine Wave Line */}
                    <svg
                      className="absolute bottom-0 left-0 w-full h-[70%]"
                      viewBox="0 0 400 150"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="chartGradient"
                          x1={0}
                          y1={0}
                          x2={0}
                          y2={1}
                        >
                          <stop
                            offset="0%"
                            stopColor="#ff2d55"
                            stopOpacity="0.2"
                          />
                          <stop
                            offset="100%"
                            stopColor="#fff"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,100 C100,20 200,100 300,50 C350,25 400,0 400,0 V150 H0 Z"
                        fill="url(#chartGradient)"
                      />
                      <path
                        d="M0,100 C100,20 200,100 300,50 C350,25 400,0 400,0"
                        fill="none"
                        stroke="#ff2d55"
                        strokeWidth={3}
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                    {/* Data Point */}
                    <div className="absolute top-[28%] right-[25%] flex flex-col items-center">
                      <div className="text-[#ff2d55] font-bold text-lg mb-1">
                        99.9%
                      </div>
                      <div className="text-xs text-rose-300 uppercase tracking-wider mb-2">
                        Uptime Rate
                      </div>
                      <div className="w-3 h-3 bg-[#ff2d55] rounded-full border-2 border-white shadow-md relative z-10" />
                      <div className="w-[1px] h-32 border-l border-dashed border-rose-200 mt-0" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="relative z-10 mt-12">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Always Uptime Infrastructure
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  CipherMesh runs on a globally distributed mesh of validators
                  and relayers, ensuring high availability and redundancy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style
        scoped
        dangerouslySetInnerHTML={{
          __html:
            "\n/* Estilos adicionales si fueran necesarios */\n.perspective-1000 {\n  perspective: 1000px;\n}\n",
        }}
      />
    </div>
  );
};

export default Home;
