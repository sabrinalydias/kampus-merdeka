/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (i=1;i<=100;i++) {
    if(i==2){console.log(i);}
    else{
      for(j=2;j<i;j++){
      
        if(i%j == 0){
        break;
        }
        else{
        if(j==i-1){
          console.log(i);
          }
        }
      }
    }
  }
  
  
  /// Soal - 02
  /// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
  let primeCounter = 0;
  let fiftiethPrime;
  let i = null;
  let j = 2;
  
  while (primeCounter < 50) {
    i++;
    if(i==2){
          primeCounter++;
    }
    else{
     for(j=2;j<i;j++){
      
        if(i%j == 0){
        break;
        }
        else{
        if(j==i-1){
          primeCounter++;
            if(primeCounter==50){
              fiftiethPrime = i;
              console.log(fiftiethPrime);
            } 
          }
        }
      }
    }
  }
  
  /// Soal - 03
  /// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
  let oddCounter = 0;
  let fiftiethOdd;
  let i = 0;
  
  do {
    i++;
    if(i%2==1){
      oddCounter++;
      if(oddCounter==50){
        fiftiethOdd = i;
        console.log(fiftiethOdd);
      }
    }
  } 
  while (oddCounter<50)