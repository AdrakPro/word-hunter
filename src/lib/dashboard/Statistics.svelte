<script lang="ts">
  import {
    Binoculars,
    CircleCheckBig,
    Crown,
    Flame
  } from 'lucide-svelte';

  export let words_hunted: number = 100;
  export let quest_done: number = 100;
  export let xp_gained: number = 100;
  export let day_streak: number = 7;
</script>

<div class="wrapper w-4/5">
  <div class="container">
    <Binoculars size={40} color="#22a3c7" class="self-center" />
    <span class="num">{words_hunted}</span>
    <span class="text">Words hunted</span>
  </div>
  <div class="container">
    <CircleCheckBig
      size={40}
      color="#22a3c7"
      class="self-center"
    />
    <span class="num">{quest_done}</span>
    <span class="text">Quest done</span>
  </div>
  <div class="container">
    <Crown size={40} color="#22a3c7" class="self-center" />
    <span class="num">{xp_gained}</span>
    <span class="text">XP gained</span>
  </div>
  <div class="container">
    <Flame size={40} color="#22a3c7" class="self-center" />
    <span class="num">{day_streak}</span>
    <span class="text">Day streak</span>
  </div>
</div>

<style>
  .wrapper {
    width: 100%;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .container {
    width: 20vw;
    height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1em 0;
    font-size: 14px;
    border-radius: 1rem 1rem 0.5rem 0.5rem;
    background-color: #4f4f4f;
    border-bottom: 5px solid #22a3cf;
  }

  span.num {
    color: #ffffff;
    display: grid;
    place-items: center;
    font-weight: 600;
    font-size: 2em;
  }

  span.text {
    color: #fdf0d5;
    font-size: 1.2em;
    text-align: center;
    font-weight: 400;
    line-height: 0;
  }

  @media screen and (max-width: 1024px) {
    .container {
      width: 18vw;
      height: 15vh;
      font-size: 12px;
    }
  }

  @media screen and (max-width: 768px) {
    .wrapper {
      flex-wrap: wrap;
      gap: 15px;
    }

    .container {
      width: 35vw;
      height: 15vh;
      font-size: 12px;
    }
  }

  @media screen and (max-width: 580px) {
    .wrapper {
      width: 100%;
      flex-wrap: wrap;
      gap: 30px;
    }

    .container {
      width: 35vw;
      height: 15vh;
      font-size: 10px;
    }
  }
</style>
