<template>
  <div class="card">
    <DataTableEmployee widget-classes="mb-5 mb-xl-8"></DataTableEmployee>
  </div>
  <!--end::Menu-->
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import DataTableEmployee from "@/components/rfid/employee/employeeList.vue";
export default defineComponent({
  name: "employees-listing",
  components: { DataTableEmployee },
  setup() {
    const tableHeader = ref([
      {
        columnName: "employeeCode",
        columnLabel: "firstName",
        sortEnabled: true,
        columnWidth: 175,
      },
      {
        columnName: "firstName",
        columnLabel: "firstName",
        sortEnabled: true,
        columnWidth: 230,
      },
      {
        columnName: "lastName",
        columnLabel: "lastName",
        sortEnabled: true,
        columnWidth: 175,
      },
      {
        columnName: "Actions",
        columnLabel: "actions",
        sortEnabled: false,
        columnWidth: 135,
      },
    ]);
  },
});
</script>
