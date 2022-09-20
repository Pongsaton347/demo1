<!-- eslint-disable no-undef -->
<!-- eslint-disable prettier/prettier -->
<template>
  <!--begin::Layout-->
  <div class="d-flex flex-column flex-xl-row">
    <!--begin::Sidebar-->
    <div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
      <!--begin::Card-->
      <div class="card mb-5 mb-xl-8">
        <!--begin::Card body-->
        <div class="card-body pt-15">
          <!--begin::Summary-->
          <div class="d-flex flex-center flex-column mb-5">
            <!--begin::Avatar-->
            <div class="symbol symbol-100px symbol-circle mb-7">
              <img src="media/avatars/300-1.jpg" alt="image" />
            </div>
            <!--end::Avatar-->

            <!--begin::Name-->
            <a
              href="#"
              class="fs-3 text-gray-800 text-hover-primary fw-bold mb-1"
            >
              {{ EmployeeDetail.fullName }}
            </a>
            <!--end::Name-->

            <!--begin::Position-->
            <div class="fs-5 fw-semobold text-muted mb-6">
              {{ items.positionName }}
            </div>
            <!--end::Position-->

            <!--begin::Info-->
            <div class="d-flex flex-wrap flex-center">
              <!--begin::Stats-->
              <div
                class="border border-gray-300 border-dashed rounded py-3 px-3 mb-3"
              >
                <div class="fs-4 fw-bold text-gray-700">
                  <span class="w-75px">6,900</span>
                  <span class="svg-icon svg-icon-3 svg-icon-success">
                    <inline-svg src="media/icons/duotune/arrows/arr066.svg" />
                  </span>
                </div>
                <div class="fw-semobold text-muted">Earnings</div>
              </div>
              <!--end::Stats-->

              <!--begin::Stats-->
              <div
                class="border border-gray-300 border-dashed rounded py-3 px-3 mx-4 mb-3"
              >
                <div class="fs-4 fw-bold text-gray-700">
                  <span class="w-50px">130</span>
                  <span class="svg-icon svg-icon-3 svg-icon-danger">
                    <inline-svg src="media/icons/duotune/arrows/arr065.svg" />
                  </span>
                </div>
                <div class="fw-semobold text-muted">Tasks</div>
              </div>
              <!--end::Stats-->

              <!--begin::Stats-->
              <div
                class="border border-gray-300 border-dashed rounded py-3 px-3 mb-3"
              >
                <div class="fs-4 fw-bold text-gray-700">
                  <span class="w-50px">500</span>
                  <span class="svg-icon svg-icon-3 svg-icon-success">
                    <inline-svg src="media/icons/duotune/arrows/arr066.svg" />
                  </span>
                </div>
                <div class="fw-semobold text-muted">Hours</div>
              </div>
              <!--end::Stats-->
            </div>
            <!--end::Info-->
          </div>
          <!--end::Summary-->

          <!--begin::Details toggle-->
          <div class="d-flex flex-stack fs-4 py-3">
            <div
              class="fw-bold rotate collapsible"
              data-bs-toggle="collapse"
              href="#kt_customer_view_details"
              role="button"
              aria-expanded="false"
              aria-controls="kt_customer_view_details"
            >
              Details
              <span class="ms-2 rotate-180">
                <span class="svg-icon svg-icon-3">
                  <inline-svg src="media/icons/duotune/arrows/arr072.svg" />
                </span>
              </span>
            </div>

            <span
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              title="Edit customer details"
            >
              <a class="btn btn-sm btn-light-primary" @click="showData()">
                Edit
              </a>
            </span>
          </div>
          <!--end::Details toggle-->

          <div class="separator separator-dashed my-3"></div>

          <!--begin::Details content-->
          <div class="collapse show">
            <div class="py-5 fs-6">
              <!--begin::Badge-->
              <!-- <div class="badge badge-light-info d-inline">Premium user</div> -->
              <!--begin::Badge-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Employee Code</div>
              <div class="text-gray-600">{{ EmployeeDetail.employeeCode }}</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Email</div>
              <div class="text-gray-600">
                <a href="#" class="text-gray-600 text-hover-primary">{{
                  EmployeeDetail.email
                }}</a>
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Billing Address</div>
              <div class="text-gray-600">
                101 Collin Street, <br />Melbourne 3000 VIC <br />Australia
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Language</div>
              <div class="text-gray-600">English</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Upcoming Invoice</div>
              <div class="text-gray-600">54238-8693</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Tax ID</div>
              <div class="text-gray-600">TX-8674</div>
              <!--begin::Details item-->
            </div>
          </div>
          <!--end::Details content-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Card-->

      <!--begin::Connected Accounts-->
      <div class="card mb-5 mb-xl-8">
        <!--begin::Card header-->
        <div class="card-header border-0">
          <div class="card-title">
            <h3 class="fw-bold m-0">Test</h3>
          </div>
        </div>
        <!--end::Card header-->
      </div>
      <!--end::Connected Accounts-->
    </div>
    <!--end::Sidebar-->

    <!--begin::Content-->
    <div class="flex-lg-row-fluid ms-lg-15">
      <!--begin:::Tabs-->
      <ul
        class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semobold mb-8"
      >
        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4 active"
            data-bs-toggle="tab"
            href="#kt_customer_view_overview_tab"
            >Overview</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4"
            data-bs-toggle="tab"
            href="#kt_customer_view_overview_events_and_logs_tab"
            >Events & Logs</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4"
            data-kt-countup-tabs="true"
            data-bs-toggle="tab"
            href="#kt_customer_view_overview_statements"
            >Statements</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4 active"
            data-bs-toggle="tab"
            href="#kt_customer_view_overview_tab"
            >Test 01</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4 active"
            data-bs-toggle="tab"
            href="#kt_customer_view_overview_tab"
            >Test 02</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4 active"
            data-bs-toggle="tab"
            href="#kt_customer_view_overview_tab"
            >Test 03</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item ms-auto">
          <!--begin::Action menu-->
          <a
            href="#"
            class="btn btn-primary ps-7"
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
          >
            Actions
            <span class="svg-icon svg-icon-2 me-0">
              <inline-svg src="media/icons/duotune/arrows/arr072.svg" />
            </span>
          </a>
          <Dropdown3></Dropdown3>
          <!--end::Menu-->
        </li>
        <!--end:::Tab item-->
      </ul>
      <!--end:::Tabs-->

      <!--begin:::Tab content-->
      <div class="tab-content" id="myTabContent">
        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade show active"
          id="kt_customer_view_overview_tab"
          role="tabpanel"
        >
          <Education widget-classes="mb-6 mb-xl-9"></Education>
          <Experience widget-classes="mb-6 mb-xl-9"></Experience>
        </div>
        <!--end:::Tab pane-->

        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade"
          id="kt_customer_view_overview_events_and_logs_tab"
          role="tabpanel"
        >
          <Logs card-classes="mb-6 mb-xl-9"></Logs>
          <Events card-classes="mb-6 mb-xl-9"></Events>
        </div>
        <!--end:::Tab pane-->

        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade"
          id="kt_customer_view_overview_statements"
          role="tabpanel"
        ></div>
        <!--end:::Tab pane-->
      </div>
      <!--end:::Tab content-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout-->

  <NewCardModal></NewCardModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import NewCardModal from "@/components/modals/forms/NewCardModal.vue";

