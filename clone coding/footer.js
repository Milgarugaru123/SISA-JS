const inner = document.querySelector(`footer .mid .inner_link`);

const inner_link_data = [
  {
    label: `参加する`,
    buttons: [
      `参加登録`,
      `参加規約`,
      `支払い・払戻し・取消しについて`,
      `個人情報の取り扱いについて`,
      `ボランティアの募集`,
      `スタッフの募集`,
      `VR JMoF公式ウェブサイト`,
    ],
    links: [
      `https://www.jmof.jp/registration`,
      `https://www.jmof.jp/participation-policy`,
      `https://www.jmof.jp/transaction-policy`,
      `https://www.jmof.jp/privacy-policy`,
      `https://www.jmof.jp/volunteer`,
      `https://www.jmof.jp/recruit`,
      `https://vr.jmof.jp/`,
    ],
  },
  {
    label: `会場・ホテル`,
    buttons: [
      `開催場所について`,
      `宿泊予約について`,
      `更衣室について`,
      `ヘッドレスラウンジ`,
      `公式グッズ`,
    ],
    links: [
      `https://www.jmof.jp/travel`,
      `https://www.jmof.jp/hotel`,
      `https://www.jmof.jp/changing-room`,
      `https://www.jmof.jp/headless-lounge`,
      `https://www.jmof.jp/store`,
    ],
  },
  {
    label: `JMoFを知る`,
    buttons: [
      `JMoFについて`,
      `お問い合わせ`,
      `重要なお知らせ`,
      `開催実績`,
      `JMoFアーカイブ`,
      `JMoF Channel（ブログ）`,
    ],
    links: [
      `https://www.jmof.jp/about`,
      `https://www.jmof.jp/contact`,
      `https://www.jmof.jp/statement`,
      `https://www.jmof.jp/history`,
      `https://archive.jmof.jp/ja/`,
      `https://jmof-channel.themedia.jp/`,
    ],
  },
  {
    label: `企画を探す`,
    buttons: [
      `企画の募集`,
      `デッドドッグパーティー`,
      `フライト・オブ・ドリームズ特別企画`,
      `ディーラーズデン`,
      `アーティストラウンジ`,
      `ウェルカムラウンジ`,
      `イラストコンテスト`,
      `着ぐるみクリエイターコンテスト`,
      `フォトコンペティション`,
      `パフォーマンスステージ`,
      `動画上映会`,
    ],
    links: [
      `https://www.jmof.jp/event-application`,
      `https://www.jmof.jp/event-application`,
      `https://www.jmof.jp/flight-of-dreams`,
      `https://www.jmof.jp/dealers-den`,
      `https://www.jmof.jp/artist-lounge`,
      `https://www.jmof.jp/welcome-lounge`,
      `https://www.jmof.jp/art-contest`,
      `https://www.jmof.jp/fursuit-creators-competition`,
      `https://jfpc.asia/`,
      `https://www.jmof.jp/performance-stage`,
      `https://www.jmof.jp/movie-theater`,
    ],
  },
];

inner_link_data.forEach((partition, i) => {
  const part2pack = i % 2 == 1 ? [] : [document.createElement(`div`)];
  if (part2pack[0]) {
    part2pack[0].classList.add(`inner_${(i + 2) / 2}`);
    inner.appendChild(part2pack[0]);
  } else {
    part2pack.push(inner.querySelector(`.inner_${(i + 1) / 2}`));
  }

  const label = document.createElement(`h2`);
  label.innerHTML = partition.label;

  part2pack[0].appendChild();
});
