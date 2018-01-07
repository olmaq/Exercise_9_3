var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var textChainged = text.replace('Velociraptor', dinosaurUpperCased);

var halfTextChainged = textChainged.slice(0, textChainged.length/2);
console.log(halfTextChainged);