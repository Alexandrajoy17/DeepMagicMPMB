
var iFileName = "Deep Magic Vol 1 Spells.js";

RequiredSheetVersion("13.0.6");


/*
SpellsList["spellname"] = {
    name : "Spell name",
	nameShort : "shrtnme", //optional
    classes : ["druid"],   //["druid", "ranger", "sorcerer", "wizard"]
    source : ["DM1", 329],
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
    name : "Spell name",
    classes : ["druid"],   
    source : ["DM1", 1],
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
}; */




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

SpellsList["abhorrence"] = {
    name : "Abhorrence",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 141],
    level : 0,
    school : "Ench", 
    time : "1 a", 
    range : "30 ft",
    components : "V,S",
    duration : "1 min", 
    save : "Wis", 
    description : "Make a crea less appealing to others. 1 crea save or subtract 1d6 from their next Cha check ", 
    descriptionFull : "You temporarily make a creature within range less appealing to others. The target makes a Wisdom saving throw against your spell. On a successful save, the spell is ineffective. On a failed save, the next time the creature makes a Charisma check before the spell ends, roll a d6 and subtract the result from the roll. The spell then ends.",
};

SpellsList["accelerate"] = {
    name : "Accelerate",
    classes : ["druid", "bard", "cleric", "sorcerer"],   
    source : ["DM1", 142],
    level : 3,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "a toy top", 
    duration : "Conc, 1 min", 
    description : "3 willing crea walking speed doubled, can use dash as bns action, adv on dex saves", 
    descriptionFull : "Choose up to three willing creatures within range, which can include you. For the duration of the spell, each target’s walking speed is doubled. Each target can also use a bonus action on each of its turns to take the Dash action, and it has advantage on Dexterity saving throws." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can affect one additional creature for each slot level above 3rd.",
};

SpellsList["acumen"] = {
    name : "Acumen",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 142],
    level : 0,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "1 willing crea adds 1d6 to 1 wis check of their choice, roll before or after making check", 
    descriptionFull : "You touch a willing creature. Once before the spell ends, the target can roll a d6 and add the result to one Wisdom check of its choice. It can roll the die before or after making the check. The spell then ends.", 
};

SpellsList["agonizing mark"] = { 
    name : "Agonizing Mark",
    classes : ["druid", "bard", "cleric", "ranger", "sorcerer", "wizard"],  
    source : ["DM1", 143],
    level : 1,
    school : "Evoc",
    time : "1 a", 
    range : "90 ft", 
    components : "S",
    duration : "Conc, 1 min",
    save : "Cha", 
    description : "Mark 1 crea as prey with ray of black energy, 1 crea save or fall prone in agony",
    descriptionFull : "You choose a creature you can see within range to mark as your prey, and a ray of black energy issues forth from you. Until the spell ends, each time you deal damage to the target it must make a Charisma saving throw. On a failed save, it falls prone as its body is filled with torturous agony.",
};


SpellsList["aledritch blast"] = {
    name : "Ale-dritch Blast",
    classes : ["druid", "bard", "wizard"],   
    source : ["DM1", 143],
    level : 0,
    school : "Conj", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Con",  
    description : "Shoot stream of cold ale, ranged spell attack 1d8 cold dmg, crea saves or is poisoned; see book",
	descriptionCantripDie : "Shoot stream of cold ale, ranged spell attack 'CD'1d8 cold dmg, crea saves or is poisoned; see book",
    descriptionFull : "A stream of ice-cold ale blasts from your outstretched hands toward a creature or object within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage and it must make a successful Constitution saving throw or be poisoned until the end of its next turn. A targeted creature has disadvantage on the saving throw if it has drunk any alcohol within the last hour. The damage increases when you reach higher levels: 2d8 at 5th level, 3d8 at 11th level, and 4d8 at 17th level.",  
};


SpellsList["allure"] = {
    name : "Allure",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],  
    source : ["DM1", 143],
    level : 0,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    description : "1 willing crea add 1d6 to next charisma check of its choice, roll before or after the check", 
    descriptionFull : "You touch a willing creature. Once before the spell ends, the target can roll a d6 and add the result to one Charisma check of its choice. It can roll the die before or after making the check. The spell then ends.", 
};


SpellsList["alter arrows fortune"] = {
    name : "Alter Arrow's Fortune",
    classes : ["druid", "bard", "cleric", "ranger", "sorcerer", "wizard"],  
    source : ["DM1", 144],
    level : 1,
    school : "Div", 
    time : "1 rea", 
	timeFull : "1 reaction, which you take when an enemy makes a ranged attack that hits", 
    range : "100 ft", 
    components : "S",  
    duration : "Instantaneous", 
    save : "Cha",  
    description : "On successful enemy rngd or spell attk, 1 crea save or reroll attack roll, taking lower roll (disadvantage)", 
    descriptionFull : "You clap your hands, setting off a chain of tiny events that culminate in throwing off an enemy’s aim. When an enemy makes a ranged attack with a weapon or a spell that hits one of your allies, this spell causes the enemy to reroll the attack roll unless the enemy makes a successful Charisma saving throw. The attack is resolved using the lower of the two rolls (effectively giving the enemy disadvantage on the attack).",
};

SpellsList["ancestors strength"] = {
    name : "Ancestor's Strength",
    classes : ["druid", "cleric", "paladin"],   
    source : ["DM1", 145],
    level : 1,
    school : "Trans", 
    time : "1 a", 
    range : "Touch",
    components : "V,S",
    duration : "Conc, 8 h",
    description : "1 willing crea becomes invigorated, strength of next size category, adv on str checks", 
    descriptionFull : "Choose a willing creature you can see and touch. Its muscles bulge and become invigorated. For the duration, the target is considered one size category larger for determining its carrying capacity, the maximum weight it can lift, push, or pull, and its ability to break objects. It also has advantage on Strength checks.",
};

SpellsList["anchoring rope"] = {
    name : "Anchoring Rope",
    classes : ["druid", "bard", "ranger"],   
    source : ["DM1", 145],
    level : 1,
    school : "Evoc", 
    time : "1 a/rea", 
	timeFull : "1 action, or 1 reaction, which you take while falling", 
    range : "30 ft", 
    components : "V,S", 
    duration : "5 min", 
    description : "Create spectral rope magically anchored at a point you select within range. See book", 
    descriptionFull : "You create a spectral lanyard. One end is tied around your waist, and the other end is magically anchored in the air at a point you select within range. You can choose to make the rope from 5 to 30 feet long, and it can support up to 800 pounds. The point where the end of the rope is anchored in midair can’t be moved after the spell is cast. If this spell is cast as a reaction while you are falling, you stop at a point of your choosing in midair and take no falling damage. You can dismiss the rope as a bonus action." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd  level or higher, you can create one additional rope for every two slot levels above 1st. Each rope must be attached to a different creature.",
};

SpellsList["animal spy"] = {
    name : "Animal Spy",
    classes : ["druid", "ranger"],  
    source : ["DM1", 146],
    level : 2,
    school : "Div",
    time : "1 a", 
    range : "30 ft", 
    components : "V,S", 
    duration : "1 h",
    description : "Create mental link with beast, use  bns action to transfer your awareness to the beast and back, see b", 
    descriptionFull : "You create a mental link between you and a beast within range. Until the spell ends, you can use a bonus action to transfer your awareness to the beast—using its vision, hearing, smell, taste, and touch—and another bonus action on any subsequent turn to return your awareness to your body. You can use an action to dismiss the spell entirely. This spell affects normal beasts, including giant versions of animals, but not conjured animals or familiars. The spell does not allow you to control the beast or make it friendly to you. While you experience the world through the beast’s senses, your body is motionless, unaware of the outside world and effectively unconscious. The spell ends if the distance between you and the beast is ever greater than 1 mile, or if the beast is killed. If you are using the beast’s senses when it is killed, you must succeed on a DC 14 Wisdom saving throw or be stunned for 1d4 rounds from the shock of experiencing its death.",
};

SpellsList["animated scroll"] = {
    name : "Animated Scroll",
    classes : ["druid", "sorcerer", "wizard"],
    source : ["DM1", 147],
    level : 0,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M",
    compMaterial : "Intricately folded paper or parchment",
    duration : "24 h", 
    description : "fold paper into an animal shape, becomes enchanted and gains properties of the animal it represents.", 
    descriptionFull : "The paper or parchment must be folded into the shape of an animal before casting the spell. It then becomes an animated paper animal of the kind the folded paper most closely resembles. The creature uses the stat block of any beast that has a challenge rating of 0. It is made of paper, not flesh and bone, but it can do anything the real creature can do: a paper owl can fly and attack with its talons, a paper frog can swim without disintegrating in water, and so forth. It follows your commands to the best of its ability, including carrying messages to a recipient whose location you know. You can’t have more than one animated paper animal at a time. If you cast this spell while you already have an animated paper animal, you instead cause it to adopt a new form. Choose any beast that has a challenge rating of 0. Your animated paper animal transforms into the chosen creature. The duration increases by 24 hours at 5th level (48 hours), 11th level (72 hours), and 17th level (96 hours).", 
};

SpellsList["anticipate attack"] = {
    name : "Anticipate Attack",
    classes : ["druid", "bard", "cleric", "paladin", "ranger", "sorcerer", "wizard"],   
    source : ["DM1", 147],
    level : 2,
    school : "Div", 
    time : "1 a", 
	timeFull : "1 reaction, which you take when you are attacked but before the attack roll is made",
    range : "Self", 
    components : "V,S",
    duration : "Instantaneous", 
    description : "Spot oncoming attack, move half speed w/o prvkng opp attks, miss attk if no longer in range, see b", 
    descriptionFull : "In a flash of foreknowledge, you spot an oncoming attack with enough time to avoid it. Upon casting this spell, you can move up to half your speed without provoking opportunity attacks. The oncoming attack still occurs but misses automatically if you are no longer within the attack’s range, are in a space that’s impossible for the attack to hit, or can’t be targeted by that attack in your new position. If none of those circumstances apply but the situation has changed—you have moved into a position where you have cover, for example—then the attack is made after taking the new situation into account.",
};

SpellsList["anticipate weakness"] = {
    name : "Anticipate Weakness",
    classes : ["druid", "bard", "cleric", "ranger", "sorcerer", "warlock", "wizard"],  
    source : ["DM1", 147],
    level : 1,
    school : "Div", 
    time : "1 bns",
    range : "Self",
    components : "V,S", 
    duration : "Instantaneous",
    description : "See gaps in foe's defense, gain advantage on attack rolls until end of next turn", 
    descriptionFull : "With a quick glance into the future, you pinpoint where a gap is about to open in your foe’s defense, and then you strike. After casting anticipate weakness, you have advantage on attack rolls until the end of your turn.",
};

SpellsList["arcane parasite"] = {
    name : "Arcane Parasite",
    classes : ["druid", "sorcerer", "wizard"],   
    source : ["DM1", 147],
    level : 7,
    school : "Trans", 
    time : "1 a", 
    range : "Self", 
    components : "V,S",
    duration : "2 h", 
    description : "Draw on arcane power to cast without spellslots, reduce spell duration by 10 m per spell level, see book",
    descriptionFull : "This spell creates a link between you and a nearby source of arcane power, allowing you to draw on its strength to bolster your spellcasting ability. When you cast a spell, you can use a bonus action to draw on the link. Doing so means you expend no spell slots to cast the spell, the energy instead comes from the external power. The more you draw on the link, the harder it is to maintain. Each spell you cast in this manner decreases the duration of the arcane parasite spell by 10 minutes per level of the spell you cast using the link. For example, if you cast a fireball spell using the link, you would not expend a spell slot in the casting, but the duration of this spell would decrease by 30 minutes. If you cast a spell using the link and your remaining duration is equal to or less than the spell’s level × 10 minutes, then this spell ends as soon as that spell is cast.",
	ritual : true,
};  

SpellsList["aspect of the ape"] = {
    name : "Aspect of the Ape",
    classes : ["druid", "ranger"],   
    source : ["DM1", 148],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Conc, 1 hr",
    description : "Crea gains climbing speed, adv on str (athletics) checks when jumping or climbing", 
    descriptionFull : "You alter the appearance of a creature you touch, giving it a more simian form. While this spell is in effect, the subject gains a climbing speed equal to its normal walking speed, and gains advantage on Strength (Athletics) checks made when jumping or climbing. When up in a tree’s branches (or in a similar area, at the GM’s discretion) the target can move up to its climbing speed as a bonus action, using brachiation to reach a nearby tree if the branches are close enough together. This bonus action can be taken only if the subject has at least two hands free, or one hand free if the subject is barefoot.",
}; 

