import ElectronStore from "electron-store";
import { Fighter, FighterUtil } from "./Fighter.ts";
import { Stage, StageUtil } from "./Stage.ts";
import { range } from "@/logic/util.ts";

type SettingType = {
	fighters: Fighter[];
	stages: Stage[];
};

class _Setting {
	private store = new ElectronStore<SettingType>();

	get fighters () : SettingType["fighters"] {
		const ret = this.store.get("fighters");

		if ( ret == undefined ) {
			return range(0, FighterUtil.fighter_num).map(i => new Fighter(i));
		} else {
			return ret;
		}
	}
	set fighters ( fighters: Fighter[] ) {
		this.store.set("fighters", fighters);
	}

	get stages () : SettingType["stages"] {
		const ret = this.store.get("stages");

		if ( ret == undefined ) {
			return range(0, StageUtil.stage_num).map(i => new Stage(i));
		} else {		
			return ret;
		}
	}
	set stages ( stages: Stage[] ) {
		this.store.set("stages", stages);
	}
};

export const Settings = new _Setting();
