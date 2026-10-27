---
name: Favnyr
category: File Management
short_description: A modern and lightweight file manager for Windows and Linux
description: >-
  Favnyr is a modern, portable, and lightweight local file manager for Windows
  and Linux built with zero telemetry.   

  It features an advanced workspace system supporting up to 32 split views,
  custom tabs, keyboard shortcuts, and persistent layouts.   

  It offers deep customization with extensive theming support, integrated
  terminals, custom right-click commands, and background folder calculations.
repository_url: https://github.com/GlitchAwakened/Favnyr
author: GlitchAwakened
license: GPL-3.0
language: Rust
installation:
  - method: nix
    command: nix run 'github:GlitchAwakened/Favnyr?dir=packaging/nix'
  - method: nix
    command: nix profile install 'github:GlitchAwakened/Favnyr?dir=packaging/nix'
platforms:
  - Linux
  - MacOS
  - Windows
tags:
  - cross-platform
  - file-explorer
  - file-manager
  - gui
  - modern
  - productivity
  - rust
  - slint
media: https://cli.masoko.net/uploads/favnyr/media.png
logo: https://cli.masoko.net/uploads/favnyr/logo.png
updated: '2026-10-27'
---
