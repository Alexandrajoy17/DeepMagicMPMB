/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file.
	You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded sheet or to first reset sheet.
	Thus you don't run the risk of things that have already been filled out causing conflicts.

	-HOW TO READ-
	Every line comes with a comment immediately after it to show whether it is // Optional // or // Required //,
	followed by a more explanatory comment

	-THIS IS JAVASCRIPT-
	The imports scripts work by creating a new entry inside an existing object or by calling functions.
	You can create new or overwrite existing global variables by omitting 'var'.
	You will need to understand the basics of JavaScript variables: strings, arrays, and JSON objects.
	Note that every opening symbol must have its closing counterpart: (), {}, [], "", ''.
	If these are not present, the code will give an error when imported.
	Use proper editing software for code (like Notepad++). Text processors like Microsoft Word will screw up your code.
	To help finding syntax errors, use (online) code checking software like https://jshint.com

	-COMMENTS IN THE EXAMPLE-
	Anything on a line after two forward slashes is a comment and will be ignored when running the code.
	Multiline comments are possible. Open them using the forward slash followed by an asterisk and close them with the opposite.
	The below contains a lot of these comments. The comments are not necessary for the script to work, so feel free to remove them.
*/

/*	-INFORMATION-

	Subject:	Spell

	Effect:		This is the syntax for adding a new spell to the sheet.

	Remarks:	This does not add anything to the attack section.
				If you want attack cantrips or spells to be added to the attack section,
				use the syntax for adding a weapon (as well), see "weapon (WeaponsList).js".

	Sheet:		v13.1.0 and newer

*/

var iFileName = "Deep Magic Vol 2 Spells.js";
/* 	iFileName // OPTIONAL //
	TYPE:	string
	USE:	how the file will be named in the sheet if you import it as a file

	Note that this is a variable called 'iFileName'.
	Variables invoked inside an import script will not be available after importing.
	However, if you invoke the variable without the 'var', it will be available after importing.

	This doesn't have to be the same as the actual name of the file.
	This doesn't need to have the .js file extension.
	Only the first occurrence of this variable will be used.
*/

RequiredSheetVersion("13.0.6");
/*	RequiredSheetVersion // OPTIONAL //
	TYPE:	function call with one variable, a string or number
	USE:	the minimum version of the sheet required for the import script to work

	If this script is imported into a sheet with an earlier version than given here, the player will be given a warning.

	The variable you input can be a the full semantic version of the sheet as a string (e.g. "13.0.6" or "13.1.0-beta1+201209").
	Alternatively, you can input a number, which the sheet will translate to a semantic version.
	For example:
		FUNCTION CALL						REQUIRED MINIMUM VERSION
		`RequiredSheetVersion(13);`			13.0.0
		`RequiredSheetVersion(13.1);`		13.1.0

	You can find the full semantic version of the sheet at the bottom of every page,
	or look at the "Get Latest Version" bookmark, which lists the version number,
	or go to File >> Properties >> Description, where the version is part of the document title.
*/


//New spell schools
//spellSchoolList["NewSc"] = "new school";



//Template Here

/*
SpellsList["spellname"] = {
    name : "Spell name",
	nameShort : "shrtnme", //optional
    classes : ["druid"],   //["druid", "ranger", "sorcerer", "wizard"]
    source : ["DM2", 329],
    level : 1,
    school : "Ench", //"Abjur" "Conj" "Div" "Ench" "Illus" "Necro" "Trans" "Evoc"
    time : "1 a", //1a 1bns 1 rea min h
	timeFull : "1 reaction, which you take when you see a creature within 60 feet of you casting a spell", //optional
    range : "60 ft", //ft rad S: (self e.g. S"15-ft cone" or S:5-ft rad) 
    components : "V,S,M", //Use "M\u0192" for material component that is costly (will show as "Mƒ"). Use "M\u2020" for material component that is costly and also consumed (will show as "M†"). 
    compMaterial : "Incense or a black candle", //optional
    duration : "Conc, 1 min", //  "1 rnd" "conc, x min" "min" "h" "Instantaneous"- "Concentration, up to 10 minutes" is abbreviated to "Conc, 10 min".
    save : "Wis", //"Str", "Dex", "Con", "Int", "Wis", or "Cha". 
    description : "1 crea save or 1d8+1d8/SL+spell mod Psy dmg 1/turn on atk or cast; if not, rpt save at EOT to end", //Bludg Lightn Necro Pierc Slash
    descriptionFull : "Long description here." + "\n   " + "More description." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, something happens for each slot level above 1st."
	ritual : true //optional
	descriptionCantripDie : "1 creature save or `CD`d12 Poison dmg",
};

*/

