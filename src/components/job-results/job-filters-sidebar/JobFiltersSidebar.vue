<template>
  <div
    class="
      flex flex-col
      p-4
      bg-white
      border-r border-solid border-brand-gray-1
      w-96
    "
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear filters" type="secondary" />
        </div>
      </div>

      <accordion header="Degree" />

      <job-filters-sidebar-checkbox-group
        header="Job Types"
        :unique-values="uniqueJobTypes"
        :mutation="ADD_SELECTED_JOB_TYPES"
        data-test='job-types-filter'
      />
      <job-filters-sidebar-checkbox-group
        header="Organizations"
        :unique-values="uniqueOrganizations"
        :mutation="ADD_SELECTED_ORGANIZATIONS"
        data-test='organizations-filter'
      />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ActionButton from "@/components/shared/ActionButton.vue";
import Accordion from "@/components/shared/Accordion.vue";

import JobFiltersSidebarCheckboxGroup from "@/components/job-results/job-filters-sidebar/JobFiltersSidebarCheckboxGroup.vue"

import { useUniqueJobTypes, useUniqueOrganizations } from "@/store/composables";
import { ADD_SELECTED_ORGANIZATIONS, ADD_SELECTED_JOB_TYPES } from "@/store/constants"; 

export default defineComponent ({
	name: "JobFiltersSidebar",
	components: {
		ActionButton,
		Accordion,

    JobFiltersSidebarCheckboxGroup
	},
  setup() {
    const uniqueJobTypes = useUniqueJobTypes();
    const uniqueOrganizations = useUniqueOrganizations();

    return {
      uniqueJobTypes,
      uniqueOrganizations,
      ADD_SELECTED_ORGANIZATIONS,
      ADD_SELECTED_JOB_TYPES
    }
  }
});
</script>