SpellsList["aspect of the ram"] = {
    name : "Aspect of the Ram",
    classes : ["druid", "ranger"],   
    source : ["DM1", 150],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "Self", 
    components : "V,S",  
    duration : "Conc, 10 min", 
    description : "Take on physical attributes of a ram, gain ram attack action, adv on athletics/acrobatics checks see book", 
    descriptionFull : "You take on the aspect of a ram, including some physical attributes. Your body hair grows thick and woolly, and a curling pair of horns sprouts from your head. You can make a ram attack with these horns as an action, and you are proficient with this attack. You deal 1d6 bludgeoning damage on a hit.  If you move at least 20 feet straight toward a target and hit with a ram attack on the same turn, the target takes an extra 1d6 bludgeoning damage. If the target is a creature, it must succeed on a Strength check against your spell save DC or be knocked prone. You ignore difficult terrain caused by rubble, ice sheets, scree, or steep slopes. You also gain advantage on Strength (Athletics) checks made while climbing or jumping, and Dexterity (Acrobatics) checks made for balance or to stay on your feet.",
};

SpellsList["aspect of the serpent"] = {
    name : "Aspect of the Serpent",
    classes : ["druid", "sorcerer", "wizard"], 
    source : ["DM1", 151],
    level : 3,
    school : "Trans", 
    time : "1 a", 
    range : "Touch",
    components : "V,S,M", 
    compMaterial : "A dried snakeskin", 
    duration : "Conc, 1 min", 
    description : "Gain 60ft darkvision/30 ft blindsight, ranged weapon attack 2d6 poison dmg on bns", 
    descriptionFull : "A creature you touch takes on snakelike aspects for the duration of the spell. Its tongue becomes long and forked, its canine teeth become fangs with venom sacs, and its pupils become sharply vertical. The target gains darkvision with a range of 60 feet and blindsight with a range of 30 feet. As a bonus action when you cast the spell, the target can make a ranged weapon attack with a normal range of 60 feet that deals 2d6 poison damage on a hit. As an action, the target can make a bite attack using either Strength or Dexterity (Melee Weapon Attack: range 5 ft., one creature; Hit: 2d6 piercing damage), and the creature must make a successful DC 14 Constitution saving throw or be paralyzed for 1 minute. A creature paralyzed in this way repeats the saving throw at the end of each of its turns, ending the effect on itself on a success)." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, both the ranged attack and bite attack damage increase by 1d6 for each slot level above 3rd.",
};

SpellsList["avoid grevious injury"] = {
    name : "Avoid Grevious Injury",
    classes : ["druid", "bard", "cleric", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 152],
    level : 1,
    school : "Div", 
    time : "1 rea", 
	timeFull : "1 reaction, which you take when you are struck by a critical hit",
    range : "Self", 
    components : "V,S",  
    duration : "Instantaneous", 
    description : "Cast after crit but before dmg rolled, attack becomes a normal hit",
    descriptionFull : "You cast this spell when a foe strikes you with a critical hit but before damage dice are rolled. The critical hit against you becomes a normal hit.",
};

SpellsList["awaken object"] = {
    name : "Spell name",
	classes : ["druid"], 
    source : ["DM1", 152],
    level : 8,
    school : "Trans", 
    time : "8 h", 
    range : "Touch", 
    components : "V,S,M\u2020", 
    compMaterial : "Ruby worth at least 1000g", 
    duration : "Permanent", 
    description : "Imbue object with sentience and free will, stats determined by size, can make melee attacks see book", 
    descriptionFull : "After spending the casting time enchanting a ruby along with a Large or smaller nonmagical object in humanoid form, you touch the ruby to the object. The ruby dissolves into the object, which becomes a living construct imbued with sentience. If the object has no face, a humanoid face appears on it in an appropriate location. The awakened object’s statistics are determined by its size, as shown on the table below. An awakened object can use an action to make a melee weapon attack against a target within 5 feet of it. It has free will, acts independently, and speaks one language you know. It is initially friendly to anyone who assisted in its creation. An awakened object’s speed is 30 feet. If it has no apparent legs or other means of moving, it gains a flying speed of 30 feet and it can hover. Its sight and hearing are equivalent to a typical human’s senses. Intelligence, Wisdom, and Charisma can be adjusted up or down by the GM to fit unusual circumstances. A beautiful statue might awaken with increased Charisma, for example, or the bust of a great philosopher could have surprisingly high Wisdom.",
};


SpellsList["batsense"] = {
    name : "Batsense",
    classes : ["druid", "bard", "ranger", "sorcerer"],   
    source : ["DM1", 153],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "A bit of fur from a bat's ear", 
    duration : "1 h", 
    description : "Echolocation + blindsight, can't use if deafened, disadv on stealth/adv on perception (hearing) chks",
    descriptionFull : "For the duration of the spell, a creature you touch can produce and interpret squeaking sounds used for echolocation, giving it blindsight out to a range of 60 feet. The target cannot use its blindsight while deafened, and its blindsight doesn’t penetrate areas of magical silence. While using blindsight, the target has disadvantage on Dexterity (Stealth) checks that rely on being silent. Additionally, the target has advantage on Wisdom (Perception) checks that rely on hearing.",
};

SpellsList["bewilderment"] = {
    name : "Bewilderment",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 154],
    level : 0,
    school : "Ench", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S", 
    duration : "1 min", 
    save : "Wis", 
    description : "1 crea save or subtract 1d6 from next intelligence check",
    descriptionFull : "You temporarily inhibit the cognitive ability of a creature within range. If the target makes a successful Wisdom saving throw, the spell is ineffective. On a failed save, the next time the creature makes an Intelligence check before the spell ends, roll a d6 and subtract the result from the roll. The spell then ends.",
};

SpellsList["biting arrow"] = {
    name : "Biting Arrow",
    classes : ["druid", "ranger", "sorcerer", "wizard"],   
    source : ["DM1", 154],
    level : 0,
    school : "Evoc",
    time : "1 a", 
    range : "self", 
    components : "V,M", 
    compMaterial : "an arrow or thrown weapon", 
    duration : "1 rnd", 
    description : "Ranged weapon attack to 120 ft, target coated in frost until next turn, 1d6 dmg if rea used see book",
    descriptionFull : "As part of the action used to cast this spell, you make a ranged weapon attack with a bow, a crossbow, or a thrown weapon. The effect is limited to a range of 120 feet despite the weapon’s range, and the attack is made with disadvantage if the target is in the weapon’s long range. If the weapon attack hits, it deals damage as usual. In addition, the target becomes coated in thin frost until the start of your next turn. If the target uses its reaction before the start of your next turn, it immediately takes 1d6 cold damage and the spell ends. The spell’s damage, for both the ranged attack and the cold damage, increases by 1d6 when you reach 5th level (+1d6 and 2d6), 11th level (+2d6 and 3d6), and 17th level (+3d6 and 4d6).",
};

SpellsList["bless the dead"] = {
    name : "Bless the Dead",
    classes : ["druid", "cleric", "warlock", "wizard"],   
    source : ["DM1", 157],
    level : 0,
    school : "Abjur", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Wis", 
    description : "Bless a deceased creature, let it to cross to realm of the dead. Cannot turn undead.",
    descriptionFull : "You grant a blessing to one deceased creature, enabling it to cross over to the realm of the dead in peace. A creature that benefits from bless the dead can’t become undead. The spell has no effect on living creatures or the undead.",
};

SpellsList["blood offering"] = {
    name : "Blood Offering",
    classes : ["druid", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 159],
    level : 3,
    school : "Necro", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Instantaneous", 
    description : "Touch a fresh corpse you have damaged before it died, regain 1d4 x CR rating (min 1d4) HP ",
    descriptionFull : "You touch the corpse of a creature that isn’t undead or a construct and consume its life force. You must have dealt damage to the creature before it died, and it must have been dead for no more than 1 hour. You regain a number of hit points equal to 1d4 × the creature’s challenge rating (minimum of 1d4). The creature can be restored to life only by means of a true resurrection or a wish spell.",
};

SpellsList["bloodhound"] = {
    name : "Bloodhound",
    classes : ["druid", "ranger", "sorcerer", "wizard"],   
    source : ["DM1", 161],
    level : 1,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "A drop of ammonia", 
    duration : "8 h", 
    description : "1 crea gains enhanced smell, adv on wis perception checks using smell and surv checks for tracking",
    descriptionFull : "You touch a willing creature to grant it an enhanced sense of smell. For the duration, that creature has advantage on Wisdom (Perception) checks that rely on smell and on Wisdom (Survival) checks to follow tracks." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you also grant the target blindsight out to a range of 30 feet for the duration.",
};

SpellsList["bloody smite"] = {
    name : "Bloody Smite",
    classes : ["druid", "cleric", "ranger", "wizard"],   
    source : ["DM1", 161],
    level : 1,
    school : "Necro", 
    time : "1 bns", 
    range : "Self", 
    components : "V", 
    duration : "Conc, 1 min", 
    save : "Con", 
    description : "On next melee wpn attk, deal extra 1d6 necrotic dmg, save on each turn or 1d6 dmg and can't cast",
    descriptionFull : "The next time during the spell’s duration that you hit a creature with a melee weapon attack, your weapon pulses with a dull red light, and the attack deals an extra 1d6 necrotic damage to the target. Until the spell ends, the target must make a Constitution saving throw at the start of each of its turns. On a failed save, it takes 1d6 necrotic damage, it bleeds profusely from the mouth, and it can’t speak intelligibly or cast spells that have a verbal component. On a successful save, the spell ends. If the target or an ally within 5 feet of it uses an action to tend the wound and makes a successful Wisdom (Medicine) check against your spell save DC, or if the target receives magical healing, the spell ends.", 
};

SpellsList["bones of stone"] = {
    name : "Bones of Stone",
    classes : ["druid", "cleric", "ranger"],   
    source : ["DM1", 162],
    level : 3,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "A pebble and a sliver of bone", 
    duration : "Conc, 1 min", 
    description : "1 crea gain resistance to slash/bludg dmg, adv on str checks against effects that would move char",
    descriptionFull : "The bones of a creature you touch gain the strength and density of stone. Until the spell ends, the target has resistance to slashing damage and bludgeoning damage, and it gains advantage on Strength checks against effects that would move the target against its will.",
};

SpellsList["boulder toss"] = {
    name : "Boulder Toss",
    classes : ["druid"],   
    source : ["DM1", 163],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "Self", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    save : "Str", 
    description : "Str considered to be 19 for hauling obj, range of 60/240 ft, 2d10 bludg dmg on hit, save or prone",
    descriptionFull : "You draw the power of the mountains into you, gaining a surge of strength that allows you to take an action to hurl a rock (or similar object) as a giant does. Your Strength is considered to be 19 for the purpose of determining damage from objects that you hurl. Your hurled rock has a range of 60/240 feet and deals 2d10 bludgeoning damage on a hit. If the target is a creature, it must succeed on a Strength check against your spell save DC or be knocked prone." + AtHigherLevels + "If you cast this spell using a spell slot of 4th or 5th level, your Strength is considered to be 21, and the bludgeoning damage increases to 3d10. If you cast this spell using a spell slot of 6th level or higher, your Strength is considered to be 23, and the bludgeoning damage increases to 4d10.",
	descriptionCantripDie : "1 creature save or `CD`d12 Poison dmg",
};

SpellsList["brawn boost"] = {
    name : "Brawn Boost",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 164],
    level : 0,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    description : "1 crea add 1d6 to str check of their check, can roll before or after check",
    descriptionFull : "You touch a willing creature. Once before the spell ends, the target can roll a d6 and add the result to one Strength check of its choice. It can roll the die before or after making the check. The spell then ends.",
};

SpellsList["breathtaking wind"] = {
    name : "Breathtaking Wind",
    classes : ["druid", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 164],
    level : 1,
    school : "Evoc", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    save : "Con", 
    description : "Blast of winter air at 1 crea, must save or unable to speak or cast spells",
    descriptionFull : "You target a creature with a blast of wintry air. That creature must make a successful Constitution saving throw or become unable to speak or cast spells with a vocal component for the duration of the spell.",
};

