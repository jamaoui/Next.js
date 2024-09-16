export default class UnluckyNumberError extends Error{
  constructor(message = 'unlucky number') {
    super(message);
    this.name = 'UnluckyNumberError'
  }

}