function scan(arg){
 let can=0, c=0;
 while(can<arg.length){
    if(arg[can]==='contraband'){
      c++;
    }else{
      //copy
      if(arg[can]==='logan' || arg[can]==='lOGAN' ){
        c--;
      }
    }
   can++;
 }
 return c;
}