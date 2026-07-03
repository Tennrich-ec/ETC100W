const specItems = [
  { label: "ETC100W", value: "100W GaN" },
  { label: "PPS2300W1F", value: "2299Wh" },
  { label: "Port", value: "AC / USB-C / USB-A" },
];

const productCards = [
  {
    id: "etc100w",
    eyebrow: "ETC100W",
    title: "小さく、でも頼れる。",
    description:
      "ETC100W は、100WクラスのGaNトラベルアダプター。1.47インチTFT、タッチスイッチ、多ポート設計で、旅先でも日常でもすっきり使えます。",
    bullets: ["100W GaN", "1.47インチTFT", "タッチスイッチ", "USB-C x3 / USB-A x1"],
    image: "/assets/etc100w-jp.png",
    alt: "ETC100W の製品イメージ",
  },
  {
    id: "pps2300w1f",
    eyebrow: "PPS2300W1F",
    title: "大容量を、静かにしっかり。",
    description:
      "PPS2300W1F は、2299Wh の半固体電池を採用したポータブル電源。1500W双方向インバータ、MPPT、AC/Anderson/DC5521 出力に対応します。",
    bullets: ["2299Wh", "1500W双方向インバータ", "MPPT充電", "大型LCD / LEDライト"],
    image: "/assets/pps2300w1f-jp.png",
    alt: "PPS2300W1F の製品イメージ",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(63,94,251,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(0,224,255,0.18),_transparent_30%),linear-gradient(180deg,_#09111f_0%,_#050816_45%,_#02040a_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-16 pt-6 lg:px-10">
          <header className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">Energizer Japan</p>
              <h1 className="mt-2 text-xl font-semibold tracking-wide">Product Spotlight</h1>
            </div>
            <nav className="hidden gap-6 text-sm text-white/75 md:flex">
              <a href="#etc100w" className="transition hover:text-white">ETC100W</a>
              <a href="#pps2300w1f" className="transition hover:text-white">PPS2300W1F</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </nav>
          </header>

          <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-cyan-100">
                Japan-ready product site
              </p>
              <h2 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                旅先も、停電時も。
                <span className="block text-cyan-200">Energizer の実力を一枚で。</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                ETC100W と PPS2300W1F を中心に、製品の強みを日本語でわかりやすく整理した
                ランディングページです。オンラインでそのまま見せやすい構成にまとめました。
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#etc100w"
                  className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  ETC100Wを見る
                </a>
                <a
                  href="#pps2300w1f"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  PPS2300W1Fを見る
                </a>
              </div>
            </div>

            <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur">
              <div className="grid grid-cols-3 gap-3">
                {specItems.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-[#071022]/70 p-4">
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/45">{item.label}</p>
                    <p className="mt-3 text-lg font-semibold text-cyan-100">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950">
                <img
                  src="/assets/etc100w-jp.png"
                  alt="ETC100W の製品イメージ"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-6 lg:px-10">
        {productCards.map((card) => (
          <article
            key={card.id}
            id={card.id}
            className="grid gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 backdrop-blur md:grid-cols-[0.95fr_1.05fr]"
          >
            <div className="flex flex-col justify-between rounded-[1.5rem] border border-white/10 bg-[#071021] p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/65">{card.eyebrow}</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{card.title}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">{card.description}</p>
              </div>
              <ul className="mt-8 grid gap-3 text-sm text-white/82 sm:grid-cols-2">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
              <img src={card.image} alt={card.alt} className="h-full w-full object-cover" />
            </div>
          </article>
        ))}
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="rounded-[2rem] border border-cyan-200/15 bg-[linear-gradient(135deg,_rgba(34,211,238,0.12),_rgba(15,23,42,0.75))] p-8">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/65">Where to buy</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">製品導線も、そのまま見せられます。</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
                今回はまずオンラインで見せることを優先し、必要な場合は販売店案内や比較表もこのまま
                追加できる設計にしています。
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="#etc100w" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950">
                ETC100W
              </a>
              <a href="#pps2300w1f" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">
                PPS2300W1F
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
