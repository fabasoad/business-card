import { type StackExchangeData, StackExchangeService } from './StackExchangeService'

export class StackOverflowService extends StackExchangeService {
  readonly queryKey = 'StackOverflowService'

  public constructor(defaultVal: StackExchangeData) {
    super(defaultVal, 'Stack Overflow')
  }
}
