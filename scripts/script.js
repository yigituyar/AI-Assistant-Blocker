console.log(window.location.host);

var list = `[
  {
    "name": "ChatGPT",
    "url": "chatgpt.com"
  },
  {
    "name": "Claude",
    "url": "claude.com"
  },
  {
    "name": "Google Gemini",
    "url": "gemini.google.com"
  },
  {
    "name": "DeepSeek",
    "url": "chat.deepseek.com"
  },
  {
    "name": "Grok",
    "url": "grok.com"
  },
  {
    "name": "Microsoft Copilot",
    "url": "copilot.com"
  },
  {
    "name": "Le Chat (Mistral AI)",
    "url": "chat.mistral.ai"
  },
  {
    "name": "Meta AI (Llama)",
    "url": "www.meta.ai"
  },
  {
    "name": "Qwen",
    "url": "chat.qwenlm.ai"
  },
  {
    "name": "Kimi AI",
    "url": "kimi.moonshot.cn"
  },
  {
    "name": "Pi",
    "url": "pi.ai"
  },
  {
    "name": "Perplexity AI",
    "url": "www.perplexity.ai"
  },
  {
    "name": "Google NotebookLM",
    "url": "notebook.google.com"
  },
  {
    "name": "Consensus",
    "url": "consensus.app"
  },
  {
    "name": "Elicit",
    "url": "elicit.com"
  },
  {
    "name": "Scite.ai",
    "url": "scite.ai"
  },
  {
    "name": "Genspark",
    "url": "www.genspark.ai"
  },
  {
    "name": "You.com",
    "url": "you.com"
  },
  {
    "name": "Cursor",
    "url": "www.cursor.com"
  },
  {
    "name": "Claude Code",
    "url": "claude.ai"
  },
  {
    "name": "Lovable",
    "url": "lovable.dev"
  },
  {
    "name": "Bolt.new",
    "url": "bolt.new"
  }
]`;

function change() {
    window.stop();

    const style = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&display=swap');

      * {
        box-sizing: border-box !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      html, body {
        width: 100% !important;
        height: 100% !important;
        overflow: hidden !important;
        background: #090714 !important;
      }

      #maincard {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        z-index: 2147483647 !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        background: #090714 !important;
        background-image: 
          radial-gradient(at 20% 20%, rgba(126, 34, 206, 0.25) 0px, transparent 50%),
          radial-gradient(at 80% 80%, rgba(236, 72, 153, 0.2) 0px, transparent 50%) !important;
        font-family: 'Outfit', -apple-system, sans-serif !important;
        color: #ffffff !important;
      }

      .card {
        background: rgba(255, 255, 255, 0.03) !important;
        backdrop-filter: blur(16px) !important;
        -webkit-backdrop-filter: blur(16px) !important;
        border: 1px solid rgba(255, 255, 255, 0.08) !important;
        border-radius: 24px !important;
        padding: 3rem 2.5rem !important;
        text-align: center !important;
        max-width: 540px !important;
        width: 90% !important;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5),
                    0 0 40px rgba(168, 85, 247, 0.15) !important;
        animation: floatIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
      }

      .icon-container {
        font-size: 3.5rem !important;
        margin-bottom: 1rem !important;
        display: inline-block !important;
        animation: pulse 2s infinite ease-in-out !important;
      }

      .card h1 {
        font-size: 2.2rem !important;
        font-weight: 800 !important;
        letter-spacing: -0.02em !important;
        line-height: 1.2 !important;
        margin-bottom: 1rem !important;
        background: linear-gradient(135deg, #ffffff 0%, #a855f7 100%) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
      }

      .card h2 {
        font-size: 1.25rem !important;
        font-weight: 600 !important;
        color: #c084fc !important;
        background: rgba(168, 85, 247, 0.1) !important;
        border: 1px solid rgba(168, 85, 247, 0.2) !important;
        padding: 0.75rem 1.25rem !important;
        border-radius: 12px !important;
        display: inline-block !important;
        letter-spacing: 0.01em !important;
      }

      @keyframes floatIn {
        from {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
    </style>
  `;

    document.documentElement.innerHTML = `
    <head>
    <title>Use your own brain</title>
    ${style}

    </head>
    <body>
      <div id="maincard">
        <div class="card">
          <div class="icon-container">🧠</div>
          <h1>You do not have access to this site</h1>
          <h2>Please use your own brain 😊</h2>
        </div>
      </div>
    </body>
  `;
}

list = JSON.parse(list);

chrome.storage.local.get(["isBlocked"], function (result) {
  if (result.isBlocked !== undefined && result.isBlocked === true) {
    
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      
      if (window.location.host.includes(item.url)) {
        change();
        break;
      }
      console.log(item.url);
    }
    
    
    if (window.location.host.includes("google.") && window.location.pathname === "/search") {
      const url = new URL(window.location.href);
      if (!url.searchParams.has("udm")) {
        url.searchParams.set("udm", "14");
        window.location.replace(url.toString());
      }
    }
    
  }
});