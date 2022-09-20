<template>
  <!--begin::Authentication Layout -->
  <div class="d-flex flex-column flex-lg-row flex-column-fluid">
    <!--begin::Body-->
    <div
      class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1"
    >
      <!--begin::Form-->
      <div class="d-flex flex-center flex-column flex-lg-row-fluid">
        <!--begin::Wrapper-->
        <div class="<?php echo $params['wrapperClass']?> p-10">
          <router-view></router-view>
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Form-->

      <!--begin::Footer-->
      <div class="d-flex flex-center flex-wrap px-5">
        <!--begin::Links-->
        <div class="d-flex fw-semibold text-primary fs-base">
          <a href="#" class="px-5" target="_blank">Terms</a>

          <a href="#" class="px-5" target="_blank">Plans</a>

          <a href="#" class="px-5" target="_blank">Contact Us</a>
        </div>
        <!--end::Links-->
      </div>
      <!--end::Footer-->
    </div>
    <!--end::Body-->

    <!--begin::Aside-->
    <div
      class="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
      style="background-image: url('media/misc/auth-bg.png')"
    >
      <!--begin::Content-->
      <div
        class="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100"
      >
        <!--begin::Logo-->
        <router-link to="/" class="mb-0 mb-lg-12">
          <img
            alt="Logo"
            src="mediaRFID/logos/identifyRFIDb2.png"
            class="h-60px h-lg-75px"
          />
        </router-link>
        <!--end::Logo-->

        <!--begin::Image-->
        <img
          class="d-none d-lg-block mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20"
          src="media/misc/auth-screens.png"
          alt=""
        />
        <!--end::Image-->

        <!--begin::Title-->
        <h1
          class="d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-7"
        >
          ONE STOP SERVICE – RFID
        </h1>
        <!--end::Title-->

        <!--begin::Text-->
        <div class="d-none d-lg-block text-white fs-base text-center">
          We offer both hardware and software of
          <a
            href="https://www.id.co.th/knowledge"
            class="opacity-75-hover text-warning fw-bold me-1"
            >RFID technology.</a
          >

          We have full ranges of <br />
          RFID hardware including both reader and tag in

          <a
            href="https://www.id.co.th/knowledge/%e0%b8%84%e0%b8%a5%e0%b8%b7%e0%b9%88%e0%b8%99%e0%b8%a7%e0%b8%b4%e0%b8%97%e0%b8%a2%e0%b8%b8%e0%b8%a1%e0%b8%b5%e0%b8%81%e0%b8%b5%e0%b9%88%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b9%80%e0%b8%a0%e0%b8%97-%e0%b8%ad/"
            class="opacity-75-hover text-warning fw-bold me-1"
            >various frequencies.</a
          >
          We also provide <br />
          RFID integration and
          <a
            href="https://www.id.co.th/solutions/"
            class="opacity-75-hover text-warning fw-bold me-1"
            >RFID solution service.</a
          >
        </div>
        <!--end::Text-->
      </div>
      <!--end::Content-->
    </div>
    <!--end::Aside-->
  </div>
  <!--end::Authentication Layout -->
</template>

<script>
import { defineComponent, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";

export default defineComponent({
  name: "auth-layout",
  components: {},
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "bg-body");
    });

    onUnmounted(() => {
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "bg-body");
    });
  },
});
</script>
