// Soldier
class Soldier {
    constructor(health, strength) {
    this.health=health,
    this.strength=strength;
    }
    attack(){
        return this.strength}


    receiveDamage(domage){
        this.health=this.health-domage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health, strength){
        super(health, strength);
        this.name=name;
    }
   
   receiveDamage(domage){
    this.health-=domage;
    if(this.health>0){
        return(`${this.name} has received ${domage} points of damage`) } 
        else {
        return(`${this.name} has died in act of combat`) }
    }

    battleCry() {
        return (`Odin Owns You All!`)
    }
}
// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength)
    }
    receiveDamage(domage){
        this.health-=domage;
        if(this.health>0){
            return(`A Saxon has received ${domage} points of damage`) } 
            else {
            return(`A Saxon has died in combat`) }
        }
    
    // receiveDamage()
} 

// War
class War {
    constructor(){
    this.vikingArmy=[],
    this.saxonArmy=[]; }
    
addViking(Viking){
        this.vikingArmy.push(Viking)
    }


addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
    }
    
vikingAttack(){
    let rendomSaxonIndex= Math.floor(Math.random()*this.saxonArmy.length)
    let rendomVikingIndex= Math.floor(Math.random()*this.vikingArmy.length)

    let rendomSaxon = this.saxonArmy[rendomSaxonIndex]
    let rendomViking=this.vikingArmy[rendomVikingIndex]

    let domage =rendomSaxon.receiveDamage(rendomViking.attack())
    if(rendomSaxon.health <=0){
        this.saxonArmy.splice(rendomSaxonIndex,1)
    }
    return domage
}
saxonAttack(){
    let rendomSaxonIndex2= Math.floor(Math.random()*this.saxonArmy.length)
    let rendomVikingIndex2= Math.floor(Math.random()*this.vikingArmy.length)

    let rendomSaxon2 = this.saxonArmy[rendomSaxonIndex2]
    let rendomViking2=this.vikingArmy[rendomVikingIndex2]

    let domage2 =rendomViking2.receiveDamage(rendomSaxon2.attack())
    if(domage2.includes('died')){
        this.vikingArmy.splice(rendomVikingIndex2,1)
    }
    return domage2
}


showStatus(){
    
}

}
