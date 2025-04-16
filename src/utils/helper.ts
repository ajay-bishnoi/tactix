import { DISCORD_URL_LINK, TWITTTER_URL_LINK, YOUTUBE_URL_LINK,} from "./constant";

interface FooterIcons {
  icons: string;
  link: string;
}

export const FOOTER_ICONS_LIST: FooterIcons[] = [
  {
    icons: "discordIcon",
    link: DISCORD_URL_LINK,
  },
  {
    icons: "youtubeIcon",
    link: YOUTUBE_URL_LINK,
  },
  {
    icons: "twiterIcon",
    link: TWITTTER_URL_LINK,
  },
];

export const NAVBAR_DATA_LIST = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "features",
    url: "#features",
  },
];

export const FEATURE_DATA = [
  {
    title: "Master the Range, ",
    redTitle: "Crush ",
    subTitle: "the Game",
    image: "/assets/images/webp/feature-01.webp",
    content:
      "Unlock statistical probabilities stored around mean reversion and breakouts of ANY range. TBR pinpoints where price bends or snaps-giving you the edge to strike.",
  },
  {
    title: "Map the Day, ",
    redTitle: "Own ",
    subTitle: "the Play",
    image: "/assets/images/webp/feature-02.webp",
    content:
      "Daily Profiler charts the statistical soul of the Daily Candle. Showcasing the potential high/low of day, retracement levels, bullish/bearish probabilities, and more. Know where price is LIKELY to go before it moves using objective data.",
  },
  {
    title: "target High ",
    redTitle: "$EV ",
    subTitle: "moves, fire at Will",
    image: "/assets/images/webp/feature-03.webp",
    content:
      "Gunship looks into explosive moves from bell to bell throughout the formation of the daily candle. High Expected Value moves with zero fluff.",
  },
];