/* SpellsList["spellname"] = {
    name : "Spellname",
    classes : ["druid"],   
    source : ["DM2", 1],
    level : 1,
    school : "", //"Abjur" "Conj" "Div" "Ench" "Illus" "Necro" "Trans" "Evoc"
    time : "1 a", 
	timeFull : "1 reaction, which you take when ", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "Incense or a black candle", 
    duration : "Conc, 1 min", 
    save : "Wis", 
	ritual : true, //optional
    description : "1 crea save or ",
    descriptionFull : "Long description here." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher...",
	descriptionCantripDie : "1 creature save or `CD`d12 Poison dmg",
};

 */


/*	descriptionCantripDie // OPTIONAL //
	TYPE:	string
	USE:	the text to be filled in the description field of a cantrip,
			but showing the damage for the current character level

	This attribute is only used if the checkbox
		"Apply character level and spellcasting ability to spell description (never for 'full' lists)"
	is checked when generating a spell sheet.

	If set to do so, the sheet replaces the `CD` with the cantrip die for the character's current level.
	You can also add modifiers to this, as long as they are after the CD and between the back ticks.
	For example, `CD-1` will produce the cantrip die minus 1, so 0 at level 2, 1 at level 5, 4 at level 15, etc.
	
	*/


SpellsList["bark bulwark"] = {
    name : "Bark Bulwark",
    classes : ["druid"],   
    source : ["DM2", 141],
    level : 4,
    school : "Abjur", 
    time : "1 a", 
    range : "5 ft", 
    components : "V,S,M", 
    compMaterial : "a piece of bark", 
    duration : "Conc, 10 min", 
    description : "Create wall of bark, 5ft high 30ft long, 3/4 cover, permanent if conc maintained",
    descriptionFull : "A nonmagical wall of bark erupts from the ground to protect you and your allies. Choose a space in front of or behind you. The wall forms in that space, extending 15 feet out from that space along the ground in opposite directions for a total length of 30 feet. The wall is 5 feet high, 6 inches thick, opaque, and provides three-quarters cover to creatures behind it. " + "\n   " + "If the wall cuts through a creature’s space when it appears, the creature is pushed to one side of the wall (your choice). The wall can’t otherwise occupy the same space as a creature or object. The wall must be vertical and must rest on a firm foundation, such as the ground, the floor of a building, the deck of a ship, or similar." + "\n   " + "The wall is an object made of bark that can be damaged and thus breached. Each 10-foot section of the wall has AC 15, 100 hit points, and vulnerability to fire damage. Reducing a section to 0 hit points destroys it. "  + "\n   " + "If you maintain your concentration on this spell for its whole duration, the wall becomes permanent and can’t be dispelled. Otherwise, the wall disappears when the spell ends.",
};


SpellsList["bartholomews elemental arc"] = {
    name : "Bartholomew’s elemental arc",
	nameShort : "Bart's elemental arc",
    classes : ["druid"],   
    source : ["DM2", 141],
    level : 3,
    school : "Abjur", 
    time : "1 rea", 
	timeFull : "1 reaction, which you take when a friendly creature within 10 feet of you would take acid, cold, fire, lightning, or thunder damage", 
    range : "10 ft", 
    components : "S,M", 
    compMaterial : "a 6-inch rod of copper", 
    duration : "1 rd", 
    description : "call elemental energy towards you, make rgd spell attk to determine who takes dmg, see book",
    descriptionFull : "You become a living conduit of elemental energy. The friendly target doesn’t take the triggering damage, as you draw the elemental energy into yourself and toward a hostile creature you can see within 30 feet of you. Make a ranged spell attack. On a hit, the target takes half the triggering damage, and you take the other half. On a miss, you take half the triggering damage. On a critical hit, the target takes all the triggering damage, and you take none. After the attack, regardless if it hits or misses, you gain resistance to the triggering damage type until the start of your next turn.",
};

SpellsList["bitter wind"] = {
    name : "Bitter Wind",
    classes : ["druid"],   
    source : ["DM2", 143],
    level : 3,
    school : "Evoc", 
    time : "1 a", 
    range : "Self:120-ft", 
    components : "V,S,M", 
    compMaterial : "a birch wood fan", 
    duration : "Conc, 1 min", 
    save : "Str", 
    description : "120ft/20ft wind in chosen direction, crea pushed 30ft, 1d12 cold dmg & prone, disadv in cold/dark",
    descriptionFull : "Freezing wind, forming a line 120 feet long and 20 feet wide, blasts from you in a direction you choose for the spell’s duration. Each creature that starts its turn in the line must succeed on a Strength saving throw or be pushed 30 feet away from you in a direction following the line. Creatures that fail the saving throw also take 1d12 cold damage and are knocked prone. If cast during cold weather or in dark or shadowy conditions, the saving throw is made with disadvantage. Any creature in the line must spend 2 feet of movement for every 1 foot it moves when moving closer to you. " + "\n   " + "As a bonus action on each of your turns before the spell ends, you can change the direction in which the line blasts from you. " + "\n   " + "The bitter wind disperses gas or vapor, and it extinguishes candles, torches, lanterns, and similar flames in the area." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the saving throw is made with disadvantage, and the damage increases by 1d12 for each slot level above 3rd.",
};

