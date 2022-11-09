export class Fighter {
	id : number;
	use : boolean;

	constructor ( id : number ) {
		this.id = id;
		this.use = true;
	}
}

export class FighterUtil {
	static readonly fighter_num = 106;

	static readonly fighter_model : string[] = [
		"R-9A", "R-9A2", "R-9A3", "R-9A4", "R-9AF",
		"R-9AD", "R-9AD2", "R-9AD3", "R-9C", "R-9K", // 10
		"R-9S", "R-9Ø", "R-9Ø2", "R-9AX", "R-9AX2",
		"R-9Leo", "R-9Leo2", "R-9Sk", "R-9Sk2", "R-9W", // 20
		"R-9WB", "R-9WF", "R-9WZ", "R-9B", "R-9B2",
		"R-9B3", "R-9D", "R-9D2", "R-9DH", "R-9DH2", // 30
		"R-9DH3", "R-9DV", "R-9DV2", "R-9DP", "R-9DP2",
		"R-9DP3", "R-9E", "R-9E2", "R-9E3", "R-9ER", // 40
		"R-9ER2", "R-9F", "RX-10", "R-11A", "R-11B",
		"R-11S", "R-11S2", "TX-T", "OF-1", "OFX-2", // 50
		"OF-3", "OFX-4", "OF-5", "TW-1", "TW-2",
		"TP-1", "TP-2", "TP-2H", "TP-3", "TP-2S", // 60
		"TP-2M", "TL-T", "TL-1A", "TL-1B", "TL-2A",
		"TL-2A2", "TL-2B", "TL-2B2", "RX-12", "R-13T", // 70
		"R-13A", "R-13A2", "R-13B", "BX-T", "B-1A",
		"B-1A2", "B-1A3", "B-1B", "B-1B2", "B-1B3", // 80
		"B-1C", "B-1C2", "B-1C3", "B-1D", "B-1D2",
		"B-1D3", "BX-2", "B-3A", "B-3A2", "B-3B", // 90
		"B-3B2", "B-3C", "B-3C2", "BX-4", "B-5A",
		"B-5B", "B-5C", "B-5D", "R-99", "R-100", // 100
		"R-101", "R-9uso799", "OFX-X", "TP-2M2", "Sm-GrF", 
		"TP-2B",
	];

	static readonly fighter_name : string[] = [
		"ARROW-HEAD", "DELTA", "LADYLOVE", "WAVE MASTER", "MORNING GLORY",
		"ESCORT TIME", "PRINCEDOM", "KING'S MIND", "WAR-HEAD", "SUNDAY STRIKE", 
		"STRIKE BOMER", "RAGNAROK", "RAGNAROK II", "DELICATESSEN", "DINNER BELL",
		"LEO", "LEO II", "PRINCIPALITIES", "DOMINIONS", "WISE MAN",
		"HAPPY DAYS", "SWEET MEMORIES", "DISASTER REPORT", "STRIDER", "STAYER",
		"SLEIPNIR", "SHOOTING STAR", "MORNING STAR", "GRACE NOTE", "HOT CONDUCTOR",
		"CONCERTMASTER", "TEARS SHOWER", "NORTHERN LIGHTS", "HAKUSAN", "ASANO-GAWA",
		"KENROKU-EN", "MIDNIGHT EYE", "OWL-LIGHT", "SWEET LUNA", "POWERED SILENCE",
		"UNCHAINED SILENCE", "ANDROMALIUS", "ALBATROSS", "FUTURE WORLD", "PEACE MAKER",
		"TROPICAL ANGEL", "NO CHASER", "ECLIPSE", "DAEDALUS", "VALKYRIE",
		"GARUDA", "SONGOKUU", "KAGUYA", "DUCKBILL", "KIWI BERRY",
		"SCOPE DUCK", "POW ARMOR", "POW ARMOR II", "Mr.HELI", "CYBER NOVA", 
		"FROGMAN", "CHIRON", "IASON", "ASKLEPIOS", "ACHILLEUS",
		"NEOPTOLEMOS", "HERAKLES", "HYLLOS", "CROSS THE RUBICON", "ECHIDNA",
		"CERBEROS", "HADES", "CHARON", "DANTALION", "DIGITALIUS",
		"DIGITALIUS II", "DIGITALIUS III", "MAD FOREST", "MAD FOREST II", "MAD FOREST III", 
		"AMPHIBIAN", "AMPHIBIAN II", "AMPHIBIAN III", "BYDO SYSTEMα", "BYDO SYSTEMβ",
		"BYDO SYSTEMγ", "PLATONIC LOVE", "MISTY LADY", "MISTY LADY II", "METALLIC DAWN",
		"METALLIC DAWN II", "SEXY DYNAMITE", "SEXY DYNAMITE II", "ARVANCHE", "CLAW CLAW",
		"GOLDEN SELECTION", "PLATINUM HEART", "DIAMOND WEDDING", "LAST DANCER", "CURTAIN CALL", 
		"GRAND FINALE", "APRIL FOOLS PROTOTYPE", "MARIKO", "SEA TIGER", "GRANVIA F",
		"BAD APPLE",
	];

	static is_available ( fighter : Fighter ) {
		return true;
	}
	
	static get_fighter_fullname_from_id ( fighter : Fighter ) {
		return this.fighter_model[fighter.id] + " " + this.fighter_name[fighter.id];
	}

	static get_fighter_name_from_id ( fighter : Fighter ) {
		return this.fighter_name[fighter.id];
	}

	static get_fighter_model_from_id ( fighter : Fighter ) {
		return this.fighter_model[fighter.id];
	}
}
