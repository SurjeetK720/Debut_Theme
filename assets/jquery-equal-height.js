$.fn.jQueryEqualHeight=function(innerDiv){if(innerDiv==undefined){innerDiv='.grid-product';}
var currentTallest=0,currentRowStart=0,rowDivs=new Array(),topPosition=0;$(this).each(function(){$(this).find(innerDiv).height('auto')
topPosition=$(this).position().top;if(currentRowStart!=topPosition){for(currentDiv=0;currentDiv<rowDivs.length;currentDiv++){rowDivs[currentDiv].find(innerDiv).height(currentTallest);}
rowDivs.length=0;currentRowStart=topPosition;currentTallest=$(this).find(innerDiv).height()+70;rowDivs.push($(this));}else{rowDivs.push($(this));currentTallest=(currentTallest<$(this).find(innerDiv).height())?($(this).find(innerDiv).height()):(currentTallest);}
for(currentDiv=0;currentDiv<rowDivs.length;currentDiv++){rowDivs[currentDiv].find(innerDiv).height(currentTallest);}});};