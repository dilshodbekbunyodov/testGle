<script setup>
import html2canvas from 'html2canvas';

const takePhoto = async () => {
  let [tab] = await chrome.tabs.query({ active: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const waitForLC = setInterval(() => {
        if (typeof LC !== 'undefined') {
          clearInterval(waitForLC);


        } else {
          console.log('undefined')
        }
      }, 100);
    }
  });
};

// const takePhoto = async () => {
//   const chartElement = document.querySelector('#__layout');
//   if (chartElement) {
//     html2canvas(chartElement, {
//       scale: 2,
//       useCORS: true
//     }).then(canvas => {
//       const imgData = canvas.toDataURL('image/png');
//       console.log(imgData, 'imgData');
//     });
//   } else {
//     console.error('Element #leaflet-popup not found');
//   }
// };
</script>

<template>
  <div>
    <button @click="takePhoto">Take photo</button>

    <!--    <div id="html-canvas" class="html__canvas">-->
    <!--      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio enim, eos expedita iure magni-->
    <!--      nesciunt nobis soluta vero voluptatibus! Aperiam deserunt dicta excepturi exercitationem explicabo maxime, nemo-->
    <!--      temporibus totam?-->
    <!--    </div>-->


    <!--    <img style="margin-top: 20px" :src="testImage" alt="">-->

  </div>
</template>

<style>
.html__canvas {
  margin-top: 20px;
  background-color: black;
  padding: 20px;
  width: 300px;
}
</style>