SpellsList["breeze compass"] = {
    name : "Breeze compass",
    classes : ["druid", "wizard"],   
    source : ["DM1", 164],
    level : 3,
    school : "Div", 
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "A magnetized needle", 
    duration : "Conc, 1 h", 
    description : "Breeze leads you to location you imagine, requires regular arcana checks, see book",
    descriptionFull : "When you cast breeze compass, you must clearly imagine or mentally describe a location. It doesn’t need to be a location you’ve been to as long as you know it exists on the Material Plane. Within moments, a gentle breeze arises and blows along the most efficient path toward that destination. Only you can sense this breeze, and whenever it brings you to a decision point (a fork in a passageway, for example), you must make a successful DC 8 Intelligence (Arcana) check to deduce which way the breeze indicates you should go. On a failed check, the spell ends. The breeze guides you around cliffs, lava pools, and other natural obstacles, but it doesn’t avoid enemies or hostile creatures.",
};

SpellsList["brittling"] = {
    name : "Brittling",
    classes : ["druid", "cleric", "wizard"],   
    source : ["DM1", 164],
    level : 4,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "An icicle", 
    duration : "Instantaneous", 
    description : "Metal or stone object becomes brital, HP reduced and gain adv on str checks to break object",
    descriptionFull : "This spell uses biting cold to make a metal or stone object you touch become brittle and more easily shattered. The object’s hit points are reduced by a number equal to your level as a spellcaster, and Strength checks to shatter or break the object are made with advantage if they occur within 1 minute of the spell’s casting. If the object isn’t shattered during this time, it reverts to the state it was in before the spell was cast.",
};

SpellsList["carmellovoltas irksome preserves"] = {
    name : "Carmello-Volta’s irksome preserves",
	nameShort : "C.V. irksome preserves",
    classes : ["druid"],   
    source : ["DM1", 165],
    level : 2,
    school : "Conj", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S,M", 
    compMaterial : "a small berry or a piece of fruit", 
    duration : "Conc, 1 min", 
    save : "Dex", 
    description : "Jam oozes from mechanical device, Constructs save or disadv on attks/checks",
    descriptionFull : "At your command, delicious fruit jam oozes from a small mechanical device (such as a crossbow trigger, a lock, or a clockwork toy), rendering the device inoperable until the spell ends, and the device is cleaned with a damp cloth. Cleaning away the jam takes an action, but doing so has no effect until the spell ends. One serving of the jam can be collected in a suitable container. If it’s eaten (as a bonus action) within 24 hours, the jam restores 1d4 hit points. The jam’s flavor is determined by the material component."  + "\n   " + "The spell can affect constructs, with two limitations. First, the target creature negates the effect with a successful Dexterity saving throw. Second, unless the construct is Tiny, only one component (an eye, a knee, an elbow, and so forth) can be disabled. The affected construct has disadvantage on attack rolls and ability checks that depend on the disabled component until the spell ends and the jam is removed.",
};

SpellsList["caustic blood"] = {
    name : "Caustic blood",
    classes : ["druid", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 166],
    level : 2,
    school : "Trans",
    time : "1 rea", 
	timeFull : "1 reaction, which you take when an enemy’s attack deals piercing or slashing damage to you", 
    range : "S:30-ft rad", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Dex",
    description : "Blood becomes caustic, on pierce/slash dmg, 3 crea save or take 1d10 acid damage.",
    descriptionFull : "Your blood becomes caustic when exposed to the air. When you take piercing or slashing damage, you can use your reaction to select up to three creatures within 30 feet of you. Each target takes 1d10 acid damage unless it makes a successful Dexterity saving throw." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the number of targets increases by one for each slot level above 2nd, to a maximum of six targets.",
};

SpellsList["caustic touch"] = {
    name : "Caustic touch",
    classes : ["druid"],   
    source : ["DM1", 166],
    level : 0,
    school : "Evoc", 
    time : "1 a", 
    range : "touch", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "Hand sweats caustic slime, melee spell attk, 1 creature save or disadv on conc, 1d8 acid dmg",
    descriptionFull : "Your hand sweats profusely and becomes coated in a film of caustic slime. Make a melee spell attack against a creature you touch. On a hit, the target takes 1d8 acid damage. If the target was concentrating on a spell, it has disadvantage on its Constitution saving throw to maintain concentration. This spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
	descriptionCantripDie : "Hand sweats caustic slime, melee spell attk, 1 creature save or disadv on conc, `CD`d8 acid dmg",
};

SpellsList["clash of glaciers"] = {
    name : "Clash of glaciers",
    classes : ["druid", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 171],
    level : 5,
    school : "Evoc", 
    time : "1 a", 
    range : "S:100ft line", 
    components : "V,S,M", 
    compMaterial : "a piece of cracked glass", 
    duration : "Instantaneous", 
    save : "Dex", 
    description : "Conjure line of icy boulders, crush anything beneath them, dex save or 5d6 bludg dmg",
    descriptionFull : "You conjure several icy boulders in a line 100 feet long, which crush anything beneath them. Each creature in the area must make a Dexterity saving throw, taking 5d6 bludgeoning damage and 5d6 cold damage on a failed save or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d6 for each slot level above 5th. You decide whether each extra die deals bludgeoning or cold damage.", 
};

SpellsList["clumsiness"] = {
    name : "Clumsiness",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 173],
    level : 0,
    school : "Necro", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S", 
    duration : "1 min", 
    save : "Con", 
    description : "Make 1 crea less dexterous, save or subtract 1d6 from next dex check",
    descriptionFull : "You temporarily make a creature within range less dexterous. If the target makes a successful Constitution saving throw, the spell is ineffective. On a failed save, the next time the creature makes a Dexterity check before the spell ends, roll a d6 and subtract the result from the roll. The spell then ends.",
};

 
SpellsList["comprehend wild shape"] = {
    name : "Comprehend wild shape",
    classes : ["druid"],   
    source : ["DM1", 174],
    level : 2,
    school : "Div", 
    time : "1 a",  
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "two or more matching carved totems", 
    duration : "1 h", 
    description : "Communicate while in beast form with the recipient of the carved totem",
    descriptionFull : "Give one of the carved totems to an ally while keeping the other yourself. For the duration of the spell, you and whoever holds the other totem can communicate while either of you is in a beast shape. This isn’t a telepathic link; you simply understand each other’s verbal communication, similar to the effect of a speak with animals spell. This effect doesn’t allow a druid in beast shape to cast spells." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can increase the number of target creatures by two for each slot level above 2nd. Each creature must receive a matching carved totem.",
};

SpellsList["conjure fey hound"] = {
    name : "Conjure fey hound",
    classes : ["druid", "ranger", "sorcerer", "wizard"],   
    source : ["DM1", 174],
    level : 5,
    school : "Conj", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "a wooden or metal whistle", 
    duration : "Conc, 1 h", 
    description : "Summon a Hound of the Night (see Tome of Beasts), can bite, teleport, frost breath",
    descriptionFull : "You summon a fey hound to fight by your side. A hound of the night (see Tome of Beasts) appears in an unoccupied space that you can see within range. The hound disappears when it drops to 0 hit points or when the spell ends. The summoned hound is friendly to you and your companions. Roll initiative for the summoned hound, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don’t issue any commands to the hound, it stands by your side and attacks nearby creatures that are hostile to you but otherwise takes no actions." + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, you summon two hounds. When you cast this spell using a 9th-level spell slot, you summon three hounds.",
};

SpellsList["conjure forest defender"] = {
    name : "Conjure Forest Defender",
    classes : ["druid"],   
    source : ["DM1", 174],
    level : 6,
    school : "Conj", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S,M", 
    compMaterial : "One humanoid body which the spell consumes", 
    duration : "Until destroyed", 
    save : "Wis", 
    description : "Bring a body to life as a forest defender, obeys your commands.",
    descriptionFull : "When you cast this spell in a forest, you fasten sticks and twigs around a body. The body comes to life as a forest defender (see below). The forest defender is friendly to you and your companions. Roll initiative for the forest defender, which has its own turns. It obeys any verbal or mental commands that you issue to it (no action required by you), as long as you remain within its line of sight. If you don’t issue any commands to the forest defender, if you are out of its line of sight, or if you are unconscious, it defends itself from hostile creatures but otherwise takes no actions. A body sacrificed to form the forest defender is permanently destroyed and can be restored to life only by means of a true resurrection or a wish spell. You can have only one forest defender under your control at a time. If you cast this spell again, the previous forest defender crumbles to dust." + AtHigherLevels + "When you cast this spell using a 9th‑level spell slot, you summon two forest defenders instead of one, and you can control up to two forest defenders at a time.", 
};

SpellsList["conjure mock animals"] = {
    name : "Conjure Mock Animals",
    classes : ["druid", "ranger"],   
    source : ["DM1", 176],
    level : 1,
    school : "Conj", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S", 
    duration : "Conc, 10 min", 
    save : "Dex", 
    description : "See Cjr Animals, have 1HP/1dmg, at 0 HP explode in flash, 2d4 rad dmg + save or blind within 5 ft.",
    descriptionFull : "You summon fey spirits that take the outward appearance of animals, but merely to serve as a distraction and trap for the unwary. The spell functions as conjure animals, but each mock animal has only 1 hit point and deals only 1 damage on a hit regardless of its appearance. When a mock animal is dropped to 0 hit points, it explodes in a flash of light, dealing 2d4 radiant damage to all creatures within 5 feet of it. Each creature that takes damage must make a Dexterity saving throw. On a failed save, the creature is blinded for 1 round.",
};

SpellsList["conjure scarab swarm"] = {
    name : "Conjure scarab swarm",
    classes : ["druid", "cleric", "wizard"],   
    source : ["DM1", 176],
    level : 2,
    school : "Conj", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "a beetle carapace", 
    duration : "Conc, 10 min", 
    description : "Summon two swarms of beetles, each does up to 4d4 piercing dmg",
    descriptionFull : "You summon swarms of scarab beetles to attack your foes. Two swarms of insects (beetles) appear in unoccupied spaces that you can see within range. Each swarm disappears when it drops to 0 hit points or when the spell ends. The swarms are friendly to you and your allies. Make one initiative roll for both swarms, which have their own turns. They obey verbal commands that you issue to them (no action required by you). If you don’t issue any commands to them, they defend themselves from hostile creatures but otherwise take no actions.",
};

SpellsList["conjure undead"] = {
    name : "Conjure undead",
    classes : ["druid", "cleric", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 177],
    level : 3,
    school : "Conj",
    time : "1 min", 
    range : "30 ft", 
    components : "V,S,M", 
    compMaterial : "a humanoid skull", 
    duration : "Conc, 1 h", 
    save : "Wis", 
    description : "Summon a shadow to do your bidding, has its own initiative, obeys commands",
    descriptionFull : "You summon a shadow to do your bidding. The creature appears in an unoccupied space that you can see within range. The creature is friendly to you and your allies for the duration. Roll initiative for the shadow, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don’t issue any commands to the creature, it defends itself from hostile creatures but otherwise takes no actions. The shadow disappears when the spell ends." + AtHigherLevels + "When you cast this spell using a 4thlevel spell slot, you can choose to summon a wight or a shadow. When you cast this spell with a spell slot of 5th level or higher, you can choose to summon a ghost, a shadow, or a wight.",
};


SpellsList["consult the storm"] = {
    name : "Consult the Storm",
    classes : ["druid", "cleric"],   
    source : ["DM1", 177],
    level : 4,
    school : "Div", 
    time : "1 a", 
    range : "90 ft", 
    components : "V", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "Ask 15 word question, get a truthful answer heard 600ft, 7d6 thunder dmg within 15 ft, save halves",
    descriptionFull : "You ask a question of an entity connected to storms, such as an elemental, a deity, or a primal spirit, and the entity replies with destructive fury. As part of the casting of the spell, you must speak a question consisting of fifteen words or fewer. Choose a point within range. A short, truthful answer to your question booms from that point. It can be heard clearly by any creature within 600 feet. Each creature within 15 feet of the point takes 7d6 thunder damage, or half as much damage with a successful Constitution saving throw." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d6 for each slot level above 4th.",
};

