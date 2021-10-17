function scan(arg){
 let can=0, c=0;
 while(can<arg.length){
    if(arg[can]==='contraband'){
      c++;
    }
   can++;
 }
 return c;
}