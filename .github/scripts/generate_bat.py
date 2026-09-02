#!/usr/bin/env python3
"""
Gotham Bat Contribution Animation Generator
Generates an animated SVG of a bat patrolling across GitHub contribution graph.
"""

import argparse
import json
import os
import sys
import urllib.request
from datetime import datetime

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

def fetch_contributions(username):
    url = f"https://github-contributions-api.jogruber.de/v4/{username}?y=last"
    try:
        req = urllib.request.Request(
            url,
            headers={"User-Agent": "Mozilla/5.0 (Gotham-Bat-Generator)"}
        )
        with urllib.request.urlopen(req, timeout=15) as response:
            data = json.loads(response.read().decode("utf-8"))
            return data.get("contributions", [])
    except Exception as e:
        print(f"Warning: Could not fetch online contributions ({e}). Generating local map.")
        return []

def generate_bat_svg(username, contributions, output_path="assets/bat-contributions.svg"):
    # SVG Dimensions
    width = 840
    height = 180
    cols = 53
    rows = 7
    cell_size = 11
    gap = 3.5
    offset_x = 42
    offset_y = 48

    # Grid mapping
    grid = [[0 for _ in range(rows)] for _ in range(cols)]
    active_points = []
    month_markers = {}

    if contributions:
        needed = cols * rows
        sub = contributions[-needed:] if len(contributions) >= needed else contributions
        
        for idx, item in enumerate(sub):
            c = idx // rows
            r = idx % rows
            if c < cols:
                lvl = item.get("level", 0)
                grid[c][r] = lvl
                if lvl > 0:
                    active_points.append((c, r))
                
                date_str = item.get("date")
                if date_str and r == 0:
                    try:
                        dt = datetime.strptime(date_str, "%Y-%m-%d")
                        if dt.day <= 7:
                            month_markers[c] = dt.strftime("%b")
                    except Exception:
                        pass
    else:
        sample_pts = [(0, 4), (0, 5), (1, 3), (11, 4), (12, 3), (16, 6), (41, 2), (41, 3), (51, 1), (51, 2), (51, 3), (51, 5), (51, 6)]
        for c, r in sample_pts:
            if c < cols and r < rows:
                grid[c][r] = 3
                active_points.append((c, r))

    if not month_markers:
        default_months = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
        for idx, m in enumerate(default_months):
            col_pos = int(idx * (cols / 12))
            month_markers[col_pos] = m

    # Calculate Bat Flight Path
    waypoints = [(0, 0)]
    curr = (0, 0)
    sorted_targets = sorted(active_points, key=lambda p: (p[0], p[1]))
    
    for target in sorted_targets:
        while curr != target:
            nx = curr[0] + (1 if curr[0] < target[0] else (-1 if curr[0] > target[0] else 0))
            ny = curr[1] + (1 if curr[1] < target[1] else (-1 if curr[1] > target[1] else 0))
            curr = (nx, ny)
            waypoints.append(curr)

    while curr[0] < cols - 1:
        curr = (curr[0] + 1, (curr[1] + 1) % rows)
        waypoints.append(curr)
    while curr[0] > 0:
        curr = (max(0, curr[0] - 2), (curr[1] + 2) % rows)
        waypoints.append(curr)
    waypoints.append((0, 0))

    keyframes = []
    total_pts = len(waypoints)
    for idx, (c, r) in enumerate(waypoints):
        pct = round((idx / (total_pts - 1)) * 100, 1)
        bx = offset_x + c * (cell_size + gap) - 12
        by = offset_y + r * (cell_size + gap) - 10
        keyframes.append(f"    {pct}% {{ transform: translate({bx}px, {by}px); }}")
    keyframes_css = "\n".join(keyframes)

    bg_color = "#0D1117"
    border_color = "#1E293B"
    empty_color = "#161B22"
    empty_border = "#21262D"
    level_colors = ["#0E4429", "#006D32", "#26A641", "#39D353"]

    month_svg = []
    for c, m in month_markers.items():
        mx = offset_x + c * (cell_size + gap)
        month_svg.append(f'<text x="{mx}" y="36" fill="#64748B" font-size="10" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif">{m}</text>')
    month_block = "\n".join(month_svg)

    cells_svg = []
    for c in range(cols):
        for r in range(rows):
            lvl = grid[c][r]
            x = offset_x + c * (cell_size + gap)
            y = offset_y + r * (cell_size + gap)
            if lvl == 0:
                cells_svg.append(f'<rect x="{x}" y="{y}" width="{cell_size}" height="{cell_size}" rx="2.5" fill="{empty_color}" stroke="{empty_border}" stroke-width="0.8"/>')
            else:
                col = level_colors[min(lvl - 1, len(level_colors) - 1)]
                cells_svg.append(f'<rect x="{x}" y="{y}" width="{cell_size}" height="{cell_size}" rx="2.5" fill="{col}"/>')
    cells_block = "\n".join(cells_svg)

    svg_template = f"""<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  @keyframes batFlight {{
{keyframes_css}
  }}
  @keyframes wingFlapLeft {{
    0%, 100% {{ transform: scaleY(1) rotate(0deg); }}
    50% {{ transform: scaleY(0.3) rotate(14deg); }}
  }}
  @keyframes wingFlapRight {{
    0%, 100% {{ transform: scaleY(1) rotate(0deg); }}
    50% {{ transform: scaleY(0.3) rotate(-14deg); }}
  }}
  @keyframes echolocation {{
    0% {{ transform: scale(0.5); opacity: 0.85; }}
    100% {{ transform: scale(2.4); opacity: 0; }}
  }}
  .bat-patrol {{
    animation: batFlight 16s linear infinite;
  }}
  .wing-l {{
    transform-origin: 20px 14px;
    animation: wingFlapLeft 0.22s infinite ease-in-out;
  }}
  .wing-r {{
    transform-origin: 24px 14px;
    animation: wingFlapRight 0.22s infinite ease-in-out;
  }}
  .sonar {{
    transform-origin: 22px 15px;
    animation: echolocation 1.4s cubic-bezier(0, 0.7, 0.3, 1) infinite;
  }}
</style>

<!-- Background Panel -->
<rect width="{width}" height="{height}" rx="14" fill="{bg_color}" stroke="{border_color}" stroke-width="1.5"/>

<!-- Header Title -->
<text x="24" y="24" fill="#38BDF8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="12" font-weight="700">🦇 GOTHAM NIGHT PATROL • BAT TELEMETRY</text>
<text x="{width - 170}" y="24" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="10">Less</text>
<rect x="{width - 142}" y="15" width="10" height="10" rx="2" fill="{empty_color}" stroke="{empty_border}" stroke-width="0.8"/>
<rect x="{width - 128}" y="15" width="10" height="10" rx="2" fill="{level_colors[0]}"/>
<rect x="{width - 114}" y="15" width="10" height="10" rx="2" fill="{level_colors[1]}"/>
<rect x="{width - 100}" y="15" width="10" height="10" rx="2" fill="{level_colors[2]}"/>
<rect x="{width - 86}" y="15" width="10" height="10" rx="2" fill="{level_colors[3]}"/>
<text x="{width - 70}" y="24" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="10">More</text>

<!-- Day labels -->
<g fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="9">
  <text x="14" y="{offset_y + 1 * (cell_size + gap) + 9}">Mon</text>
  <text x="14" y="{offset_y + 3 * (cell_size + gap) + 9}">Wed</text>
  <text x="14" y="{offset_y + 5 * (cell_size + gap) + 9}">Fri</text>
</g>

<!-- Month Labels -->
{month_block}

<!-- Contribution Cells Grid -->
<g>
{cells_block}
</g>

<!-- Animated Bat Sprite -->
<g class="bat-patrol">
  <g transform="translate(0, 0)">
    <!-- Sonar Ring -->
    <circle cx="22" cy="15" r="14" stroke="#38BDF8" stroke-width="1.2" fill="none" class="sonar" opacity="0.7"/>
    
    <!-- Left Wing -->
    <path class="wing-l" fill="#1E293B" stroke="#38BDF8" stroke-width="1.2" d="M 20 14 C 15 5, 8 1, 2 7 C 1 13, 6 22, 10 20 C 13 23, 17 21, 20 14 Z"/>
    
    <!-- Right Wing -->
    <path class="wing-r" fill="#1E293B" stroke="#38BDF8" stroke-width="1.2" d="M 24 14 C 29 5, 36 1, 42 7 C 43 13, 38 22, 34 20 C 31 23, 27 21, 24 14 Z"/>
    
    <!-- Bat Body -->
    <ellipse cx="22" cy="15" rx="5.5" ry="7.5" fill="#0F172A" stroke="#38BDF8" stroke-width="1.2"/>
    
    <!-- Ears -->
    <polygon points="18,10 19.5,3 21.5,10" fill="#0F172A" stroke="#38BDF8" stroke-width="0.8"/>
    <polygon points="22.5,10 24.5,3 26,10" fill="#0F172A" stroke="#38BDF8" stroke-width="0.8"/>
    
    <!-- Glowing Cyan Eyes -->
    <circle cx="20" cy="13.5" r="1.3" fill="#38BDF8"/>
    <circle cx="24" cy="13.5" r="1.3" fill="#38BDF8"/>
    
    <!-- Fangs -->
    <polygon points="20.5,17.5 21.5,17.5 21,19.5" fill="#FFFFFF"/>
    <polygon points="22.5,17.5 23.5,17.5 23,19.5" fill="#FFFFFF"/>
  </g>
</g>
</svg>"""

    os.makedirs(os.path.dirname(os.path.abspath(output_path)) or ".", exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(svg_template)
    print(f"Generated Bat Contribution Animation: {output_path}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate Bat Contribution Graph SVG")
    parser.add_argument("--username", type=str, default="Muntasir-Shawon", help="GitHub username")
    parser.add_argument("--output", type=str, default="assets/bat-contributions.svg", help="Output path")
    args = parser.parse_args()

    print(f"[Bat Patrol] Fetching live contributions for {args.username}...")
    contribs = fetch_contributions(args.username)
    generate_bat_svg(args.username, contribs, args.output)
