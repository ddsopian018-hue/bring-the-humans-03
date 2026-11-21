# NOTES — bring-the-humans-03: "Your AI agent could be getting paid"

## Creative choice and why

The bounty is ranked by real TikTok views, so the ad is built to stop a
scroll, not to be clever. The hook lands in the first second, in huge white
type on make.fun magenta (#c41c83): "YOUR AI AGENT COULD BE GETTING PAID."
It speaks directly to the one audience likely to convert — people who
already run or follow AI agents — and it promises money, which is the whole
point of make.fun. Everything after the hook is proof and instruction:

1. **0–3s — Hook.** Magenta ground, staggered lines "YOUR AI AGENT /
   COULD BE / GETTING PAID." + "while you scroll." The brand badge pill
   is already on screen from frame one.
2. **3–9s — Proof.** The real make.fun board screenshot (press pack),
   slow zoom, three lines over a dark panel: "AI agents build things. /
   They enter bounties. / They win real money." The screenshot shows a
   $1,325 bounty and a $1,000 first place — the money claim is visible,
   not just asserted.
3. **9–15s — What it is.** Ink-dark ground with the press pack's ghost
   crew on laptops: "make.fun is where AI agents compete / in bounties
   for real money." + "People enter them with their agents." This is the
   sentence the rules require the ad to say, said plainly.
4. **15–20s — Call to action.** Back on magenta: "Enter your AI agent /
   in a bounty on / make.fun" + "Real money. Real rankings."
5. **17.5–20s — End card.** The press pack's transparent referral card
   over the blurred clip (llms.txt ffmpeg recipe, blur sigma 28,
   saturation 0.35, 0.8s ease-in), referral code `15w4cn26` typed into
   its field in JetBrains Mono Bold, ink #191419.

Audio is a quiet synthesized chord pad (Am–F–C–G sine bed, 20s, fades
in/out) so the video is not silent on a muted-scroll platform; there is
no voiceover because the on-screen text carries the whole message and
each line stays up 2–3 seconds, inside the safe area (clear of the
badge, of TikTok's right-side buttons and of the bottom caption zone).

Why this shape wins views: one idea, one promise, no jargon, brand
colour from the first frame, and the proof (real bounties, real dollars)
arrives before the viewer can swipe. The title names the technique in
the playbook's style: a hook-first, proof-second ad.

## How it was made (this session)

- Fetched in-session: https://make.fun/press/manifest.json (edition
  2026-11-21) and https://make.fun/press/llms.txt.
- Brand badge: https://make.fun/press/brand-badge/9x16/makefun-badge-9x16.png
  (1080x1920 full-frame overlay, 22,297 bytes) — overlaid at 0,0,
  unscaled, unmodified, from t=0 until the end card at t=17.5s.
  Note: the fetched manifest (edition 2026-11-21) lists no `brand_badge`
  block; the badge was fetched from the URL RULES.txt / AGENT.md name,
  HTTP 200, and used exactly as downloaded.
- End card: https://make.fun/press/referral-card/9x16/makefun-card-9x16-transparent.webm
  (768,936 bytes, matches llms.txt's "769 KB"), decoded with libvpx-vp9,
  laid over the last 2.5s per the llms.txt recipe, code typed in at
  x=210, y centred on 1271, 62px JetBrains Mono Bold, ink #191419,
  caret covered white first.
- Other press files: screenshots/board-dark.png and x/header-crew-1500x500.png,
  fetched from the press pack in-session. Caveat, recorded honestly: both
  files' sha256 differ from the values in the fetched manifest (board-dark
  downloaded 45d021c3… vs manifest 1d7e2821…; header-crew downloaded
  709499ba… vs manifest ce1ed3c3…; a re-download returned identical bytes,
  so the live press files differ from the manifest's recorded hashes —
  the manifest appears stale for these two files). Both are valid PNGs
  served from the official press URLs, used as downloaded, never
  redrawn or recoloured. No make.fun mark, wordmark or colour in the ad
  comes from anywhere but the press pack.
- On-screen text: Inter Bold (the press pack's brand font, Inter 4.1
  release) via ffmpeg drawtext. Referral code: JetBrains Mono Bold
  (press pack's named font).
- Render: ffmpeg 8.1.2, four segments (3s + 6s + 6s + 5s) concatenated,
  then the badge + end-card pass per the llms.txt recipe (HOLD=0).
  Output: 1080x1920, 30fps, 20.06s, H.264 + AAC, 2,689,948 bytes.
- Frames checked visually in-session: first frame (badge + hook),
  t=1.5s (full hook), t=5s and t=8s (board scene, staggered lines),
  t=12s (crew scene), t=16.5s and t=17.2s (CTA complete), last frame
  (end card with `15w4cn26` in the field, copy button beside it).
  All correct; no text clipped or overlapping the badge.

## Posting (for Baginda)

- Post `ad-tiktok.mp4` as-is: public video, public account, no edits or
  trims in TikTok's editor. Keep it public until results are out.
- Caption: see CAPTION.txt (the bounty's line word for word, plus play
  code `makefun-loom-maple-zinnia`).
- After posting, open the short share link in a browser and copy the
  full `https://www.tiktok.com/@<handle>/video/<id>` address into
  VIDEO.json, then the entry can be submitted (repo + commit + bundle).
- VIDEO.json currently holds the kit's placeholder address on purpose:
  no URL was invented.
