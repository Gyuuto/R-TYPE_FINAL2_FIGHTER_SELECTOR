<template>
<div class="home">
  <h1>R-TYPE FINAL2 ランダマイザ</h1>
  
  <button v-on:click="random_choose()">ランダム</button>
  
  <div class="table">
    <div class="cell" v-for="i in range(0, N)" :key="i">
      <span class="stage">{{ get_stage_fullname(selected_stage[i]) }}</span>
      <span class="fighter">{{ get_fighter_fullname(selected_fighter[i]) }}</span>
    </div>
  </div>

  <details>
    <summary>機体選択</summary>
    <FighterSelector/>
  </details>
  <details>
    <summary>ステージ選択</summary>
    <StageSelector/>
  </details>
</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

//import Test from "@/components/Test.vue";
import { Fighter, FighterUtil } from "@/struct/Fighter.ts";
import FighterSelector from "@/components/FighterSelector.vue";
import { Stage, StageUtil } from "@/struct/Stage.ts";
import StageSelector from "@/components/StageSelector.vue";
import { range } from "@/logic/util.ts";
import { Settings } from "@/struct/Settings.ts";

@Options({
    components: {
        FighterSelector,
        StageSelector
    }
})

export default class Home extends Vue {
    readonly N = 7;
    readonly range = range;

    selected_fighter: Fighter[] = range(0, this.N).map(i => {
        return new Fighter(i);
    });

    selected_stage: Stage[] = range(0, this.N).map(i => {
        return new Stage(i);
    });

    get_stage_fullname ( stage: Stage ) {
        return StageUtil.get_stage_name_from_id(stage);
    }
    get_fighter_fullname ( fighter: Fighter ) {
        return FighterUtil.get_fighter_fullname_from_id(fighter);
    }

    random_choose () {
        function shuffle(array : any[]) {
            let currentIndex = array.length,  randomIndex;

            // While there remain elements to shuffle...
            while (currentIndex != 0) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }

            return array;
        }

        let available_fighters: Fighter[] = Settings.fighters
            .filter(f => f.use)
            .filter(f => FighterUtil.is_available(f));
        let choose_fighter_idx: number[] = range(0, this.N)
            .map(i => Math.floor(Math.random()*available_fighters.length));

        let available_stages: Stage[] =
            Settings.stages
                .filter(s => s.use)
                .filter(s => StageUtil.is_final_stage(s) == false);
        let available_final_stages: Stage[] =
            Settings.stages
                .filter(s => s.use)
                .filter(s => StageUtil.is_final_stage(s) == true);
        let choose_final_stage_idx = Math.floor(Math.random()*available_final_stages.length);

        shuffle(available_stages);

        this.selected_fighter = choose_fighter_idx.map(i => available_fighters[i]);
        this.selected_stage = available_stages.slice(0, this.N-1);
        this.selected_stage.push(available_final_stages[choose_final_stage_idx]);
    }
}
</script>

<style scoped lang="scss">
.table {
    display: table;
    margin-left: auto;
    margin-right: auto;

    margin-top: 12px;
    margin-bottom: 12px;
}
.stage {
    display: table-cell;
    width: 64px;
    text-align: left;
}
.fighter {
    display: table-cell;
    width: 256px;
    text-align: left;
}
.selector-table {
    display: table;
    margin-left: auto;
    margin-right: auto;
}
.selector {
    display: table-cell;
    border-left: 12px;
    border-right: 12px;
}
</style>