SpellsList["breeze walker"] = {
    name : "Breeze Walker",
    classes : ["druid"],   
    source : ["DM2", 146],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "a pheasant feather", 
    duration : "Conc, 1 h", 
    description : "Summon strong breeze in chosen direction, levitate 3ft, travel 150% speed in chosen direction",
    descriptionFull : "Choosing a direction, you summon a strong, steady breeze to swirl beneath your feet and propel you. You levitate to a sustained height of 3 feet for the duration, and travel in the chosen direction at 150% of your movement. Travel in any other direction is at 50% of your movement. While mounted, your mount’s movement is affected as well.",
};

SpellsList["brilliant harrier"] = {
    name : "Brilliant Harrier",
    classes : ["druid"],   
    source : ["DM2", 147],
    level : 2,
    school : "Conj", 
    time : "1 bns", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "a piece of charcoal", 
    duration : "1 min", 
    description : "Create flame bird, bright light, distracts enemies in 30ft, disadv on rolls, 1d4 dmg on fail, see b",
    descriptionFull : "You create a glowing bird of flame on a point you can see within range. The harrier bird hovers in place, shedding bright light in a 10-foot radius and dim light for an additional 10 feet, and it lasts for the duration or until you cast this spell again. Until this spell ends, when a creature you can see within 30 feet of the harrier makes an attack roll, ability check, or saving throw, you can use your reaction to give that target disadvantage on that roll, as the glowing harrier swoops down to distract the target. If the roll fails, the target takes 1d4 fire damage. The harrier has an AC equal to your spell save DC. Each time it is hit, roll a d20. On a result of 9 or less, it vanishes.",
};

SpellsList["burst of pollen"] = {
    name : "Burst of Pollen",
    classes : ["druid"],   
    source : ["DM2", 148],
    level : 3,
    school : "Evoc", 
    time : "1 a", 
    range : "Self:15-ft", 
    components : "V,S,M", 
    compMaterial : "a petal from a white lily", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "Deadly poison bursts, crea save or 6d8 necrotic dmg, half on failed save",
    descriptionFull : "A cloud of deadly pollen bursts out from you in a 15-foot radius. Each creature in the cloud when it appears must make a Constitution saving throw, taking 6d8 necrotic damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
};

SpellsList["by the light of the moon"] = {
    name : "By the Light of the Moon",
    classes : ["druid"],   
    source : ["DM2", 149],
    level : 2,
    school : "Div", 
    time : "1 a", 
    range : "Self:30-ft", 
    components : "V,S",  
    duration : "Conc, 1 min", 
    description : "Area bathed in moonlight, highlights hidden obj, locations and clues, percep/invest checks get adv",
    descriptionFull : "The area within 30 feet of you becomes bathed in magical moonlight. In addition to providing dim light, it highlights objects and locations that are hidden or that hold a useful clue. Until the spell ends, all Wisdom (Perception) and Intelligence (Investigation) checks made in the area are made with advantage.", 
	};

SpellsList["by the light of the watchful moon"] = {
    name : "By the Light of the Watchful Moon",
	nameShort : "By TLOT watchful moon",
    classes : ["druid"],   
    source : ["DM2", 149],
    level : 4,
    school : "Div",
    time : "1 a", 
    range : "90 ft", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    save : "Cha", 
    description : "Illuminate all threats/enemies/traps/hazards with shafts of moonlight, show area of hidden crea",
    descriptionFull : "Regardless of the time of day or your location, you command the watchful gaze of the moon to illuminate threats to you and your allies. Shafts of bright moonlight, each 5 feet wide, shine down from the sky (or from the ceiling if you are indoors), illuminating all spaces within range that contain threats, whether they are enemies, traps, or hidden hazards. An enemy creature that makes a successful Charisma saving throw resists the effect and is not picked out by the moon’s glow. " + "\n   " + "The glow does not make invisible creatures visible, but it does indicate an invisible creature’s general location (somewhere within the 5-foot beam). The light continues to illuminate any target that moves, but a target that moves out of the spell’s area is no longer illuminated. A threat that enters the area after the spell is cast is not subject to the spell’s effect.",
};

