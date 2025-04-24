<script setup lang="ts">
const isOpen = ref<boolean>(false)

const openSidebar = () => {
  isOpen.value = !isOpen.value
}
</script>


<template>
  <div class="page-wrap">
    <NuxtLoadingIndicator  color="#fff"/>

    <div class="navbar w-nav">
      <div id="navbar" class="navbar-contents">
        <nav id="w-node-f1c308e5-a656-2ef3-31f7-094629e39794-29e39792" class="w-nav-menu nav-menu lg:!block !hidden">
          <a href="/" class="nav-link">About</a>
          <a href="/" class="nav-link">schedule</a>
          <a href="/" class="nav-link">speakers</a>
          <a href="/" class="nav-link">sponsors</a>
          <a href="/" class="nav-link">faq</a>

          <div class="nav-right-content mobile">
            <a href="#" class="white-button w-button">Sign up</a>
          </div>
        </nav>

        <div class="brand w-nav-brand w--current flex md:justify-center items-center w-full justify-between">
          <img src="@/assets/images/logo.png" class="w-[194px]" alt="">

          <button class="!block md:!hidden m-0 p-0 h-[30px] w-[30px] fixed right-5" @click.stop="openSidebar">
            <svg
v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>

            <svg
v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="#fff"
                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>

        <div id="w-node-f1c308e5-a656-2ef3-31f7-094629e397a4-29e39792" class="nav-right">
          <div class="menu-button w-nav-button">
            <img
                src="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80d8_hamburger white.svg"
                alt="#"/>
          </div>

          <div class="nav-right-content desktop">
            <a href="/" class="nav-link">Pricing</a>
            <a href="#" class="white-button w-button">Sign up</a>
          </div>
        </div>
      </div>
    </div>

    <section class="hero-ribbon-section">
      <img
          src="@/assets/images/logo.png"
          loading="lazy" sizes="100vw"
          srcset="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80db_hero%2520ribbon-p-500.png 500w, https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80db_hero%2520ribbon-p-800.png 800w, https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80db_hero%2520ribbon-p-1080.png 1080w, https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80db_hero%2520ribbon-p-1600.png 1600w, https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80db_hero%2520ribbon-p-2000.png 2000w, https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80db_hero%2520ribbon-p-2600.png 2600w, https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80db_hero%20ribbon.png 3200w"
          alt="" class="ribbon-image"
      />
      <div class="center-content center-text">
        <div class="tag-flex">
          <div class="title">november 8-9</div>
          <div class="title">Live and Virtual</div>
        </div>

        <h1 class="large-heading">Digital makers</h1>
      </div>
    </section>

    <section>
      <div class="w-layout-blockcontainer container w-container">
        <div class="center-content center-text">
          <div class="limit">
            <div class="title">arts center, san francisco</div>
            <p class="medium-text">
              Join us at Digital Makers, where digital creators unite to innovate, collaborate, and inspire new
              possibilities.
            </p>
            <a href="#" class="blue-button w-button">Book your spot now</a>
          </div>
        </div>
      </div>
    </section>


    <!--mobile menu-->
    <nav
        v-if="isOpen" class="!fixed !top-10 w-nav-menu nav-menu md:!hidden lg:!hidden !block" data-aos="fade-left"
        data-aos-duration="500"
    >
      <div class="pt-[40px]">
        <a href="/" class="nav-link">About</a>
        <a href="/" class="nav-link">schedule</a>
        <a href="/" class="nav-link">speakers</a>
        <a href="/" class="nav-link">sponsors</a>
        <a href="/" class="nav-link">faq</a>
      </div>

      <div class="nav-right-content mobile">
        <a href="#" class="white-button w-button">Sign up</a>
      </div>
    </nav>
    <!--mobile menu-->
  </div>
</template>

<style>

</style>