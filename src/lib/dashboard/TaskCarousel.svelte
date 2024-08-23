<script>
  import Carousel from 'svelte-carousel';
</script>

<Carousel
  particlesToShow={2}
  particlesToScroll={1}
  autoplay
  autoplayDuration={5000}
  pauseOnFocus
>
  <slot />
</Carousel>