SpellsList["chamber of restoring amber"] = {
    name : "Chamber of Restoring Amber",
	nameShort : "Chamb. restoring amber",
    classes : ["druid"],   
    source : ["DM2", 151],
    level : 4,
    school : "Abjur", 
    time : "1 a", 
    range : "Self:15-ft", 
    components : "V,S,M", 
    compMaterial : "a piece of amber worth at least 50 gp", 
    duration : "10 min",  
    description : "Summon dome of amber, fit 12 med crea, other crea barred from entry, can't cast within dome",
    descriptionFull : "A 15-foot-radius immobile dome of amber springs into existence around and above you and remains stationary for the duration. The spell ends if you leave the area. " + "\n   " + "The amber can fit up to twelve Medium or smaller creatures inside of it. The spell fails if its area includes a larger creature or more than twelve creatures. Only creatures you designate can enter the dome through an entrance in one of the dome’s walls. All other creatures are barred from entering the amber dome. Spells and other magical effects can’t extend through the amber or be cast through it. The atmosphere inside the amber is comfortable and dry, regardless of the weather outside. The interior is dimly lit in a soft, amber glow. The amber is opaque from the outside, but it is transparent from the inside. " + "\n   " + "A creature that remains in the amber for its full duration gains the benefits of a short rest, and it can’t be affected by this spell again until it finishes a long rest.",
};

SpellsList["chrysalis"] = {
    name : "Chrysalis",
    classes : ["druid"],   
    source : ["DM2", 153],
    level : 5,
    school : "Trans", 
    time : "rea", 
	timeFull : "1 reaction, which you take when a friendly creature you can see within 60 feet of you is reduced to 0 HP", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "a caterpillar cocoon", 
    duration : "1 rd", 
    description : "A protective cocoon surrounds 1 crea,  5d8 + 3 x spell ability mod protection/healing, see b",
    descriptionFull : "A protective chrysalis surrounds a creature you can see within range as it is reduced to 0 hit points. While protected in this way, the target is still unconscious from being reduced to 0 hit points, but unlike when a creature is normally unconscious, attacks from attackers within 5 feet aren’t automatically critical hits. In addition, the target has three-quarters cover and isn’t prone while protected. The target must make applicable death saving throws, as normal." + "\n   " + "The chrysalis has hit points equal to 5d8 + three times your spellcasting ability modifier. When the protected target would take damage, the chrysalis takes the damage instead. The chrysalis is destroyed when it has 0 hit points. If the chrysalis remains at the end of your next turn, the target regains hit points equal to the chrysalis’s remaining hit points, then the chrysalis crumbles to dust and is destroyed. As the chrysalis crumbles, spectral wings manifest on the target’s back, and the target gains a flying speed of 30 feet for 1 minute.", 
	};

SpellsList["clearing the field"] = {
    name : "Clearing the Field",
    classes : ["druid"],   
    source : ["DM2", 153],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "40 ft", 
    components : "V,S", 
    duration : "1 h", 
    description : "All trees and plants 40ft rad into ground, diff terrain becomes clear ground, plants rise on spell end",
    descriptionFull : "With a harsh word and a vicious chopping motion, you cause every tree, shrub, and stump within 40 feet of you to sink into the ground, leaving the vacated area clear of plant life that might otherwise hamper movement or obscure sight. Overgrown areas that counted as difficult terrain become clear ground and no longer hamper movement. The original plant life instantly rises from the ground again when the spell ends or is dispelled. Plant creatures are not affected by clearing the field." + "\n   " + "Ritual Focus. If you expend your ritual focus, each Plant creature in the area must succeed on a Constitution saving throw or decrease in size as if it failed the saving throw against the reduce effect of the enlarge/reduce spell.", 
	};

SpellsList["conductive vapors"] = {
    name : "Conductive Vapors",
    classes : ["druid"],   
    source : ["DM2", 155],
    level : 2,
    school : "Conj", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S", 
    duration : "1 min", 
    save : "Con", 
    description : "Summon 20ft rad mist, obscures, lightng dmg spreads to other crea then disperses mist, save halves",
    descriptionFull : "You create a 20-foot-radius sphere of mist centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it." + "\n   " + "If a creature within the mist takes lightning damage, the mist immediately disperses, ending this spell, and the lightning damage spreads to other creatures in the mist. Each creature within the mist, other than the creature that took the lightning damage, must make a Constitution saving throw, taking the same amount of lightning damage that the triggering creature took on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the mist’s radius increases by 5 feet for each slot level above 2nd.",
};

SpellsList["court the flame"] = {
    name : "Court the Flame",
    classes : ["druid"],   
    source : ["DM2", 158],
    level : 2,
    school : "Abjur", 
    time : "1 a", 
    range : "Self", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "Nearby nonmagical fire protects you, +2 to AC, expend fire to absorb fire dmg",
    descriptionFull : "You court the power of a nearby fire to shield you. Choose one source of nonmagical fire that is the size of a torch or larger within 5 feet of you. You gain a +2 bonus to your AC for the duration. Until this spell ends, if you would take fire damage from any source, you can use your reaction to reduce that damage to 0. If you do, the spell ends. If you spend at least 1 minute more than 5 feet away from the source of fire you chose when you cast this spell, the spell immediately ends.",
};

