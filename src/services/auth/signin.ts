import {ApiContext, User} from 'types'
import {fetcher} from 'utils'

export type SigninParams = {
  /**
   * User Name
   **/
  username: string
  /**
  * Password
  **/
  password: string
}

/**
 * Auth API
 * @param context: API context
 * @param params: parameters
 * @return logedin user
 * **/

const signin = async (
  context: ApiContext,
  params: SigninParams,
): Promise<User> => {
  return await fetcher(
    '${context.apiRootUrl.replace(/\/$/g, ")}/auth/signin',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export default signin
