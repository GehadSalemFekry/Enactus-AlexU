<template lang="en">
    <div>
        <input type="text" placeholder="New En Title" v-model="newEnTitle">
        <input type="text" placeholder="New En Article" v-model="newEnArticle">
        <input type="text" placeholder="New Ar Title" v-model="newArTitle">
        <input type="text" placeholder="New Ar Article" v-model="newArArticle">
        <input type="submit" value="Create new Article" @click="addArticle">

        <div>
            <Article v-for="(article, index) in this.$store.state.articles" 
            :key="article.id" :article="article" :index="index"></Article>
            
            <ArticleAr v-for="(article, index) in this.$store.state.articles" 
            :key="article.id" :article="article" :index="index"></ArticleAr>

            <ArticleDelete v-for="(article, index) in this.$store.state.articles" 
            :key="article.id" :article="article" :index="index"></ArticleDelete>
        </div>
        
    </div>
</template>

<script>
import Article from "../components/Article";
import ArticleAr from "../components/ArticleAr";
import ArticleDelete from "../components/ArticleDelete";

export default {
  components: {
    Article,
    ArticleAr,
    ArticleDelete,
  },
  data() {
    return {
      newEnTitle: "",
      newEnArticle: "",
      newArTitle: "",
      newArArticle: "",
      // idForArticle: 1,
      enTitlebeforeEditCache: "",
      enBodybeforeEditCache: "",
    };
  },

  created() {
    this.$store.dispatch("retrieveArticles");
  },

  methods: {
    addArticle() {
      if (
        this.newEnTitle.trim().length == 0 ||
        this.newEnArticle.trim().length == 0
      ) {
        return;
      }

      this.$store.dispatch("addArticle", {
        //id: this.idForArticle,
        en_title: this.newEnTitle,
        en_body: this.newEnArticle,
        ar_title: this.newArTitle,
        ar_body: this.newArArticle,
      });

      this.newEnTitle = "";
      this.newEnArticle = "";
      this.newArTitle = "";
      this.newArArticle = "";
      //this.idForArticle++
    },
  },
};
</script>

<style lang="en">
</style>