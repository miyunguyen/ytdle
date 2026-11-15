<script>
import '~/assets/css/main.css'
</script>

<template>
  <header>
    <h1>YTDLE</h1>
    <h2>Today's theme: CKG</h2>
    <nav>
      <button>View</button>
      <button>Like</button>
      <button>Comment</button>
    </nav>
  </header>

  <main>
    <h2>Which video has more view ?</h2>
    <p>Last update: Nov 15 2026</p>

    <section>
      <div class="video">
        <iframe width="520" height="315" src="https://www.youtube.com/embed/KYC56qoP8g8"></iframe>
        <button>TRẠI GÀ BỊP YỐI TRÁ</button>
      </div>
      <div class="video">
        <iframe width="520" height="315" src="https://www.youtube.com/embed/8FoRtH2zjcQ"></iframe>
        <button>Buổi tối kì lạ nhất CKG</button>
      </div>
    </section>
  </main>

  <footer>
      <p>submit your theme: </p>
      <input type="text" id="theme"/> 
      <button type="submit">send</button>
  </footer>
</template>
