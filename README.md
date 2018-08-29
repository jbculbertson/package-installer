# Package Manager

This package applies a topological sort to an array of packages and dependencies,
 returning a list, sorted so that a package will never be installed before it's dependency.

Example array format:

```
['KittenService: ','Leetmeme: Cyberportal','Cyberportal: Ice','CamelCaser:
KittenService','Fraudstream: Leetmeme','Ice: ']
```

Example response format:

```
'KittenService, Ice, Cyberportal, Leetmeme, CamelCaser, Fraudstream'
```

If the array contains a cycle, returns an error:

```
'Error - dependencies contain cycles.'
```

## Setup

Install depencies and testing package:

```
npm install
npm install -g mocha
```

## Tests
Run tests with:

```
npm test
```
