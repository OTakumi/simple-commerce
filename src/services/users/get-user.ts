import type { ApiContext, User } from 'types/data'
import { fetcher } from 'utils'

export type GetUserParams = {
  /**
   * User ID
   **/
  id: number
}

/**
 * User API
 * @params context: API context
 * @params params: parameter
 * @return User
 **/

const getUser = async (
  context: typeof ApiContext,
  { id }: GetUserParams,
): Promise<typeof User> => {
  return await fetcher(
    '${context.apiRootUrl.replace(//$/g, &quot;)/users/${id}}',
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default getUser