SpellsList["diversion door"] = {
    name : "Diversion Door",
    classes : ["druid"],   
    source : ["DM2", 165],
    level : 3,
    school : "Abjur", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "a bundle of aromatic herbs or incense either of which must be worth at least 100 gp",  
    duration : "24 h", 
    save : "Cha", 
    description : "ward an entryway, on failed save crea are turned away from area and forgets intent.",
    descriptionFull : "Your touch wards an arch, doorway, entryway, or other threshold against intruders. For the duration of the spell, each time a creature attempts to cross the warded threshold, the creature must make a Charisma saving throw. On a failed save, the creature is redirected away from the threshold as if it had passed through the threshold from the other side, and it forgets its primary, intended course of action in relation to the threshold, such as obtaining an object or chasing a creature on the other side of the threshold, for 1 minute. On a successful save, the creature is redirected away from the threshold, but it doesn’t forget its primary, intended course of action. " + "\n   " + "When you cast this spell, you can designate a password or other trigger that allows a creature to pass through the threshold unimpeded, such as walking through the threshold backward or whistling a specific tune while stepping through the threshold. You can create a permanently warded threshold by casting this spell on that threshold every day for a year and a day.",
};

SpellsList["doom of the black river"] = {
    name : "Doom of the Black River",
    classes : ["druid"],   
    source : ["DM2", 170],
    level : 4,
    school : "Trans", 
    time : "1 a", 
    range : "Self:10f rad", 
    components : "V,S,M", 
    compMaterial : "Marsh water", 
    duration : "Instantaneous", 
    save : "Dex", 
    description : "devour all wood and leather in the area, held items need dex save, magical items unaffected.",
    descriptionFull : "You speak a word of unmaking that devours all wood and leather in the area, destroying leather armor, shield straps, spear shafts, arrows, bows, staves, clubs, and so forth, including your own items. Objects made of other materials, such as linen, wool, glass, and metals, are unaffected. Items that are worn or held gain a collective Dexterity saving throw by the wearer. On a successful save, none of that wearer’s items are affected. Magical items are never affected by this spell.",
};

SpellsList["doom of the cracked shield"] = {
    name : "Doom of the cracked shield",
	nameShort : "Doom of Cracked Shield",
    classes : ["druid"],   
    source : ["DM2", 170],
    level : 1,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S",  
    duration : "Instantaneous", 
    description : "Next time weapon used, break nonmagic shield or -2 penalty to nonmagic armor AC",
    descriptionFull : "Doom of the cracked shield is cast on a melee weapon. The next time that weapon is used, it destroys the target’s nonmagical shield or damages nonmagical armor, in addition to the normal effect of the attack. If the foe is using a nonmagical shield, it breaks into pieces. If the foe doesn’t use a shield, its nonmagical armor takes a −2 penalty to AC. If the target doesn’t use armor or a shield, the spell is expended with no effect.",
};

SpellsList["dream canopy"] = {
    name : "Dream canopy",
    classes : ["druid"],   
    source : ["DM2", 172],
    level : 3,
    school : "Illus", 
    time : "1 a", 
    range : "Self:10ft rad", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    save : "All", 
    description : "Plant dreams affect nearby crea, various effects, save or be affected, see b",
    descriptionFull : "You summon a verdant and shifting canopy that depicts the dreams of nearby plants. The canopy extends out from you to a distance of 5 feet for the duration, surrounding you in the images and minor sounds of these dreams. When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. At the start of each of your turns, choose one of the following effects. The effect remains until the start of your next turn when you can choose another effect or to maintain that same effect. " + "\n   " + "Mesmerleaf. A creature that enters the area for the first time on a turn or starts its turn there must succeed on a Charisma saving throw or have disadvantage on attack rolls until the start of your next turn, as the plants dream of the mesmerizing dance of leaves caught in autumnal wind. " + "\n   " + "Scintillating Bough. A creature that enters the area for the first time on a turn or starts its turn there must succeed on a Dexterity saving throw or be blinded until the start of your next turn, as the plants dream of speckled sunlight peeking through leaves. " + "\n   " + "Sprigs and Twigs. A creature that enters the area for the first time on a turn or starts its turn there must succeed on a Wisdom saving throw or take 3d8 force damage, as the plants dream of twigs, thorns, and bare tree limbs poking out from all angles.",
};

SpellsList["dreamstride"] = {
    name : "Dreamstride",
    classes : ["druid"],   
    source : ["DM2", 171],
    level : 3,
    school : "Illus", 
    time : "1 a", 
    range : "Self", 
    components : "V,S", 
    duration : "Conc, 10 min", 
    save : "Wis", 
    description : "Step into dream of crea known to you, can influence the dream, see b",
    descriptionFull : "You reach out with your consciousness and step into the dreams of a creature you can see or a creature that is known to you. The creature must be on the same plane of existence as you and have a minimum Intelligence score of 7. If the target is not asleep or in meditation (in the case of elves or similar races) when the spell is cast, the spell fails. This spell has no effect on constructs or undead." + "\n   " + "When you cast the spell, you enter your target’s dream, and you view the events as an invisible third party. The creature is unaware of your presence, and you cannot interact with the dream in any way other than the method listed below." + "\n   " + "As an action, you can reach out your consciousness and attempt to influence the course of the dream. For example, you may cause something new to appear or cause the tone of the dream to change to a nightmare (or vice-versa) or influence a “character” in the dream other than the target to act a certain way. When you attempt to influence the dream, your target must succeed on a Wisdom saving throw against your spell save DC. On a failed save, your attempt to alter the dream is successful. On a successful save, you are immediately ejected from the dream as the dreamer awakens." + "\n   " + "For the duration of the spell, your body lies in repose in the location you cast the spell. You are blind and deaf to your body’s surroundings, though you can feel and are aware if you take damage. If your body is moved, the spell ends. If your target is awakened, the spell ends.",
};

