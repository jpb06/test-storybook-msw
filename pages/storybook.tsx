import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const Storybook = () => {
  const router = useRouter()

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      void router.push('/storybook/index.html')
    } else if (process.env.NODE_ENV === 'development') {
      void router.push('http://localhost:6006/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

export const getStaticProps: GetStaticProps = (_: unknown) => ({
  props: {},
})

export default Storybook
