var createCounter = function(init) {

    let count = init
    return {
      increment:function(){
        return ++init;
      },
      decrement: function(){
        return --init;
      },
      reset:function(){
       return init = count
      }
      
    } 
};


const counter = createCounter(5)
  console.log(counter.increment()); // 6
  console.log(counter.reset()); // 5
  console.log(counter.decrement()); // 4
 