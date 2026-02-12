<script lang="ts">
  import { goto } from "$app/navigation";
  import { fade, scale } from "svelte/transition";

  async function sendTelegram(msg: string) {
    await fetch("/api/notify", {
      method: "POST",
      body: JSON.stringify({ message: msg }),
      headers: { "Content-Type": "application/json" },
    });
  }

  let reportedNo = false;
  let yesButtonSize = 1;
  let noButtonPos = { x: 0, y: 0 };
  let attempts = 0;
  let isMoved = false;

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

  const moveButton = (e: MouseEvent | TouchEvent) => {
    // Mobil qurilmalarda default click eventni to'xtatish
    if (e) e.preventDefault();

    attempts++;
    isMoved = true;

    // Birinchi marta "No" ni bosmoqchi bo'lganda xabar yuboramiz
    if (!reportedNo) {
      sendTelegram("🏃‍♀️ <b>This btch tried to say NO!</b>");
      reportedNo = true;
    }

    if (attempts >= 8) {
      sendTelegram("😤 <b>Update:</b> there's no button for this mf now");
      isHidden = true;
      return;
    }

    // Tugmani ekran bo'ylab xavfsiz (ekrandan chiqib ketmaydigan) joyga ko'chirish
    const randomX = Math.floor(Math.random() * 70) + 15; // 15% dan 85% gacha
    const randomY = Math.floor(Math.random() * 70) + 15;
    noButtonPos = { x: randomX, y: randomY };

    // Matnni o'zgartirish
    if (attempts < phrases.length) {
      currentPhrase = phrases[attempts];
    }

    // "Yes" tugmasini tajovuzkorona kattalashtirish
    yesButtonSize += 0.1;
  };


    function handleYes(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }) {
        goto("/celebrate");
    }
</script>

<svelte:head>
  <title>Will you be my Valentine? 💖</title>
</svelte:head>
<div
  class="min-h-screen w-full flex flex-col items-center justify-center bg-[#fff5f7] overflow-hidden relative p-6 text-center select-none"
>
  <div class="absolute inset-0 pointer-events-none opacity-20">
    <div class="absolute top-10 left-10 animate-pulse text-4xl">❤️</div>
    <div class="absolute bottom-20 right-10 animate-bounce text-5xl">💖</div>
    <div class="absolute top-1/2 left-5 animate-pulse text-3xl">✨</div>
  </div>

  <div class="z-10 max-w-sm w-full" in:fade>
    <div
      class="mb-8 rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500"
    >
      <img
        src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3b2cwamV2YXJoNXptdXRndHNxczRsa3NzOHZtbGFhZTdpcHpjM3M5aCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/T1TqR5TT62mVG/giphy.gif"
        alt="Cute Valentine"
        class="w-full h-auto"
      />
    </div>

    <h1
      class="text-3xl md:text-5xl font-black text-rose-600 mb-10 drop-shadow-sm"
    >
      Will you be my <br />
      <span class="text-red-500 underline decoration-wavy">Valentine?</span>
    </h1>

    <div
      class="flex flex-col sm:flex-row items-center justify-center gap-8 relative min-h-[200px] mt-10"
    >
      <button
        class="relative group overflow-hidden bg-gradient-to-r from-emerald-400 to-green-500 text-white font-black py-5 px-12 rounded-2xl
           shadow-[0_0_20px_rgba(52,211,153,0.4)] hover:shadow-[0_0_40px_rgba(52,211,153,0.7)]
           transition-all duration-300 active:scale-95 uppercase tracking-wider"
        style="transform: scale({yesButtonSize}); z-index: 50;"
        onclick={handleYes}
      >
        <span
          class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"
        ></span>

        <span class="relative flex items-center gap-2">
          Yes! <span class="text-2xl">💍</span>
        </span>
      </button>

      {#if !isHidden}
        <button
          class="bg-white/40 backdrop-blur-md text-rose-600 border-2 border-rose-200/50 font-bold py-4 px-10 rounded-2xl
             shadow-[6px_6px_12px_#ebdadd,-6px_-6px_12px_#ffffff]
             hover:bg-rose-50 hover:text-rose-700 transition-all duration-300 touch-none outline-none"
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
      <p
        in:fade
        class="mt-12 text-amber-400 font-bold tracking-tight text-lg"
      >
        LoL, she thinks she can reject me? some mfs trying to say NO! AGHHH
      </p>
    {/if}
  </div>
</div>

<style>
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
  :global(body) {
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #fff5f7;
    font-family: "Poppins", sans-serif;
  }
</style>
