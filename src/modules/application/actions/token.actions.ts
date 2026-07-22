'use server'

import container from "@/modules/core/composition"

export const generateToken = async () => {
  const {
    useCases: { generateToken },
  } = container()

  const token = await generateToken.execute()
  return token

}