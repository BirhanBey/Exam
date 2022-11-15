const Painting = [
    {
        Naam : "Zonnebloemen",
        Canvas: "93x72",
        prijs: 39921750,    
    },
    {
        Naam : "De aardappeleters",
        Canvas: "82x114",
        prijs: 21152154,     
    },
    {
        Naam : "Slaapkamer te Arles",
        Canvas: "61x81",
        prijs: 19127784,     
    }
]
function Oefening_3(namesurname, style) {
    this.namesurname = namesurname;
    this.style = style;
}

Oefening_3.prototype.getName = function(){
    return "<h1>"+this.namesurname+"</h1>";
}
Oefening_3.prototype.getStyle = function(){
    return "<h2>"+this.style+"</h2>";
}
Oefening_3.prototype.getList = function(){
    let list = "<ul>";
    Painting.forEach((k, v) => {
        list += "<li>Naam: <span>"+k.Naam+"</span><br>  Canvas: <em>"+k.Canvas+"</em><br>  Prijs: <strong>"+k.prijs.toLocaleString("nl-NL", {style:"currency", currency:"EUR"});+"</strong>  </li>";
    });
    list += "</ul>";
    return list; 
}
Oefening_3.prototype.addPainting = function(naam,canvas,prijs){
    Painting.push({
        Naam : naam,
        Canvas: canvas,
        prijs: prijs, 
    });
}
Oefening_3.prototype.printHtml = function(){
    return this.getName()+" "+this.getStyle()+" "+this.getList();
}
const voor = new Oefening_3("Vincent van Gogh", "Postimpressionisme");
voor.addPainting("birhan","resmi işte","123123123");

console.log(voor.printHtml ());
