<template>
  <div>
    <button v-on:click="save_stages()">Save</button>
  </div>

  <div id="stage_table">
    <div v-for="i in range(0, 20)" :key="i">
      <!-- <span class="fighter_checkbox"><input type="checkbox" v-on:input="change_check(i)" /></span> -->
      <span class="stage_checkbox"><input type="checkbox" v-model="all_stages[i].use" /></span>
      <span class="stage_label"><label>{{ all_stages_name[i] }}</label></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Stage, StageUtil } from "@/struct/Stage.ts";
import { range } from "@/logic/util.ts";
import { Settings } from "@/struct/Settings.ts";

@Options({
})

export default class StageSelector extends Vue {
    const range = range;

    all_stages: Stage[] = this.get_cached_stages();
        
    all_stages_name : string[] = this.all_stages.map(s => {
        return StageUtil.get_stage_name_from_id(s);
    });

    get_cached_stages () {
        let ret = Settings.stages;

        if ( ret == undefined )
            return range(0, StageUtil.stage_num).map(i => new Stage(i));
        else return ret;
    }
    save_stages () {
        Settings.stages = this.all_stages;
        this.$emit("changeStages", this.all_stages);
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
