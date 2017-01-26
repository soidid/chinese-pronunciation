var han = require('han');

window.toPinyin = (input)=> {
	var r = han.pinyin(input);
	/*
		han will return 3 types of pinyin, for example, "大"
		"dà"
		"dài"
		"tài",
		for now we only use the first one.
	*/
   var final = [];
   final = r.map((i)=>{
   	return i[0]
   })
   return final
}
