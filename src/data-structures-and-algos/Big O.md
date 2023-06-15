## Big O of Objects

Good for:

 * When you don't need order
 * When you need fast access / insertion and removal

Insertion = 0(1)
Removal = 0(1)
Searching = 0(n)
Access = 0(1)

Object.keys = O(n)
Object.values = 0(n)
Object.entries = 0(n)
Object.hasOwnProperty = 0(1)

## Big O of Arrays

Good for:

 * When you need order
 * When you need fast access but insertion and removal depends

Insertion = depends
    - inserting at end of array is 0(1)
    - inserting at beginning of array is where it becomes problematic as we need to re-index 0(n)
      for a 5 element array this is ok, but for 1000s re-indexing is not trivial
    - removing from beginning is problematic
    - push and pop always better than shift and unshift
Searching = 0(n)
Access = 0(1)

push = 0(1)
pop = 0(1)
shift = 0(n)
unshift = 0(n)
concat = 0(n)
slice = 0(n)
splice = 0(n)
sort = 0(n * log n)
forEach, map, filter, reduce, ...etc = 0(n)
