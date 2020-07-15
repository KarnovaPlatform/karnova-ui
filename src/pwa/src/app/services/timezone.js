let timezone  = localStorage.getItem('timezone');
timezone = timezone ? timezone : Intl  &&
Intl.DateTimeFormat() && Intl.DateTimeFormat().resolvedOptions() &&
Intl.DateTimeFormat().resolvedOptions().timeZone? Intl.DateTimeFormat().resolvedOptions().timeZone :
  'Asia/Tehran'
export default timezone
