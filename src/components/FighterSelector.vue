<template>
<div class="fighter_selector">
  <div>
    <button v-on:click="save_fighters()">Save</button>
  </div>

  <div id="fighter_table">
    <div v-for="i in range(0, 101)" :key="i">
      <!-- <span class="fighter_checkbox"><input type="checkbox" v-on:input="change_check(i)" /></span> -->
      <span class="fighter_checkbox"><input type="checkbox" v-model="all_fighters[i].use" v-bind:disabled="!is_available_fighter(all_fighters[i])"/></span>
      <span class="fighter_label"><label>{{ all_fighters_name[i] }}</label></span>
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
    const range = range;

    all_fighters: Fighter[] = this.get_cached_fighters();

    all_fighters_name : string[] = this.all_fighters.map(f => {
        return FighterUtil.get_fighter_fullname_from_id(f);
    });

    is_available_fighter ( fighter : Fighter ) {
        return FighterUtil.is_available(fighter);
    }

    get_cached_fighters () {
        let ret = Settings.fighters;

        if ( ret == undefined )
            return range(0, FighterUtil.fighter_num).map(i => new Fighter(i));
        else return ret;
    }
    
    save_fighters () {
        Settings.fighters = this.all_fighters;
        this.$emit("changeFighters", this.all_fighters);
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
#fighter_table {
    display: table;
    margin-left: auto;
    margin-right: auto;
}
.fighter_checkbox {
    display: table-cell;
}
.fighter_label {
    display: table-cell;
}
</style>
