// The character class that we will use as a base for our Human and Monster classes
class Character {
  // attributes are protected so that they can be accessed by subclasses but not from outside the class hierarchy
  protected name: string
  protected health: number
  protected damage: [number, number]

  constructor(name: string = "Unknown", health: number = 0, damage: [number, number] = [0, 0]) {
    this.name = name
    this.health = health
    this.damage = damage
  }
  // calls the takeDamage method of the target character with a random damage value within the character's damage range
  attack(target: Character): void {
    let damage: number = Math.floor(Math.random() * (this.damage[1] - this.damage[0] + 1)) + this.damage[0]
    console.log(this.name + " attacks " + target.getName())
    target.takeDamage(damage)
  }
  // reduces the character's health by the specified amount of damage, ensuring that the health does not drop below zero
  takeDamage(amount: number): void {
    amount = Math.floor(amount)
      console.log(this.name + " takes " + amount + " damage")
    this.health = Math.max(0, this.health - amount)
  }
  // getters
  isAlive(): boolean {
    return this.health > 0
  }
  getHealth(): number {
    return this.health
  }
  getName(): string {
    return this.name
  }
}
// The Human class that extends the Character class. includes armor that reduces incoming damage
class Human extends Character {
    private armor: number
    
    // The constructor takes an additional parameter for armor and initializes it. It also calls the parent class's constructor to initialize the rest of the properties
    constructor(name: string, health: number, damage: [number, number], armor: number = 0) {
        super(name, health, damage)
        this.armor = armor
    }
    // we override the takeDamage method to account for armor. It reduces the incoming damage and calls the parent class's takeDamage method with the reduced damage
      takeDamage(amount: number): void {
        const damageAfterArmor = amount * (1 - this.armor / 100)
        super.takeDamage(damageAfterArmor > 0 ? damageAfterArmor : 0)
    }
}
// The Monster class that extends the Character class. includes regeneration that allows the monster to regain health each turn
class Monster extends Character {
    private regeneration: [number, number]
    
    // The constructor takes an additional parameter for regeneration and initializes it. It also calls the parent class's constructor to initialize the rest of the properties
    constructor(name: string, health: number, damage: [number, number], regeneration: [number, number] = [0, 0]) {
        super(name, health, damage)
        this.regeneration = regeneration
    }
    // we add a new method called regenerate that calculates a random amount of health to regain based on the regeneration range and adds it to the monster's health
    regenerate(): void {
        let regen: number = Math.floor(Math.random() * (this.regeneration[1] - this.regeneration[0] + 1)) + this.regeneration[0]
        console.log(this.name + " regenerates " + regen + " health")
        this.health += regen
    }
}

// handles the end of the game, announcing the winner and loser
function gameOver(winner: Character, loser: Character): void {
    console.log(winner.getName() + " defeats " + loser.getName())
}

// displays the health of a character
function displayHealth(character: Character): void {
    console.log(character.getName() + "'s health: " + character.getHealth())
}

// creates instances of Human and Monster
const hero = new Human("Hero", 100, [10, 20], 15)
const monster = new Monster("Troll", 100, [5, 25], [1, 5])
let turn: number = 1

// main game loop that continues until either the hero or the monster is defeated
while(hero.isAlive() && monster.isAlive()){
    console.log("\nTurn" + turn)
    displayHealth(hero)
    displayHealth(monster)
    console.log()
    hero.attack(monster)
    if(monster.isAlive()){
        monster.attack(hero)
        monster.regenerate()
    }
    turn ++
}
// checks who is alive at the end of the game and calls the gameOver function with the appropriate winner and loser
if(hero.isAlive())
    gameOver(hero, monster)
else
    gameOver(monster, hero)

