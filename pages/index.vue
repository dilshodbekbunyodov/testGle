<script setup lang="ts">
import AOS from "aos"
import "aos/dist/aos.css"

onMounted(() => {
  AOS.init({
    once: true,
    delay: 200,
    duration: 800,
    easing: "ease-in-out",
    offset: 120,
    mirror: false,
    anchorPlacement: "top-bottom"
  })
})
</script>

<template>
  <div>
    <!-- ==================== Start about ==================== -->
    <section data-aos="fade-up" class="about-ma">
      <div
          class="md:block hidden bg-img md-hide p-0 rotate-none scale-none m-0 w-[952px] m-w-[952px] m-h-[953px] h-[953px] sticky top-[-390px] translate-y-[391px] bg-cover bg-center"
          style="background-image: url('https://uithemez.com/i/hubfolio_HTML/modern_agency/assets/imgs/about.jpg');"
      />
      <div class="content">
        <div class="item sec-head mb-[130px]">
          <h6 class="sub-head sub-color mb-20">Our Experience</h6>
          <h3>We help creative agencies, designers, and other creative people to connect with potential clients.</h3>
          <div class="botm flex items-center justify-between pt-20 bord-thin-top-light">
            <h2 class='!mb-0'>12</h2>
            <h6 class="ml-auto">Years of <br> experience</h6>
          </div>
        </div>
        <div class="item sec-head !mb-[50px]">
          <h6 class="sub-head sub-color mb-20">Our Successfully</h6>
          <h3>We are a passionate team of designers and developers.</h3>
          <div class="botm flex items-center justify-between pt-20  bord-thin-top-light">
            <h2 class='!mb-0'>64</h2>
            <h6 class="ml-auto">Projects <br> Completed</h6>
          </div>
        </div>
        <div class="item sec-head">
          <h6 class="sub-head sub-color mb-20">Our Growth</h6>
          <h3>Commitment to Innovation and Growth.</h3>
          <div class="botm flex items-center justify-between pt-20 bord-thin-top-light">
            <h2 class='!mb-0'>180<span>%</span></h2>
            <h6 class="ml-auto">Conversions <br> growth increased.</h6>
          </div>
        </div>
      </div>
    </section>
    <!-- ==================== End about ==================== -->

    <!-- ==================== Start Pricing ==================== -->
    <div data-aos="fade-up" class='mt-[400px]'>
      <div class="section-separator"/>
      <section id="Pricing" class="section no-padding-bottom">
        <div class="w-layout-blockcontainer container w-container">
          <div class="center-content center-text">
            <div class="limit">
              <h2>Pricing plans</h2>
              <p class="medium-text">Choose one of three available ticket tiers, all of which are available for purchase
                when you reach out.</p>
            </div>
          </div>

          <div class="three-column-grid">
            <div>
              <div class="pricing-top">
                <div class="pricing-head">
                  <div class="title">makers conf 2024</div>
                </div>
                <div class="pricing-card-content">
                  <div><h3>Basic Pass</h3>
                    <p>Access to sessions, exhibits, and networking events throughout the conference.</p>
                  </div>
                  <div>
                    <div class="price"><span class="opacity-white-text">$ </span>59</div>
                  </div>
                </div>
              </div>
              <a href="#Sign-up" class="pricing-card-button w-button">Sign up now</a></div>

            <div>
              <div class="pricing-top">
                <div class="pricing-head">
                  <div class="title">makers conf 2024</div>
                </div>
                <div class="pricing-card-content">
                  <div><h3>Premium Pass</h3>
                    <p>Includes all basic features plus priority seating and workshop access.</p></div>
                  <div>
                    <div class="price"><span class="opacity-white-text">$ </span>89</div>
                  </div>
                </div>
              </div>

              <a href="#Sign-up" class="pricing-card-button w-button">Sign up now</a></div>
            <div>
              <div class="pricing-top">
                <div class="pricing-head">
                  <div class="title">makers conf 2024</div>
                </div>
                <div class="pricing-card-content">
                  <div><h3>Special Pass</h3>
                    <p>All premium benefits plus exclusive speaker meet-and-greet and VIP dinner.</p></div>
                  <div>
                    <div class="price"><span class="opacity-white-text">$ </span>129</div>
                  </div>
                </div>
              </div>
              <a href="#Sign-up" class="pricing-card-button w-button">Sign up now</a></div>
          </div>
        </div>

        <img
            src="../cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f9_pricing%20ribbon%20(1).png"
            loading="lazy" sizes="(max-width: 3200px) 100vw, 3200px"
            srcset="https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f9_pricing%2520ribbon%2520(1)-p-500.png 500w, https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f9_pricing%2520ribbon%2520(1)-p-800.png 800w, https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f9_pricing%2520ribbon%2520(1)-p-1080.png 1080w, https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f9_pricing%2520ribbon%2520(1)-p-1600.png 1600w, https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f9_pricing%2520ribbon%2520(1)-p-2000.png 2000w, https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f9_pricing%2520ribbon%2520(1)-p-2600.png 2600w, https://cdn.prod.website-files.com/67061df890aa3a22852e80c7/67061df890aa3a22852e80f9_pricing%20ribbon%20(1).png 3200w"
            class="pricing-ribbon"
            alt="#"
        />

        <div class="container mx-auto ">
          <div class="grid justify-center lg:grid-cols-3 mt-5 sm:mt-[90px]">
            <div class="max-lg:flex max-sm:flex-col">
              <img src="https://greenlighteld.com/dv1.jpg" alt="">
              <div class="mt-5">
                <h5 class="!text-2xl sm:text-[26px] lg:text-[28px] text-dark leading-[32.76px] mb-5">
                  PT30 ELD Device
                </h5>
                <b>$ 135</b>
              </div>
            </div>

            <div class="max-lg:flex max-sm:flex-col">
              <img src="https://greenlighteld.com/dv2.jpg" alt="">
              <div class="mt-5">
                <h5 class="!text-2xl sm:text-[26px] lg:text-[28px] text-dark leading-[32.76px] mb-5">OBD 2, 16-pin
                  cable</h5>
                <b>$ 15</b>
              </div>
            </div>

            <div class="max-lg:flex max-sm:flex-col">
              <img src="https://greenlighteld.com/dv3.jpg" alt="">
              <div class="mt-5">
                <h5 class="!text-2xl sm:text-[26px] lg:text-[28px] text-dark leading-[32.76px] mb-5">
                  PT30 - 9 Pin Cable
                </h5>
                <b>$ 15</b>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
    <!-- ==================== Start Pricing ==================== -->


    <!-- ==================== Start Services ==================== -->
    <section data-aos="fade-up" class="services-ds">
      <div class="container mx-auto">
        <div class="sec-head mt-[100px] mb-[60px] flex items-center">
          <div>
            <h2>Our <span>Services</span></h2>
          </div>

          <div class="ml-auto cursor-pointer">
            <div class="flex items-center border-[#ffffff4d] border py-3 px-[25px] rounded-[30px]">
              <span>See Our Approach</span>
            </div>
          </div>
        </div>

        <div class="item flex items-center">
          <div class="title">
            <h2>Branding</h2>
          </div>
          <div class="text ml-auto">
            <div class="flex items-center">
              <p>Brand Identity, Stragegy & Consult, <br> Position, Rebrand</p>
              <div>
                <div class="icon invert-0">
                  <img src="https://uithemez.com/i/hubfolio_HTML/common/imgs/icons/crown-solid.svg" class="invert"
                       alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item flex items-center">
          <div class="title">
            <h2>Design</h2>
          </div>
          <div class="text ml-auto">
            <div class="flex items-center">
              <p>Brand Identity, Stragegy & Consult, <br> Position, Rebrand</p>
              <div>
                <div class="icon invert-0">
                  <img src="https://uithemez.com/i/hubfolio_HTML/common/imgs/icons/bezier-curve-solid.svg"
                       class="invert" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item flex items-center">
          <div class="title">
            <h2>Code</h2>
          </div>
          <div class="text ml-auto">
            <div class="flex items-center">
              <p>Brand Identity, Stragegy & Consult, <br> Position, Rebrand</p>
              <div>
                <div class="icon invert-0">
                  <img src="https://uithemez.com/i/hubfolio_HTML/common/imgs/icons/code-solid.svg" class="invert"
                       alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item flex items-center">
          <div class="title">
            <h2>Growth</h2>
          </div>
          <div class="text ml-auto">
            <div class="flex items-center">
              <p>Brand Identity, Stragegy & Consult, <br> Position, Rebrand</p>
              <div>
                <div class="icon invert-0">
                  <img src="https://uithemez.com/i/hubfolio_HTML/common/imgs/icons/chart-line-solid.svg" class="invert"
                       alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ==================== End Services ==================== -->


    <!-- ==================== Efficiency boosted on all devices==================== -->
    <section data-aos="fade-up" class="py-[90px] px-4">
      <div class="container mx-auto lg:flex-row flex-col flex gap-8 justify-center items-center">
        <img src="https://greenlighteld.com/_nuxt/downloadi.DRkhcFLY.jpg" alt="">
        <div>

          <div class="max-w-[419px]">
            <h1 class="text-secondary max-sm:text-[32px] max-sm:leading-[50px] font-bold text-[40px] leading-[62px]">
              Efficiency boosted on all devices
            </h1>

            <div class="flex gap-2 mt-5">
              <a href="/" target="_blank">
                <img width="200" class="max-sm:w-40" src="https://greenlighteld.com/_nuxt/appstore.BAFipH0V.svg"
                     alt="/">
              </a>

              <a href="/" target="_blank">
                <img width="200" class="max-sm:w-40" src="https://greenlighteld.com/_nuxt/googleplay.BEaRsgLa.svg"
                     alt="/">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ==================== Efficiency boosted on all devices==================== -->
  </div>
</template>

<style scoped>

</style>