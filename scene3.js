(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"scene3_atlas_1", frames: [[0,1442,854,480],[856,1442,854,480],[0,0,902,1440],[2568,482,480,854],[904,0,854,480],[904,482,854,480],[2568,1338,480,854],[1712,964,854,480],[1760,0,854,480]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.billysmall = function() {
	this.initialize(ss["scene3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.classroomcolor2 = function() {
	this.initialize(ss["scene3_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.disgusted1 = function() {
	this.initialize(ss["scene3_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.elijah = function() {
	this.initialize(ss["scene3_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.joey = function() {
	this.initialize(ss["scene3_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.mindy = function() {
	this.initialize(ss["scene3_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.teacher2 = function() {
	this.initialize(ss["scene3_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.textbox = function() {
	this.initialize(ss["scene3_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.torin = function() {
	this.initialize(ss["scene3_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.TORINdisgusted = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.disgusted1();
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TORINdisgusted, new cjs.Rectangle(0,0,300.7,480), null);


(lib.TORIN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {neutral:0,disgusted:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.torin();

	this.instance_1 = new lib.disgusted1();
	this.instance_1.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,854,480);


(lib.TEACHER = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.teacher2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEACHER, new cjs.Rectangle(0,0,480,854), null);


(lib.MINDY = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mindy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MINDY, new cjs.Rectangle(0,0,854,480), null);


(lib.JOEY = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.joey();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.JOEY, new cjs.Rectangle(0,0,854,480), null);


(lib.ELIJAH = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.elijah();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ELIJAH, new cjs.Rectangle(0,0,480,854), null);


(lib.BILLY = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.billysmall();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BILLY, new cjs.Rectangle(0,0,854,480), null);


(lib.fadebox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhCtAlgMAAAhK/MCFbAAAMAAABK/g");
	this.shape.setTransform(427,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fadebox, new cjs.Rectangle(0,0,854,480), null);


// stage content:
(lib.scene3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,16];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		addEventListener("click", playMusic);
		var bgmusic = createjs.Sound.play("bgmusic", {loop:-1});
		bgmusic.stop();
		console.log(bgmusic);
		
		var root = this;
		
		function playMusic() {	
			console.log("playMusic() was called");
			bgmusic.play();
			root.play();
			removeEventListener("click", playMusic);
		
		}
	}
	this.frame_16 = function() {
		this.stop();
		
		//var torin = new lib.TORIN();
		//var torin = this.torin
		//this.addChild(torin);
		//console.log("TORIN LINKAGE :", torin);
		
		
		//var bgmusic = createjs.Sound.play("bgsound", {loop:10});
		//bgmusic.volume = 0.7;
		//Root is used inside functions instead of this
		//I have to add in movieclips for different emotion frames
		var root = this;
		
		var torin = this.torin;
		this.torin.id = 'torin';
		var torindisgusted = this.torindisgusted;
		var billy = this.billy;
		this.billy.id = 'billy';
		var mindy = this.mindy;
		this.mindy.id = 'mindy';
		var joey = this.joey;
		this.joey.id = 'joey';
		var elijah = this.elijah;
		this.elijah.id = 'elijah';
		var teacher = this.teacher;
		this.teacher.id = 'teacher';
		
		//console.log("BILLY LINKAGE :", billy);
		
		//***STARS MEANS I NEED TO EDIT EVERYTIME I ADD A CHARACTER***
		//I need to create these transformations first so that the masks match the characters as soon
		//the scene starts
		var characters = [[torin],[billy],[mindy],[joey],[elijah],[teacher]];
		for(let i=0; i<characters.length; i++) {
			characters[i][0].transformMatrix = new cjs.Matrix2D();
			//console.log("characters transform matrix :", characters[i][0].transformMatrix);
		}
		
		/*
		function MovieMask(movieclip, mask){
			this.movieclip = movieclip;
			this.mask = mask;
			
			this.getMask = function(){
				return "adoi!";
			}
		}
		MovieMask.prototype.getMask = function(emotion){
			var emoteKey = Object.keys(this.mask)[0];
			if(emoteKey == emotion) return this.mask[emoteKey]
			return false;
		}
		
		var movieclips = {
			
			'torin' : [ new MovieMask(this.torin,'torin'), new MovieMask(this.torindisgusted,'disgusted') ],
			
			'billy' : [ [this.billy, {'billy':null}] ]
			
		}
		*/
		
		//The reason for this movieclip is so that I can loop through and create the masks
		var movieclips = {
			
			'torin' : [ [this.torin,{'torin':null}], [this.torindisgusted, {'disgusted':null}], [this.torin,{'neutral':null}] ],
			
			'billy' : [ [this.billy, {'billy':null}]  ],
			
			'mindy' : [ [this.mindy, {'mindy':null}]  ],
			
			'joey' : [ [this.joey, {'joey':null}]  ],
			
			'elijah' : [ [this.elijah, {'elijah':null}]  ],
			
			'teacher' : [ [this.teacher, {'teacher':null}]  ],
			
		}
		
		
		//var ex = {cat : 3, horse : 4, dog : 5}
		//var keys = Object.keys(ex)[0]
		
		//its going to create var and loop through movieclips
		for(var chr in movieclips){
			
			if( movieclips.hasOwnProperty(chr) ){
				
				var arr = movieclips[chr];
				
				for(var mc of arr){
					generateMask(mc);
				}
				
				/*
				for(var i=0; i<arr.length; i++){
					generateMask( arr[i] );
				}*/
				
			}
			
		}
		
		console.log('STAGE: ', stage);
		
		//nested/multidimensional array (an array within an array)
		//Ex if I want to call "Pffft..." textBlocks[2][2]
		//character name does not need to be put in as a string
		//reaction needs to be put in, but not as a string
		//add action in as another slot in the array
		var textBlocks = [
		[teacher,, 	    "Ok class I hope you enjoyed that short video on Napoleon"],
		[teacher,, 	    "*Looks like Elijah decided to show up. I didn't notice when but I won't let him off the hook that easily*"],
		[teacher,, 	    "So the assignment was to write down your thoughts as we watched the documentary"],
		[billy,,	    "*students look around nervously"],
		[teacher,,	    "*Teacher stares at Elijah"],
		[elijah,,	    "*Elijah stares back"],
		[teacher,, 	    "Elijah, why don't you get us started by telling us what you've written down"],
		[elijah,, 	    "…"],
		[elijah,, 	    "Yeah I've got something..."],
		[elijah,, 	    "The documentary seemed to romanticize the French revolution. That it was courageous, celebrated, and even justified"],
		[elijah,, 	    "Isn't it interesting that similar actions by mistreated and misrepresented people today are seen as insurrection?"],
		[billy,,	    "Class: Ooooooo"],
		[teacher,, 	    "Ok class quiet down. Elijah dear you have to understand that was a different time."],
		[teacher,, 	    "There are better ways to contest/object policies and politics that one may not agree with. And violence is never the answer"],
		[elijah,, 	    "*mutters* that's convenient"],
		[teacher,, 	    "You probably don't understand the complexity because you showed up halfway through class"],
		[billy,, 	    "Ooooooo"],
		[teacher,, 	    "*How dare he challenge one of my all time favorite history figures.*"],
		[teacher,, 	    "Ok class, does anyone else want to share what they wrote for…"],
		[billy,,     "*Tick   tock   tick   tock*",],
		[billy,,     "*Clock strikes 9:00am!!!*",],
		[elijah,,     "Oh, teach, I gotta pee!!",],
		[teacher,, 	    "Fine, Elijah, but make it quick!",],
		[elijah,,     "Got it. *smirk*",],
									];
									
		
		//using constants because Speaker will always be in the first index. Text will be 2nd
		const SPEAKER = 0;
		const EMOTION = 1;
		const TEXT = 2;
		const ACTION = 3;
		//defining variables that will be used within my text functions
		var currentTextBlockIndex = 0; //starting the index off at 0
		var currentTextBlockString;
		var currentTextBlock;
		
		//***SET THIS FOR MASKS THAT NEED TO GENERATED INITALLY***
		var teachermask = movieclips.teacher[0][1].teacher;
		var elijahmask = movieclips.elijah[0][1].elijah;
		
		//setting initial characters array
		characters = [[elijah, elijahmask],[teacher, teachermask]];
		
		
		//lets add in the important elements to this array
		
		//The array is particular useful for dimming
		//We will be looping through this array to determine what's being faded
		//here we set characters initially on stage
		//var activecharacters = [[torin, disgusted],[billy]]
		
		//var masks;
		
		//The order of the next 3 steps is important to create the transformmatrix, set the character, then set the mask
		//generate transform matrix for characters
		
		
		//***FLIP BILLY CHARACTER INITIALLY***IMPORTANT TO DO BEFORE MASK IS GENERATED INITIALLY
		elijah.transformMatrix.appendTransform(427,0,-1,1,0,0,0,427,0);
		console.log("elijah matrix: ",elijah.transformMatrix);
		
		//generate masks and create transform matrix
		/*
		for(let i=0; i<characters.length; i++) {
			generateMask( characters[i] );
		}
		*/
		
		function generateMask (characterArray) {
			var character = characterArray[0];
			//get loaded image from queue
			//billy should be replaced with whatever character needs to be passed in
			let mask = new cjs.Bitmap(character.cacheCanvas);
			
			character.filters = null;
			//break the link to cacheCanvas from this.billy object so it can't modify it anymore
			character.cacheCanvas = null;
			character.bitmapCache = null;
			//mask.transformMatrix = new cjs.Matrix2D();
			mask.transformMatrix = character.transformMatrix;
			//console.log("mask transformMatrix :", mask.transformMatrix);
			//will be 0 but I am 50 to test if this code works
			mask.alpha = 0;
			character.parent.addChild(mask);
			//stage.addChild(mask);
			
			//code written by C which adds the mask to the movieclips above
			//get mask object
			var maskObj = characterArray[1] = characterArray[1] || {};
			//get emotion name from list of keys
			var emotion_string = Object.keys(maskObj)[0];
			//set mask value
			maskObj[emotion_string] = mask;
			//characterArray.push(mask)
			//make a transform matrix for every chracter to be appended later
			//character.transformMatrix = new cjs.Matrix2D();
		}
		
		console.log("movieclips: ", movieclips);
		console.log("mask test :", movieclips.torin[1][1].disgusted.alpha);
		//movieclips.torin[1][1].disgusted.alpha = 1;
		//console.log("billy mask x value :", characters[1][1].x);
		//console.log("characters array :", characters);
		//characters[1][1].x = 0
		//cjs.Tween.get(characters[1][1], { loop: true })
		//	.to({ alpha: 0 }, 2500, cjs.Ease.getPowInOut(2));
		
		
		
		
		//make sure that all the characters are not present at the beginning by setting alpha to 0
		//root.joey.alpha=0;
		//root.anna.alpha=0;
		//root.mindy.alpaha=0;
		
		//change these names depending on who needs to be drawn to the screen first
		teacher.transformMatrix.tx = -400;
		createjs.Tween.get(teacher.transformMatrix, {loop:false}).to({ tx: -100, alpha: 1 }, 1000, createjs.Ease.getPowInOut(4));
		
		//I will need to modify this slightly because I want to mirror the character over the centerline of the stage
		elijah.transformMatrix.tx += 400
		createjs.Tween.get(elijah.transformMatrix, {loop:false}).to({ tx: 954, alpha: 1 }, 1000, createjs.Ease.getPowInOut(4));
		
		
		//***CHANGE ALPHA OF CHARACTERS NOT STARTING VISIBLE ON STAGE***
		torindisgusted.alpha = 0;
		mindy.alpha = 0;
		joey.alpha = 0;
		torin.alpha = 0;
		billy.alpha = 0;
		
		/*
		root.textbox.y = 350;
		root.textbox.alpha = 0;
		root.textbox.gotoAndStop("exit");
		createjs.Tween.get(root.textbox, {loop:false}).to({ y: 240, alpha: 1 }, 1000, createjs.Ease.getPowInOut(4));
		*/
		
		//this.addEventListener(MouseEvent.CLICK, startText)??
		addEventListener("click", nextTextBlock);
		
		//call character and emotion with this code
		//root.textBlocks[currentTextBlockIndex][SPEAKER].textBlocks[currentTextBlockIndex][EMOTION]
		//syntax may be wrong but I need to call the root of a movieclip directly from script
		//light the correct character
		//then play the required text
		
		function getMask(movieclip, emotion){
			var array = movieclips[movieclip.id];
			
			//[ [mc, {}], [mc, {}]]
			for(var entry of array){
				
				var emoteMaskObj = entry[1];
				
				var emoteKey = Object.keys(emoteMaskObj)[0];
				
				if(emoteKey == emotion) return emoteMaskObj[emoteKey];
			}
		}
		
		function moveForward(movieclip){
			moveAdjacent(movieclip,1);
		}
		
		function moveBack(movieclip){
			moveAdjacent(movieclip,-1);
		}
		
		function moveAdjacent(movieclip, dir){
			let children = movieclip.parent.children;
			
			//get the object reference that is actually stored in stage.children array
			//let stageLvl = getStageLevelRef(movieclip);
			
			//if(!stageLvl) return;
			
			//find which position it is in in the array
			let idx = children.indexOf(stageLvl);
			
			if(idx === -1) return;
			
			idx = Math.min(children.length-1, idx+dir); //keep from going past end of array
			idx = Math.max(0, idx ); //keep from going below start of array
			
			//swap it with the ending position (drawing is from front to back of array)
			let hold = children[pos]; //get item at end of array
			children[pos] = stageLvl; //set position at end of array to stageLvl
			children[idx] = hold; //set old position to value that used to be at end of the array
		}
		
		//call these functions to move for z indexing
		function moveToFront(movieclip){
			moveTo(movieclip, stage.children.length-1);
		}
		
		function moveToBack(movieclip){
			moveTo(movieclip,0);
		}
		
		function moveTo(movieclip, pos){
			let children = movieclip.parent.children;
			let len = children.length-1;
			
			console.log("staaaage1: ", children);
			
			//get the object reference that is actually stored in stage.children array
			//let stageLvl = getStageLevelRef(movieclip);
			
			//if(!stageLvl) return;
			
			//find which position it is in in the array
			let idx = children.indexOf(movieclip);
			
			if(idx === -1) return;
			
			let hold = children.splice(idx,1)[0]; //remove item from array
			
			console.log("outpuuut: ", hold, " : ", pos, " : ", (pos===0));
		
			if(pos === 0) children.unshift(hold); //add to the front (moved to the back drawing order-wise)
			else if(pos === len) children.push(hold); //add to the back (moved to the front draw-wise)
			
			console.log("staaaage2: ", children);
		}
		
		function getStageLevelRef(movieclip){
			let mc = movieclip;
			//this keeps looping through until the parent of the movieclip is equal to the stage
			while(mc.parent != stage){
				mc = mc.parent;
				
				//however if it keeps going and it doesn't find the stage and it becomes null then stop this function
				if(mc === null) return false;
			}
			//this will return the value mc which is the top level movieclip needed to be arranded in the z index array
			return mc;
		}
		
		function nextTextBlock() {
			console.log("nextTextBlock() was called: ", currentTextBlockIndex);
			//The following piece of code just makes it easier to refer to speaker
			let speaker = textBlocks[currentTextBlockIndex][SPEAKER];
			let emotion = textBlocks[currentTextBlockIndex][EMOTION] || speaker.id;
			let action =  textBlocks[currentTextBlockIndex][ACTION];
			//current method requires the asset to be drawn to screen. Previously I made a blank frame on each movieclip
			//call character and emotion with this code
			console.log("current speaker: ", textBlocks[currentTextBlockIndex][SPEAKER]);
			console.log("current emotion: ", textBlocks[currentTextBlockIndex][EMOTION]);
				
			//Set the emotion to be displayed
			if (emotion != undefined){
					speaker.gotoAndStop(emotion);
					
					//characters = [ chrArray = [torin, disgusted], [] ]
					//HERE IS WHERE I REMOVE THE PREVIOUS MASK FROM ARRAY AND ADD IN THE NEW ONE
					for(let chrArray of characters){
						
						if(chrArray[0] === speaker){
							//set the 2nd slot [torin, mask] as the new mask the function calls
							//it should replace
							//set previous filter alpha to zero before replaceing with the new in the array
							console.log("chrArray[1]: ", chrArray[1]);
							chrArray[1].alpha=0;
							chrArray[1] = getMask(speaker, emotion);
							console.log("check for filter change: ", characters);
							
							
							break;
						}
					}
					
				}
			//set the position
			if (action != undefined && action == "swap1") {			
					var mask = getMask(speaker, emotion);
					moveToFront(mask);
					moveToFront(speaker);
					speaker.transformMatrix.appendTransform(0,0,1,1,0,0,0,0,0);
				}	
			else if (action != undefined && action == "swap2") {			
					var mask = getMask(speaker, emotion);
					moveToBack(mask);
					moveToBack(speaker);
					speaker.transformMatrix.appendTransform(177,0,1,1,0,0,0,0,0);
				}
			else if (action != undefined && action == "swap3") {			
					var mask = getMask(speaker, emotion);
					moveToBack(mask);
					moveToBack(speaker);
					speaker.transformMatrix.appendTransform(250,0,-1,1,0,0,0,427,0);
				}	
			else if (action != undefined && action == "swap4") {			
					var mask = getMask(speaker, emotion);
					moveToFront(mask);
					moveToFront(speaker);
					speaker.transformMatrix.appendTransform(427,0,-1,1,0,0,0,427,0);
				}
				
			//ENTER	
			else if (action != undefined && action == "enter1") {
					var mask = getMask(speaker, emotion);
					characters.push([speaker, mask]);
					moveToFront(mask);
					moveToFront(speaker);
					speaker.alpha = 1;
					speaker.transformMatrix.appendTransform(-300,0,1,1,0,0,0,0,0);
					createjs.Tween.get(speaker.transformMatrix, {loop:false}).to({ tx: 0}, 1000, createjs.Ease.getPowInOut(4));
					
				}	
			else if (action != undefined && action == "enter2") {			
					var mask = getMask(speaker, emotion);
					characters.push([speaker, mask]);
					moveToBack(mask);
					moveToBack(speaker);
					console.log("ARRAY :", characters);
					speaker.alpha = 1;
					speaker.transformMatrix.appendTransform(-300,0,1,1,0,0,0,0,0);
					createjs.Tween.get(speaker.transformMatrix, {loop:false}).to({ tx: 177}, 1000, createjs.Ease.getPowInOut(4));
				}
			else if (action != undefined && action == "enter3") {			
					var mask = getMask(speaker, emotion);
					characters.push([speaker, mask])
					moveToBack(mask);
					moveToBack(speaker);
					speaker.alpha = 1;
					speaker.transformMatrix.appendTransform(727,0,-1,1,0,0,0,427,0);
					createjs.Tween.get(speaker.transformMatrix, {loop:false}).to({ tx: 677}, 1000, createjs.Ease.getPowInOut(4));
				}
			else if (action != undefined && action == "enter4") {			
					var mask = getMask(speaker, emotion);
					characters.push([speaker, mask])
					moveToFront(mask);
					moveToFront(speaker);
					speaker.alpha = 1;
					speaker.transformMatrix.appendTransform(727,0,-1,1,0,0,0,427,0);
					createjs.Tween.get(speaker.transformMatrix, {loop:false}).to({ tx: 854}, 1000, createjs.Ease.getPowInOut(4));
				}	
				
			//EXIT	
			else if (action != undefined && action == "exit") {
					createjs.Tween.get(speaker, {loop:false}).to({alpha: 0 }, 1000);
					
					for(var i=0; i<characters.length; i++){
						
						if(speaker === characters[i][0]){
							
							characters.splice(i,1);
							
							break;
						}
					}
				}
		
		//updating mask position
		let rows = characters.length;		
		for (let i=0; i<rows; i++){
				let items = characters[i].length
				//console.log("i: ",i,"items: ",items);
				//console.log("speaker :", characters[i][0]);
				
				if (characters[i][0] == speaker){
						//update position of the mask
						console.log("character and mask(updating position):", characters[i]);
						characters[i][1].transformMatrix = speaker.transformMatrix;
					}
			}		
			//if (action == "enter"){
			//createjs.Tween.get(speaker, {loop:false}).to({alpha: 1 }, 500, createjs.Ease.getPowInOut(4));
			//charactersOnStage.push(speaker);
			//console.log(charactersOnStage);
			//}
			//Highlight characters in a scene
			/*
			if (speaker.alpha != 1){
				
				speaker.instance.filters = [
					new createjs.ColorFilter(1,1,1,1,0,0,0)
				];
				console.log("speaker instance: ", speaker.instance);
				speaker.instance.cache(speaker.instance.x,speaker.instance.y,speaker.instance.width,speaker.instance.height);
				let flt = speaker.instance.filters[0];
				createjs.Tween.get(flt, {loop:false}).to(
					{redMultiplier:0,greenMultiplier:0,blueMultiplier:0 }, 
					500, 
					createjs.Ease.getPowInOut(4)
				);
				//createjs.Tween.get(speaker, {loop:false}).to({alpha: 1 }, 500, createjs.Ease.getPowInOut(4));
				}
				*/
				
			//for dimming
			for (let i=0; i<rows; i++){
				let items = characters[i].length
				//console.log("i: ",i,"items: ",items);
				//console.log("speaker :", characters[i][0]);
				
				if (characters[i][0] != speaker && characters[i][1].alpha == 0){
						createjs.Tween.get(characters[i][1], {loop:false}).to({alpha: 0.5 }, 500, createjs.Ease.getPowInOut(4));
					}
					
					else if (characters[i][0] == speaker && characters[i][1].alpha == 0.5){
							createjs.Tween.get(characters[i][1], {loop:false}).to({alpha: 0 }, 500, createjs.Ease.getPowInOut(4));
						}
		//		for (let n=0; n<items; n++){
		//			console.log("item in the array: ",characters[i][n])
		//			if (characters[i][n] != speaker && characters[i][n].alpha == 0){
		//			createjs.Tween.get(characters[i][n], {loop:false}).to({alpha: 0.5 }, 500, createjs.Ease.getPowInOut(4));
		//			}
		//		}
			}
			/*
			for (let x of characters) {
				if (x != speaker && x.alpha == 0){
					createjs.Tween.get(x, {loop:false}).to({alpha: 1 }, 500, createjs.Ease.getPowInOut(4));
					}
			}
			*/
			//end of dimming and higlighting
		
		
			//This is where we were work with the dynamic text box
			currentTextBlock = textBlocks[currentTextBlockIndex][TEXT]; // set the textj
			
			if (currentTextBlock == undefined) return;
			
			var idx = 0;
			var string = "";
			//create timer to print text letter by letter
			var timerFunctionReference = setInterval(letterByLetter ,50);
		
			
			function letterByLetter() {
				string += currentTextBlock[idx++];
				//var typewriter = createjs.Sound.play("typewritersound");
				//typewriter.on("complete", this.handleComplete, this);
				//typewriter.volume = 1;
				if(string.length > 0) removeEventListener("click", nextTextBlock);
				if(idx >= currentTextBlock.length){ clearInterval(timerFunctionReference);
				addEventListener("click", nextTextBlock);}
				console.log(string);
				updateText(string);
			}
			console.log(currentTextBlock)
			currentTextBlockIndex++; //increases the index by 1
			if(currentTextBlockIndex >= textBlocks.length){ 
				currentTextBlockIndex = 0; 
					}	
			//addEventListener("click", nextTextBlock);
			if(string.length == currentTextBlock.length) addEventListener("click", nextTextBlock);
			return currentTextBlock;
		}
		console.log(currentTextBlockIndex);
		
				
		rt = this.rpgText;
		console.log(rt);
		function updateText(msg){
			
			rt.text = msg;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(1));

	// TEACHERstand
	this.teacher = new lib.TEACHER();
	this.teacher.name = "teacher";
	this.teacher.setTransform(153,404,1,1,0,0,0,240,427);
	this.teacher._off = true;
	this.teacher.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.teacher.cache(-2,-2,484,858);

	this.timeline.addTween(cjs.Tween.get(this.teacher).wait(16).to({_off:false},0).wait(1));

	// ELIJAHstand
	this.elijah = new lib.ELIJAH();
	this.elijah.name = "elijah";
	this.elijah.setTransform(155,375,1,1,0,0,0,240,427);
	this.elijah._off = true;
	this.elijah.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.elijah.cache(-2,-2,484,858);

	this.timeline.addTween(cjs.Tween.get(this.elijah).wait(16).to({_off:false},0).wait(1));

	// JOEYlayer
	this.joey = new lib.JOEY();
	this.joey.name = "joey";
	this.joey.setTransform(427,240,1,1,0,0,0,427,240);
	this.joey._off = true;
	this.joey.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.joey.cache(-2,-2,858,484);

	this.timeline.addTween(cjs.Tween.get(this.joey).wait(16).to({_off:false},0).wait(1));

	// MINDYlayer
	this.mindy = new lib.MINDY();
	this.mindy.name = "mindy";
	this.mindy._off = true;
	this.mindy.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.mindy.cache(-2,-2,858,484);

	this.timeline.addTween(cjs.Tween.get(this.mindy).wait(16).to({_off:false},0).wait(1));

	// BILLYlayer
	this.billy = new lib.BILLY();
	this.billy.name = "billy";
	this.billy.setTransform(427,240,1,1,0,0,0,427,240);
	this.billy._off = true;
	this.billy.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.billy.cache(-2,-2,858,484);

	this.timeline.addTween(cjs.Tween.get(this.billy).wait(16).to({_off:false},0).wait(1));

	// TORINdisgusted
	this.torindisgusted = new lib.TORINdisgusted();
	this.torindisgusted.name = "torindisgusted";
	this.torindisgusted._off = true;
	this.torindisgusted.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.torindisgusted.cache(-2,-2,305,484);

	this.timeline.addTween(cjs.Tween.get(this.torindisgusted).wait(16).to({_off:false},0).wait(1));

	// TORINlayer
	this.torin = new lib.TORIN();
	this.torin.name = "torin";
	this.torin._off = true;
	this.torin.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.torin.cache(-2,-2,858,484);

	this.timeline.addTween(cjs.Tween.get(this.torin).wait(16).to({_off:false},0).wait(1));

	// Layer_1
	this.rpgText = new cjs.Text("", "25px 'Pixellari'");
	this.rpgText.name = "rpgText";
	this.rpgText.lineHeight = 27;
	this.rpgText.lineWidth = 376;
	this.rpgText.parent = this;
	this.rpgText.setTransform(237,345.1);
	this.rpgText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rpgText).wait(16).to({_off:false},0).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABUC5IghAAIAAghIgiAAIAAgiIghAAIAAgiIgiAAIAAAiIAAAiIAAAhIghAAIgiAAIAAghIAAgiIAAgiIAAgiIAAghIAAghIAAgiIAAgiIAAghIAAgiIAAgiIAiAAIAhAAIAAAiIAAAiIAAAhIAAAiIAAAiIAAAhIAiAAIAAghIAhAAIAAgiIAiAAIAAgiIAhAAIAiAAIAAAiIAAAiIgiAAIAAAhIghAAIAAAhIAAAiIAhAAIAAAiIAiAAIAAAiIAAAhg");
	this.shape.setTransform(456.825,233.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiCHIgiAAIghAAIgiAAIAAgiIghAAIAAgiIAAghIAAgiIAAghIAAgiIAAghIAhAAIAAgiIAiAAIAhAAIAiAAIAhAAIAAAiIAiAAIAAAhIAAAiIgiAAIghAAIAAgiIgiAAIghAAIAAAiIAAAhIAAAiIAAAhIAhAAIAiAAIAAghIAhAAIAiAAIAAAhIAAAiIgiAAIAAAig");
	this.shape_1.setTransform(431.525,238.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAC5IghAAIAAghIAAgiIAAgiIAAgiIAAghIAAghIAAgiIAAgiIAhAAIAiAAIAAAiIAAAiIAAAhIAAAhIAAAiIAAAiIAAAiIAAAhgAAAh1IghAAIAAgiIAAgiIAhAAIAiAAIAAAiIAAAig");
	this.shape_2.setTransform(411.275,233.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAC5IghAAIAAghIAAgiIAAgiIAAgiIAAghIAAghIAAgiIAAgiIAAghIAAgiIAAgiIAhAAIAiAAIAAAiIAAAiIAAAhIAAAiIAAAiIAAAhIAAAhIAAAiIAAAiIAAAiIAAAhg");
	this.shape_3.setTransform(397.775,233.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiCHIgiAAIghAAIgiAAIAAgiIghAAIAAgiIAAghIAAgiIAAghIAAgiIAAghIAhAAIAAgiIAiAAIAhAAIAiAAIAhAAIAAAiIAiAAIAAAhIAAAiIgiAAIghAAIAAgiIgiAAIghAAIAAAiIAAAhIAAAiIAAAhIAhAAIAiAAIAAghIAhAAIAiAAIAAAhIAAAiIgiAAIAAAig");
	this.shape_4.setTransform(377.525,238.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(16));

	// fade
	this.instance = new lib.fadebox();
	this.instance.setTransform(427,240,1,1,0,0,0,427,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},16).wait(1));

	// textbox
	this.instance_1 = new lib.textbox();
	this.instance_1.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17));

	// bg
	this.instance_2 = new lib.classroomcolor2();
	this.instance_2.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(340,188,515,643);
// library properties:
lib.properties = {
	id: '06640C9D9A9FC3429B5716C4058E9D3A',
	width: 854,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/scene3_atlas_1.png", id:"scene3_atlas_1"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['06640C9D9A9FC3429B5716C4058E9D3A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;