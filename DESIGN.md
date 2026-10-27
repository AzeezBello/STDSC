# DESIGN.md: STDSC Visual Language & Anti-Slop Specification

Built with the principles of **[leonxlnx/taste-skill](https://github.com/leonxlnx/taste-skill)** and **[pbakaus/impeccable](https://github.com/pbakaus/impeccable)**.

## 1. Aesthetic Direction: "Lagos Academic Monograph"
Instead of generic SaaS templates, STDSC draws inspiration from prestigious university presses, scientific journals, and parliamentary annals:
- **Warm Editorial Paper & Deep Ink**: Warm alabaster paper (`#faf8f5`) and limestone secondary surfaces (`#f2efe9`) replace sterile `#ffffff` and cold slate grays.
- **Tri-Tone Institutional Accents**:
  - **Oxford Chamber Navy (`#0d213f`)**: Authority, parliamentary debate, civic tradition.
  - **Championship Brass (`#c8961e`)**: Academic distinction, trophies, primary calls to action.
  - **Laboratory Verdigris / Teal (`#0e5a63`)**: Scientific inquiry, STEM Olympiad, hardware/software prototyping.

## 2. Tri-Font Typographic System (`/impeccable typeset`)
- **Display & Editorial Headlines (`--font-display`)**: High-contrast editorial serif (`"Iowan Old Style"`, `"Palatino Linotype"`, `"Newsreader"`, `"Instrument Serif"`, Georgia, serif) with tight optical tracking (`-0.025em`) and `text-wrap: balance`.
- **Body & Interface (`--font-sans`)**: Clean humanist sans-serif (`"Plus Jakarta Sans"`, `"Avenir Next"`, `"Segoe UI"`, sans-serif) with `text-wrap: pretty` and a strict `68ch` reading measure.
- **Technical & Index Metadata (`--font-mono`)**: Monospace (`"JetBrains Mono"`, `"SF Mono"`, `"Fira Code"`, monospace) with `font-variant-numeric: tabular-nums` for track codes (`TRK-01`), round timers, and architectural section indices.

## 3. Anti-Slop Guardrails Enforced
1. **No Floating Icon Tiles**: Banished uniform rounded-square icon boxes above card headings. Cards use monospace index headers (`01`, `02`, `TRK-A`), top border accents, or editorial photography.
2. **No Cookie-Cutter 3/4-Column Card Grids**: Replaced with asymmetric 12-column bento layouts, exposed `1px` architectural grids (`divide-x`, `divide-y`), and editorial split ledgers.
3. **No Em-Dash Clichés**: Removed AI-generated em-dash (`—`) sentence splices across all public copy.
4. **No Sparkle-Icon Pill Badges**: Replaced generic `<Sparkles />` pills with numbered section rules (`§ 01 / ARCHIVE & FORMAT`).
5. **No Cards Nested Inside Cards**: Flattened container hierarchy using hairline dividers and surface tonal shifts.
