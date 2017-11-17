describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    
    });
  })  

  describe('Bubble Sort', function(){
    it('correctly sorts an array of one', function(){
      expect( bubbleSort([4]) ).toEqual( [4] );
      expect( bubbleSort([7]) ).toEqual( [7] );
      expect( bubbleSort([-2]) ).toEqual( [-2] );
    });
  })  

  describe('Bubble Sort',()=>{
    it('correctly sorts arrays of various lengths',()=>{
      expect (bubbleSort([2,1,3]) ).toEqual( [1,2,3] )
      expect (bubbleSort([7,11,10,20]) ).toEqual( [7,10,11,20] )
      expect (bubbleSort([3,-3,10,0,11,4]) ).toEqual( [-3,0,3,4,10,11] )
      expect (bubbleSort(['x','z','n','c','k','j']) ).toEqual( [ 'c', 'j', 'k', 'n', 'x', 'z' ] )
    
    });
    
  })

  describe('Bubble Sort',()=>{
  it('correctly sorts an array of letters',()=>{
    expect (bubbleSort(['x','z','n','c','k','j']) ).toEqual( [ 'c', 'j', 'k', 'n', 'x', 'z' ] )
  });
})

  describe ('Bubble Sort While',()=>{
    it('handles an empty array', ()=>{
      expect( bubbleSortWhile([]) ).toEqual( [] );
    });
    it('correctly sorts an array of one', function(){
      expect( bubbleSortWhile([4]) ).toEqual( [4] );
      expect( bubbleSortWhile([7]) ).toEqual( [7] );
      expect( bubbleSortWhile([-2]) ).toEqual( [-2] );
    });
    it('correctly sorts arrays of various lengths',()=>{
      expect (bubbleSortWhile([2,1,3]) ).toEqual( [1,2,3] )
      expect (bubbleSortWhile([7,11,10,20]) ).toEqual( [7,10,11,20] )
      expect (bubbleSortWhile([3,-3,10,0,11,4]) ).toEqual( [-3,0,3,4,10,11] )
      expect (bubbleSortWhile(['x','z','n','c','k','j']) ).toEqual( [ 'c', 'j', 'k', 'n', 'x', 'z' ] )
    });
    it('correctly sorts an array of letters',()=>{
      expect (bubbleSortWhile(['x','z','n','c','k','j']) ).toEqual( [ 'c', 'j', 'k', 'n', 'x', 'z' ] )
    });

  })

  describe('Bubble Sort Recursive',()=>{
    it('handles an empty array', ()=>{
      expect( bubbleSortRecursive([]) ).toEqual( [] );
    });
    it('correctly sorts an array of one', function(){
      expect( bubbleSortRecursive([4]) ).toEqual( [4] );
      expect( bubbleSortRecursive([7]) ).toEqual( [7] );
      expect( bubbleSortRecursive([-2]) ).toEqual( [-2] );
    });
    it('correctly sorts arrays of various lengths',()=>{
      expect (bubbleSortRecursive([2,1,3]) ).toEqual( [1,2,3] )
      expect (bubbleSortRecursive([7,11,10,20]) ).toEqual( [7,10,11,20] )
      expect (bubbleSortRecursive([3,-3,10,0,11,4]) ).toEqual( [-3,0,3,4,10,11] )
      expect (bubbleSortRecursive(['x','z','n','c','k','j']) ).toEqual( [ 'c', 'j', 'k', 'n', 'x', 'z' ] )
    });
    it('correctly sorts an array of letters',()=>{
      expect (bubbleSortRecursive(['x','z','n','c','k','j']) ).toEqual( [ 'c', 'j', 'k', 'n', 'x', 'z' ] )
    });


  })