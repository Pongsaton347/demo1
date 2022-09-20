<template>
  <div
    class="modal fade"
    id="rfid_modal_add_employeeEducation"
    ref="addCustomerModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_customer_header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Add a New Education</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="rfid_modal_add_education_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->
        <!--begin::Form-->
        <el-form
          @submit.prevent="submit()"
          :model="formData"
          :rules="rules"
          ref="formRef"
        >
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div
              class="scroll-y me-n7 pe-7"
              id="kt_modal_add_customer_scroll"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_add_customer_header"
              data-kt-scroll-wrappers="#kt_modal_add_customer_scroll"
              data-kt-scroll-offset="300px"
            >
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semobold mb-2">Degree</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="degree">
                  <el-input
                    v-model="formData.degree"
                    type="text"
                    placeholder=""
                  />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">
                  <span class="required">school</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Udon Thani Rajabhat University"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="school">
                  <el-input v-model="formData.school" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Col-->
              <div class="row">
                <div class="col-md-6 fv-row">
                  <label class="required fs-6 fw-semobold mb-2"
                    >Start Date</label
                  >
                  <!--begin::Input-->
                  <div class="position-relative align-items-center">
                    <!--begin::Icon-->
                    <div class="symbol symbol-20px me-4 position-absolute ms-4">
                      <span class="symbol-label bg-secondary">
                        <span class="svg-icon">
                          <inline-svg
                            src="media/icons/duotune/general/gen025.svg"
                          />
                        </span>
                      </span>
                    </div>
                    <!--end::Icon-->

                    <!--begin::Datepicker-->
                    <el-form-item prop="startDate">
                      <el-date-picker
                        v-model="formData.startDate"
                        placeholder="Select a date"
                        name="startDate"
                      />
                    </el-form-item>
                    <!--end::Datepicker-->
                  </div>
                  <!--end::Input-->
                </div>
                <!--end::Col-->
                <div class="col-md-6 fv-row">
                  <label class="required fs-6 fw-semobold mb-2">
                    End Date</label
                  >
                  <!--begin::Input-->
                  <div class="position-relative align-items-center">
                    <!--begin::Icon-->
                    <div class="symbol symbol-20px me-4 position-absolute ms-4">
                      <span class="symbol-label bg-secondary">
                        <span class="svg-icon">
                          <inline-svg
                            src="media/icons/duotune/general/gen025.svg"
                          />
                        </span>
                      </span>
                    </div>
                    <!--end::Icon-->

                    <!--begin::Datepicker-->
                    <el-form-item prop="endDate">
                      <el-date-picker
                        v-model="formData.endDate"
                        placeholder="Select a date"
                        name="endDate"
                      />
                    </el-form-item>
                    <!--end::Datepicker-->
                  </div>
                  <!--end::Input-->
                </div>
                <!--end::Col-->
              </div>
            </div>
            <!--end::Scroll-->
          </div>
          <!--end::Modal body-->

          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button
              type="reset"
              id="kt_modal_add_customer_cancel"
              class="btn btn-light me-3"
            >
              Discard
            </button>
            <!--end::Button-->

            <!--begin::Button-->
            <button
              :data-kt-indicator="loading ? 'on' : null"
              class="btn btn-lg btn-primary"
              type="submit"
            >
              <span v-if="!loading" class="indicator-label">
                Submit
                <span class="svg-icon svg-icon-3 ms-2 me-0">
                  <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
                </span>
              </span>
              <span v-if="loading" class="indicator-progress">
                Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
            <!--end::Button-->
          </div>
          <!--end::Modal footer-->
        </el-form>
        <!--end::Form-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import axios from "axios";
interface NewEducation {
  employeeId: number;
  degree: string;
  school: string;
  startDate: string;
  endDate: string;
}
export default defineComponent({
  name: "add-employeeEducation",
  components: {},
  data() {
    return {
      items: [],
      id: "",
    };
  },
  created() {
    this.id == this.$route.params.data;
    console.log("id: ", this.id);
  },
  setup() {
    const formRef = ref<null | HTMLFormElement>(null);
    //const formRef = ref<NewEducation>();
    const addCustomerModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const formData = ref<NewEducation>({
      employeeId: 1576,
      degree: "",
      school: "",
      startDate: "",
      endDate: "",
    });

    const rules = ref({
      degree: [
        {
          required: true,
          message: "Customer name is required",
          trigger: "change",
        },
      ],
      school: [
        {
          required: true,
          message: "Customer email is required",
          trigger: "change",
        },
      ],
      startDate: [
        {
          required: true,
          message: "Start Date",
          trigger: "change",
        },
      ],
      endDate: [
        {
          required: true,
          message: "End Date",
          trigger: "change",
        },
      ],
    });

    const submit = () => {
      if (!formRef.value) {
        return;
      }

      formRef.value.validate((valid) => {
        console.log("degree :" + formData.value.degree);
        console.log("school :" + formData.value.school);
        console.log("stratDate :" + formData.value.startDate);
        console.log("endDate :" + formData.value.endDate);
        console.log("valid :" + valid);

        if (valid) {
          loading.value = true;

          setTimeout(() => {
            loading.value = false;

            axios
              .post(
                "https://localhost:7176/api/EmployeeEducation/",
                formData.value
              )
              .then((response) => {
                console.log("status", response.status);
                console.log("statusText", response.statusText);
                console.log("data", response.data);
              });
            Swal.fire({
              text: "Form has been successfully submitted!",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn btn-primary",
              },
            }).then(() => {
              hideModal(addCustomerModalRef.value);
            });
          }, 2000);
        } else {
          Swal.fire({
            text: "Sorry, looks like there are some errors detected, please try again.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
          return false;
        }
      });
    };

    return {
      formData,
      rules,
      submit,
      formRef,
      loading,
      addCustomerModalRef,
    };
  },
});
</script>
