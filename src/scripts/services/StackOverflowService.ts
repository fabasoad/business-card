import { type StackExchangeData, StackExchangeService } from './StackExchangeService'

export class StackOverflowService extends StackExchangeService {
  public constructor(defaultVal: StackExchangeData) {
    super(defaultVal, 'Stack Overflow')
  }
}
