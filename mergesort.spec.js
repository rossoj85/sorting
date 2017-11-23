describe('split', function(){
  it('splits an even array in half',()=>{
    expect( split([1,2,3,4]) ).toEqual( [ [1,2],[3,4] ] )

  })
})


describe('merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  
  });
})  

describe('merge Sort', function(){
  it('correctly sorts an array of one', function(){
    expect( mergeSort([4]) ).toEqual( [4] );
    expect( mergeSort([7]) ).toEqual( [7] );
    expect( mergeSort([-2]) ).toEqual( [-2] );
  });
})  

describe('merge Sort',()=>{
  it('correctly sorts arrays of various lengths',()=>{
    expect (mergeSort([2,1,3]) ).toEqual( [1,2,3] )
    expect (mergeSort([7,11,10,20]) ).toEqual( [7,10,11,20] )
    expect (mergeSort([3,-3,10,0,11,4]) ).toEqual( [-3,0,3,4,10,11] )
    expect (mergeSort(['x','z','n','c','k','j']) ).toEqual( [ 'c', 'j', 'k', 'n', 'x', 'z' ] )
  
  });
  
})

describe('merge Sort',()=>{
it('correctly sorts an array of letters',()=>{
  expect (mergeSort(['x','z','n','c','k','j']) ).toEqual( [ 'c', 'j', 'k', 'n', 'x', 'z' ] )
});
})