SpellsList["electric eels"] = {
    name : "Electric eels",
    classes : ["druid"],   
    source : ["DM2", 175],
    level : 4,
    school : "Evoc", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "an eel's eye", 
    duration : "Conc, 1 min", 
    description : "Smmn 2 lightning eels, each can melee spell atk crea in 5 ft, 2d6 + spell mod dmg, rpt on bns",
    descriptionFull : "You create two lightning bolts shaped like eels in unoccupied spaces you can see within range that last for the duration or until you cast this spell again. When you cast the spell, you can force each lightning eel to emit a single bolt of lightning at a creature within 5 feet of it. Make one melee spell attack for each eel. On a hit, the target takes lightning damage equal to 2d6 + your spellcasting ability modifier." + "\n   " + "As a bonus action on your turn, you can move each lightning eel up to 30 feet and repeat the attack against a creature within 5 feet of it." + "\n   " + "If one lightning eel is within 5 feet of you, you have resistance to lightning damage. If both eels are within 5 feet of you, you have immunity to lightning damage.", 
};

SpellsList["elemental infusion"] = {
    name : "Elemental infusion",
    classes : ["druid"],   
    source : ["DM2", 175],
    level : 1,
    school : "Trans", 
    time : "1 bns", 
    range : "60 ft", 
    components : "V,S",  
    duration : "Conc, 1 h", 
    description : "Infuse ally's weapon with either acid/cold/fire/lightn/poison/thunder dmg",
    descriptionFull : "You infuse an ally’s weapon with the power of the elements. Choose a weapon worn or carried by a friendly creature within range and choose one of the following damage types: acid, cold, fire, lightning, poison, or thunder. Until the spell ends, that weapon’s damage type changes from its normal type to the chosen type. The spell ends early if the weapon is held by a hostile creature at the start of your turn or if the weapon is not in the possession of a friendly creature for more than 1 minute." + AtHigherLevels + "When you cast this  spell using a spell slot of 2nd level or higher, you can target one additional weapon for each slot level above 1st. All affected weapons are changed to the same damage type.",
};

SpellsList["everans scorching serpents"] = {
    name : "Everan’s scorching serpents",
	nameShort : "Ev's scorching serpents",
    classes : ["druid"],   
    source : ["DM2", 177],
    level : 3,
    school : "Evoc", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "A pinch of ash wrapped in snakeskin", 
    duration : "Conc, 1 min", 
    save : "Str", 
    description : "1 crea save or grappled by fiery serpents, 4d6 fire dmg, 2d6 each round",
    descriptionFull : "You summon a serpent made of flames to burn and constrict one creature you can see within range. The target must make a Strength saving throw. On a failed save, the target takes 4d6 fire damage and is grappled by the fiery serpent. On a successful save, the target takes half the damage and isn’t grappled. At the end of each of the grappled target’s turns, it takes 2d6 fire damage. A creature grappled by the fiery serpent can use its action to make a Strength or Dexterity check (the target’s choice) against your spell save DC. If it succeeds, it is no longer grappled, and the spell ends on it." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd. The targets must be within 30 feet of each other when you target them.",
};

SpellsList["galvanize metal"] = {
    name : "Galvanize metal",
    classes : ["druid"],   
    source : ["DM2", 182],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "A piece of magnetized iron", 
    duration : "Conc, 1 min", 
    save : "Con", 
    description : "Electrify metal object e.g. weapon/armor, 1d8 lightning dmg, cant take reactions, repeat dmg on bns",
    descriptionFull : "Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to electrify. Any creature in physical contact with the object takes 1d8 lightning damage when you cast the spell and can’t take reactions until the start of its next turn. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this effect again. If a creature is holding or wearing the object and takes damage from it, the creature must succeed on a Constitution saving throw or be unable to part with the object." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
};