SpellsList["control ice"] = {
    name : "Control ice",
    classes : ["druid", "sorcerer", "wizard"],   
    source : ["DM1", 177],
    level : 5,
    school : "Trans",
    time : "1 a", 
    range : "300 ft", 
    components : "V,S,M", 
    compMaterial : "a cube of white wax", 
    duration : "Conc, 1 min", 
    save : "Dex", 
    description : "Control ice inside area 100ft cube, crack, reshape, thicken/thin ice, see b",
    descriptionFull : "Until the spell ends, you control any ice inside an area you choose within range that can be as large as a cube 100 feet on a side. You choose one of the following three effects when you cast this spell. As an action on each of your turns thereafter, you can use the same effect or choose a different one. Any alterations made to the ice remain after the spell ends, but can be altered by other effects (temperature, seismic action, or another application of this spell, for example). " + "\n   " + "Crack. You cause ice in the area to crack and splinter. On level terrain, this effect turns the ice into difficult terrain, possibly producing other hazards, depending on the terrain and the nature of the ice—ice over a deep chasm might open onto a pit, while ice over water can break into individual floes, for example. Using this effect on cliffs, walls, or ceilings made of ice can cause collapse, dealing 4d10 bludgeoning damage to creatures in the area below the collapse, or half the damage with a successful Dexterity saving throw. After such a collapse, the area where the fallen ice collects becomes difficult terrain. " + "\n   " + "Reshape. You cause ice in a portion of the area to rapidly melt, move, and re-form into whatever shape you command. You can block holes, open tunnels, form bridges, remove difficult terrain, or otherwise alter the form of the ice in the area. You can cause ice to become slippery, making it difficult terrain, or dry to remove difficult terrain. You can fill a hole up to a 20-foot cube or create 20 feet (up to 20 feet wide) of a bridge across a chasm or raise a 20-foot-tall pillar of ice (up to 20 feet square). You can continue this action on consecutive rounds to increase the size of the affected area while you maintain concentration on the spell. " + "\n   " + "Thicken/Thin. You cause existing ice to increase or decrease in thickness, up to 1 inch per round over some or all of the total area, either making the surface stronger or creating thin ice that is hazardous to walk on.",
};

SpellsList["creeping ice"] = {
    name : "Creeping ice",
    classes : ["druid", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 178],
    level : 2,
    school : "Conj", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    save : "Str", 
    description : "5ft square of ice, encases enemy within, 2d6 cold dmg at start of turn, can be broken out",
    descriptionFull : "You create a sheet of ice that covers a 5-foot square within range and lasts for the spell’s duration. The iced area is difficult terrain. A creature in the area where you cast the spell must make a successful Strength saving throw or be restrained by ice that rapidly encases it. A creature restrained by the ice takes 2d6 cold damage at the start of its turn. A restrained creature can use an action to make a Strength check against your spell save DC, freeing itself on a success, but it has disadvantage on this check. The creature can also be freed (and the spell ended) by dealing at least 20 damage to the ice. The restrained creature takes half the damage from any attacks against the ice." + AtHigherLevels + "When you cast this spell using a spell slot of 4th to 6th level, the area increases to a 10-foot square, the ice deals 4d6 cold damage, and 40 damage is needed to melt each 5-foot square. When you cast this spell using a spell slot of 7th level or higher, the area increases to a 20-foot square, the ice deals 6d6 cold damage, and 60 damage is needed to melt each 5-foot square.",
};

SpellsList["crushing trample"] = {
    name : "Crushing trample",
    classes : ["druid", "cleric", "ranger", "sorcerer"],   
    source : ["DM1", 179],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "Self", 
    components : "V,S", 
    duration : "1 rd", 
    save : "Str", 
    description : "move twice speed in straight line, trampling enemies of <= size, save or 4d6 bludg dmg + prone",
    descriptionFull : "Upon casting this spell, you are filled with a desire to overrun your foes. You immediately move up to twice your speed in a straight line, trampling every foe in your path that is of your size category or smaller. If you try to move through the space of an enemy whose size is larger than yours, your movement (and the spell) ends. Each enemy whose space you move through must make a successful Strength saving throw or be knocked prone and take 4d6 bludgeoning damage. If you have hooves, add your Strength modifier (minimum of +1) to the damage. You move through the spaces of foes whether or not they succeed on their Strength saving throws. You do not provoke opportunity attacks while moving under the effect of crushing trample.",
};

SpellsList["cure beast"] = {
    name : "Cure beast",
    classes : ["druid", "ranger"],   
    source : ["DM1", 180],
    level : 1,
    school : "Evoc", 
    time : "1 bns", 
    range : "60 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    description : "1 crea save or ",
    descriptionFull : "A beast of your choice that you can see within range regains a number of hit points equal to 1d6 + your spellcasting modifier." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d6 for each slot level above 1st.",
};

SpellsList["curse of dust"] = {
    name : "Curse of dust",
    classes : ["druid", "cleric", "warlock"],   
    source : ["DM1", 1],
    level : 7,
    school : "Necro", 
    time : "10 m", 
    range : "500 ft", 
    components : "V,S,M", 
    compMaterial : "a piece of spoiled food", 
    duration : "5 days", 
    save : "Con", 
    description : "Curse familiar creature, unsatiated by food, constant hunger, save every 24h or gain exhaustion",
    descriptionFull : "You cast a curse on a creature within range that you’re familiar with, causing it to be unsatiated by food no matter how much it eats. This effect isn’t merely an issue of perception; the target physically can’t draw sustenance from food. Within minutes after the spell is cast, the target feels constant hunger no matter how much food it consumes. The target must make a Constitution saving throw 24 hours after the spell is cast and every 24 hours thereafter. On a failed save, the target gains one level of exhaustion. The effect ends when the duration expires or when the target makes two consecutive successful saves.",
};

