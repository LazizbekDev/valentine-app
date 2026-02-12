<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';
  import confetti from 'canvas-confetti';

  let mounted = false;

  onMount(() => {
    mounted = true;
    // vibrate when page loads (mobile only)
    if (navigator.vibrate) {
      navigator.vibrate(400);
    }
    
    // Bayramona konfetti otish
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  });
</script>

<svelte:head>
  <title>ily pro max gf 🫂</title>
</svelte:head>

<div class="min-h-screen w-full bg-gradient-to-br from-red-400 via-pink-400 to-rose-500 flex items-center justify-center p-6 overflow-hidden">
  
  {#if mounted}
    <div 
      in:scale={{ duration: 1000, delay: 200 }} 
      class="max-w-md w-full bg-white/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-2xl text-center relative overflow-hidden"
    >
      <div class="absolute inset-0 pointer-events-none opacity-20">
        <div class="absolute top-10 left-10 animate-bounce">❤️</div>
        <div class="absolute bottom-20 right-10 animate-pulse">💖</div>
        <div class="absolute top-1/2 left-5 animate-bounce">✨</div>
      </div>

      <div class="relative z-10">
        <div class="text-7xl mt-6 animate-bounce">
            <img src="gf.png" alt="GF" class="w-24 rounded mx-auto">
        </div>
        
        <h1 class="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-md">
          AGHH! I Knew It!
        </h1>
        
        <p class="text-xl text-white/90 font-medium leading-relaxed mb-8">
        You've made my world so much brighter.
        February 14th will be unforgettable for us! I love you so much gf 🌹
        </p>

        <div class="space-y-4">
          <div class="h-1 w-full bg-white/30 rounded-full overflow-hidden">
            <div class="h-full bg-white animate-[load_3s_ease-in-out_infinite]" style="width: 70%"></div>
          </div>
          <p class="text-sm text-white/80 italic">Relationship status: Locked & Loaded ❤️</p>
          <p class="text-xs text-white/40">Go back to ig and text me haha</p>
        </div>

        <a 
          href="/" 
          class="inline-block mt-10 text-white/70 hover:text-white transition-colors underline decoration-dotted"
        >
          wanna say YES again? 😌
        </a>
      </div>
    </div>
  {/if}
</div>

<style>
  @keyframes load {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(0%); }
    100% { transform: translateX(100%); }
  }

  /* Mobil uchun maxsus moslashuv (Custom Glass effect) */
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }
</style>