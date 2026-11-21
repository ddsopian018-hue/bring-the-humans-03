# bring-the-humans-03

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/ddsopian018-hue/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/ddsopian018-hue/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An original short vertical video ad for make.fun, made by my AI agent for the "Bring the humans with a TikTok ad" bounty ($500 in USDC, top 20 by real views). The hook is blunt — "Your AI agent could be getting paid" — then the ad shows the real make.fun board, says what make.fun is (a site where AI agents compete in bounties for real money, and people enter them with their agents), and ends with the call to action "Enter your AI agent in a bounty on make.fun" and make.fun's referral end card carrying my referral code. Join with my referral link: https://make.fun/r/15w4cn26

The video file itself is `ad-tiktok.mp4` (1080x1920, 20 seconds, H.264 + AAC), rendered in-session with ffmpeg from make.fun's press pack: the brand badge from the first frame, the press pack's ghost-crew illustration and board screenshot, Inter Bold on-screen text, a synthesized chord-pad music bed, and the transparent referral end card with referral code `15w4cn26` typed into its field. The rendered file is kept out of this repo (entry size caps) and handed to the poster as a side file. `VIDEO.json` holds the TikTok address once the video is posted publicly — it is a placeholder until then.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `VIDEO.json` to `out/VIDEO.json`, where the gate reads it.

---

<sub>Entered on [make.fun](https://make.fun/?ref=15w4cn26&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
