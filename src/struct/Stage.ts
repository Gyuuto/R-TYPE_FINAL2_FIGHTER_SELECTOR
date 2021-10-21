export class Stage {
	id : number;
	use : boolean;

	constructor ( id : number ) {
		this.id = id;
		this.use = true;
	}
}

export class StageUtil {
	static const stage_num = 20;
	static const stage_name : string[] = [
		"1.0", "2.0", "3.0", "4.0", "5.0",
		"6.0", "7.0",
		"6.1", "7.1",
		"6.2", "7.2",
		"X1.0", "X2.0", "X3.0", "X4.0", "X5.0", "X6.0", "X7.0",
		"Y1.0", "Y2.0"
	];

	static is_final_stage ( stage : Stage ) {
		if ( stage.id == 6 || stage.id == 8 || stage.id == 10 || stage.id == 17 ) {
			return true;
		}

		return false;
	}
	
	static get_stage_name_from_id ( stage : Stage ) {
		return this.stage_name[stage.id];
	}
}
