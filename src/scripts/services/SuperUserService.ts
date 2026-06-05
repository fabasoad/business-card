import { type StackExchangeData, StackExchangeService } from './StackExchangeService'

export class SuperUserService extends StackExchangeService {
  readonly queryKey = 'SuperUserService'

  public constructor(defaultVal: StackExchangeData) {
    super(defaultVal, 'Super User')
  }
}
