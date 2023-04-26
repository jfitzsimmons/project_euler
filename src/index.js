const solutions = document.getElementById('solutions')
const preStrings = []

// problem 1
let total = 0
for (let i = 1000; i--; ) total += i % 3 === 0 || i % 5 === 0 ? i : 0

preStrings.push(`let total = 0
for (i = 1000; i--; ) total += i % 3 === 0 || i % 5 === 0 ? i : 0

// total: ${total}`)

// problem 2
let [solution, a, b] = [0, 1, 2]
while (b <= 4000000) {
  const tmp = a
  ;[solution, a, b] = [(solution += b % 2 === 0 ? b : 0), 0 + b, tmp + b]
}

preStrings.push(`let [solution, a, b] = [0, 1, 2]
while (b <= 4000000) {
  const tmp = a
  ;[solution, a, b] = [(solution += b % 2 === 0 ? b : 0), 0 + b, tmp + b]
}

// total: ${solution}`)

// problem 3
let n = 600851475143
while (n % 2 === 0) n = Math.floor(n / 2)
for (let i = 3; i <= Math.sqrt(n); i += 2)
  while (n % i === 0) n = Math.floor(n / i)

// problem 4
// let n = 999
//while (n % 2 === 0) n = Math.floor(n / 2)
// needs to have a nested loop
//maybe use similar logic where we do 10 numbers at a time
/**
 *when you find the solution 
 check where in the iteration you are (i) 
 start iteration again at 999 but always multiply by solution.
 see if u get a larger palindrome??? 
 * 
 */
solution = 0
for (let i = 999; i--; ) {
  // don't need to check below 100!!! testjpf
  let ns = [[...(i * i).toString()], [...(i * (i - 1)).toString()]]
  //n = [...'90139']
  ns.every((n, j) =>
    n.slice(0, Math.floor(n.length / 2)).every((c, i, arr) => {
      console.log(
        `n.length: ${
          n.length
        } | i: ${i} | j: ${j} | c: ${c} | n[n.length - i]: ${
          n[n.length - (i + 1)]
        }`,
      )
      if (c !== n[n.length - (i + 1)]) {
        return false
      } else {
        if (i + 1 === arr.length) {
          console.log('n[n.length - (i + 1)]', n[n.length - (i + 1)])
          console.log('c', c)
          solution = n.join('')
          console.log(
            `SOLUTION||| n.length: ${
              n.length
            } | i: ${i} | j: ${j} | c: ${c} | n[n.length - i]: ${
              n[n.length - (i + 1)]
            }`,
          )
          return true
        }
      }
    }),
  )
  if (solution > 0) break
}

console.log('solution4', solution)

preStrings.forEach((s) => {
  const pre = document.createElement('PRE')
  pre.innerHTML = s
  solutions.appendChild(pre)
})
