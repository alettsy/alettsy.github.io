<script>
  import ControlsBar from "./lib/ControlsBar.svelte";
  import Popup from "./lib/Popup.svelte";
  import SocialBar from "./lib/SocialBar.svelte";

  let showPopup = false;
  let popupData = {};

  function togglePopup(event) {
    popupData = event.detail.control;
    showPopup = !showPopup;
  }
</script>

<main>
  <div class="about-me">
    <h3 class="my-name-is">👋 Hi, my name is</h3>
    <h1 class="name">Alex Betts</h1>
    <p class="intro">
      I'm a software developer and tinkerer from the UK, currently studying computer science with AI at the University of Kent. When I'm not writing code, I like to dabble in the art of origami and do some reading.
    </p>
    <div class="options">
      <ControlsBar on:toggle-popup={togglePopup} />
      <SocialBar />
    </div>
  </div>
  <Popup on:toggle-popup={togglePopup} show={showPopup} data={popupData} />
</main>

<style>
  .about-me {
    max-width: 100%;
    position: absolute;
    transform: translate(0, -40%);
    top: 40%;
    padding: 0 2vw;
  }

  .name {
    font-size: 4rem;
    margin: 0;
    text-align: center;
  }

  .my-name-is {
    font-size: 1.5rem;
    margin: 0;
    color: var(--accent-color);
    text-align: center;
  }

  .intro {
    font-size: 1.3rem;
    margin: 0;
    padding: 2.5vh 0;
    text-align: center;
  }

  .options {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  /* TABLET */
  @media only screen and (min-width: 480px) {
    .about-me {
      max-width: 70vw;
      width: 70vw;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 45%;
      left: 50%;
    }

    .name, .my-name-is, .intro, .options {
      text-align: left;
    }
  }

  /* DESKTOP */
  @media only screen and (min-width: 1000px) {
    .about-me {
      max-width: 50vw;
      width: 50vw;
    }

    .options {
      flex-direction: row;
      justify-content: space-between;
      margin-right: 10px;
      gap: 0px;
    }
  }

  /* LARGE DESKTOP */
  @media only screen and (min-width: 1200px) {
    .about-me {
      max-width: 40vw;
      width: 40vw;
    }
  }
</style>
