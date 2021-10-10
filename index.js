let chalk = require('chalk');
let read = require('readline-sync');

let score = 0;

let uChalk = chalk.blue;
let qChalk = chalk.redBright;
let aChalk = chalk.green;
let rChalk = chalk.cyan;

let uName = read.question(uChalk('PLEASE ENTER YOUR NAME, USER'));

let choice = read.question(rChalk('DO YOU WANT TO PLAY A QUIZ GAME, '+ uName +' [Y => PLAY or N => QUIT]'));


let quests = [

qChalk("Q1: When did India got its constitution?")+"\n"+aChalk("a. NOV 26" +"\n"+ "b. JAN 26" +"\n"+ "c. JAN 24" +"\n"+ "d. NOV 24") ,

qChalk("Q2: Who gave the speech DO or DIE?")+"\n"+aChalk("a. SUBHASH CHANDRA BOSE" +"\n"+ "b. LAL BAHADUR SHASTRI" +"\n"+ "c. M.GANDHI" +"\n"+ "d. JAWAHARLAL NEHRU") ,

qChalk("Q3: Who was the first viceroy of independent INDIA?")+"\n"+aChalk("a. LORD CORNWALLIS" +"\n"+ "b. LORD CANNING" +"\n"+ "c. WARREN HASTING" +"\n"+ "d. LORD WILLIAM BENTICK") ,

qChalk("Q4: Who was the last viceroy of BRITISH INDIA?")+"\n"+aChalk("a. LORD LOUIS MOUNTBATTEN" +"\n"+ "b. LORD WILLIAM BENTICK" +"\n"+ "c. LORD CORNWALLIS" +"\n"+ "d. LORD CANNING") ,

qChalk("Q5: Who the first woman politician in independent INDIA?")+"\n"+aChalk("a. SUCHETA KRIPALANI" +"\n"+ "b. BEGUM HAZRAT MAHAL" +"\n"+ "c. ACCAMMA CHERIAN" +"\n"+ "d. ANNIE BESANT") ,

qChalk("Q6: In Bengal,the headquarters of EAST INDIA COMPANY were located at")+"\n"+aChalk("a. Fort WILLIAM" +"\n"+ "b. Fort St. GEORGE" +"\n"+ "c. Fort St. DAVID" +"\n"+ "d. none of these") ,

qChalk("Q7: First Governor-General of Bengal was?")+"\n"+aChalk("a. LORD LOUIS MOUNTBATTEN" +"\n"+ "b. LORD WILLIAM BENTICK" +"\n"+ "c. LORD WARREN HASTINGS" +"\n"+ "d. LORD CANNING") ,

qChalk("Q8: Sati was declared illegal and punishable by?")+"\n"+aChalk("a. LORD LOUIS MOUNTBATTEN" +"\n"+ "b. LORD WILLIAM BENTICK" +"\n"+ "c. LORD CORNWALLIS" +"\n"+ "d. LORD CANNING") ,

qChalk("Q9: The first session of the All India Congress held in Bombay 1920 was presided over")+"\n"+aChalk("a. J.L.NEHRU" +"\n"+ "b. V.V.GIRI" +"\n"+ "c. M.M.JOSHI" +"\n"+ "d. LALA RAJPAT RAI") ,

qChalk("Q10: First English Newspaper in India?")+"\n"+aChalk("a. The Bengal Gazette" +"\n"+ "b. The Calcutta Gazette" +"\n"+ "c. The Bengal Journal" +"\n"+ "d. The Bombay Herald") ,

qChalk("Q11: Who translated Bhagvad Gita to English?")+"\n"+aChalk("a. CHARLES WILKINS" +"\n"+ "b. ALEXANDER CUNNINGHAM" +"\n"+ "c. JOHN MARSHALL" +"\n"+ "d. LORD CANNING") ,

qChalk("Q12: Who was the Viceroy of India when the Rowlatt Actwas passed?")+"\n"+aChalk("a. LORD WAVELL" +"\n"+ "b. LORD IRWIN" +"\n"+ "c. LORD CORNWALLIS" +"\n"+ "d. LORD CHELMSFORD") ,

qChalk("Q13: The Jallianwala Bagh massacre took place in the year?")+"\n"+aChalk("a. 1913" +"\n"+ "b. 1915" +"\n"+ "c. 1919" +"\n"+ "d. 1920") ,

qChalk("Q14: Who ordered the shooting at Jallianwala Bagh that killed thousands 0f protesters?")+"\n"+aChalk("a. JOHN AKEHURST" +"\n"+ "b. FREDERICK BENTICK" +"\n"+ "c. REGINALD DYER" +"\n"+ "d. JOHN ARMSTRONG") ,

qChalk("Q15: Nalanda, which was the center of higher education in ancient India was located in?")+"\n"+aChalk("a. BIHAR" +"\n"+ "b. HARYANA" +"\n"+ "c. PUNJAB" +"\n"+ "d. MATHURA") ,

qChalk("Q16: Which one was the first capital city of Mughal Empire in India?")+"\n"+aChalk("a. LAHORE" +"\n"+ "b. AGRA" +"\n"+ "c. FATEHPUR SIKRI" +"\n"+ "d. DELHI") ,

qChalk("Q17: To which king belongs the Lion capital of Sarnath?")+"\n"+aChalk("a. CHANDRAGUPTA" +"\n"+ "b. HARSHVARDHAN" +"\n"+ "c. ASHOKA" +"\n"+ "d. MAHARAJA RANA PRATAP") ,

qChalk("Q18: Who was the eldest brother among the Pandavas?")+"\n"+aChalk("a. NAKULA" +"\n"+ "b. SAHADEVA" +"\n"+ "c. BHIMA" +"\n"+ "d. YUDHISHTHIRA") ,

qChalk("Q19: The Veda which deals with rituals is?")+"\n"+aChalk("a. RIG VEDA" +"\n"+ "b. SAMA VEDA" +"\n"+ "c. YAJUR VEDA" +"\n"+ "d. ATHARVA VEDA") ,

qChalk("Q20: Name the temple in Cambodia where scenes from Ramayana and Mahabharatha are depicted?")+"\n"+aChalk("a. BOROBUDUR" +"\n"+ "b. KAILASHNATH" +"\n"+ "c. ANGKOR WAT" +"\n"+ "d. BRIHADESHWARA") 

]

