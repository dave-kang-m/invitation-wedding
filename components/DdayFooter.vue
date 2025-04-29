<script lang="ts">
import dayjs from "dayjs";
import axios from "axios";
let name: string = '';
let message: string = '';
let engage: number = -1;

export default {
  name: 'DdayFooter',
  data() {
    return {
      dday: dayjs('2025-07-13').diff(dayjs(),'day').toString().padStart(2, '0'),
      name,
      message,
      engage,
      shareEnable: false,
    }
  },
  mounted() {
    this.shareEnable = window.navigator.share !== undefined;
  },
  methods: {
    shareLink() {
      if(window.navigator.share) {
        window.navigator.share({
          title: '강민서 & 정솔 결혼식에 초대합니다',
          text: '강민서 & 정솔 결혼식에 초대합니다',
          url: 'https://dave-kang-m.github.io/invitation-wedding/',
        });
      }
    },
    copyLink() {
      window.navigator.clipboard.writeText('https://dave-kang-m.github.io/invitation-wedding/')
          .then(()=>{
            window.alert('주소가 복사되었습니다.');
          })
    }
  },
}
</script>

<template>
  <footer class="footer">
    <div class="btn-container">
      <a class="btn"
         v-if="shareEnable"
         @click="shareLink" >
        <img src="../assets/imgs/ic_share.png"
             alt='' />
        링크 공유하기
      </a>
      <a class="btn"
         @click="copyLink">
        <img src="../assets/imgs/ic_link.png"
             alt='' />
        주소 복사하기
      </a>
    </div>
  </footer>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
}
.dday {
  margin: 52px 0 10px;
  font-size: 25px;
  line-height: 28px;
  font-weight: 400;
  text-align: center;
}

.message {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 40px;
}

.input {
  font-size: 20px;
  width: 100%;
  border: 0.5px solid black;
  line-height: 1;
  padding: 8px 16px;
  box-sizing: border-box;
  margin-bottom: 20px;
  border-radius: 0;
  background-color: white;
  color: black;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  min-height: 42px;
}

.input::placeholder {
  color: rgba(0, 0, 0, 0.4);
}

.input:focus {
  outline: none;
}

.placeholder {
  color: rgba(0, 0, 0, 0.4);
}

.button {
  font-size: 18px;
  background: black;
  color: white;
  padding: 12px 0;
  border: none;
  width: 100%;
  margin-top: 1.5rem;
}

.footer {
  background-color: rgba(0, 0, 0, 0.06);
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer p {
  font-size: 15px;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
}

.footer p:nth-last-of-type(1) {
  margin-top: 6px;
}

.btn-container {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-bottom: 40px;
}


.btn {
  font-size: 16px;
  display: flex;
  align-items: center;
  column-gap: 8px;
  cursor: pointer;
}

.btn img {
  width: 22px;
  height: 22px;
}
</style>
