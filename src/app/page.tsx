export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-bold text-purple-700">
            Mitsuru Yanagibayashi
          </span>
          <div className="hidden sm:flex gap-6 text-sm text-gray-600">
            <a href="#story" className="hover:text-purple-600 transition-colors">
              ストーリー
            </a>
            <a href="#possibility" className="hover:text-purple-600 transition-colors">
              可能性
            </a>
            <a href="#services" className="hover:text-purple-600 transition-colors">
              サービス
            </a>
            <a href="#contact" className="hover:text-purple-600 transition-colors">
              お問い合わせ
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="animate-fade-in-up text-sm font-medium text-purple-600 tracking-widest mb-4">
            生成AIコンサルタント
          </p>
          <h1 className="animate-fade-in-up animate-delay-200 text-4xl sm:text-5xl font-bold leading-tight mb-6">
            非エンジニアだから、
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              伝わる。
            </span>
          </h1>
          <p className="animate-fade-in-up animate-delay-400 text-gray-600 text-lg leading-relaxed mb-4">
            元上場企業 営業部 全国売上3位 → 生成AI導入サポートへ
          </p>
          <p className="animate-fade-in-up animate-delay-400 text-gray-500 text-base leading-relaxed mb-10">
            柳林充（やなぎばやし みつる）
          </p>
          <div className="animate-fade-in-up animate-delay-600 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/yanagitatami"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-3.5 rounded-full font-medium hover:from-purple-700 hover:to-purple-600 transition-all shadow-lg shadow-purple-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Instagramをフォロー
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-purple-200 text-purple-700 px-8 py-3.5 rounded-full font-medium hover:bg-purple-50 transition-all"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Story</h2>
          <p className="text-center text-purple-500 mb-12">わたしのこと</p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">
                  上場企業の営業部で全国3位に
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  前職では上場企業の営業部に所属し、全国売上3位の実績を残しました。
                  「相手の立場に立って考える」を徹底したことが結果につながりました。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">
                  生成AIとの出会い、そして転身
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  生成AIに触れたことで「これは誰もが使えるべきツールだ」と確信。
                  非エンジニアの自分だからこそ、同じ目線で伝えられると感じ、
                  生成AIコンサルタントとして活動を始めました。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">
                  コミュニティ運営で実績を積む
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  現在は生成AIコミュニティの運営に携わりながら、
                  請求書の自動化や契約書の作成・送付自動化など、
                  実務に直結する業務改善を数多く手がけています。
                  YouTubeでの発信やSNS運用代行、動画制作にも取り組んでいます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Possibility Section (NEW) */}
      <section id="possibility" className="py-20 px-6 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What You Get</h2>
          <p className="text-center text-purple-500 mb-6">セットアップの先にある世界</p>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14 leading-relaxed">
            Claude Codeの初期セットアップは、ただのインストール作業ではありません。
            <br className="hidden sm:block" />
            <span className="font-bold text-purple-700">インターネット上のあらゆるサービスを、自然言語で操作できる環境</span>を手に入れるということです。
          </p>

          {/* Before/After */}
          <div className="grid sm:grid-cols-2 gap-6 mb-14">
            <div className="bg-gray-100 rounded-2xl p-8 border border-gray-200">
              <p className="text-sm font-medium text-gray-400 mb-4">BEFORE — これまで</p>
              <div className="space-y-3 text-gray-500">
                <div className="flex items-start gap-3">
                  <span className="text-gray-300 mt-0.5">&#x2716;</span>
                  <span>ブラウザでサービスを一つずつ開いて手作業</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-300 mt-0.5">&#x2716;</span>
                  <span>サイト公開にはエンジニアへの外注が必要</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-300 mt-0.5">&#x2716;</span>
                  <span>請求書・契約書を毎回手作業で作成</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-300 mt-0.5">&#x2716;</span>
                  <span>SNS分析は目視で感覚頼り</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl p-8 text-white">
              <p className="text-sm font-medium text-purple-200 mb-4">AFTER — セットアップ後</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-purple-200 mt-0.5">&#x2714;</span>
                  <span>「サイト作って」→ 数分で公開完了</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-200 mt-0.5">&#x2714;</span>
                  <span>「請求書を作って送って」→ 自動で生成・送信</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-200 mt-0.5">&#x2714;</span>
                  <span>「来週の予定を整理して」→ カレンダー自動操作</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-200 mt-0.5">&#x2714;</span>
                  <span>「Instagramの反応を分析して」→ データ自動取得</span>
                </div>
              </div>
            </div>
          </div>

          {/* Why it works */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-purple-100 shadow-sm">
            <h3 className="font-bold text-xl mb-6 text-center">なぜ、自然言語だけで全部できるのか？</h3>
            <div className="max-w-2xl mx-auto space-y-4 text-gray-600 leading-relaxed">
              <p>
                GitHub、Vercel、Googleカレンダー、Gmail、Notion、Instagram——
                これらのサービスは全て<span className="font-bold text-purple-700">「API」という命令の窓口</span>を持っています。
              </p>
              <p>
                ブラウザは「人間が目で見て手で操作する入り口」。
                <br />
                ターミナルは「プログラムやAIが自動で操作する入り口」。
              </p>
              <p>
                Claude Codeはターミナル上で動くAI。だから、あなたの言葉を受け取って、
                これらのAPIを自動で操作できる。
                <span className="font-bold text-purple-700">初期セットアップは、この「自動の入り口」を開く作業</span>です。
              </p>
            </div>

            {/* Service icons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-gray-500">
              <span className="bg-purple-50 px-4 py-2 rounded-full">GitHub</span>
              <span className="bg-purple-50 px-4 py-2 rounded-full">Vercel</span>
              <span className="bg-purple-50 px-4 py-2 rounded-full">Google Calendar</span>
              <span className="bg-purple-50 px-4 py-2 rounded-full">Gmail</span>
              <span className="bg-purple-50 px-4 py-2 rounded-full">Notion</span>
              <span className="bg-purple-50 px-4 py-2 rounded-full">Instagram</span>
              <span className="bg-purple-50 px-4 py-2 rounded-full">YouTube</span>
              <span className="bg-purple-50 px-4 py-2 rounded-full">Stripe</span>
              <span className="bg-purple-50 px-4 py-2 rounded-full">Slack</span>
              <span className="bg-purple-50 px-4 py-2 rounded-full text-purple-500 font-medium">...and more</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Services</h2>
          <p className="text-center text-purple-500 mb-12">
            提供しているサービス
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">
                Claude Code 初期セットアップ
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                話題のAIツール「Claude Code」の導入を、画面共有しながら一緒に進めます。
                Macの設定からアカウント作成、ターミナル操作まで丁寧にサポート。
                セットアップが完了すれば、自然言語でサイト公開や業務自動化が可能に。
              </p>
              <span className="inline-block mt-4 text-xs font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                受付中
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">業務自動化サポート</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                請求書発行、契約書の作成・送付など、繰り返しの業務を生成AIで自動化。
                あなたの「めんどくさい」を解決します。
              </p>
              <span className="inline-block mt-4 text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                順次追加予定
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">動画制作</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                企画から編集まで、生成AIを活用した効率的な動画制作をお手伝いします。
                YouTube運営の経験を活かしたコンテンツ作りが得意です。
              </p>
              <span className="inline-block mt-4 text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                順次追加予定
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">SNS運用代行</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Instagram・YouTubeなどのSNS運用を代行。
                投稿企画から分析まで、あなたの発信力を一緒に育てます。
              </p>
              <span className="inline-block mt-4 text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                順次追加予定
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section id="strengths" className="py-20 px-6 bg-purple-50/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Strengths</h2>
          <p className="text-center text-purple-500 mb-12">選ばれる3つの理由</p>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3">非エンジニア目線</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                専門用語を使わない、わかりやすい説明。
                「何がわからないか」を同じ立場で理解できます。
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3">伴走型サポート</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                一方的に教えるのではなく、あなたのペースに合わせて一緒に進めます。
                画面共有でリアルタイムにサポート。
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3">実務で証明済み</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                請求書・契約書の自動化など、実際のビジネスで成果を出してきた実績。
                机上の空論ではありません。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-600 to-purple-500">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            最新の情報はInstagramで発信中
          </h2>
          <p className="text-purple-100 mb-8 leading-relaxed">
            生成AIの活用テクニックや日々の活動を投稿しています。
            <br className="hidden sm:block" />
            気軽にフォローしてください。
          </p>
          <a
            href="https://www.instagram.com/yanagitatami"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-3.5 rounded-full font-bold hover:bg-purple-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @yanagitatami
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-purple-500 mb-8">お問い合わせ</p>
          <p className="text-gray-600 leading-relaxed mb-10">
            サービスについてのご質問や、ご相談はお気軽にどうぞ。
            <br />
            InstagramのDMからお問い合わせいただけます。
          </p>
          <a
            href="https://www.instagram.com/yanagitatami"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-purple-600 transition-all shadow-lg shadow-purple-200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            DMで相談する
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-800 text-gray-400 text-center text-sm">
        <p>&copy; 2026 柳林充 All rights reserved.</p>
      </footer>
    </div>
  );
}
