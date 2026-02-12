<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, scale, fly } from 'svelte/transition';
  import confetti from 'canvas-confetti';

  let mounted = false;

  onMount(() => {
    mounted = true;
    
    // Mobil vibratsiya
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }
    
    // Premium konfetti effekti (yurakchalar bilan bo'lishi mumkin)
    const duration = 10 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#e11d48', '#fb7185', '#ffffff']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#e11d48', '#fb7185', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  });
</script>

<svelte:head>
  <title>ily pro max gf 🫂</title>
</svelte:head>

<div class="min-h-screen w-full bg-[#0f172a] flex items-center justify-center p-6 overflow-hidden relative font-sans">
  
  <div class="absolute inset-0 z-0">
    <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-900/40 blur-[120px] rounded-full"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-crimson-900/30 blur-[120px] rounded-full"></div>
  </div>

  {#if mounted}
    <div 
      in:fly={{ y: 20, duration: 1200 }} 
      class="max-w-md w-full bg-white/[0.03] backdrop-blur-2xl rounded-[2rem] p-10 border border-white/10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] text-center relative overflow-hidden"
    >
      <div class="absolute inset-0 pointer-events-none opacity-30">
        <div class="absolute top-10 left-10 animate-pulse text-2xl">✨</div>
        <div class="absolute bottom-10 right-10 animate-bounce text-2xl">🥂</div>
      </div>

      <div class="relative z-10">
        <div in:scale={{ delay: 400, duration: 800 }} class="relative inline-block mb-8">
          <div class="absolute -inset-2 bg-gradient-to-tr from-rose-500 to-amber-500 rounded-2xl blur-md opacity-50 animate-pulse"></div>
          <img src="gf.png" alt="GF" class="relative w-32 h-32 object-cover rounded-2xl border-2 border-white/20 shadow-2xl animate-bounce">
        </div>
        
        <h1 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-rose-200 mb-6 tracking-tight">
          AGHH! <br/> I Knew It!
        </h1>
        
        <p class="text-lg text-rose-100/80 font-medium leading-relaxed mb-10 px-2">
          You've made my world so much brighter. <br/>
          <span class="text-rose-400">Feb 14th</span> will be unforgettable for us. <br/>
          I love you so much, gf. 🌹
        </p>

        <div class="bg-black/20 rounded-2xl p-6 border border-white/5 space-y-4">
          <div class="flex justify-between text-xs uppercase tracking-[0.2em] text-rose-300/60 font-bold">
            <span>Love Level</span>
            <span>100%</span>
          </div>
          <div class="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-r from-rose-500 to-rose-300 animate-[load_2s_ease-out_forwards]"></div>
          </div>
          <p class="text-xs text-white/40 tracking-wide uppercase">
             Relationship status: <span class="text-rose-400">Locked & Loaded</span> ❤️
          </p>
        </div>

        <div class="mt-10 flex flex-col gap-4">
           <p class="text-sm text-rose-200/50 italic">Go back to IG and text me haha</p>
           
           <a 
            href="/" 
            class="text-xs text-white/20 hover:text-rose-400 transition-all duration-300 uppercase tracking-widest underline decoration-rose-500/30 underline-offset-8"
          >
            wanna say YES again? 😌
          </a>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&display=swap');

  @keyframes load {
    0% { width: 0%; }
    100% { width: 100%; }
  }

  :global(body) {
    margin: 0;
    padding: 0;
    background-color: #0f172a;
    font-family: 'Space Grotesk', sans-serif;
  }
</style>