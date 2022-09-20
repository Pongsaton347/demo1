<template>
  <!--begin::Tables Widget 13-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Education</span>
      </h3>
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Filter-->
        <button
          type="button"
          class="btn btn-sm btn-flex btn-light-primary"
          data-bs-toggle="modal"
          data-bs-target="#rfid_modal_add_employeeEducation"
        >
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/general/gen035.svg" />
          </span>
          Add New Education
        </button>
        <!--end::Filter-->
      </div>
    </div>
    <!--end::Header-->
    <div class="card-body pt-0 pb-5">
      <Datatable
        :header="tableHeader"
        :data="items"
        :items-per-page="5"
        :items-per-page-dropdown-enabled="false"
      >
        <template v-slot:employeeEducationSequence="{ row: items }">
          {{ items.employeeEducationSequence }}
        </template>
        <template v-slot:degree="{ row: items }">
          {{ items.degree }}
        </template>
        <template v-slot:school="{ row: items }">
          {{ items.school }}
        </template>
        <template v-slot:startAndEndDate="{ row: items }">
          {{ items.startAndEndDate }}
        </template>
        <template v-slot:actions="{ row: items }">
          <a
            class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
            @click="editItem({ row: items })"
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
              <inline-svg src="media/icons/duotune/general/gen027.svg" />
            </span>
          </a>
        </template>
      </Datatable>
    </div>
  </div>
  <!--end::Tables Widget 13-->
  <AddEmployeeEducation></AddEmployeeEducation>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import AddEmployeeEducation from "@/components/rfid/forms/AddEmployeeEducation.vue";
export default defineComponent({
  name: "rfid-employeeeducation",
  components: { Datatable, AddEmployeeEducation },
  data() {
    return {
      items: [],
      editedItem: {},
      sourceItems: [],
      editedIndex: -1,
    };
  },
  mounted() {
    this.created();
  },
  methods: {
    async created() {
      try {
        await axios
          .get("https://localhost:7176/api/EmployeeEducation/1576")
          .then((response) => {
            console.log(response.data);
            this.items = response.data;
          });
      } catch (error) {
        console.log(error);
      }
    },
    handleClick(value) {
      this.editItem(value);
      console.log("value", value);
    },
    editItem(item) {
      console.log("editItem", item);
      // /crafted/rfid/employee-details
      //this.$router.push("/rfid/forms/add-employeeEducation");
      // this.$router.push({
      //   name: "/rfid/forms/add-employeeEducation",
      //   params: { data: "123456" },
      // });
    },
  },
  props: {
    widgetClasses: String,
  },

  setup() {
    const tableHeader = ref([
      {
        columnName: "#",
        columnLabel: "employeeEducationSequence",
        sortEnabled: false,
      },
      {
        columnName: "degree",
        columnLabel: "degree",
        sortEnabled: false,
      },
      {
        columnName: "school",
        columnLabel: "school",
        sortingField: "school.label",
        sortEnabled: false,
      },
      {
        columnName: "Date",
        columnLabel: "startAndEndDate",
        sortEnabled: false,
      },
      {
        columnName: "Actions",
        columnLabel: "actions",
        sortEnabled: false,
      },
    ]);
    return {
      tableHeader,
    };
  },
});
</script>
