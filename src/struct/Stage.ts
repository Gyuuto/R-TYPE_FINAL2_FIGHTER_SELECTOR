export class Stage {
	id : number;
	use : boolean;

	constructor ( id : number ) {
		this.id = id;
		this.use = true;
	}
}

export class StageUtil {
	static readonly stage_num = 34;
	static readonly stage_name : string[] = [
		"1.0", "2.0", "3.0", "4.0",
		"5.0", "5.1",
		"6.0", "7.0",
		"6.1", "7.1",
		"6.2", "7.2", // 12
		"X1.0", "X2.0", "X3.0", "X4.0", "X5.0", "X6.0", "X7.0",
		"Y1.0", "Y2.0", "Y3.0", "Y4.0", "Y5.0", "Y6.0", "Y7.0",
		"Z1.0", "Z2.0", "Z3.0", "Z4.0", "Z5.0", "Z6.0", "Z7.0", "Z7.1"
	];

	static is_final_stage ( stage : Stage ) {
		if ( stage.id == 7 || stage.id == 9 || stage.id == 11 ||
			 stage.id == 18 ||
			 stage.id == 25 ||
			 stage.id == 32 || stage.id == 33 ) {
			return true;
		}

		return false;
	}
	
	static get_stage_name_from_id ( stage : Stage ) {
		return this.stage_name[stage.id];
	}
}
