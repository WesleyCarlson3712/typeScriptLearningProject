class Character {
  protected name: string
  protected health: number
  protected damage: [number, number]

  constructor(name: string = "Unknown", health: number = 0, damage: [number, number] = [0, 0]) {
    this.name = name
    this.health = health
    this.damage = damage
  }
  attack(target: Character): void {
    let damage: number = Math.floor(Math.random() * (this.damage[1] - this.damage[0] + 1)) + this.damage[0]
    console.log(this.name + " attacks " + target.getName())
    target.takeDamage(damage)
  }
  takeDamage(amount: number): void {
    amount = Math.floor(amount)
      console.log(this.name + " takes " + amount + " damage")
    this.health -= amount
  }
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

class Human extends Character {
    private armor: number
    
    constructor(name: string, health: number, damage: [number, number], armor: number = 0) {
        super(name, health, damage)
        this.armor = armor
    }
    
    takeDamage(amount: number): void {
        const damageAfterArmor = amount * (1 - this.armor / 100)
        super.takeDamage(damageAfterArmor > 0 ? damageAfterArmor : 0)
    }
}

class Monster extends Character {
    private regeneration: [number, number]
    
    constructor(name: string, health: number, damage: [number, number], regeneration: [number, number] = [0, 0]) {
        super(name, health, damage)
        this.regeneration = regeneration
    }
    regenerate(): void {
        let regen: number = Math.floor(Math.random() * (this.regeneration[1] - this.regeneration[0] + 1)) + this.regeneration[0]
        console.log(this.name + " regenerates " + regen + " health")
        this.health += regen
    }
}

function gameOver(winner: Character, loser: Character): void {
    console.log(winner.getName() + " defeats " + loser.getName())
}

function displayHealth(character: Character): void {
    console.log(character.getName() + "'s health: " + character.getHealth())
}

const hero = new Human("Hero", 100, [10, 20], 15)
const monster = new Monster("Troll", 100, [5, 25], [1, 5])
let turn: number = 1

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
if(hero.isAlive())
    gameOver(hero, monster)
else
    gameOver(monster, hero)

