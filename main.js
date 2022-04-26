console.log("고급웹프로그래밍 로그");

const inputBalance = document.querySelector("#inpBalance");
const inputRange = document.querySelector("#inpRange");
const selRangeUnit = document.querySelector("#selRangeUnit");
const inputInterest = document.querySelector("#inpInterest");
const btnCalc = document.querySelector("#btnCalc");
//btnCalc.addEventListener("click",calcSimpleInterest);
tnCalc.addEventLister("click", calcCompoundInterest);

function calcCompoundInterest() {
  console.log("복리계산 함수");

  console.log("Balance", inputBalance.value);
  console.log("Range", inputRange.value);
  console.log("RangeUnit", selRangeUnit.value);
  console.log("Interest", inputInterest.value);

  let balance = Number(inputBalance.value);
  const interest = Number(inputInterest.value);
  const range = Number(inputRange.value);

  // calcSimpleInterest(balance, interest, range);
  // 복리 계산 예제

  for(let i=0;i<range;i++) {
  balance += balance * (interest / 100)
  }
  console.log('3회 복리합산 결과',Math.floor(balance));
}

function calcSimpleInterest(balance, interest, range) {
  console.log("단리계산 함수");
  // 단리 계산 예제
  // const balance=100;
  // const interest=10;
  // const range=3;

  // 순수 이자
  const pureInterest = balance * (interest / 100) * range;
  console.log("순수이자", pureInterest);

  // 합산
  console.log("3개월 뒤 결과", balance + pureInterest);
}
