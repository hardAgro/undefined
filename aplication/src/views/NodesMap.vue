<template>
	<div>
		<b-list-group>
			<b-list-group-item 
				v-for="node in nodes" :key="node.id"
				variant="statusNode(node)"
				>
					id: {{ node.id }} -- rps: {{ node.rps }}
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		data () {
			return {
				nodes: [],	
			};;
		},
		methods :{
			statusNode( node ){
				return node.rps === 0? 'danger' : 'success';
			}
		},
		mounted() {
			let self = this;
			axios.get('http://localhost:4000/node/list')
			.then(function (response) {
				self.nodes = response.data.nodes;
				// console.log(response);
			})
			.catch(function (error) {
				console.log('Error: ' + error);
			})
		},
	}
</script>

<style scoped>

</style>