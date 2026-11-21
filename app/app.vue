<script setup lang="ts">
import '~/assets/css/main.css'

const videos = [
  {
    "videoId": "glKIWs2oYu4",
    "title": "Remind Là Một Kẻ Xốu Tính",
    "statistics": {
      "viewCount": 73570,
      "likeCount": 2534,
      "commentCount": 120
    }
  },
  {
    "videoId": "ioaWh0n4oag",
    "title": "BỌN TÔI LỪA ĐẢO GIỎI PHẾT!",
    "statistics": {
      "viewCount": 62677,
      "likeCount": 1574,
      "commentCount": 27
    }
  },
  {
    "videoId": "DztJybqrf54",
    "title": "3 NGÀY SINH NHẬT HOANG DÃ CỦA 3 CẶP KÍNH HÀ ĐÔNG",
    "statistics": {
      "viewCount": 133966,
      "likeCount": 3475,
      "commentCount": 78
    }
  },
]

const lastUpdate = "Nov 18 2026";

const current = useState('current', () => 0);
const next = useState('next', () => current.value + 1);

const isShowNextStat = useState('showStat', () => false);
const endGame = useState('endGame', () => false);
const blockAction = useState('block', () => false);

const score = useState('score', () => 0);

function handleClick(event: any) {

  let targetNumber = event.target._value
  let targetVideo = videos[targetNumber];
  let otherVideo = null;

  if (targetNumber == current.value) {
    otherVideo = videos[next.value]
  } else {
    otherVideo = videos[current.value]
  }
  
  isShowNextStat.value = true;

  setTimeout(() => {
    if (targetVideo?.statistics.viewCount! >= otherVideo?.statistics.viewCount!) {
      score.value ++;

      if (score.value == videos.length - 1) {
        endGame.value = true;
        blockAction.value = true;
      } else {
        isShowNextStat.value = false;
        current.value ++;
        next.value ++;
      }
    } else {
      endGame.value = true;
      blockAction.value = true;
    }

  }, 1000)

  // setTimeout(() => {
  //   isShowNextStat.value = false;
  //   current.value ++;
  //   next.value ++;
  // }, 1000);
}

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
    <p>Last update: {{ lastUpdate }}</p>
    <p>Score: {{ score }}</p>

    <section>
      <div class="video">
        <iframe width="520" height="315" :src="'https://www.youtube.com/embed/'+videos[current]?.videoId"></iframe>
        <p>{{ formatNumber(videos[current]?.statistics.viewCount!) }} views</p>
        <button :disabled="blockAction" :value="current" @click="handleClick($event)">{{ videos[current]?.title }}</button>
      </div>
      <div class="video">
        <iframe width="520" height="315" :src="'https://www.youtube.com/embed/'+videos[next]?.videoId"></iframe>
        <p v-bind:style="{ 'visibility': isShowNextStat ? 'visible' : 'hidden'}">{{ formatNumber(videos[next]?.statistics.viewCount!) }} views</p>
        <button :disabled="blockAction" :value="next" @click="handleClick($event)">{{ videos[next]?.title }}</button>
      </div>
    </section>
  </main>

  <Teleport to="body">
    <modal :show="endGame" :score="score" @close="endGame = false">
    </modal>
  </Teleport>

  <footer>
      <p>submit your theme: </p>
      <input type="text" id="theme"/> 
      <button type="submit">send</button>
  </footer>
</template>
