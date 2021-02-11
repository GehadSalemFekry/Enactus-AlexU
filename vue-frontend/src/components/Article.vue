<template lang="en">
    <div>
        <div>
            <div v-if="!editing" @dblclick="editArticle">{{ en_title }}</div>
            <input v-else type="text" v-model="en_title" @blur="doneEdit" @keyup.enter="doneEdit">
        </div>
        <div>
            <div v-if="!editing" @dblclick="editArticle">{{ en_body }}</div>
            <input v-else type="text" v-model="en_body" @blur="doneEdit" @keyup.enter="doneEdit">
        </div>
             
        <!-- <div @click="deleteArticle(article.id)">
            &times;
        </div> -->
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
      en_title: this.article.en_title,
      en_body: this.article.en_body,
      ar_title: this.article.ar_title,
      ar_body: this.article.ar_body,
      editing: this.article.editing,
      enTitlebeforeEditCache: "",
      enBodybeforeEditCache: "",
    };
  },

  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },

  methods: {
    deleteArticle(id) {
      this.$store.dispatch("deleteArticle", id);
    },

    editArticle() {
      this.enTitlebeforeEditCache = this.en_title;
      this.enBodybeforeEditCache = this.en_title;
      this.editing = true;
    },

    doneEdit() {
      if (this.en_title.trim().length == 0) {
        this.en_title = this.enTitlebeforeEditCache;
      } else if (this.en_body.trim().length == 0) {
        this.en_body = this.enBodybeforeEditCache;
      }

      this.editing = false;
      this.$store.dispatch("updateArticle", {
        id: this.id,
        en_title: this.en_title,
        en_body: this.en_body,
        ar_title: this.ar_title,
        ar_body: this.ar_body,
        completed: this.completed,
        editing: this.editing,
      });
    },
  },
};
</script>
<style lang="">
</style>