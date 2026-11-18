# KINGVERSE checks (Playwright, local only)
Serve the repo: `python3 -m http.server 8823` (from the repo root), then:
- `node tests/kv-relics.js`: all 4 new games sell their relic and KV records it.
- `node tests/kv-prestige.js`: TALOS Rebuild twice, button number matches the toast, relic kept.
- `node tests/helios-sunstone.js`: HELIOS Sunstone relic costs 1M and is granted.
Run with `NODE_PATH=$(npm root -g)` if Playwright is installed globally. All passed Nov 17 2026.