SpellsList["cynophobia"] = {
    name : "Cynophobia",
    classes : ["druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 182],
    level : 3,
    school : "Ench", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S,M", 
    compMaterial : "a dog's tooth", 
    duration : "8 h", 
    save : "Wis", 
    description : "1 crea save or fear of canids, become frightened, disadv on checks and attk rolls while canids within 10ft",
    descriptionFull : "Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or develop an overriding fear of canids, such as dogs, wolves, foxes, and worgs. For the duration, the first time the target sees a canid, the target must succeed on a Wisdom saving throw or become frightened of that canid until the end of its next turn. Each time the target sees a different canid, it must make the saving throw. In addition, the target has disadvantage on ability checks and attack rolls while a canid is within 10 feet of it." + AtHigherLevels + "When you cast this spell using a 5th‑level spell slot, the duration is 24 hours. When you use a 7th-level spell slot, the duration is 1 month. When you use a spell slot of 8th or 9th level, the spell lasts until it is dispelled.", 
};

SpellsList["dark heraldry"] = {
    name : "Dark Heraldry",
    classes : ["druid", "warlock"],   
    source : ["DM1", 182],
    level : 3,
    school : "Necro", 
    time : "1 a", 
    range : "60 ft", 
    components : "V", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "Creatures take 5d8 dmg and become frightened, save to take half damage and not frightened. See b",
    descriptionFull : "Dark entities herald your entry into combat, instilling a dread in your enemies. Designate a number of creatures up to your spellcasting ability modifier (minimum of one) that you can see within range and that have an alignment different from yours. Each of those creatures takes 5d8 psychic damage and becomes frightened of you; a creature that makes a successful Wisdom saving throw takes half as much damage and is not frightened. A creature frightened in this way repeats the saving throw at the end of each of its turns, ending the effect on itself on a success. The creature makes this saving throw with disadvantage if you can see it." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.",
	descriptionCantripDie : "1 creature save or `CD`d12 Poison dmg",
};

SpellsList["decay"] = {
    name : "Decay",
    classes : ["druid", "cleric", "warlock", "wizard"],   
    source : ["DM1", 184],
    level : 0,
    school : "Necro", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "a handful of ash", 
    duration : "Instantaneous", 
    description : "Melee spell attk, 1d10 necro dmg. Tiny or small nonmagical objects take max dmg",
    descriptionFull : "Make a melee spell attack against a creature you touch. On a hit, the target takes 1d10 necrotic damage. If the target is a Tiny or Small nonmagical object that isn’t being worn or carried by a creature, it automatically takes maximum damage from the spell. This spell’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
	descriptionCantripDie : "Melee spell attk, `CD`d10 necro dmg. Tiny or small nonmagical objects take max dmg",
};

SpellsList["decelerate"] = {
    name : "Decelerate",
    classes : ["druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 184],
    level : 2,
    school : "Trans", 
    time : "1 a",  
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "a toy top", 
    duration : "1 min", 
    save : "Wis", 
    description : "Slow crea speed to half movement, repeat save each turn, speed continues to halve",
    descriptionFull : "You slow the flow of time around a creature within range that you can see. The creature must make a successful Wisdom saving throw, or its walking speed is halved (round up to the nearest 5-foot increment). The creature can repeat the saving throw at the end of each of its turns, ending the effect on a success. Until the spell ends, on a failed save the target’s speed is halved again at the start of each of your turns. For example, if a creature with a speed of 30 feet fails its initial saving throw, its speed drops to 15 feet. At the start of your next turn, the creature’s speed drops to 10 feet on a failed save, then to 5 feet on the following round on another failed save. Decelerate can’t reduce a creature’s speed to less than 5 feet." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can affect an additional creature for each slot level above 2nd.",
};

SpellsList["deep breath"] = {
    name : "Deep breath",
    classes : ["druid", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 185],
    level : 1,
    school : "Trans", 
    time : "1 a",  
    range : "Touch", 
    components : "V,S", 
    duration : "2 h", 
    description : "Breathe normally in thin atmosphere, duration split between all crea touched",
    descriptionFull : "The recipient of this spell can breathe and function normally in thin atmosphere, suffering no ill effect at altitudes of up to 20,000 feet. If more than one creature is touched during the casting, the duration is divided evenly among all creatures touched." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the duration increases by 2 hours for each slot level above 1st.",
};

SpellsList["deep focus"] = {
    name : "Deep focus",
    classes : ["druid", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 184],
    level : 3,
    school : "Evoc", 
    time : "1 a", 
    range : "Self", 
    components : "V,S", 
    duration : "1 min", 
	ritual : true, 
    description : "Next spell level 4 or lower cast within 1 min req conc will last without need for conc. ",
    descriptionFull : "You tap into ambient magical energy to stabilize and maintain a spell. The next spell you cast that normally requires concentration will last its full normal duration without the need for concentration, as long as it is cast within 1 minute of your casting of this spell, and the spell to be affected is of 4th level or lower. At the end of the duration, or if 1 minute goes by without your casting a spell that requires concentration, the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can affect any spell you can cast that requires concentration and is up to one level higher than the spell slot you used to cast deep focus.",
};

SpellsList["defensive quills"] = {
    name : "Defensive quills",
    classes : ["druid", "ranger"],   
    source : ["DM1", 184],
    level : 3,
    school : "Trans", 
    time : "1 a",  
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "a porcupine’s quill)", 
    duration : "10 min", 
    description : "Quills grow on skin, +1 to AC, light attks take 2d8 piercing dmg, grappling/swallowing you takes dmg",
    descriptionFull : "Sharp quills grow from your skin. You can end the spell early by using an action to dismiss it. You gain a +1 bonus to AC for the duration. If a creature hits you with an attack made by a light weapon, a natural attack, or an unarmed strike, it takes 2d8 piercing damage from your quills. A creature that grapples you takes damage from the quills at the beginning of each of its turns in which it is grappling you. If a creature swallows you, it takes damage from the quills each round at the start of your turn.",
};

SpellsList["desiccating breath"] = {
    name : "Desiccating breath",
    classes : ["druid", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 186],
    level : 4,
    school : "Evoc", 
    time : "1 a", 
    range : "S:15-ft cone", 
    components : "V,S,M", 
    compMaterial : "a clump of dried clay", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "Draw moisture from the air, save or 4d10 necro dmg, increase to 6d10 if plants",
    descriptionFull : "You spew forth a cloud of black dust that draws all moisture from a 30-foot cone. Each animal in the cone takes 4d10 necrotic damage, or half as much damage if it makes a successful Constitution saving throw. The damage is 6d10 for plants and plant creatures, also halved on a successful Constitution saving throw.",
};

SpellsList["detect dragons"] = {
    name : "Detect dragons",
    classes : ["druid", "bard", "sorcerer", "wizard"],   
    source : ["DM1", 186],
    level : 2,
    school : "Div", 
    time : "1 a", 
    range : "Self", 
    components : "V,S", 
    duration : "Conc, 10 min", 
    description : "Detect presence of dragons/draconic creatures in line of sight up to 120ft, arcana check to learn details,",
    descriptionFull : "You can detect the presence of dragons and other draconic creatures within your line of sight and 120 feet, regardless of disguises, illusions, and alteration magic such as polymorph. The information you uncover depends on the number of consecutive rounds you spend an action studying a subject or area. On the first round of examination, you detect whether any draconic creatures are present, but not their number, location, identity, or type. On the second round, you learn the number of such creatures as well as the general condition of the most powerful one. On the third and subsequent rounds, you make a DC 15 Intelligence (Arcana) check; if it succeeds, you learn the age, type, and location of one draconic creature. Note that the spell provides no information on the turn in which it is cast, unless you have the means to take a second action that turn.",
};

SpellsList["disruptive aura"] = {
    name : "Disruptive aura",
    classes : ["druid", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 187],
    level : 8,
    school : "Evoc", 
    time : "1 a", 
    range : "150 ft", 
    components : "V,S",  
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "Aura outlines crea in 100ft cube, invis/hidden crea outlined, spells/magic items req wis save",
    descriptionFull : "A warping, prismatic aura surrounds and outlines each creature inside a 10-foot cube within range. The aura sheds dim light out to 10 feet, and the locations of hidden or invisible creatures are outlined. If a creature in the area tries to cast a spell or use a magic item, it must make a Wisdom saving throw. On a successful save, the spell or item functions normally. On a failed save, the effect of the spell or the item is suppressed for the duration of the aura. Time spent suppressed counts against the duration of the spell’s or item’s effect." + AtHigherLevels + "When you cast this spell using a 9th‑level spell slot, the cube is 20 feet on a side.",
};

SpellsList["distraction cascade"] = {
    name : "Distraction cascade",
    classes : ["druid", "bard", "cleric", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 187],
    level : 2,
    school : "Div", 
    time : "1 a", 
	timeFull : "1 reaction, which you take when an ally declares an attack against an enemy you can see", 
    range : "30 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Cha", 
    description : "Throw foe off balance,attacks against crea made with advantage until end of turn",
    descriptionFull : "With a flash of foresight, you throw a foe off balance. Choose one creature you can see that your ally has just declared as the target of an attack. Unless that creature makes a successful Charisma saving throw, attacks against it are made with advantage until the end of this turn.",
};

SpellsList["draconic smite"] = {
    name : "Draconic smite",
    classes : ["druid", "paladin"],   
    source : ["DM1", 188],
    level : 1,
    school : "Evoc", 
    time : "1 bns", 
    range : "Self", 
    components : "V", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "Next melee weapon attack deals extra 1d6 cold dmg, up to 4 crea within 30ft con save or 1d6 cold dmg",
    descriptionFull : "The next time you hit a creature with a melee weapon attack during the spell’s duration, your weapon takes on the form of a silver dragon’s head. Your attack deals an extra 1d6 cold damage, and up to four other creatures of your choosing within 30 feet of the attack’s target must each make a successful Constitution saving throw or take 1d6 cold damage." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the extra cold damage and the cold damage dealt to the secondary creatures increases by 1d6 for each slot level above 1st.",
};

SpellsList["drown"] = {
    name : "Drown",
    classes : ["druid", "sorcerer", "wizard"],   
    source : ["DM1", 189],
    level : 3,
    school : "Evoc", 
    time : "1 a", 
    range : "90 ft", 
    components : "V,S,M", 
    compMaterial : "a small piece of flotsam or seaweed", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "Fill a crea lungs with seawater, save or suffocate, cant speak, survive #rounds = con mod",
    descriptionFull : "You cause a creature’s lungs to fill with seawater. Unless the target makes a successful Constitution saving throw, it immediately begins suffocating. A suffocating creature can’t speak or perform verbal spell components. It can hold its breath, and thereafter can survive for a number of rounds equal to its Constitution modifier (minimum of 1 round), after which it drops to 0 hit points and is dying. Huge or larger creatures are unaffected, as are creatures that can breathe water or that don’t require air. A suffocating (not dying) creature can repeat the saving throw at the end of each of its turns, ending the effect on a success." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.",
};

SpellsList["dryads kiss"] = {
    name : "Dryad’s kiss",
    classes : ["druid"],   
    source : ["DM1", 189],
    level : 3,
    school : "Conj", 
    time : "1 a", 
    range : "120 ft", 
    components : "V,M", 
    compMaterial : "a flower petal or a drop of blood)", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "Cover crea in buds, 2d8 necro dmg, additional damage from other sources extra 1d8 dmg see b",
    descriptionFull : "You perform an ancient incantation that summons flora from the fey realm. A creature you can see within range is covered with small, purple buds and takes 3d8 necrotic damage; a successful Wisdom saving throw negates the damage but doesn’t prevent the plant growth. The buds can be removed by the target or an ally of the target within 5 feet who uses an action to make a successful Intelligence (Nature) or Wisdom (Medicine) check against your spell save DC, or by a greater restoration or blight spell. While the buds remain, whenever the target takes damage from a source other than this spell, one bud blossoms into a purple and yellow flower that deals an extra 1d8 necrotic damage to the target. Once four blossoms have formed in this way, the buds can no longer be removed by nonmagical means. The buds and blossoms wilt and fall away when the spell ends, provided the creature is still alive. " + "\n   " + "If a creature affected by this spell dies, sweet-smelling blossoms quickly cover its body. The flowers wilt and die after one month." + AtHigherLevels + "If this spell is cast using a spell slot of 5th level or higher, the number of targets increases by one for every two slot levels above 3rd.",
};

SpellsList["ears of the bat"] = {
    name : "Ears of the bat",
    classes : ["druid", "warlock"],   
    source : ["DM1", 190],
    level : 3,
    school : "Trans",
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "a bit of bat fur", 
    duration : "Conc, 1 h", 
    description : "Gain keen hearing + echolocation, adv on wis(percp) chks, blindsight 60ft, disadv on thunder dmg saves",
    descriptionFull : "You gain the keen hearing and echolocation abilities of a bat. For the duration of the spell, you have advantage on Wisdom (Perception) checks that rely on hearing, and you gain blindsight out to a range of 60 feet." + "\n   " + "You cannot use the blindsight ability while deafened. While the spell is in effect, you have disadvantage on saving throws against spells and effects that deal thunder damage.",
};

SpellsList["earth wave"] = {
    name : "Earth Wave",
    classes : ["druid"],   
    source : ["DM1", 190],
    level : 5,
    school : "Trans", 
    time : "1 a", 
    range : "S:15", 
    components : "V,S", 
    duration : "Conc, 8 h", 
    save : "Dex", 
    description : "Command earth, carries you and companions, bludgeons/buries enemies and small structures, see b",
    descriptionFull : "You command the earth beneath your feet to rise and surge forward, carrying you and your companions where you bid while rolling over enemies and obstacles in your path. The earth rises in a 15-foot-high, 15-foot‑radius swell that can carry you and up to eight other Medium creatures, propelling you in whatever direction you choose at a rate of up to 90 feet per round. You use a bonus action to direct the wave each round. Your movement is limited to the surface of the wave to maintain control. If you move off the wave, it continues on the same course you directed it, then the spell ends at the beginning of your next turn. Natural obstacles do not impede the spell’s movement; trees, rocks, and other natural obstacles simply rise up and around the swell and settle back into place behind it. The wave can travel up or down natural slopes with angles as great as 60 degrees. You can direct the wave to surge over man-made obstacles and creatures in its path. The swell washes over walls and other manufactured obstacles up to 15 feet high and 10 feet thick with no loss of movement, dealing 6d6 bludgeoning damage to an object as it passes. Resolve this damage against larger, rigid objects, such as walls, vehicles, or other similar structures; smaller or malleable objects such as unsecured ropes or cloth are simply buried by the swell’s passing. Larger objects are subject to the damage, but the wave cannot move over them unless the damage is enough to destroy the object. Creatures of Large size or smaller in the path of the wave take 6d6 bludgeoning damage and are buried. Buried creatures are considered restrained and must hold their breath or begin to suffocate. A creature in the path of the wave can make a Dexterity saving throw against your spell save DC. On a successful save, the creature takes half as much damage and avoids being buried. Each round, a buried creature can use an action to make a Strength check against your spell save DC to dig itself out. You can cast earth wave only when standing on natural earth or stone. The spell can be cast underground, but not inside buildings unless they have no floor.",
};

SpellsList["eidetic memory"] = {
    name : "Eidetic memory",
    classes : ["druid", "bard", "cleric", "wizard"],   
    source : ["DM1", 191],
    level : 5,
    school : "Trans", 
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "a string tied in a knot", 
    duration : "Conc, 1 h", 
    description : "Recall any information you ever read/heard, +10 bns on intelligence checks",
    descriptionFull : "When you cast this spell, you can recall any piece of information you’ve ever read or heard in the past. This ability translates into a +10 bonus on Intelligence checks for the duration of the spell.",

};

SpellsList["elemental horns"] = {
    name : "Elemental horns",
    classes : ["druid", "ranger", "sorcerer", "wizard"],   
    source : ["DM1", 192],
    level : 2,
    school : "Evoc",
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "a brass wand", 
    duration : "Conc, 1 min", 
    description : "Horned crea gains additional +3d6 elemental bonus acid/cold/fire/lightn/rad to gore attacks",
    descriptionFull : "The target of this spell must be a creature that has horns, or the spell fails. Elemental horns causes the touched creature’s horns to crackle with elemental energy. Select one of the following energy types when casting this spell: acid, cold, fire, lightning, or radiant. The creature’s gore attack deals 3d6 damage of the chosen type in addition to any other damage the attack normally deals. Although commonly seen among tieflings and minotaurs, this spell is rarely employed by other races." + "\n   " + "more text" + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 2d6 for each slot level above 2nd.",
};

SpellsList["energy absorption"] = {
    name : "Energy absorption",
    classes : ["druid", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 193],
    level : 5,
    school : "Abjur",
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "Crea gains resistance to acid/cold/fire/force/lightn/thdr dmg, if crea unwilling see b",
    descriptionFull : "A creature you touch has resistance to acid, cold, fire, force, lightning, and thunder damage until the spell ends." + "\n   " + "If the spell is used against an unwilling  creature, you must make a melee spell attack with a reach of 5 feet. If the attack hits, for the duration of the spell the affected creature must make a saving throw using its spellcasting ability whenever it casts a spell that deals one of the given damage types. On a failed save, the spell is not cast but its slot is expended; on a successful save, the spell is cast but its damage is halved before applying the effects of saving throws, resistance, and other factors.",
};

SpellsList["energy foreknowledge"] = {
    name : "Energy foreknowledge",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 193],
    level : 4,
    school : "Div",
    time : "1 rea", 
	timeFull : "1 reaction, which you take when you are the target of a spell that deals cold, fire, force, lightning, necrotic, psychic, radiant, or thunder damage", 
    range : "60 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    description : "Gain resistance to all energy types of the spell hitting you, until end of next turn",
    descriptionFull : "When you cast this spell, you gain resistance to every type of energy listed above that is dealt by the spell hitting you. This resistance lasts until the end of your next turn." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, you can include one additional ally in its effect for each slot level above 4th. Affected allies must be within 15 feet of you.",
};

SpellsList["exceptional wit"] = {
    name : "Exceptional wit",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 194],
    level : 0,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    description : " Willing crea you touch can add 1d6 to intelligence check of their choice",
    descriptionFull : "You touch a willing creature. Once before the spell ends, the target can roll a d6 and add the result to one Intelligence check of its choice. It can roll the die before or after making the check. The spell then ends.",
};

SpellsList["fault line"] = {
    name : "Fault line",
    classes : ["druid", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 195],
    level : 6,
    school : "Evoc", 
    time : "1 a", 
    range : "60 ft line", 
    components : "V,S", 
    duration : "Permanent", 
    save : "Wis", 
    description : "Ground thrusts up in 60x5ft line, diff terrain, crea in area 8d6 bludg dmg, save or knocked prone",
    descriptionFull : "The ground thrusts sharply upward along a 5-foot-wide, 60‑foot-long line that you designate. All spaces affected by the spell become difficult terrain. In addition, all creatures in the affected area are knocked prone and take 8d6 bludgeoning damage. Creatures that make a successful Dexterity saving throw take half as much damage and are not knocked prone. This spell doesn’t damage permanent structures.",
};

