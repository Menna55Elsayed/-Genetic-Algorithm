//Knapseck 
let items= [[1,2],[2,4],[3,4],[4,5],[5,7],[6,9]];
const [maxWeight,popSize,mutProb,genes]=[10,10,.2,10];
//generating population
function generatePopulation(size, items) {
  return Array.from({ length: size }, () => 
    items.map(() => Math.round(Math.random())));}
//fitness Funcation
const fitness = (Chromosome)=>{
const status = Chromosome.reduce((acc,gene,i)=>{
  if(gene){
    acc.w+=items[i][0];
    acc.v+=items[i][1];
  }return acc},{w:0,v:0}) 
return status.w<=maxWeight?status.v:0}
//selectin 
const selection= (pop) => {
    const fits = pop.map(c => fitness(c)); 
    const total = fits.reduce((a, b) => a + b, 0); 
    const pick = () => {
        let r = Math.random() * total; 
        return pop.find((_, i) => (r -= fits[i]) < 0) || pop[0];
    }; return [pick(), pick()];};
//crosover
const crossover = (parent1, parent2) => {
    const point = Math.floor(Math.random() * (parent1.length - 1)) + 1; 
  return [
    [...parent1.slice(0, point), ...parent2.slice(point)],
    [...parent2.slice(0, point), ...parent1.slice(point)]];};  
//mutation  
function mutation(chromosome) {
  const point = Math.floor(Math.random() * chromosome.length);
  chromosome[point] = 1 - chromosome[point];
  return chromosome;}
//get the best chromosome
function getBestChromosome(population, items, maxWeight) {
  const fitnessValues = population.map(c => fitness(c, items, maxWeight));
  let bestIndex = 0;
  for (let i = 1; i < fitnessValues.length; i++) {
    if (fitnessValues[i] > fitnessValues[bestIndex]) {
      bestIndex = i;  } }
  return {chromosome: population[bestIndex],fitness: fitnessValues[bestIndex] };}
// Initialize Population
const population = generatePopulation(6, items);
console.log(`Populatin sample is :\n `,population);
//evaluatin 
const evaluatin = (population,geneNum,mutationProb)=>{
  for(let g =0 ;g<geneNum;g++){
    let[parent1,parent2]=selection(population);
    let [child1,child2]=crossover(parent1,parent2)
    [child1,child2]=[child1,child2].map(child=>Math.random()<mutationProb?mutation([...child]):child)
    population.splice(0,2,child1,child2)
    let {best , fitnefss}=getBestChromosome(population)
    console.log(`Generation ${g + 1} Best Fitness = ${bestFit}`);}
return getBestChromosome(population)}
//final best solu
const finalBest = getBestChromosome(population, items, maxWeight);
const { totalWeight, totalValue } = finalBest.chromosome.reduce(
  (acc, gene, i) => {
    if (gene === 1) {
      acc.totalWeight += items[i][0]; // الوزن
      acc.totalValue += items[i][1];  // القيمة
    }return acc;},{ totalWeight: 0, totalValue: 0 });

console.log("\nBest chromosome:", finalBest.chromosome);
console.log("Best fitness:", finalBest.fitness);
console.log("Total weight:", totalWeight);
console.log("Total value:", totalValue);
console.log(evaluatin(population))