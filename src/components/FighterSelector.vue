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

    <div class="fighter_table">
      <div v-for="v_f1 in fighter_list_id" :key="v_f1">
        <span class="fighter_cell" v-for="f in v_f1" :key="f">
          <span class="fighter_stand" v-if="f != -1">
            <input type="checkbox"
                   v-on:change="save_settings"
                   v-model="all_fighters[f].use"
                   v-bind:disabled="!is_available_fighter(all_fighters[f])"/>
            <label class="stage_checkbox" v-bind:title="all_fighters_full_name[f]">{{ all_fighters_name[f] }}</label>
          </span>
          <span v-else></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Fighter, FighterUtil } from "@/struct/Fighter.ts";
import { range } from "@/logic/util.ts";
import { Settings } from "@/struct/Settings.ts";

@Options({
})

export default class FighterSelector extends Vue {
    range = range;
    fighter_list_id = [
        [   0,   1,   2,   3,  -1,  -1,  -1,  -1,  -1,  -1 ],
        [  -1,  -1,  -1,   4,  -1,  -1,  -1,  -1,  -1,  -1 ],
        [  -1,  -1,  -1,   5,   6,   7,  -1,  -1,  -1,  -1 ],
        [  -1,  -1,   8,   9,  -1,  -1,  -1,  -1,  -1,  -1 ],
        [  -1,  -1,  -1,  10,  11,  12,  -1,  -1,  -1,  -1 ],
        [  -1,  -1,  13,  14,  15,  16,  -1,  -1,  -1,  -1 ],
        [  -1,  23,  24,  -1,  17,  18,  -1,  -1,  -1,  -1 ],
        [  -1,  -1,  25,  -1,  19,  20,  21,  -1,  -1,  -1 ],
        [  -1,  26,  27,  -1,  -1,  22,  -1,  -1,  -1,  -1 ],
        [  -1,  -1,  28,  29,  30,  -1,  -1,  -1,  -1,  -1 ],
        [  -1,  -1,  -1,  31,  32,  -1,  -1,  -1,  -1,  -1 ],
        [  -1,  -1,  -1,  -1,  33,  34,  35,  -1,  -1,  -1 ],
        [  -1,  36,  37,  38,  -1,  -1,  -1,  -1,  -1,  -1 ],
        [  -1,  -1,  39,  40,  -1,  -1,  -1,  -1,  -1,  -1 ],
        [  -1,  41,  42,  43,  44,  45,  46,  -1,  -1,  -1 ],
        [  -1,  98,  -1,  47,  48,  49,  50,  51,  52,  -1 ],
        [  -1,  99,  -1,  -1,  53,  54,  -1,  -1,  -1,  -1 ],
        [  -1, 100,  -1,  -1,  -1,  55,  56,  57,  58,  -1 ],
        [  -1,  -1,  -1,  -1,  61,  62,  -1,  59,  -1,  -1 ],
        [  -1,  -1,  -1,  -1,  -1,  63,  -1,  60,  -1,  -1 ],
        [  -1,  -1,  -1,  -1,  -1,  64,  65,  -1,  -1,  -1 ],
        [  -1,  -1,  -1,  -1,  -1,  66,  67,  -1,  -1,  -1 ],
        [  -1,  -1,  68,  69,  70,  71,  72,  -1,  -1,  -1 ],
        [  -1,  -1,  -1,  73,  74,  75,  76,  -1,  -1,  -1 ],
        [  -1,  -1,  -1,  -1,  77,  78,  79,  -1,  -1,  -1 ],
        [  -1,  -1,  -1,  -1,  80,  81,  82,  -1,  -1,  -1 ],
        [  -1,  -1,  -1,  -1,  83,  84,  85,  -1,  -1,  -1 ],
        [  -1,  -1,  -1,  -1,  86,  87,  88,  -1,  -1,  -1 ],
        [  -1,  -1,  -1,  -1,  -1,  89,  90,  -1,  -1,  -1 ],
        [  -1,  -1,  -1,  -1,  -1,  91,  92,  -1,  -1,  -1 ],
        [  -1,  -1,  -1,  -1,  -1,  93,  94,  -1,  -1,  -1 ],
        [  -1,  -1,  -1,  -1,  -1,  -1,  95,  -1,  -1,  -1 ],
        [  -1,  -1,  -1,  -1,  -1,  -1,  96,  -1,  -1,  -1 ],
        [  -1,  -1,  -1,  -1,  -1,  -1,  97,  -1,  -1,  -1 ],
        // [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
        // [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
        // [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
        // [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
        // [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
        // [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
        // [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
        // [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
        // [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
        // [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
        // [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
        // [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
        // [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
        // [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
        // [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
        // [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
        // [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
        // [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 ],
    ];
    all_fighters: Fighter[] = this.load_fighters();

    load_fighters (): Fighter[] {
        return Settings.fighters;
    }
    all_fighters_full_name : string[] = this.all_fighters.map(f => {
        return FighterUtil.get_fighter_fullname_from_id(f);
    });
    all_fighters_name : string[] = this.all_fighters.map(f => {
        return FighterUtil.get_fighter_model_from_id(f);
    });

    is_available_fighter ( fighter : Fighter ): boolean {
        return FighterUtil.is_available(fighter);
    }

    all_set (): void {
        for ( let f of this.all_fighters ) f.use = true;
        this.save_settings();
    }
    all_clear (): void {
        for ( let f of this.all_fighters ) f.use = false;
        this.save_settings();
    }

    save_settings (): void {
        Settings.fighters = this.all_fighters;
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
.fighter_table {
    display: table;
    margin-left: auto;
    margin-right: auto;
}
.fighter_cell {
    display: table-cell;
    margin-left: auto;
    margin-right: auto;
    width: 86px;
    text-align: left;
}
.fighter_stand {
    /* border: solid 1px; */
}
.fighter_checkbox {
    display: table-cell;
}
.fighter_label {
    display: table-cell;
}
</style>