SpellsList["feather field"] = {
    name : "Feather field",
    classes : ["druid", "ranger", "warlock", "wizard"],   
    source : ["DM1", 195],
    level : 1,
    school : "Abjur", 
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "fletching from an arrow", 
    duration : "1 rd", 
    description : "Chaff barrier of feathers gives +5 to AC against ranged attacks by magic weapons",
    descriptionFull : "A magical barrier of chaff in the form of feathers appears and protects you. Until the start of your next turn, you have a +5 bonus to AC against ranged attacks by magic weapons." + AtHigherLevels + "When you cast feather field using a spell slot of 2nd level or higher, the duration is increased by 1 round for each slot level above 1st.",
};

SpellsList["feather travel"] = {
    name : "Feather travel",
    classes : ["druid", "wizard"],   
    source : ["DM1", 196],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,M", 
    compMaterial : "a feather", 
    duration : "Conc, 1 h", 
    description : "Targt transforms into feather, move in direction of wind, make small 5ft movements to aim per rd",
    descriptionFull : "The target of feather travel (along with its clothing and other gear) transforms into a feather and drifts on the wind. The drifting creature has a limited ability to control its travel. It can move only in the direction the wind is blowing and at the speed of the wind. It can, however, shift up, down, or sideways 5 feet per round as if caught by a gust, allowing the creature to aim for an open window or doorway, to avoid a flame, or to steer around an animal or another creature. When the spell ends, the feather settles gently to the ground and transforms back into the original creature." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, two additional creatures can be transformed per slot level above 2nd.",
};

SpellsList["fey crown"] = {
    name : "Fey Crown",
    classes : ["druid", "bard", "ranger", "warlock"],   
    source : ["DM1", 196],
    level : 5,
    school : "Abjur", 
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "five flowers of different colors", 
    duration : "1 h", 
    description : "crown of 5 flowers, adv on spell saves, immune to charm. As bns, choose crea to turn invisible see book",
    descriptionFull : "By channeling the ancient wards of the Seelie Court, you create a crown of five flowers on your head. While wearing this crown, you have advantage on saving throws against spells and other magical effects and are immune to being charmed. As a bonus action, you can choose a creature within 30 feet of you (including yourself). Until the end of its next turn, the chosen creature is invisible and has advantage on saving throws against spells and other magical effects. Each time a chosen creature becomes invisible, one of the blossoms in the crown closes. After the last of the blossoms closes, the spell ends at the start of your next turn and the crown disappears." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the crown can have one additional flower for each slot level above 5th. One additional flower is required as a material component for each additional flower in the crown.",
};

SpellsList["fire darts"] = {
    name : "Fire darts",
    classes : ["druid", "cleric", "wizard"],   
    source : ["DM1", 197],
    level : 2,
    school : "Evoc",
    time : "1 a", 
    range : "20 ft", 
    components : "V,S,M", 
    compMaterial : "fire the size of a small campfire or larger", 
    duration : "Instantaneous", 
    save : "Dex", 
    description : "3 darts of flamee shoot from fire to crea/s in 30ft, 4d6 fire dmg per dart",
    descriptionFull : "When this spell is cast on any fire that’s at least as large as a small campfire or cooking fire, three darts of flame shoot out from the fire toward creatures within 30 feet of the fire. Darts can be directed against the same or separate targets as the caster chooses. Each dart deals 4d6 fire damage, or half as much damage if its target makes a successful Dexterity saving throw." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
};

SpellsList["fire under the tongue"] = {
    name : "Fire under the tongue",
    classes : ["druid", "ranger", "warlock", "wizard"],   
    source : ["DM1", 197],
    level : 1,
    school : "Trans", 
    time : "1 a", 
    range : "5 ft", 
    components : "V,S", 
    duration : "24 h", 
    description : "Ingest nonmagical fire, stored harmlessly in mouth, spit it out as an action, 1d6/2d6 dmg sml/lrg fire.",
    descriptionFull : "You can ingest a nonmagical fire up to the size of a normal campfire that is within range. The fire is stored harmlessly in your mouth and dissipates without effect if it is not used before the spell ends. You can spit out the stored fire as an action. If you try to hit a particular target, then treat this as a ranged attack with a range of 5 feet. Campfire-sized flames deal 2d6 fire damage, while torch-sized flames deal 1d6 fire damage. Once you have spit it out, the fire goes out immediately unless it hits flammable material that can keep it fed.",
};

SpellsList["firewalk"] = {
    name : "Firewalk ",
    classes : ["druid", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 197],
    level : 6,
    school : "Trans",
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Conc, 10 min", 
    description : "Crea gains immunity to fire dmg, can walk on the top of flames as if they were solid.",
    descriptionFull : "The creature you cast firewalk on becomes immune to fire damage. In addition, that creature can walk along any burning surface, such as a burning wall or burning oil spread on water, as if it were solid and horizontal. Even if there is no other surface to walk on, the creature can walk along the tops of the flames." + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, two additional creatures can be affected for each slot level above 6th.",
};

SpellsList["flurry"] = {
    name : "Flurry",
    classes : ["druid", "cleric", "ranger", "warlock"],   
    source : ["DM1", 199],
    level : 1,
    school : "Trans", 
    time : "1 bns", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "a fleck of quartz", 
    duration : "1 rd", 
    description : "Snow surrounds 5ft rad, all (including you) have disadv on percep checks and attk rolls",
    descriptionFull : "A flurry of snow surrounds you and extends to a 5-foot radius around you. While it lasts, anyone trying to see into, out of, or through the affected area (including you) has disadvantage on Wisdom (Perception) checks and attack rolls.",
};

SpellsList["forest affinity"] = {
    name : "Forest affinity",
    classes : ["druid", "ranger", "sorcerer", "wizard"],   
    source : ["DM1", 199],
    level : 1,
    school : "Illus",
    time : "1 a", 
    range : "Self", 
    components : "S,M", 
    compMaterial : "a raven’s feather or a bit of panther fur", 
    duration : "Conc, 1 h", 
    description : "Forest welcomes you, gain adv on stealth checks to hide, while hidden in forest gain adv on next initiative roll",
    descriptionFull : "The forest floor swirls and shifts around you, welcoming you into its embrace. While in a forest, you have advantage on Dexterity (Stealth) checks to hide. While hidden in a forest, you have advantage on your next initiative roll. The spell ends if you attack or cast a spell." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The spell ends if you or any other target of this spell attacks or casts a spell.",
};

SpellsList["forest native"] = {
    name : "Forest native",
    classes : ["druid"],   
    source : ["DM1", 199],
    level : 1,
    school : "Trans",
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "a clump of soil from a forest", 
    duration : "1 h", 
    description : "Create bond willing crea and environment, not hindered by diff terr, adv on saves against env effects.",
    descriptionFull : "While in a forest, you touch a willing creature and infuse it with the forest’s energy, creating a bond between the creature and the environment. For the duration of the spell, as long as the creature remains within the forest, its movement is not hindered by difficult terrain composed of natural vegetation. In addition, the creature has advantage on saving throws against environmental effects such as excessive heat or cold or high altitude.",
};

SpellsList["forest of spears"] = {
    name : "Forest of Spears",
    classes : ["druid", "wizard"],   
    source : ["DM1", 199],
    level : 5,
    school : "Evoc", 
    time : "1 a", 
    range : "120 ft", 
    components : "V,S,M", 
    compMaterial : "a sliver of stone", 
    duration : "Conc, 1 min", 
    save : "Dex", 
    description : "crea in range save or 5d8 piercing dmg and restrained, save halves, area difficult terrain",
    descriptionFull : "A forest of stone spears rises up from the ground in a 30‑foot radius around a point you designate within range. Creatures in the area take 5d8 piercing damage and are restrained. A successful Dexterity saving throw reduces the damage by half and negates the restrained condition. A creature that starts its turn in the area and is already restrained by the spears takes an extra 2d8 damage from the pain of being held aloft as well as bleeding from its wounds. A creature restrained by the spears can use its action to make a Strength or Dexterity check (its choice) against your spell save DC. On a successful save, it frees itself. For the duration of the spell, the area is difficult terrain. The spears (AC 14) can be damaged; they are immune to piercing damage and have resistance to bludgeoning and slashing damage from nonmagical attacks. If a 5-foot‑square section of spears takes 15 damage, that’s enough to free a restrained creature or clear the section of spears.",
};

SpellsList["forest sanctuary"] = {
    name : "Forest sanctuary",
    classes : ["druid"],   
    source : ["DM1", 200],
    level : 9,
    school : "Abjur",
    time : "1 a", 
    range : "300 ft", 
    components : "V,S,M", 
    compMaterial : "a bowl of fresh rainwater and a tree branch", 
    duration : "24 h", 
    description : "200ft cube protected from nonmagic & magic storms/winds/floods, etc see book",
    descriptionFull : "While in a forest, you create a protective, 200-foot cube centered on a point you can see within range. The atmosphere inside the cube has the lighting, temperature, and moisture that is most ideal for the forest, regardless of the lighting or weather outside the area. The cube is transparent, and creatures and objects can move freely through it. The cube protects the area inside it from storms, strong winds, and floods, including those created by magic such as control weather, control water, or meteor swarm. Such spells can’t be cast while the spellcaster is in the cube." + "\n   " + "You can create a permanently protected area by casting this spell at the same location every day for one year.",
};

SpellsList["fortitude"] = {
    name : "Fortitude",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 201],
    level : 0,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    description : "Willing crea can roll a d6, add result to con check of their choice.",
    descriptionFull : "You touch a willing creature. Once before the spell ends, the target can roll a d6 and add the result to one Constitution check of its choice. It can roll the die before or after making the check. The spell then ends.",
};

SpellsList["frailty"] = {
    name : "Frailty",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 201],
    level : 0,
    school : "Necro", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S", 
    duration : "1 min", 
    save : "Con", 
    description : "Crea save or subtract 1d6 from result of next con check",
    descriptionFull : "You temporarily inhibit the vital force of a creature within range. If the target makes a successful Constitution saving throw, the spell is ineffective. On a failed save, the next time the creature makes a Constitution check before the spell ends, roll a d6 and subtract the result from the roll. The spell then ends.",
};

SpellsList["freeze potion"] = {
    name : "Freeze potion",
    classes : ["druid", "cleric", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 201],
    level : 1,
    school : "Trans",
    time : "1 rea", 
	timeFull : "1 reaction, which you take when which you take when you see a creature within range about to consume a liquid", 
    range : "25 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    description : "Freeze a drinking container of liquid instantly freezing the contents, cant be consumed.",
    descriptionFull : "A blue spark flies from your hand and strikes a potion vial, drinking horn, waterskin, or similar container, instantly freezing the contents. The substance melts normally thereafter and is not otherwise harmed, but it can’t be consumed while it’s frozen." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the range increases by 5 feet for each slot level above 1st.",
};


SpellsList["freezing fog"] = {
    name : "Freezing fog",
    classes : ["druid", "sorcerer", "wizard"],   
    source : ["DM1", 201],
    level : 3,
    school : "Conj", 
    time : "1 a", 
    range : "100 ft", 
    components : "V,S", 
    duration : "Conc, 5 min", 
    save : "Con", 
    description : "20ft rad sphere of mist, area heavily obscured, save each turn or 2d6 cold dmg and 1 lvl exhaustion",
    descriptionFull : "The spell creates a 20-foot-radius sphere of mist similar to a fog cloud spell centered on a point you can see within range. The cloud spreads around corners, and the area it occupies is heavily obscured. A wind of moderate or greater velocity (at least 10 miles per hour) disperses it in 1 round. The fog is freezing cold; any creature that ends its turn in the area must make a Constitution saving throw. It takes 2d6 cold damage and gains one level of exhaustion on a failed save, or takes half as much damage and no exhaustion on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
};