import Events from "@/components/customers/cards/events-and-logs/Events.vue";
import Logs from "@/components/customers/cards/events-and-logs/Logs.vue";

import axios from "axios";

import Education from "@/components/rfid/employee/employeeEducation.vue";
import Experience from "@/components/rfid/employee/employeeExperience.vue";

import { RouterLink } from "vue-router";
import { number } from "yup/lib/locale";
interface EmployeeTable {
  employeeId: number;
}

export default defineComponent({
  name: "employee-details",
  components: {
    Education,
    Experience,

    Events,
    Logs,
    Dropdown3,
    NewCardModal,
  },
  data() {
    return {
      EmployeeDetail: [],
      userdata: [],
      items: [],
    };
  },
  created() {
    //console.log("router:", this.$route.params.data);
    //this.items === this.$route.params.items;
  },
  mounted() {
    this.loaddata();
  },
  methods: {
    async loaddata() {
      try {
        await axios
          .get("https://localhost:7176/api/Employee/1576")
          .then((response) => {
            console.log("Employee Detail", response.data);
            this.EmployeeDetail = response.data;
            this.items = response.data;
          });
      } catch (error) {
        console.log(error);
      }
    },
    showData() {
      console.log("testApp");

      this.$router.push({
        path: "/crafted/rfid/TestApp",
        params: { id: "sdf" },
      });
    },
  },
});
</script>
