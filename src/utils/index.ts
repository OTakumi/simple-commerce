export const fetcher = async (
  resorce: RequestInfo,
  init?: RequestInit,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  const res = await fetch(resorce, init)

  if (!res.ok) {
    // Throws an exception when the response fails
    const errRes = await res.json()
    const error = new Error(
      errRes.message ?? "An error occurred during the API request.",
    )

    throw error
  }

  return res.json()
}