SpellsList["furious hooves"] = {
    name : "Furious hooves",
    classes : ["druid", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 202],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "a nail", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "Enhance feet of 1 crea, double walking speed, gain 2 hoof attacks, each does 1d6 + str bludg dmg",
    descriptionFull : "You enhance the feet or hooves of a creature you touch, imbuing it with power and swiftness. The target doubles its walking speed or increases it by 30 feet, whichever addition is smaller. In addition to any attacks the creature can normally make, this spell grants two hoof attacks, each of which deals bludgeoning damage equal to 1d6 + plus the target’s Strength modifier (or 1d8 if the target of the spell is Large). For the duration of the spell, the affected creature automatically deals this bludgeoning damage to the target of its successful shove attack.",
};

SpellsList["gird the spirit"] = {
    name : "Gird the spirit",
    classes : ["druid", "cleric", "paladin"],   
    source : ["DM1", 204],
    level : 1,
    school : "Abjur", 
    time : "1 rea", 
	timeFull : "1 reaction, which you take when you or a creature within 30 feet of you is hit by an attack from an undead creature", 
    range : "30 ft", 
    components : "V,S", 
    duration : "1 min", 
    save : "Wis", 
    description : "Gain immunity from lifesapping energy, prevent reduction in ability scores or HP max",
    descriptionFull : "Your magic protects the target creature from the lifesapping energies of the undead. For the duration, the target has immunity to effects from undead creatures that reduce its ability scores, such as a shadow’s Strength Drain, or its hit point maximum, such as a specter’s Life Drain. This spell doesn’t prevent damage from those attacks; it prevents only the reduction in ability score or hit point maximum.",
};

SpellsList["glacial fog"] = {
    name : "Glacial fog",
    classes : ["druid", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 204],
    level : 7,
    school : "Evoc", 
    time : "1 a", 
    range : "100 ft", 
    components : "V,S,M", 
    compMaterial : "crystalline statue of a polar bear worth at least 25 gp", 
    duration : "Conc, 1 min", 
    save : "Con", 
    description : "30ft rad sphere of fog, save or 12d6 cold dmg, +1 exhaustion, disadv on percep checks, see b",
    descriptionFull : "As you cast this spell, a 30-foot-radius sphere centered on a point within range becomes covered in a frigid fog. Each creature that is in the area at the start of its turn while the spell remains in effect must make a Constitution saving throw. On a failed save, a creature takes 12d6 cold damage and gains one level of exhaustion, and it has disadvantage on Perception checks until the start of its next turn. On a successful save, the creature takes half the damage and ignores the other effects." + "\n   " + "Stored devices and tools are all frozen by the fog: crossbow mechanisms become sluggish, weapons are stuck in scabbards, potions turn to ice, bag cords freeze together, and so forth. Such items require the application of heat for 1 round or longer in order to become useful again." + AtHigherLevels + "When you cast this spell using a spell slot of 8th level or higher, the damage increases by 1d6 for each slot level above 7th.",
};

SpellsList["gliding step"] = {
    name : "Gliding step",
    classes : ["druid", "ranger"],   
    source : ["DM1", 205],
    level : 1,
    school : "Abjur", 
    time : "1 a", 
    range : "Self", 
    components : "V,S", 
    duration : "10 min", 
    description : "Walk on surface of snow or ice, will support your weight and not hinder movement",
    descriptionFull : "Provided you’re not carrying more of a load than your carrying capacity permits, you can walk on the surface of snow rather than wading through it, and you ignore its effect on movement. Ice supports your weight no matter how thin it is, and you can travel on ice as if you were wearing ice skates. You still leave tracks normally while under these effects." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the duration increases by 10 minutes for each slot level above 1st.",
};

SpellsList["goats hoof charm"] = {
    name : "Goat’s hoof charm",
    classes : ["druid", "ranger", "sorcerer", "wizard"],   
    source : ["DM1", 205],
    level : 1,
    school : "Trans",
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "a goat’s hoof", 
    duration : "1 min", 
    description : "Target climbs slopes, +2 bns on dex checks and saves o prevent falling or balance on narrow ledge",
    descriptionFull : "A creature you touch traverses craggy slopes with the surefootedness of a mountain goat. When ascending a slope that would normally be difficult terrain for it, the target can move at its full speed instead. The target also gains a +2 bonus on Dexterity checks and saving throws to prevent falling, to catch a ledge or otherwise stop a fall, or to move along a narrow ledge." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, you can increase the duration by 1 minute, or you can affect one additional creature, for each slot level above 1st.",
};

SpellsList["going in circles"] = {
    name : "Going in circles",
    classes : ["druid", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 206],
    level : 3,
    school : "Illus", 
    time : "10 min", 
    range : "Sight", 
    components : "V,S,M", 
    compMaterial : "a piece of the target terrain", 
    duration : "24 h", 
    description : "Make 1-mile cube of natural terrain difficult to traverse and navigate, see book",
    descriptionFull : "You make natural terrain in a 1-mile cube difficult to traverse. A creature in the affected area has disadvantage on Wisdom (Survival) checks to follow tracks or travel safely through the area, as paths through the terrain seem to twist and turn nonsensically. The terrain itself isn’t changed, only the perception of those inside it. A creature that succeeds on two Wisdom (Survival) checks while in the terrain discerns the illusion for what it is and sees the illusory twists and turns superimposed on the terrain. A creature that reenters the area after exiting it before the spell ends is affected by the spell even if it previously succeeded in traversing the terrain. A creature with truesight can see through the illusion and is unaffected by the spell. A creature that casts find the path automatically succeeds in discovering a way out of the terrain. When you cast this spell, you can designate a password. A creature that speaks the word as it enters the area automatically sees the illusion and is unaffected by the spell. If you cast this spell on the same spot every day for one year, the illusion lasts until it is dispelled.",
};

SpellsList["gordolays pleasant aroma"] = {
    name : "Gordolay’s pleasant aroma",
	nameShort : "Gordo. pleasant aroma",
    classes : ["druid", "bard", "cleric", "paladin", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 206],
    level : 1,
    school : "Trans",
    time : "1 a", 
    range : "120 ft", 
    components : "S,M", 
    compMaterial : "a few flower petals or a piece of fruit, which the spell consumes", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "Intoxicating smell distracts enemies save or next attack made with disadv",
    descriptionFull : "You create an intoxicating aroma that fills the area within 30 feet of a point you can see within range. Creatures in this area smell something they find so pleasing that it’s distracting. Each creature in the area that makes an attack roll must first make a Wisdom saving throw; on a failed save, the attack is made with disadvantage. Only a creature’s first attack in a round is affected this way; subsequent attacks are resolved normally. On a successful save, a creature becomes immune to the effect of this particular scent, but they can be affected again by a new casting of the spell.",
};

SpellsList["green mantle"] = {
    name : "Green Mantle",
    classes : ["druid", "ranger"],   
    source : ["DM1", 208],
    level : 1,
    school : "Trans",
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "a plant from the surrounding terrain", 
    duration : "1 h", 
    description : "Gain physical characteristics of terrain, +2 bonus to stealth checks",
    descriptionFull : "You take on the physical characteristics of the terrain around you. In a forest, grass and tiny mushrooms sprout in your hair, moss beards your chin, and your ﬂesh takes on the mottled hue of leaf green and bark brown. In an arctic grassland, gray lichens and the various shades of boreal grasses cloak your presence. This effect provides a +2 bonus to Stealth checks in the appropriate terrain." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, one additional creature is affected for each slot level above 1st.",
};

SpellsList["hunting stand"] = {
    name : "Hunting Stand",
    classes : ["druid", "ranger"],   
    source : ["DM1", 213],
    level : 4,
    school : "Conj", 
    time : "1 a", 
    range : "120 ft", 
    components : "V,S,M", 
    compMaterial : "a crude model of the stand", 
    duration : "8 h", 
    description : "Make shelter in a tree, hold up to 9 crea, disadv on checks to spot the shelter",
    descriptionFull : "You make a camouflaged shelter nestled in the branches of a tree or among a collection of stones. The shelter is a 10-foot cube centered on a point within range. It can hold as many as nine Medium or smaller creatures. The atmosphere inside the shelter is comfortable and dry, regardless of the weather outside. The shelter’s camouflage provides a modicum of concealment to its inhabitants; a creature outside the shelter has disadvantage on Wisdom (Perception) and Intelligence (Investigation) checks to detect or locate a creature within the shelter.",
};

SpellsList["illuminate spoor"] = {
    name : "Illuminate Spoor",
    classes : ["druid", "ranger"],   
    source : ["DM1", 215],
    level : 1,
    school : "Div", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "a firefly", 
    duration : "Conc, 1 h", 
    description : "Illuminate a set of tracks, crea you designate that see the glow auto succeed on checks to track.",
    descriptionFull : "You touch a set of tracks created by a single creature. That set of tracks and all other tracks made by the same creature give off a faint glow. You and up to three creatures you designate when you cast this spell can see the glow. A creature that can see the glow automatically succeeds on Wisdom (Survival) checks to track that creature. If the tracks are covered by obscuring objects such as leaves or mud, you and the creatures you designate have advantage on Wisdom (Survival) checks to follow the tracks. If the creature leaving the tracks changes its tracks, such as by adding or removing footwear, the glow stops where the tracks change. Until the spell ends, you can use an action to touch and illuminate a new set of tracks." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the duration is concentration, up to 8 hours. When you use a spell slot of 5th level or higher, the duration is concentration, up to 24 hours.",
};

SpellsList["mire"] = {
    name : "Mire",
    classes : ["druid", "cleric", "warlock", "wizard"],   
    source : ["DM1", 228],
    level : 3,
    school : "Trans", 
    time : "1 a", 
    range : "100 ft", 
    components : "V,S,M", 
    compMaterial : "a vial of sand mixed with water", 
    duration : "1 h", 
    save : "Str", 
    description : "10ft diameter quicksand, str save or sink up to waist and restrained",
    descriptionFull : "When you cast mire, you create a 10-foot-diameter pit of quicksand, sticky mud, or a similar dangerous natural hazard suited to the region. A creature that’s in the area when the spell is cast or that enters the affected area must make a successful Strength saving throw or sink up to its waist and be restrained by the mire. From that point on, the mire acts as quicksand, but the DC for Strength checks to escape from the quicksand is equal to your spell save DC. A creature outside the mire trying to pull another creature free receives a +5 bonus on its Strength check.",
};

SpellsList["natures aegis"] = {
    name : "Nature’s aegis",
    classes : ["druid", "ranger"],   
    source : ["DM1", 230],
    level : 1,
    school : "Abjur", 
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "an area of natural vegetation", 
    duration : "1 h", 
    save : "Wis", 
    description : "Vegetation on body, forms armor, temp AC of 14 + dex mod, adv on stealth checks in terrain used.",
    descriptionFull : "Grass, vines, branches, and other vegetation weave themselves over your body into a temporary suit of armor. You can use an action to dismiss this spell. Nature’s aegis gives you an Armor Class of 14 + your Dexterity modifier. The armor weighs 8 pounds and provides you with advantage on Dexterity (Stealth) checks made to hide in the terrain from which you used the vegetation.",
};
 
 SpellsList["necrotic leech"] = {
    name : "Necrotic leech",
    classes : ["druid", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 230],
    level : 5,
    school : "Necro", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "Melee spell atk, 8d10 necro dmg, save or disadv on attk/saves/ability check rolls, redo save each turn",
    descriptionFull : "You channel destructive energy through your touch. Make a melee spell attack against a creature within your reach. The target takes 8d10 necrotic damage and must succeed on a Constitution saving throw or have disadvantage on attack rolls, saving throws, and ability checks for a number of rounds equal to the spell slot you expended. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. This spell has no effect on constructs or undead." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the spell’s damage increases by 1d10 for each slot level above 5th.",
};
 
SpellsList["nightfall"] = {
    name : "Nightfall",
    classes : ["druid", "cleric", "warlock"],   
    source : ["DM1", 231],
    level : 3,
    school : "Evoc",
    time : "1 a", 
	range : "100 ft", 
    components : "V,S", 
    duration : "Conc, 10 min", 
	ritual : true, 
    description : "30 ft rad of night, normal darkness and heavily obscured",
    descriptionFull : "You call upon night to arrive ahead of schedule. With a sharp word, you create a 30-foot-radius cylinder of night centered on a point on the ground within range. The cylinder extends vertically for 100 feet or until it reaches an obstruction, such as a ceiling. The area inside the cylinder is normal darkness, and thus heavily obscured. Creatures inside the darkened cylinder can see illuminated areas outside the cylinder normally.",
};

