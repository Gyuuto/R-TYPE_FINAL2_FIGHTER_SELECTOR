import ElectronStore from "electron-store";
import Fighter from "./Fighter.ts";
import Stage from "./Stage.ts";

type SettingType = {
	fighters: Fighter[] | undefined;
	stages: Stage[] | undefined;
};

class _Setting {
	private store = new ElectronStore<SettingType>();

	get fighters () : SettingType["fighters"] {
		return this.store.get("fighters");
	}
	set fighters ( fighters: Fighter[] ) {
		this.store.set("fighters", fighters);
	}

	get stages () : SettingType["stages"] {
		return this.store.get("stages");
	}
	set stages ( stages: Stage[] ) {
		this.store.set("stages", stages);
	}
};

export const Settings = new _Setting();