SpellsList["heartfire"] = {
    name : "Heartfire",
    classes : ["druid"],   
    source : ["DM2", 187],
    level : 2,
    school : "Evoc", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Dex", 
    description : "1 crea save or take 3d6 fire dmg from your inner fire, allies nearby can give extra 1d6 each",
    descriptionFull : "You ignite the inner fire within you and your companions, stoking it into a magical flame against your enemies. A gout of fire emerges from your chest and streaks toward one creature you can see within range. The target must make a Dexterity saving throw, taking 3d6 fire damage on a failed save, or half as much damage on a successful one. When you cast this spell, up to three friendly creatures within 30 feet of you that can see you can each use a reaction to lend its heartfire to yours. For each creature that joins its heartfire with yours, the spell’s damage increases by 1d6." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the primary damage increases by 1d6 for each slot level above 2nd.",
};

SpellsList["krails rupture"] = {
    name : "Krail’s rupture",
    classes : ["druid"],   
    source : ["DM2", 193],
    level : 2,
    school : "Necro", 
    time : "1 a", 
	timeFull : "1 reaction, which you take in response to being grappled or swallowed whole", 
    range : "Touch", 
    components : "S", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "1 crea save or you break grapple/swallow and magically enter and exit their body, 3d12 necro dmg",
    descriptionFull : "You make a slicing motion with your finger, and you immediately break the grapple of the creature grappling you by magically entering their body and exiting them on the opposite side. The creature must make a Constitution saving throw, taking 3d12 necrotic damage on a failed save or half as much damage on a successful one" + "\n   " + "If cast in response to being swallowed, you exit the triggering creature’s body, regardless of how much damage you deal to it, and fall prone in a space within 10 feet of the triggering creature." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage  increases by 1d12 for each slot level above 2nd.",
};

SpellsList["miniature hurricane"] = {
    name : "Miniature hurricane",
    classes : ["druid"],   
    source : ["DM2", 201],
    level : 3,
    school : "Evoc", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "a stone submerged in a jar of seawater", 
    duration : "Conc, 1 min", 
    save : "Con", 
    description : "Conjure mini hurricane, 40ft cylinder 20ft rad save or 3d6 cold dmg, speed halved",
    descriptionFull : "You conjure a miniature hurricane on a point you can see within range. The hurricane forms in a 40-foot-tall cylinder with a 20-foot-radius centered on that point. When a creature enters the spell’s area for the first time on a turn or starts its turn there, it is buffeted by rain, ice pellets, and roaring wind and must make a Constitution saving throw. On a failed save, a creature takes 3d6 cold damage, and its speed is halved until it leaves the hurricane. On a successful save, a creature takes half the damage, and its speed isn’t reduced. Until the spell ends, the hurricane moves up to 20 feet in a random direction at the start of each of your turns. To determine the direction, roll a d8 and assign a direction to each die face.",
};

SpellsList["ominous winds"] = {
    name : "Ominous winds",
    classes : ["druid"],   
    source : ["DM2", 205],
    level : 2,
    school : "Ench", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "a cracked bone", 
    duration : "Conc, 1 min", 
    save : "Cha", 
    description : "3 crea of choice save or subtract 1d8 from attack rolls or saving throws.",
    descriptionFull : "Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d8 and subtract the number rolled from the attack roll or saving throw." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
};

SpellsList["part clouds"] = {
    name : "Part clouds",
    classes : ["druid"],   
    source : ["DM2", 206],
    level : 6,
    school : "Conj", 
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "A sun-bleached wind instrument carved from wood", 
    duration : "Conc, 1 h", 
    description : "Nonmagical smoke/clouds/fog within 1 mile clear, you can't become lost",
    descriptionFull : "The clouds miraculously part within 1 mile of you for the duration. You must be outdoors to cast this spell. Moving to a place where you don’t have a clear path to the sky ends the spell early. When you cast this spell, nonmagical smoke, clouds, fog, and other obscuring mists, including the clouds in the sky, disperse in the area. Magical smoke, clouds, fog, and other obscuring mists disperse after 1 minute in the area. Until the spell ends, you can’t become lost while you travel, and the area is filled with bright sunlight if it is day or dim light if it is night.",
};

SpellsList["radiant rosette"] = {
    name : "Radiant rosette",
    classes : ["druid"],   
    source : ["DM2", 212],
    level : 2,
    school : "Conj", 
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "a dandelion stalk", 
    duration : "Conc, 1 min", 
	description : "Magic dandelion, ranged spell attack to send glowing seeds, 3d6 rad dmg, repeat as action",
    descriptionFull : "A rosette of magic resembling a dandelion of energy appears in your hand. The magical flower remains there for the duration. When you cast this spell, you blow gently on the rosette, sending a stream of glowing seeds at a creature you can see within 60 feet of you. Make a ranged spell attack against the target. On a hit, the target takes 3d6 radiant damage. Until the spell ends, you can blow on the rosette and make the attack again on each of your turns as an action." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
};

