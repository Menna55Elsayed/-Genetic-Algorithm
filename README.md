# -Genetic-Algorithm
JavaScript implementation of a Genetic Algorithm (GA) designed to solve the classic 0/1 Knapsack Problem. The goal is to select a subset of items with specific weights and values to maximize the total value without exceeding a maximum weight capacity.

Key Features
Population Initialization: Randomly generates an initial set of potential solutions (chromosomes).

Fitness Evaluation: Calculates the total value of items in a chromosome, returning 0 if the weight exceeds the limit.

Roulette Wheel Selection: Selects parents based on their fitness probability to ensure stronger solutions pass on their traits.

Single-Point Crossover: Combines genetic material from two parents to create offspring.

Random Mutation: Introduces genetic diversity by flipping bits (0 to 1 or vice versa) based on a defined mutation probability.

Evolutionary Loop: Iteratively evolves the population over multiple generations to converge on an optimal or near-optimal solution.

🛠️ Technical Implementation
The script utilizes modern JavaScript ES6+ features such as spread operators, destructuring, and higher-order array functions (map, reduce, find) to keep the code clean and efficient.

📊 How it Works
Define Items: Each item is represented as [weight, value].

Parameters: Set maxWeight, populationSize, and mutationProbability.

Run: The evaluatin function simulates the biological process of evolution to find the best item combination.
