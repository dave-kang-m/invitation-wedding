<template>
  <section class="container"
           id="landing"
           @click="scrollDown" >
    <article :class="['contents', imgLoad&&'on-load']">
      <div class="text-container">
        <p class="date">2025.07.13</p>
        <h1 class="title">
          강민서 & 정솔
          <span>결혼식에 초대합니다</span>
        </h1>
      </div>
      
      <div class="introduction-img-container">
        <img src="/invitation-wedding/introduction/img1.png"
             loading="lazy"
             alt=""
             class="introduction-img" />
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const imgLoad = ref(false)

let timeout2: NodeJS.Timeout

onMounted(() => {
  timeout2 = setTimeout(() => {
    imgLoad.value = true
  }, 650)
})

onUnmounted(() => {
  clearTimeout(timeout2)
})

const scrollDown = () => {
  const next = document.querySelector<HTMLDivElement>('#who-am-i')
  if (next) {
    window.scrollTo({top: next.offsetTop, behavior: 'smooth'})
  }
}
</script>

<style scoped>
.original {
  top: 0;
  width: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  top: 0;
  background-color: white;
  min-height: 100vh;
  width: 100%
}

.text-container {
  margin-bottom: 50px;
  text-align: center;
}

.date {
  font-size: 21px;
  line-height: 30px;
  margin-bottom: 8px;
}

.introduction-img {
  width: 100%;
  object-fit: cover;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 400ms ease-in-out;
}

.introduction-img-container {
  position: relative;
  width: 100%;
  aspect-ratio: calc(393 / 437);
  margin-bottom: 28px;
}

.title {
  font-size: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
}

.title span {
  margin-top: 8px;
  font-size: 18px;
}

.location {
  margin-top: 20px;
  font-size: 15px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.4);
  text-align: center;
}

.contents {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 550ms ease-out;
  opacity: 0;
  transform: translateY(30px);
}

.on-load {
  opacity: 1;
  transform: none;
}
</style>