SpellsList["rite of rain"] = {
    name : "Rite of rain",
    classes : ["druid"],   
    source : ["DM2", 216],
    level : 2,
    school : "Conj", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "1 h", 
	ritual : true, 
    description : "Summon rains 30ft rad, difficult terrain for enemies, reroll 1s on dmg die for cold/lightning spells",
    descriptionFull : "You conduct a special rite through dance or prayer. At the end of the rite, you touch a point on the ground beneath you. For the duration, the area within 30 feet of that point is blessed by refreshing rains. The area is difficult terrain for creatures hostile to you. In addition, when a creature in the area rolls a 1 on a damage die for a spell that deals cold damage or lightning damage, the creature can reroll the die and must use the new roll. "  + "\n   " + "If you cast this spell every day for 10 days in the same location, plants in the area grow twice as quickly and yield twice as much for 1 year.",
};

SpellsList["sear"] = {
    name : "Sear",
    classes : ["druid"],   
    source : ["DM2", 217],
    level : 3,
    school : "Evoc", 
    time : "1 a", 
    range : "S:30-ft cone", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Dex", 
    description : "Exhale searing wind, save or 5d8 fire dmg and pushed to cone edge, ignites obj, disperse gas",
    descriptionFull : "You exhale searing hot wind in a 30-foot cone. Each creature in the area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage and is pushed away from you in a direction following the cone up to the edge of the cone. On a successful save, a creature takes half the damage and isn’t pushed."  + "\n   " + "The wind disperses gas or vapor in the area, and it ignites flammable objects in the area that aren’t being worn or carried." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
};

SpellsList["spirit balm"] = {
    name : "Spirit balm",
    classes : ["druid"],   
    source : ["DM2", 225],
    level : 2,
    school : "Evoc", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    description : "Divine/nature spirit, you + 1 ally gain spellcasting modifier HP, end charmed/frightened condition",
    descriptionFull : "You call on a divine spirit or a spirit of nature to heal your wounds and calm your mind. You and one willing creature you can see within range regain a number of hit points equal to your spellcasting ability modifier, and you can choose to end either the charmed or frightened condition on each of you." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
};

SpellsList["storm door"] = {
    name : "Storm door",
    classes : ["druid"],   
    source : ["DM2", 227],
    level : 4,
    school : "Conj", 
    time : "1 a", 
    range : "self", 
    components : "V,S,M", 
    compMaterial : "A piece of fulgurite", 
    duration : "Conc, 10 min", 
    save : "Dex", 
    description : "Teleport 120 ft, crea in 5 ft save or 1d12 dmg, repeat each rd, see b",
    descriptionFull : "Crackling with lightning, you teleport up to 120 feet to an unoccupied space that you can see. Each creature within 5 feet of both the space you left and your new space must make a Dexterity saving throw. A creature takes 1d12 lightning damage on a failed save or half as much damage on a successful one." + "\n   " + " On each of your turns for the duration, you can use your bonus action to call up the lightning and open such a storm door again, targeting a different space with the door each time. If you are outdoors when you cast this spell, a storm develops within 1 minute and follows you, and under such conditions, the spell’s damage increases to 2d12, and you can teleport up to 240 feet." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, a creature of your choice within 5 feet of you can teleport through the storm door with you. Accompanying creatures do not suffer the lightning damage.",
};

SpellsList["storm step"] = {
    name : "Storm step",
    classes : ["druid"],   
    source : ["DM2", 228],
    level : 2,
    school : "Conj", 
    time : "1 a", 
    range : "Self", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "Teleport with clap of thunder, crea in 5ft of origin and destination save or 2d6 thunder dmg",
    descriptionFull : "You release a clap of thunder as you teleport to an unoccupied space you can see within 30 feet of you. Each creature within 5 feet of your origin and destination spaces must make a Constitution saving throw, taking 2d6 thunder damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 1st.",
};

SpellsList["thresh the battlefield"] = {
    name : "Thresh the battlefield",
    classes : ["druid"],   
    source : ["DM2", 230],
    level : 6,
    school : "Conj", 
    time : "1 a", 
    range : "Self:60-ft", 
    components : "V,S,M", 
    compMaterial : "wheat dipped in giant's blood", 
    duration : "Instantaneous", 
    save : "Dex", 
    description : "Magical threshing blade cone, save or 6d10 slash dmg, on fail is lacerated, 1d10 dmg each turn",
    descriptionFull : "You create a magical threshing blade that spins and grows as it flies out from you. Each creature in a 60-foot cone must make a Dexterity saving throw. On a failed save, a creature takes 6d10 slashing damage and is lacerated for 1 minute. On a successful save, a creature takes half the damage and isn’t lacerated. A lacerated creature takes 1d10 slashing damage at the start of each of its turns and can’t regain hit points until the laceration ends. At the end of each of its turns, a lacerated creature can make a Constitution saving throw. On a success, the laceration ends. Alternatively, a creature can take an action to stanch the laceration with a successful Wisdom (Medicine) check against your spell save DC." + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, the damage (both initial and later) increases by 1d10 for each slot level above 6th.",
};


//34 spells