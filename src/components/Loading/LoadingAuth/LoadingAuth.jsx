import React from 'react'
import { LoadingAuthBox } from './LoadingAuth-style'
import { Circles } from 'react-loader-spinner'

const LoadingAuth = () => {
  return (
    <LoadingAuthBox>
        <Circles
            height="160"
            width="160"
            color="#264037"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </LoadingAuthBox>
  )
}

export default LoadingAuth