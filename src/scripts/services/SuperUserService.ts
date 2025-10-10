import { type StackExchangeData, StackExchangeService } from './StackExchangeService'

export class SuperUserService extends StackExchangeService {
  public constructor(defaultVal: StackExchangeData) {
    super(defaultVal, 'Super User')
  }
}
