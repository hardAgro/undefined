<template>
	<div>
		<p>Teste</p>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {

		mounted() {
			axios.get('http://localhost:8000/')
			.then(function (response) {
				console.log(respose);console.log(respose);
			})
			.catch(function (error) {
			})
		},
	}
</script>

<style scoped>

</style>