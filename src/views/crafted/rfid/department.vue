<template>
  <h1>Department</h1>

  <TablesWidget13 widget-classes="mb-5 mb-xl-8"></TablesWidget13>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TablesWidget13 from "@/components/rfid/department/table1.vue";
export default defineComponent({
  name: "rfid-department",
  components: {
    TablesWidget13,
  },
});
</script>
