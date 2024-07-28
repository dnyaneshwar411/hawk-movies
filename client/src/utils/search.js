export function debounce(time,callback){
  let timerId;
   return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => { callback.apply(this, args); }, time);
  };
}