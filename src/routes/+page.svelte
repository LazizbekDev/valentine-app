<script lang="ts">
  import { goto } from "$app/navigation";
  import { fade, fly } from "svelte/transition";

  async function sendTelegram(msg: string) {
    try {
      await fetch("/api/notify", {
        method: "POST",
        body: JSON.stringify({ message: msg }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (e) {
      console.error("Telegram error:", e);
    }
  }

  let reportedNo = false;
  let yesButtonSize = 1;
  let noButtonPos = { x: 0, y: 0 };
  let attempts = 0;
  let isMoved = false;

  // Siz xohlagan original matnlar
  const phrases = [
    "No",
    "Are you sure? gf 🤨",
    "Really sure? 💔",
    "Think again! mf🧐",
    "Last chance! ⚠️",
    "Do not mess with me! 😠",
    "Okay, I'm out! 😒",
  ];

  let currentPhrase = phrases[0];
  let isHidden = false;

  const moveButton = (e: any) => {
    if (e) e.preventDefault();
    attempts++;
    isMoved = true;

    if (!reportedNo) {
      sendTelegram("🏃‍♀️ <b>This btch tried to say NO!</b>");
      reportedNo = true;
    }

    if (attempts >= 8) {
      sendTelegram("😤 <b>Update:</b> there's no button for this mf now");
      isHidden = true;
      return;
    }

    const randomX = Math.floor(Math.random() * 60) + 15; 
    const randomY = Math.floor(Math.random() * 60) + 15;
    noButtonPos = { x: randomX, y: randomY };

    if (attempts < phrases.length) {
      currentPhrase = phrases[attempts];
    }
    yesButtonSize += 0.1;
  };

  function handleYes() {
    sendTelegram("🎉 <b>FINALLY!</b> she said YES! ❤️");
    goto("/celebrate");
  }
</script>

<svelte:head>
  <title>Valentine? 💖</title>
</svelte:head>

<div class="min-h-screen w-full flex flex-col items-center justify-center bg-[#1a1a1a] overflow-hidden relative p-4 text-center select-none font-sans">
  
  <div class="absolute inset-0 opacity-10 pointer-events-none">
    <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e11d48_0.5px,transparent_0.5px)] [background-size:16px_16px]"></div>
  </div>

  <div class="z-10 max-w-sm w-full" in:fade>
    <div class="bg-[#262626] border border-[#333] p-1 shadow-2xl mb-8">
      <img
        src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3b2cwamV2YXJoNXptdXRndHNxczRsa3NzOHZtbGFhZTdpcHpjM3M5aCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/T1TqR5TT62mVG/giphy.gif"
        alt="Valentine"
        class="w-full h-48 object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
      />
    </div>

    <h1 class="text-3xl md:text-4xl font-black text-white mb-10 tracking-tighter uppercase italic">
      Will you be my <br />
      <span class="text-[#e11d48] not-italic">Valentine?</span>
    </h1>

    <div class="flex flex-col items-center justify-center gap-6 relative min-h-[200px]">
      
      <button
        class="w-full py-4 px-8 bg-[#e11d48] hover:bg-[#fb7185] text-white font-black text-xl transition-all duration-200 active:scale-95 shadow-[4px_4px_0px_#4c0519] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 z-50 uppercase"
        style="transform: scale({yesButtonSize});"
        onclick={handleYes}
      >
        Yes! 💍
      </button>

      {#if !isHidden}
        <button
          class="py-3 px-10 bg-white/40 backdrop-blur-md border border-[#444] text-[#333] font-bold hover:text-white hover:border-white transition-all duration-300 touch-none outline-none"
          style={isMoved
            ? `position: fixed; left: ${noButtonPos.x}%; top: ${noButtonPos.y}%; z-index: 40;`
            : "position: relative;"}
          onmouseenter={moveButton}
          ontouchstart={moveButton}
        >
          {currentPhrase}
        </button>
      {/if}
    </div>

    {#if attempts > 4}
      <p in:fade class="mt-12 text-[#e11d48] font-mono text-xs tracking-widest uppercase">
        she thinks she can reject me? some mfs trying to say NO! AGHHH
      </p>
    {/if}
  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&display=swap');

  :global(body) {
    background-color: #1a1a1a;
    font-family: 'Space Grotesk', sans-serif;
  }

  button {
    -webkit-tap-highlight-color: transparent;
  }
</style>