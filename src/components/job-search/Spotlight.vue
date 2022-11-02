<template>
	<ul>
		<li v-for="spotlight in spotLights" :key="spotlight.id">
			<slot
				:img="spotlight.img"
				:title="spotlight.title"
				:description="spotlight.description"
			></slot>
		</li>
	</ul>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from "vue";
import axios from "axios";

interface Spotlight {
	id: number;
	img: string;
	title: string;
	description: string
}

export default defineComponent ({
	name: "Spotlight",
	setup() {
		const spotLights = ref<Spotlight[]>([]);

		const getSpotlights = async () => {
			const baseUrl = process.env.VUE_APP_API_URL;
			const url = `${baseUrl}/spotlights`;
			const response = await axios.get<Spotlight[]>(url);
			spotLights.value = response.data;
		};
		onMounted(getSpotlights);

		return {
			spotLights,
		};
	},
});
</script>
