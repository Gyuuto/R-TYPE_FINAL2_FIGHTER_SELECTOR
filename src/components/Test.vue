<template>
<div class="test">
  <h1>Test</h1>
  <h2>{{ tmp }}</h2>
  
  <div>
    <button v-for="i in arr" :key="i" v-on:click="click(i)">Test{{i}}</button>
  </div>

  <div>
    <button v-on:click="parent_title_chg()">tmp</button>
  </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    props: {
    },
})

export default class Test extends Vue {
    tmp = "Initial MSG";
    arr = [1, 2, 3, 4, 10];

    click( msg: string ) {
        console.log("test! " + msg);

        this.tmp = msg;
    }

    parent_title_chg () {
        this.$emit("changeText", this.tmp);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
