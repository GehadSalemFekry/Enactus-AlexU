<template lang="en">
    <div>
        <Article v-for="(article, index) in this.$store.state.articles" :key="article.id" :article="article" :index="index">
            
        </Article>
    </div>
</template>
<script>

import Article from '../components/Article'

export default {
    components: {
        Article,
    },

    created() {
        this.$store.dispatch('retrieveArticles')
    },
}
</script>
<style lang="">
    
</style>