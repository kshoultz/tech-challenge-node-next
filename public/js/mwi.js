var mwi = {};
mwi.candidates = [];
mwi.manifest = null;
mwi.candidates.push(['Matt Johnson','Bart Paden','Ryan Doss','Jared Malcolm']);
mwi.candidates.push(['Matt Johnson','Bart Paden','Jordan Heigle','Tyler Viles']);
mwi.mergeCandidates = function(array1, array2){
    return [...new Set([...array1,...array2])];
};
mwi.generateCandidatesList = function(){
    if (mwi.manifest) {
        alert('Thank you, but the list has already been made.');
    } else {
        const ul = document.getElementById('mwi-list');
        mwi.manifest = mwi.mergeCandidates(mwi.candidates[0], mwi.candidates[1]);
        mwi.manifest.forEach(function(mwiName, i) {
            let li = document.createElement('li');
            li.innerHTML = '<a href="#mwi-bottom">'+mwiName+'</a>';
            ul.appendChild(li);
        });
    }
};