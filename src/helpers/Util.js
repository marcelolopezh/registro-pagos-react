export const formatNumber = (num) => {
  if (num) {
    num = num.toString();
    let formatNum = '';
    let contador = 0;
    for (let i = num.toString().length - 1; i >= 0; i--) {
      let digit = num[i];
      formatNum = digit + formatNum;
      contador += 1;

      if (i!== 0 && contador === 3) {
        formatNum = "." + formatNum.toString();
        contador = 0;
      }
    }
    return formatNum;
  }
  return 0
};
