<template>
  <h1>{{ testData }}</h1>
</template>
<script>
export default {
  name: "TestApp",
  data() {
    return {
      testData: "",
    };
  },
  created() {
    this.testData = this.$route.params.id;
    console.log("route : ", this.testData);
  },
};
</script>
