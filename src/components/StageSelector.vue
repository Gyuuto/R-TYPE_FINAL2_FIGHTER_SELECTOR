<template>
<div>
  <div>
    <span>
      <button class="button" v-on:click="all_set">全選択</button>
    </span>
    <span>
      <button class="button" v-on:click="all_clear">全消去</button>
    </span>
  </div>

  <div class="stage_table">
    <div v-for="v_s1 in stage_list_id" :key="v_s1">
      <span class="stage_cell" v-for="s in v_s1" :key="s">
        <span v-if="s != -1">
          <input type="checkbox"
                 v-on:change="save_settings"
                 v-model="all_stages[s].use" />
          <label class="stage_checkbox">{{ all_stages_name[s] }}</label>
        </span>
        <span v-else></span>
      </span>
    </div>
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
    range = range;
    stage_list_id = [
        [ 0,  1,  2,  3,  4,  6,  7],
        [-1, -1, -1, -1,  5,  8,  9],
        [-1, -1, -1, -1, -1, 10, 11],
        [12, 13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30, 31, 32],
        [-1, -1, -1, -1, -1, -1, 33]
    ];

    all_stages: Stage[] = this.load_stages();

    load_stages (): Stage[] {
        return Settings.stages;
    }

    all_stages_name : string[] = this.all_stages.map(s => {
        return StageUtil.get_stage_name_from_id(s);
    });

    all_set (): void {
        for ( let s of this.all_stages ) s.use = true;
        this.save_settings();
    }
    all_clear (): void {
        for ( let s of this.all_stages ) s.use = false;
        this.save_settings();
    }

    save_settings (): void {
        Settings.stages = this.all_stages;
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
button {
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 4px;
    margin-bottom: 4px;
}
.stage_table {
    display: table;
    margin-left: auto;
    margin-right: auto;
}
.stage_cell {
    display: table-cell;
    margin-left: auto;
    margin-right: auto;
    width: 64px;
    text-align: left;
}
</style>