SpellsList["Nip at the heels"] = {
    name : "Spell name",
    classes : ["druid", "ranger"],   
    source : ["DM1", 231],
    level : 2,
    school : "Illus", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S,M", 
    compMaterial : "a dog’s tooth", 
    duration : "1 min", 
    save : "Wis", 
    description : "Create illusionary wild dogs, bark and chase 1 crea, save or disadv on ability checks and attk rolls",
    descriptionFull : "You create an illusory pack of wild dogs that bark and nip at one creature you can see within range, which must make a Wisdom saving throw. On a failed save, the target has disadvantage on ability checks and attack rolls for the duration as it is distracted by the dogs. At the end of each of its turns, the target can make a Wisdom saving throw, ending the effect on itself on a successful save. A target that is at least 10 feet off the ground (in a tree, flying, and so forth) has advantage on the saving throw, staying just out of reach of the jumping and barking dogs." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
};
 
SpellsList["obtuse"] = {
    name : "Obtuse",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 232],
    level : 0,
    school : "Ench", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S", 
    duration : "1 min", 
    save : "Wis", 
    description : "Cloud mind of 1 crea inhibiting decision-making skills, save or subtract 1d6 from next wisdom check",
    descriptionFull : "You temporarily cloud the mind of a creature within range, inhibiting its decision-making skills. If the target succeeds on a Wisdom saving throw, the spell is ineffective. On a failed save, the next time the creature makes a Wisdom check before the spell ends, roll a d6 and subtract the result from the roll. The spell then ends.",
};

SpellsList["quench"] = {
    name : "Quench",
    classes : ["druid", "ranger"],   
    source : ["DM1", 237],
    level : 3,
    school : "Trans", 
    time : "1 a", 
    range : "120 ft", 
    components : "V,S,M", 
    compMaterial : "a cloth soaked in water", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "Extinguish nonmagical fires in 30ft rad, magical fire req wis check 10+SL, fire elementals",
    descriptionFull : "You extinguish all nonmagical fires in a 30-foot‑radius area centered on the point at which you cast the spell. You can extinguish fire spells in the area as well. For each fire spell in the area, make a Wisdom check. The DC equals 10 + the spell’s level. On a successful check, the spell ends. Fire elementals in the area take 8d6 cold damage. A successful Constitution saving throw reduces the damage by half." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the radius of the area increases by 10 feet, and the damage against fire elementals increases by 1d6, for each slot level above 3rd.",
};

SpellsList["quick time"] = {
    name : "Quick Time",
    classes : ["druid"],   
    source : ["DM1", 237],
    level : 4,
    school : "Conj", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S,M", 
    compMaterial : "any seed", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "Age a plant or creature by 1 year, if int 3+, con save to resist aging.",
    descriptionFull : "You make one living creature or plant within range move rapidly in time compared to you. The target becomes one year older. For example, you could cast this spell on a seedling, which causes the plant to sprout from the soil, or you could cast this spell on a newly hatched duckling, causing it to become a full-grown duck. If the target is a creature with an Intelligence of 3 or higher, it must succeed on a Constitution saving throw to resist the aging. It can choose to fail the saving throw." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, you increase the target’s age by one additional year for each slot level above 4th.",
};

SpellsList["reaver spirit"] = {
    name : "Reaver Spirit",
    classes : ["druid", "cleric", "ranger"],   
    source : ["DM1", 239],
    level : 3,
    school : "Ench", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    description : "allies in range adv on str checks + saves, resist bludg, pierce, slash dmg, +2 bns to dmg, 1d4 exhaustion",
    descriptionFull : "You inspire allies to fight with the savagery of berserkers. You and any allies you can see within range have advantage on Strength checks and Strength saving throws; resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks; and a +2 bonus to damage with melee weapons. When the spell ends, each affected creature must succeed on a Constitution saving throw or gain 1d4 levels of exhaustion." + AtHigherLevels + "At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the bonus to damage increases by 1 for each slot level above 2nd.", 
};

SpellsList["starfall"] = {
    name : "Starfall",
    classes : ["druid", "sorcerer", "wizard"],   
    source : ["DM1", 255],
    level : 5,
    school : "Evoc", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Dex", 
    description : "5 crea save or 6d6 rad dmg, knocked prone, blinded. On fail half dmg, no prone/blind ",
    descriptionFull : "You cause bolts of shimmering starlight to fall from the heavens, striking up to five creatures that you can see within range. Each bolt strikes one target, dealing 6d6 radiant damage, knocking the target prone, and blinding it until the start of your next turn. A creature that makes a successful Dexterity saving throw takes half the damage, is not knocked prone, and is not blinded. If you name fewer than five targets, excess bolts strike the ground harmlessly." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, you can create one additional bolt for each slot level above 5th.",
};

SpellsList["storm form"] = {
    name : "Storm Form",
    classes : ["druid"],   
    source : ["DM1", 256],
    level : 6,
    school : "Trans", 
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "a piece of wet wool", 
    duration : "Conc, 10 min", 
    save : "Con", 
    description : "Turn into a living storm cloud, gain flying speed, resistances, 3d8 lightning dmg on hit, see book",
    descriptionFull : "You transform into a living storm cloud, becoming a swirling mass of black clouds illuminated from within by flickers of lightning. While in this form, your only method of movement is a flying speed of 60 feet. You can enter and occupy the space of another creature. You have resistance to nonmagical damage, immunity to lightning damage, and advantage on Strength, Dexterity, and Constitution saving throws. If a creature strikes you with a melee weapon attack, it takes 3d8 lightning damage. You can pass through small holes, narrow openings, and even mere cracks, but you treat liquids as if they were solid surfaces. You can’t fall, and you remain hovering in the air even if stunned or otherwise incapacitated. You cannot talk or manipulate objects in storm cloud form, and any objects you were carrying or holding can’t be used, dropped, or interacted with in any way. You cannot cast spells while in this form. As an action, you can attack an opponent up to 30 feet away, dealing 3d8 lightning damage on a hit. You can also use an action to bring down rain upon a 5-foot square within your reach, drenching it and putting out any nonmagical fires in that area. Finally, you can use an action to expand your form to encompass a 20-foot-radius area, unleashing the storm’s full fury in a burst of rain, wind, lightning, and thunder. Each creature in the area is drenched with rain, takes 3d8 lightning and 3d8 thunder damage, is deafened for 1d4 rounds, and is knocked prone. A successful Constitution saving throw halves the damage and negates the deafened and prone conditions. Taking this action uses up any remaining duration of the spell, and you resume your normal form at the end of your turn.",
};

SpellsList["storm gods doom"] = {
    name : "Storm God's Doom",
    classes : ["druid", "sorcerer", "wizard"],   
    source : ["DM1", 257],
    level : 3,
    school : "Evoc", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Str", 
    description : "20 ft rad air vortex, on failed save crea take 3d8 bludg dmg, thrown into the air, takes falling dmg",
    descriptionFull : "A powerful wind swirls from your outstretched hand toward a point you choose within range, where it explodes with a low roar into vortex of air. Each creature in a 20-foot-radius cylinder centered on that point must make a Strength saving throw. On a failed save, the creature takes 3d8 bludgeoning damage, is pulled to the center of the cylinder, and is thrown 50 feet upward into the air. If a creature hits a solid obstruction when it’s thrown upward (such as a stone ceiling), it takes bludgeoning damage as if it had fallen 50 feet, minus the distance it traveled upward. For example, if a creature hits the ceiling after rising only 10 feet, it takes bludgeoning damage as if it had fallen 40 feet, or 4d6 bludgeoning damage." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, increase the distance affected creatures are thrown into the air by 10 feet for each slot level above 3rd.",
};


SpellsList["sudden stampede"] = {
    name : "Sudden Stampede",
    classes : ["druid", "bard", "ranger"],   
    source : ["DM1", 257],
    level : 4,
    school : "Conj", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S,M", 
    compMaterial : "a horseshoe", 
    duration : "Instantaneous", 
    save : "Dex", 
    description : "Conjure fey spirit horses, in a 10x60ft area, each crea in area takes 6d10 bludg dmg & knocked prone",
    descriptionFull : "You conjure up a multitude of fey spirits that manifest as galloping horses. These horses run in a 10-foot-wide, 60-foot-long line, in a given direction starting from a point within range, trampling all creatures in their path, before vanishing again. Each creature in the line takes 6d10 bludgeoning damage and is knocked prone. A successful Dexterity saving throw reduces the damage by half, and the creature is not knocked prone.",
};


SpellsList["thorn cage"] = {
    name : "Thorn Cage",
    classes : ["druid", "warlock"],   
    source : ["DM1", 261],
    level : 1,
    school : "Conj", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    save : "Str", 
    description : "1 crea save or restrained by thorny vines, 2d6 piercing dmg when they try to break free",
    descriptionFull : "Thick vines studded with sharp thorns spring from the ground around a target of your choice. The target must succeed on a Strength saving throw or be restrained by the thorny vines until the spell ends. A creature restrained by the vines can use its action to make a Strength check against your spell save DC. Doing so causes the creature to take 2d6 piercing damage from the thorns. On a successful check, it frees itself.",
};

SpellsList["volley shield"] = {
    name : "Volley shield",
    classes : ["druid", "sorcerer", "wizard"],   
    source : ["DM1", 273],
    level : 7,
    school : "Abjur", 
    time : "1 a", 
    range : "Touch", 
    components : "S", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "1 crea gains energy shield, +5 AC, resistance to nonmagic bludg/pierc/slash dmg, reflect hostile spells",
    descriptionFull : "You touch a willing creature and create a shimmering shield of energy to protect it. The shield grants the target a +5 bonus to AC and gives it resistance against nonmagical bludgeoning, piercing, and slashing damage for the duration of the spell." + "\n   " + "In addition, the shield can reflect hostile spells back at their casters. When the target makes a successful saving throw against a hostile spell, the caster of the spell immediately becomes the spell’s new target. The caster is entitled to the appropriate saving throw against the returned spell, if any, and is affected by the spell as if it came from a spellcaster of the caster’s level.",
};

SpellsList["weilers ward"] = {
    name : "Weiler's Ward",
    classes : ["druid", "sorcerer", "wizard"],   
    source : ["DM1", 276],
    level : 2,
    school : "Conj", 
    time : "1 bns", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "a lock of hair from a fey creature", 
    duration : "Conc, 1 h", 
    save : "Cha", 
    description : "4 floating orbs, dim light 15ft, enemy enters/starts turn, use rea to attk 1d6 force dmg pushed 20ft",
    descriptionFull : "You create four small orbs of faerie magic that float around your head and give off dim light out to a radius of 15 feet. Whenever a Large or smaller enemy enters that area of dim light, or starts its turn in the area, you can use your reaction to attack it with one or more of the orbs. The enemy creature makes a Charisma saving throw. On a failed save, the creature is pushed 20 feet directly away from you, and each orb you used in the attack explodes violently, dealing 1d6 force damage to the creature." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the number of orbs increases by one for each slot level above 2nd.", 
};


SpellsList["wresting wind"] = {
    name : "Wresting Wind",
    classes : ["druid", "ranger", "sorcerer"],   
    source : ["DM1", 279],
    level : 2,
    school : "Evoc", 
    time : "1 a", 
    range : "90 ft", 
    components : "V,S,M", 
    compMaterial : "a handful of paper confetti", 
    duration : "Instantaneous", 
    save : "Str", 
    description : "Burst of air rips weapons and items from hands of enemies in 20ft rad, items land 10ft away",
    descriptionFull : "By blowing a pinch of confetti from your cupped hand, you create a burst of air that can rip weapons and other items out of the hands of your enemies. Each enemy in a 20-foot radius centered on a point you target within range must make a successful Strength saving throw or drop anything held in its hands. The objects land 10 feet away from the creatures that dropped them, in random directions.", 
};


/* SpellsList["spellname"] = {
    name : "Spellname",
    classes : ["druid", "bard", "cleric", "paladin", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 2],
    level : 1,
    school : "", //"Abjur" "Conj" "Div" "Ench" "Illus" "Necro" "Trans" "Evoc"
    time : "1 a", 
	timeFull : "1 reaction, which you take when ", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "Incense", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "PLACEHOLDER",
    descriptionFull : "Long description here." + "\n   " + "more text" + AtHigherLevels + "When you...",
	descriptionCantripDie : "1 creature save or",
	ritual : true, //optional
};
  */
 
 //107 spells