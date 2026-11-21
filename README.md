# AI Assistant Blocker Chrome Extension

This tool is a lightweight Chrome extension built to cut down on LLM dependency. When you actually want to learn something, do research, or finish an assignment without reaching for an AI shortcut, flip the switch on. It blocks access to major AI chatbots and strips out Google's AI Overviews so you stick to traditional web sources.

## Features

- **Simple Toggle:** Turn the blocker on or off directly from the extension popup. It stays off by default until you decide to start a focus session.
- **AI Site Blocker:** When you open an LLM page (like gemini, chatgpt, deepseek...) a beautiful interface awaits you :)
- **Google AI Overview Removal:** Hides the AI-generated summary boxes at the top of Google Search results without breaking standard organic links.
- **Zero Background Overhead:** Runs purely on page load with minimal memory footprint and no background polling.

## Blocked Platforms & Features

- **Chatbots & Assistants:** ChatGPT, Claude, Google Gemini, DeepSeek, Grok, Microsoft Copilot, Mistral (Le Chat), Meta AI, Qwen, Kimi AI, Pi
- **Search & Research:** Perplexity AI, Google NotebookLM, Consensus, Elicit, Scite.ai, Genspark, You.com, Google Search AI Overviews
- **Coding & App Builders:** Cursor, Lovable, Bolt.new

## Installation

You can load the extension into Chrome or any Chromium-based browser (Brave, Edge, Arc, etc.) using Developer Mode:

1. Clone this repository or download it as a ZIP and extract it:
   ```bash
   git clone https://github.com/yigituyar/AI-Assistant-Blocker.git
2. Open `chrome://extensions/` and activate the developer mode on the top-right corner.

3. Click  `Load Unpacked Extension` button and select extenion folder.

4. The extension will be shown in your extensions section.
