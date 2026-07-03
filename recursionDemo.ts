function factorial(n: number): number {
  if (n <= 1) return 1
  return n * factorial(n - 1)
}


type Node = {
  name: string
  children: Node[]
}

function printTree(node: Node, indent: string = ""): void {
  console.log(indent + node.name)
  for (const child of node.children) {
    printTree(child, indent + "  ")
  }
}
 
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


function main(): void {
  const num: number = 5
  console.log(`Factorial of ${num} is ${factorial(num)}`)
  printTree(root)
}

main()