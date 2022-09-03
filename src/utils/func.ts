export function randomInteger(min:number, max:number):number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function checkUserAuthorization(): string {
  const user = localStorage.getItem('user');
  if (user) {
    const userObj = JSON.parse(user);
    const { userId } = userObj;
    return userId;
  }
  return 'no';
}
