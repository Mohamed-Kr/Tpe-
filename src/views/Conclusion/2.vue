<template>
	<v-container>
		<v-list>
			<v-list-tile v-for="source in sources" :key='source'>
				<v-list-tile-action>
					<a :href='source.link'>{{ source.name }}</a>
				</v-list-tile-action>
			</v-list-tile>
		</v-list>
	</v-container>
</template>

<script>
export default {
	data: () => ({
	sources: [
			{link: 'https://youtube.com', name: 'Youtube'},
			{link: 'https://youube.com', name: 'Youube'}
		]
	})		
}
</script>

