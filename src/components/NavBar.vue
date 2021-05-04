<template>
  <v-toolbar color="indigo darken-3">
    <v-btn v-if="back" :to="back" icon>
        <v-icon color="white" >mdi-arrow-left</v-icon>
    </v-btn>
    <h2 class="white--text">{{title}}</h2>
  </v-toolbar>
</template>

<script>
export default {
    props:['title','back']
}
</script>

<style>

</style>