<script>
  // svelte-carousel doesnt support ts :c
  import Carousel from 'svelte-carousel';
  import { onMount } from 'svelte';

  export let tasks_amount;
  let particles_to_show;

  const calculateParticlesToShow = () => {
    return Math.min(Math.floor(innerWidth / 250), tasks_amount);
  };

  $: particles_to_show = calculateParticlesToShow();

  function handleResize() {
    const new_particles = calculateParticlesToShow();

    // If the change is significant
    if (Math.abs(new_particles - particles_to_show) > 0.5) {
      particles_to_show = new_particles;
    }
  }

  onMount(() => {
    particles_to_show = calculateParticlesToShow();
    window.addEventListener('resize', handleResize);

    return () =>
      window.removeEventListener('resize', handleResize);
  });
</script>

<Carousel
  particlesToShow={particles_to_show}
  particlesToScroll={1}
  autoplay
  autoplayDuration={5000}
  pauseOnFocus
>
  <slot />
</Carousel>
