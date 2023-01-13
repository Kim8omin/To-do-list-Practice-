let input = prompt ("what would you like to do?");
const todos= ['Dancing Newjeans','instagram','Blank'];
 while (input !=='quit' && input !=='q'){
   if (input ==='list') {
      console.log('**************')
      for (let i= 0; i<todos.length;i++) {
         console.log(`${i}:${todos[i]}`);
      }
      console.log('**************')
   } else if (input === 'new') {
      const newTodo = prompt ('OK, what is new todos?');
      todos.push (newTodo);
      console.log (`${newTodo} added to the list!`)
   }
   
   input = prompt ("what would you like to do?");
   
 }

 console.log ("OK QUIT THE APP")