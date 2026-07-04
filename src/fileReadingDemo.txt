import { readFileSync } from "fs"
import promptSync from "prompt-sync"

const prompt = promptSync()
// Define an interface for the expected structure of the JSON data
interface UserData {
  name: string
  age: number
  hobbies: string[]
}

// Define a User class that takes UserData and provides methods to introduce the user and list their hobbies
class User {
  constructor(private data: UserData) {}

  // introduces the user by name and age
  introduce(): void {
    console.log(`Hi, I'm ${this.data.name} and I'm ${this.data.age} years old.`)
  }

  // lists the user's hobbies
  listHobbies(): void {
    console.log("My hobbies:")
    for (const hobby of this.data.hobbies) {
      console.log(" - " + hobby)
    }
  }
}

// loads user data from a JSON file, validates it, and returns a User instance or null if there was an error
function loadUser(path: string): User | null {
  try {
    // Try reading the file
    const raw = readFileSync(path, "utf-8")

    // Try parsing JSON
    const data: UserData = JSON.parse(raw)

    // Validate required fields
    if (!data.name || !data.age || !Array.isArray(data.hobbies)) {
      console.log("Error: JSON file is missing required fields.")
      return null
    }

    return new User(data)
  } catch (err) {
    console.log("Error loading file:", (err as Error).message)
    return null
  }
}

// prompt the user for a filename, load the user data, and if successful, introduce the user and list their hobbies
const filename = prompt("Enter the JSON filename to load: ")

const user = loadUser(filename)

if (user) {
  user.introduce()
  user.listHobbies()
} else {
  console.log("Could not load user data.")
}