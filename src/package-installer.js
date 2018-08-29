class DependencySorter {
  constructor() {
    this.packages = {};
    this.visited = {};
    this.done = {};
    this.installOrder = [];
    this.cycle = false;
  }

  getOutput(array) {
    this.resetVars();
    this.definePackages(array);
    this.depthFirstSearch();
    if (this.cycle) {
      return 'Error - dependencies contain cycles.';
    }
    return this.installOrder.join(', ');
  }

  resetVars() {
    this.packages = {};
    this.visited = {};
    this.done = {};
    this.installOrder = [];
    this.cycle = false;
  }

  definePackages(array) {
    array.forEach((string) => {
      const onePackageAndDependency = string.split(":");
      const packageName = onePackageAndDependency[0].trim();
      const dependency = onePackageAndDependency[1].trim();
      this.packages[packageName] = dependency;
      this.visited[packageName] = false;
    });
  }
  depthFirstSearch() {
    for(let packageName in this.packages) {
      if (!this.visited[packageName]) {
        this.explore(packageName);
      }
    }
  }
  explore(packageName) {
    this.visited[packageName] = true;
    const dependency = this.packages[packageName];
    if (dependency) {
      if (!this.visited[dependency]) {
        this.explore(dependency);
      }
      else if (!this.done[dependency]) {
        this.cycle = true;
      }
    }
    this.done[packageName] = true;
    this.installOrder.push(packageName);
  }
}

module.exports = {
  DependencySorter,
}
