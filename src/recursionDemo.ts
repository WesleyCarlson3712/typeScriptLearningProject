// A simple recursive function to calculate the factorial of a number
function factorial(n: number): number {
  if (n <= 1) return 1
  return n * factorial(n - 1)
}

// the Node type represents a node in a tree structure, with a name and an array of child nodes
type Node = {
  name: string
  children: Node[]
}

// prints the tree structure of nodes, with indentation to represent depth
function printTree(node: Node, indent: string = ""): void {
  console.log(indent + node.name)
  for (const child of node.children) {
    printTree(child, indent + "  ")
  }
}
 
// Example tree structure to demonstrate the printTree function
const root: Node = {
  name: "parent",
  children: [
    { name: "child1", children: [
        { name: "grandchild1", children: [] },
    ] },
    { name: "child2", children: [
        { name: "grandchild2", children: [
            { name: "greatgrandchild1", children: [] },
            { name: "greatgrandchild2", children: [
                { name: "greatgreatgrandchild1", children: [] },
            ] },
        ] },
        { name: "grandchild3", children: [
            { name: "greatgrandchild3", children: [] },
        ] },
    ] }
  ]
}

// The main function that demonstrates the use of the factorial and printTree functions
function main(): void {
  const num: number = 6
  console.log(`Factorial of ${num} is ${factorial(num)}`)
  printTree(root)
}

main()