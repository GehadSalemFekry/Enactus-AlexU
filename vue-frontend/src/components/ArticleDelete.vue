<template lang="en">
    <div>
        <div @click="deleteArticle(article.id)">
            <button>&times;</button>
        </div>
    </div>
</template>
<script>


export default {
    props: {
    article: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      id: this.article.id,
    };
  },

  methods: {
    deleteArticle(id) {
      this.$store.dispatch("deleteArticle", id);
    },
  },
};
</script>
<style lang="">
</style>