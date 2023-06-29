export const regExpChk = (val) => {
  //eslint-disable-next-line
  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi; // 띄어쓰기 허용 /[ \
  if(regExp.test(val)){
    alert("특수문자를 입력할 수 없습니다")
    val = val.substring( 0 , val.length - 1 );
  }
  return val;
}