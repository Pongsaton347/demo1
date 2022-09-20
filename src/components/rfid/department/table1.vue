<template>
  <!--begin::Tables Widget 13-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Department List</span>

        <!-- <span class="text-muted mt-1 fw-semobold fs-7">Over 500 orders</span> -->
      </h3>
      <div class="card-toolbar">
        <!--begin::Menu-->
        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="top-end"
        >
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/general/gen024.svg" />
          </span>
        </button>
        <Dropdown2></Dropdown2>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3"
        >
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bold text-muted">
              <th class="w-25px">
                <div
                  class="form-check form-check-sm form-check-custom form-check-solid"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    @change="
                      checkedRows =
                        checkedRows.length === 6 ? [] : [0, 1, 2, 3, 4, 5]
                    "
                  />
                </div>
              </th>
              <th class="min-w-150px">Department Code</th>
              <th class="min-w-140px">DepartmentName</th>
              <th class="min-w-100px text-end">Actions</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in items" :key="index">
              <tr>
                <td>
                  <div
                    class="form-check form-check-sm form-check-custom form-check-solid"
                  >
                    <input
                      class="form-check-input widget-13-check"
                      type="checkbox"
                      :value="index"
                      v-model="items"
                    />
                  </div>
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bold text-hover-primary fs-6"
                    >{{ item.departmentCode }}</a
                  >
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bold <!-- text-over-primary --> d-block mb-1 fs-6"
                    >{{ item.departmentName }}</a
                  >
                  <span class="text-muted fw-semobold text-muted d-block fs-7"
                    >Short Name: {{ item.departmentShortName }}</span
                  >
                </td>

                <td class="text-end">
                  <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <span class="svg-icon svg-icon-3 svg-icon-primary">
                      <inline-svg src="media/icons/duotune/art/art005.svg" />
                    </span>
                  </a>

                  <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <span class="svg-icon svg-icon-3 svg-icon-danger">
                      <inline-svg
                        src="media/icons/duotune/general/gen027.svg"
                      />
                    </span>
                  </a>
                </td>
              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    <!--begin::Body-->
  </div>
  <!--end::Tables Widget 13-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";
import axios from "axios";
export default defineComponent({
  name: "rfid-department",
  components: {
    Dropdown2,
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.created();
  },
  methods: {
    async created() {
      try {
        await axios
          .get("http://203.154.88.148:8082/api/Department")
          .then((response) => {
            console.log(response.data);
            this.items = response.data;
          });
        console.log("data" + this.items);
      } catch (error) {
        console.log(error);
      }
    },
  },
  props: {
    widgetClasses: String,
  },
  setup() {
    const checkedRows = ref([]);
    return {
      // list,
      checkedRows,
    };
  },
});
</script>
