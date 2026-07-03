import { readFileSync } from "fs"

interface UserData {
  name: string
  age: number
  hobbies: string[]
}

class User {
  constructor(private data: UserData) {}

  introduce(): void {
    console.log(`Hi, I'm ${this.data.name} and I'm ${this.data.age} years old.`)
  }

  listHobbies(): void {
    console.log("My hobbies:")
    for (const skill of this.data.hobbies) {
      console.log(" - " + skill)
    }
  }
}

function loadUser(path: string): User {
  const raw = readFileSync(path, "utf-8")
  const data: UserData = JSON.parse(raw)
  return new User(data)
}

const user = loadUser("user.json")
user.introduce()
user.listHobbies()