/*jshint esversion: 6 */
(()=>{
    this.pack = {};
    fetch('./package.json')
    .then(function(response){
        return response.json();
    })
    .then(function(myJson) {
        console.log(this);
        this.pack = myJson;
        console.log(this.pack);
        document.querySelector('h1').innerHTML = this.pack.name;
        document.querySelector('.description').innerHTML = this.pack.name  + " v" + this.pack.version + " - " + this.pack.description;
    });
})();