let totalScore = 0;

function qAndA(){
  let ans = read.question(quests[0]);
    if(ans == 'a' || ans == 'A'){
      console.log(rChalk('right'));
      score += 1;
      console.log(uName+' score: '+score)
    }else{
      console.log(qChalk('OOPS!!! SORRY'))
      score = 0;
      console.log(uName+' score: '+score)
    }

    let ans1 = read.question(quests[1]);
    if(ans1 == 'c' || ans1 == 'C'){
      console.log(rChalk('right'));
      score += 1;
      console.log(uName+' score: '+score)
    }else{
      console.log(qChalk('OOPS!!! SORRY'))
      console.log(uName+' score: '+score)
    }

    let ans2 = read.question(quests[2]);
    if(ans2 == 'b' || ans2 == 'B'){
      console.log(rChalk('right'));
      score += 1;
      console.log(uName+' score: '+score)
    }else{
      console.log(qChalk('OOPS!!! SORRY'))
      console.log(uName+' score: '+score)
    }

    let ans3 = read.question(quests[3]);
    if(ans3 == 'a' || ans3 == 'A'){
      console.log(rChalk('right'));
      score += 1;
      console.log(uName+' score: '+score)
    }else{
      console.log(qChalk('OOPS!!! SORRY'))
      console.log(uName+' score: '+score)
    }
    let ans4 = read.question(quests[4]);
    if(ans4 == 'a' || ans4 == 'A'){
      console.log(rChalk('right'));
      score += 1;
      console.log(uName+' score: '+score)
    }else{
      console.log(qChalk('OOPS!!! SORRY'))
      console.log(uName+' score: '+score)
    }
    let ans5 = read.question(quests[5]);
    if(ans5 == 'a' || ans5 == 'A'){
      console.log(rChalk('right'));
      score += 1;
      console.log(uName+' score: '+score)
    }else{
      console.log(qChalk('OOPS!!! SORRY'))
      console.log(uName+' score: '+score)
    }
    let ans6 = read.question(quests[6]);
    if(ans6 == 'c' || ans6 == 'C'){
      console.log(rChalk('right'));
      score += 1;
      console.log(uName+' score: '+score)
    }else{
      console.log(qChalk('OOPS!!! SORRY'))
      console.log(uName+' score: '+score)
    }
    let ans7 = read.question(quests[7]);
    if(ans7 == 'b' || ans7 == 'B'){
      console.log(rChalk('right'));
      score += 1;
      console.log(uName+' score: '+score)
    }else{
      console.log(qChalk('OOPS!!! SORRY'))
      console.log(uName+' score: '+score)
    }
    let ans8 = read.question(quests[8]);
    if(ans8 == 'c' || ans8 == 'C'){
      console.log(rChalk('right'));
      score += 1;
      console.log(uName+' score: '+score)
    }else{
      console.log(qChalk('OOPS!!! SORRY'))
      console.log(uName+' score: '+score)
    }
    let ans9 = read.question(quests[9]);
    if(ans9 == 'a' || ans9 == 'A'){
      console.log(rChalk('right'));
      score += 1;
      console.log(uName+' score: '+score)
    }else{
      console.log(qChalk('OOPS!!! SORRY'))
      console.log(uName+' score: '+score)
    }
    let ans10 = read.question(quests[10]);
    if(ans10 == 'a' || ans10 == 'A'){
      console.log(rChalk('right'));
      score += 1;
      console.log(uName+' score: '+score)
    }else{
      console.log(qChalk('OOPS!!! SORRY'))
      console.log(uName+' score: '+score)
    }
    let ans11 = read.question(quests[11]);
    if(ans11 == 'd' || ans11 == 'D'){
      console.log(rChalk('right'));
      score += 1;
      console.log(uName+' score: '+score)
    }else{
      console.log(qChalk('OOPS!!! SORRY'))
      console.log(uName+' score: '+score)
    }
    let ans12 = read.question(quests[12]);
    if(ans12 == 'c' || ans12 == 'C'){
      console.log(rChalk('right'));
      score += 1;
      console.log(uName+' score: '+score)
    }else{
      console.log(qChalk('OOPS!!! SORRY'))
      console.log(uName+' score: '+score)
    }
    let ans13 = read.question(quests[13]);
    if(ans13 == 'c' || ans13 == 'C'){
      console.log(rChalk('right'));
      score += 1;
      console.log(uName+' score: '+score)
    }else{
      console.log(qChalk('OOPS!!! SORRY'))
      console.log(uName+' score: '+score)
    }
    let ans14 = read.question(quests[14]);
    if(ans14 == 'a' || ans14 == 'A'){
      console.log(rChalk('right'));
      score += 1;
      console.log(uName+' score: '+score)
    }else{
      console.log(qChalk('OOPS!!! SORRY'))
      console.log(uName+' score: '+score)
    }
    let ans15 = read.question(quests[15]);
    if(ans15 == 'b' || ans15 == 'B'){
      console.log(rChalk('right'));
      score += 1;
      console.log(uName+' score: '+score)
    }else{
      console.log(qChalk('OOPS!!! SORRY'))
      console.log(uName+' score: '+score)
    }
    let ans16 = read.question(quests[16]);
    if(ans16 == 'c' || ans16 == 'C'){
      console.log(rChalk('right'));
      score += 1;
      console.log(uName+' score: '+score)
    }else{
      console.log(qChalk('OOPS!!! SORRY'))
      console.log(uName+' score: '+score)
    }
    let ans17 = read.question(quests[17]);
    if(ans17 == 'd' || ans17 == 'D'){
      console.log(rChalk('right'));
      score += 1;
      console.log(uName+' score: '+score)
    }else{
      console.log(qChalk('OOPS!!! SORRY'))
      console.log(uName+' score: '+score)
    }
    let ans18 = read.question(quests[18]);
    if(ans18 == 'c' || ans18 == 'C'){
      console.log(rChalk('right'));
      score += 1;
      console.log(uName+' score: '+score)
    }else{
      console.log(qChalk('OOPS!!! SORRY'))
      console.log(uName+' score: '+score)
    }
    let ans19 = read.question(quests[19]);
    if(ans19 == 'c' || ans19 == 'C'){
      console.log(rChalk('right'));
      score += 1;
      console.log(uName+' score: '+score)
    }else{
      console.log(qChalk('OOPS!!! SORRY'))
      console.log(uName+' score: '+score)
    }
      totalScore = score;
}


function playGame(){
  if(choice == 'y' || choice == 'Y'){
    console.log(aChalk('HERE ARE YOUR QUESTIONS'));
    qAndA();
  }else{
    console.log(qChalk('OOhhhhh!!!!!! YOU ARE LEAVING '+ uName));
    score = 0;
  }

  console.log(aChalk('Total Score: '+ totalScore))
}

playGame()