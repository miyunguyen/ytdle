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
  {
    "videoId": "DIhOyjB8xKU",
    "title": "BUỔI SINH NHẬT KỲ QUẶC CỦA @CKG.HK15",
    "statistics": {
      "viewCount": 417618,
      "likeCount": 8163,
      "commentCount": 182
    }
  },
  {
    "videoId": "1OP9b6eUI6M",
    "title": "CHẠY BÃO CẦN PHẢI TỈNH TÁÃÁẠẢO",
    "statistics": {
      "viewCount": 205505,
      "likeCount": 3215,
      "commentCount": 56
    }
  },
  {
    "videoId": "OSyomAwLzYk",
    "title": "CKG CHƠI VALORANT TOÀN THẮNG?!",
    "statistics": {
      "viewCount": 145193,
      "likeCount": 2493,
      "commentCount": 48
    }
  },
  {
    "videoId": "KYC56qoP8g8",
    "title": "TRẠI GÀ BỊP YỐI TRÁ",
    "statistics": {
      "viewCount": 420846,
      "likeCount": 8068,
      "commentCount": 319
    }
  },
  {
    "videoId": "ofWWYZ0kMtI",
    "title": "TỔNG HỢP KHOẢNH KHẮC 2023 CÙNG CKG",
    "statistics": {
      "viewCount": 2211982,
      "likeCount": 21086,
      "commentCount": 447
    }
  },
  {
    "videoId": "s2XiNwBOb_g",
    "title": "CKG SỐNG SÓT BÃO TẬN THẾ",
    "statistics": {
      "viewCount": 93587,
      "likeCount": 1629,
      "commentCount": 36
    }
  },
  {
    "videoId": "kSLGlZbqcGk",
    "title": "CKG số đặc biệt: Những bí mật bạn chưa bao giờ biết - Tết Edition",
    "statistics": {
      "viewCount": 213632,
      "likeCount": 9847,
      "commentCount": 286
    }
  },
  {
    "videoId": "XvrkUyRO-rk",
    "title": "CKG SAU 12 GIỜ ĐÊM...",
    "statistics": {
      "viewCount": 1102611,
      "likeCount": 17006,
      "commentCount": 149
    }
  },
  {
    "videoId": "a18aPKfYcHQ",
    "title": "CKG BẮT NẠT CASTER 500BROS TRONG VALORANT",
    "statistics": {
      "viewCount": 208232,
      "likeCount": 3164,
      "commentCount": 49
    }
  },
  {
    "videoId": "rf1mxOXA6gU",
    "title": "ánh trăng lừa dối gì gì đó...",
    "statistics": {
      "viewCount": 127403,
      "likeCount": 2733,
      "commentCount": 83
    }
  },
  {
    "videoId": "zQGoZih5FE0",
    "title": "Như Tune Mùa Xuân - CKG (Như Hoa Mùa Xuân Cover)",
    "statistics": {
      "viewCount": 953621,
      "likeCount": 28100,
      "commentCount": 1320
    }
  },
  {
    "videoId": "lKhYNEPwsJg",
    "title": "ĐỪNG ĐỂ CKG LÀM AN NINH SÂN BAY",
    "statistics": {
      "viewCount": 285043,
      "likeCount": 3403,
      "commentCount": 66
    }
  },
  {
    "videoId": "TYLlWfcxoyA",
    "title": "CKG LÀM NHÂN VIÊN QUÁN CÀ PHÊ NHƯ THẾ NÀO? | CKG SỐ ĐẶC BIỆT",
    "statistics": {
      "viewCount": 461046,
      "likeCount": 14818,
      "commentCount": 476
    }
  }
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

  if (targetVideo?.statistics.viewCount! >= otherVideo?.statistics.viewCount!) {
    score.value ++;
  } else {
    endGame.value = true;
    blockAction.value = true;
    return;
  }

  setTimeout(() => {
    isShowNextStat.value = false;
    current.value ++;
    next.value ++;
  }, 1000);
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
